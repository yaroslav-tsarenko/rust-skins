/**
 * Single source of truth for company data, values and policy constants.
 * Every page, policy, footer and checkout MUST read from here so numbers
 * never drift. The policy texts themselves live in lib/legal/policies.ts.
 */

export const CONTACT_EMAIL = "info@rust-skins.com";

export const COMPANY = {
  name: "BETTERB LTD",
  tradingAs: "rust-skins.com",
  address: "Dept 7014, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
  regNumber: "17406491",
  email: CONTACT_EMAIL,
} as const;

export const SITE = {
  name: "rust-skins.com",
  tagline: "Gear up your survival in style.",
  description:
    "rust-skins.com sells authentic Rust skins — weapons, apparel, base and deployables — delivered to your Steam inventory via trade offer.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.rust-skins.com",
  locale: "en_GB",
} as const;

/** Single canonical values — identical everywhere (FAQ, policies, checkout). */
export const VALUES = {
  minimumAge: 18,
  deliveryPromise: "Delivery by Steam trade offer",
  deliveryEstimate: "normally within a few minutes",
  /** Contact support if delivery has not completed after this many hours. */
  deliverySupportHours: 24,
  /** Target for an initial reply to support, refund and complaint requests. */
  responseTargetBusinessDays: 5,
  serviceFeeMinor: 0, // no service fee; if ever set, reads identically everywhere
} as const;

/**
 * Countries we do not serve (Terms & Conditions, section 3).
 * Keep in sync with lib/legal/policies.ts.
 */
export const EXCLUDED_COUNTRIES = [
  "Afghanistan",
  "Belarus",
  "Central African Republic",
  "Cuba",
  "Democratic Republic of the Congo",
  "Haiti",
  "Iran",
  "Iraq",
  "Mali",
  "Myanmar (Burma)",
  "North Korea",
  "Russia",
  "Somalia",
  "South Sudan",
  "Sudan",
  "Syria",
  "Venezuela",
  "Yemen",
  "Zimbabwe",
] as const;

/** Allowed registration countries (region-appropriate, GB-first). */
export const COUNTRIES = [
  "United Kingdom",
  "Ireland",
  "United States",
  "Canada",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Poland",
  "Portugal",
  "Austria",
  "Belgium",
  "Switzerland",
  "Australia",
  "New Zealand",
  "Japan",
  "South Korea",
  "Singapore",
  "United Arab Emirates",
  "Brazil",
  "Mexico",
  "Ukraine",
].filter(
  (c) => !EXCLUDED_COUNTRIES.includes(c as (typeof EXCLUDED_COUNTRIES)[number])
);

/** Phone hint for the project's region. */
export const PHONE_HINT = "+44 7700 900123";

export const TRADEMARK_DISCLAIMER =
  "rust-skins.com is not affiliated with, endorsed by or an official store of Valve Corporation or Facepunch Studios. Rust is a trademark of Facepunch Studios. All skin names and related imagery are the property of their respective owners.";
