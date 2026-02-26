
-- Add recurring task fields to the tasks table
ALTER TABLE public.tasks 
ADD COLUMN is_recurring BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN recurrence_type TEXT CHECK (recurrence_type IN ('daily', 'weekly', 'monthly')),
ADD COLUMN recurrence_end_date DATE,
ADD COLUMN parent_task_id UUID REFERENCES public.tasks(id),
ADD COLUMN recurrence_count INTEGER DEFAULT 0;

-- Add index for better performance on recurring task queries
CREATE INDEX idx_tasks_recurring ON public.tasks(is_recurring, parent_task_id) WHERE is_recurring = true;
CREATE INDEX idx_tasks_parent ON public.tasks(parent_task_id) WHERE parent_task_id IS NOT NULL;

-- Add validation trigger to ensure recurrence_end_date is within 12 months
CREATE OR REPLACE FUNCTION validate_recurrence_duration()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.is_recurring = true AND NEW.recurrence_end_date IS NOT NULL THEN
    IF NEW.recurrence_end_date > (NEW.due_date + INTERVAL '12 months') THEN
      RAISE EXCEPTION 'Recurring tasks cannot exceed 12 months duration';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_validate_recurrence_duration
  BEFORE INSERT OR UPDATE ON public.tasks
  FOR EACH ROW
  EXECUTE FUNCTION validate_recurrence_duration();
