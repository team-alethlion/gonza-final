-- Function to handle SMS credit deductions and refunds
CREATE OR REPLACE FUNCTION handle_sms_credit_updates()
RETURNS TRIGGER AS $$
DECLARE
  business_id uuid;
  credits_to_adjust integer;
BEGIN
  -- Get the business_id directly from the message's profile_id
  -- Messages store profile_id which is the business_profiles.id
  business_id := NEW.profile_id;

  IF business_id IS NULL THEN
    RAISE EXCEPTION 'Business profile not found for message %', NEW.id;
  END IF;

  -- Calculate credits for this message
  credits_to_adjust := NEW.sms_credits_used;

  -- Handle status changes
  IF TG_OP = 'INSERT' THEN
    -- On insert with status 'sent', deduct credits
    -- (This handles the case where edge function marks as sent immediately)
    IF NEW.status = 'sent' OR NEW.status = 'delivered' THEN
      UPDATE business_profiles
      SET sms_credits = sms_credits - credits_to_adjust
      WHERE id = business_id;
      
      RAISE LOG 'Deducted % credits for sent message %', credits_to_adjust, NEW.id;
    END IF;
    
  ELSIF TG_OP = 'UPDATE' THEN
    -- Handle status changes from pending to sent/failed
    IF OLD.status = 'pending' AND (NEW.status = 'sent' OR NEW.status = 'delivered') THEN
      -- Message successfully sent - deduct credits
      UPDATE business_profiles
      SET sms_credits = sms_credits - credits_to_adjust
      WHERE id = business_id;
      
      RAISE LOG 'Deducted % credits for message % (pending -> sent)', credits_to_adjust, NEW.id;
      
    ELSIF OLD.status = 'pending' AND NEW.status = 'failed' THEN
      -- Message failed - no credit deduction needed, just log
      RAISE LOG 'Message % failed, no credits deducted', NEW.id;
      
    ELSIF (OLD.status = 'sent' OR OLD.status = 'delivered') AND NEW.status = 'failed' THEN
      -- Message was sent but later marked as failed - refund credits
      UPDATE business_profiles
      SET sms_credits = sms_credits + credits_to_adjust
      WHERE id = business_id;
      
      RAISE LOG 'Refunded % credits for failed message %', credits_to_adjust, NEW.id;
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS sms_credit_management_trigger ON messages;

-- Create trigger for automatic credit management
-- Note: All records in messages table are SMS messages, no need for message_type filter
CREATE TRIGGER sms_credit_management_trigger
  AFTER INSERT OR UPDATE OF status
  ON messages
  FOR EACH ROW
  EXECUTE FUNCTION handle_sms_credit_updates();

COMMENT ON FUNCTION handle_sms_credit_updates() IS 
  'Automatically handles SMS credit deductions when messages are sent and refunds when they fail. 
   Credits are only deducted when status changes from pending to sent/delivered.';
