import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { CheckoutForm } from "@/components/CheckoutForm";
import { COMPANY } from "@/lib/config";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your rust-skins.com order. Visa & Mastercard, delivered to Steam by trade offer.",
  robots: { index: false, follow: false },
};

export default async function CheckoutPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/checkout");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 font-display text-3xl font-bold tracking-tight text-parchment sm:text-4xl">Checkout</h1>
      <CheckoutForm
        seller={{ name: COMPANY.name, address: COMPANY.address, regNumber: COMPANY.regNumber, email: COMPANY.email }}
        balanceMinor={user.balanceMinor}
        steamLinked={Boolean(user.steamId && user.steamTradeToken)}
        steamName={user.steamName}
      />
    </div>
  );
}
