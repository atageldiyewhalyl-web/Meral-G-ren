"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { getConsent, getServerConsent, subscribeConsent } from "@/lib/consent";
import { GA_ID } from "@/lib/analytics";

function clearGaCookies() {
  const host = location.hostname.replace(/^www\./, "");
  for (const part of document.cookie.split(";")) {
    const name = part.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const domain of ["", `; domain=${host}`, `; domain=.${host}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

/**
 * Google Analytics 4. Nothing is requested from Google until the visitor
 * chooses "Alle akzeptieren" (or switches statistics on). If they later take
 * that back via "Cookie-Einstellungen", tracking stops and the _ga cookies go.
 * No Google signals and no ad personalisation.
 */
export function Analytics() {
  const consent = useSyncExternalStore(subscribeConsent, getConsent, getServerConsent);
  const stats = consent === "all";

  useEffect(() => {
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = !stats;
    if (!stats && window.gtag) {
      window.gtag("consent", "update", { analytics_storage: "denied" });
      clearGaCookies();
    }
  }, [stats]);

  if (!stats) return null;
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { allow_google_signals: false, allow_ad_personalization_signals: false });
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>
  );
}
