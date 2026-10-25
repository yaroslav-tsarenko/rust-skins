import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, CONTACT_EMAIL, SITE, VALUES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} (${COMPANY.name}) about orders, delivery, refunds, privacy and account questions.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <header className="text-center">
        <p className="engraved text-[10px] text-gold">We&apos;re here to help</p>
        <h1 className="mt-1 font-display text-3xl font-bold text-parchment sm:text-4xl">Contact {SITE.name}</h1>
        <p className="mt-3 text-sage">We aim to send an initial reply within {VALUES.responseTargetBusinessDays} business days. Most questions are answered in our FAQ.</p>
      </header>

      <div className="mt-10 grid gap-6">
        <div className="card-surface p-6">
          <p className="engraved text-[10px] text-sage">Email support</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-lg text-parchment hover:text-gold">{CONTACT_EMAIL}</a>
          <p className="mt-2 text-sm text-sage">Order help, delivery, refunds, unused balance, complaints, privacy and account questions. Never send passwords, Steam Guard codes or full card details.</p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-hairline bg-card p-6">
        <p className="engraved text-[10px] text-sage">Company details</p>
        <address className="mt-2 not-italic text-sm leading-relaxed text-parchment">
          {COMPANY.name}<br />
          {COMPANY.address}<br />
          Company number {COMPANY.regNumber}
        </address>
      </div>

      <div className="mt-8 text-center text-sm text-sage">
        Looking for a quick answer? Try the{" "}
        <Link href="/faq" className="text-teal hover:text-gold">FAQ</Link>.
      </div>
    </div>
  );
}
