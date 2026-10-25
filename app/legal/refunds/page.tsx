import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Cancellation rights, refunds for non-delivery and refunds of unused Account Balance at rust-skins.com.",
  alternates: { canonical: "/legal/refunds" },
};

export default function RefundPolicyPage() {
  return <LegalPage id="refunds" />;
}
