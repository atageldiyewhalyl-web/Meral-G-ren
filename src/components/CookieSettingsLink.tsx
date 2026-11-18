"use client";

import { reopenConsent } from "@/lib/consent";

/** Footer link that opens the cookie banner again, so consent can be changed or withdrawn. */
export function CookieSettingsLink({ label, className }: { label: string; className?: string }) {
  return (
    <button type="button" className={className} onClick={reopenConsent}>
      {label}
    </button>
  );
}
