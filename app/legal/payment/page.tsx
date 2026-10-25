import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Payment Policy",
  description: "Accepted payment methods (Visa, Mastercard), currencies (EUR, GBP, USD) and payment processing at rust-skins.com.",
  alternates: { canonical: "/legal/payment" },
};

export default function PaymentPolicyPage() {
  return <LegalPage id="payment" />;
}
