"use client";

import { useEffect } from "react";
import { countClick } from "@/lib/analytics";

/**
 * Counts clicks on tel: and mailto: links anywhere on the site. WhatsApp links
 * are counted by the WhatsApp lead form when it opens (WhatsAppLead.tsx),
 * because that component intercepts every wa.me link.
 */
export function ClickCounter() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) countClick("phone");
      else if (href.startsWith("mailto:")) countClick("email");
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
