import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BETTERB LTD collects, uses and protects personal data at rust-skins.com, and your rights.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPolicyPage() {
  return <LegalPage id="privacy" />;
}
