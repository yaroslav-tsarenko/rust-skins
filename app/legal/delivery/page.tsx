import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Digital Delivery Policy",
  description: "How Rust skins are delivered to your Steam account by trade offer, estimated timing and what to do if delivery fails.",
  alternates: { canonical: "/legal/delivery" },
};

export default function DeliveryPolicyPage() {
  return <LegalPage id="delivery" />;
}
