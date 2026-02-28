import { NextRequest, NextResponse } from "next/server";
import {
  verifyPesapalTransaction,
  processSuccessfulSubscription,
} from "../../../../lib/pesapal";

/**
 * Pesapal Callback Handler
 * User is redirected here after payment attempt.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const trackingId = searchParams.get("OrderTrackingId");
  const merchantRef = searchParams.get("OrderMerchantReference");

  // Fallback if the user used the custom purchase_id param
  const purchaseId = searchParams.get("purchase_id");
  const ref = merchantRef || purchaseId;

  if (!trackingId || !ref) {
    return NextResponse.json(
      { error: "Missing required tracking parameters" },
      { status: 400 },
    );
  }

  try {
    // 1. Verify transaction status
    const statusData = await verifyPesapalTransaction(trackingId);

    // 2. Process success
    if (statusData.status_code === 1) {
      await processSuccessfulSubscription(ref, statusData);

      // Redirect to a success page or billing page with success message
      const baseUrl =
        process.env.NEXT_PUBLIC_APP_URL ||
        process.env.VERCEL_URL ||
        "http://localhost:3000";
      const redirectUrl = `${
        baseUrl.startsWith("http") ? baseUrl : "https://" + baseUrl
      }/billing?payment=success&ref=${ref}`;
      return NextResponse.redirect(redirectUrl);
    } else {
      // Transaction failed or pending
      const baseUrl =
        process.env.NEXT_PUBLIC_APP_URL ||
        process.env.VERCEL_URL ||
        "http://localhost:3000";
      const redirectUrl = `${
        baseUrl.startsWith("http") ? baseUrl : "https://" + baseUrl
      }/billing?payment=failed&ref=${ref}`;
      return NextResponse.redirect(redirectUrl);
    }
  } catch (error: any) {
    console.error("Pesapal Callback Error:", error);
    // Redirect to billing with error
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.VERCEL_URL ||
      "http://localhost:3000";
    const redirectUrl = `${
      baseUrl.startsWith("http") ? baseUrl : "https://" + baseUrl
    }/billing?payment=error&message=${encodeURIComponent(error.message)}`;
    return NextResponse.redirect(redirectUrl);
  }
}
