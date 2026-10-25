import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Account Balance & Top-Up Policy",
  description: "How Account Balance top-ups work at rust-skins.com and how to refund unused paid balance.",
  alternates: { canonical: "/legal/balance" },
};

export default function BalancePolicyPage() {
  return <LegalPage id="balance" />;
}
