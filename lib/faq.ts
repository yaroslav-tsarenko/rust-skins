import { VALUES, CONTACT_EMAIL, EXCLUDED_COUNTRIES } from "./config";

export const FAQ: { q: string; a: string }[] = [
  {
    q: "How fast is delivery?",
    a: `Items are delivered to your Steam inventory by trade offer. Delivery ${VALUES.deliveryEstimate} once payment is confirmed and your Steam account can receive the trade. This is an estimate: payment checks, Steam outages or account restrictions can cause delays. If delivery has not completed within ${VALUES.deliverySupportHours} hours, email ${CONTACT_EMAIL} with your order reference — see our Digital Delivery Policy.`,
  },
  {
    q: "Are these authentic Rust skins?",
    a: "Yes. rust-skins.com sells authentic Rust skins — weapon finishes, apparel, base, deployables and tools. Every skin is delivered to your Steam inventory via a standard trade offer.",
  },
  {
    q: "How do I link my Steam account?",
    a: "Before you can buy, sign in through Steam on your account page and paste your Steam trade URL. We pull your Steam nickname and avatar automatically and deliver every skin to that account.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa and Mastercard, and you can pay in EUR, GBP or USD. Payments are handled by third-party payment service providers. The total payable is shown before you pay.",
  },
  {
    q: "Can I get a refund?",
    a: `Yes, in several situations: if an Item was not delivered or was incorrect, under any statutory cancellation right that applies to you, and for unused paid Account Balance at any time. Email ${CONTACT_EMAIL} — see our Refund & Cancellation Policy for details.`,
  },
  {
    q: "Is there a fee at checkout?",
    a: "We do not add a service fee at checkout. The total payable and currency are shown before you authorise payment. Your bank may separately charge for currency conversion.",
  },
  {
    q: "How do I contact support?",
    a: `Email us at ${CONTACT_EMAIL} with your account email and order or top-up reference. We aim to send an initial reply within ${VALUES.responseTargetBusinessDays} business days.`,
  },
  {
    q: "How does the store wallet work?",
    a: `You can top up your Account Balance and use it to buy skins on rust-skins.com. Balance cannot be transferred to other users. Unused paid balance can be refunded to your original payment method by emailing ${CONTACT_EMAIL} — see our Account Balance & Top-Up Policy.`,
  },
  {
    q: "What do the rarity colours mean?",
    a: "We sort skins onto a colour rarity scale — from Common and Uncommon up through Rare and Mythical — so you can read a skin's tier at a glance.",
  },
  {
    q: "Who can buy?",
    a: `You must be at least ${VALUES.minimumAge} and legally able to enter into a contract. We do not serve customers in ${EXCLUDED_COUNTRIES.join(", ")}.`,
  },
];
