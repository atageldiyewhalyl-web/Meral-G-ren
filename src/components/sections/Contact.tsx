import styles from "./Contact.module.css";
import { ContactForm } from "../ContactForm";
import { WhatsAppLead } from "../WhatsAppLead";
import { SITE } from "@/content";
import type { Dictionary, Lang } from "@/content/types";

export function Contact({ lang, t }: { lang: Lang; t: Dictionary }) {
  const c = t.contact;
  const streetLine = SITE.streetExtra
    ? `${SITE.street}, ${SITE.streetExtra}`
    : SITE.street;
  const cityLine = `${SITE.postalCode} ${SITE.city}, ${c.country}`;

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className={`anchor section section--accent onDark ${styles.section}`}
    >
      <div className="container">
        <div className="sectionHead reveal">
          <p className="eyebrow">{c.label}</p>
          <h2 id="contact-title" className="h2">
            {c.title}
          </h2>
          <p className="lead muted">{c.text}</p>
        </div>

        <div className={`${styles.panel} reveal`}>
          <div className={styles.main}>
            <ContactForm lang={lang} t={t} />
          </div>

          <address className={styles.aside}>
            <div className={styles.desktopWhatsApp}>
              <WhatsAppLead lang={lang} t={t} />
            </div>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileWhatsApp}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1 14.64-11.6 9.36 9.36 0 0 1 2.76 6.68 9.43 9.43 0 0 1-9.42 9.34zM20.06 3.9A11.32 11.32 0 0 0 2.05 17.5L.5 23.5l6.14-1.6a11.32 11.32 0 0 0 5.42 1.38h.01a11.34 11.34 0 0 0 8-19.38z"
                />
              </svg>
              {c.whatsapp}
            </a>

            <ul className={styles.info}>
              <li className={styles.infoRow}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"
                  />
                  <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <div>
                  <p className={styles.infoValue}>
                    {SITE.name}
                    <br />
                    {streetLine}
                    <br />
                    {cityLine}
                  </p>
                  <a
                    href={SITE.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    {c.route}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </li>

              <li className={styles.infoRow}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"
                  />
                </svg>
                <div>
                  <a href={SITE.phoneHref} className={`${styles.infoValue} ${styles.infoLinkPlain}`}>
                    {SITE.phone}
                  </a>
                  <a href={SITE.emailHref} className={`${styles.infoValue} ${styles.infoLinkPlain}`}>
                    {SITE.email}
                  </a>
                </div>
              </li>

              <li className={styles.infoRow}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    d="M12 7.5V12l3 2"
                  />
                </svg>
                <div>
                  <p className={styles.infoValue}>{c.hours}</p>
                  <p className={styles.infoNote}>{c.hoursNote}</p>
                </div>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </section>
  );
}
