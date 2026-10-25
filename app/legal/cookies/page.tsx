import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How rust-skins.com uses cookies and similar browser technologies, and your choices.",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiePolicyPage() {
  return <LegalPage id="cookies" />;
}
