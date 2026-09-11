import styles from "./Contact.module.css";
import { ContactForm } from "../ContactForm";
import { WhatsAppLead } from "../WhatsAppLead";
import { SITE } from "@/content";
import type { Dictionary, Lang } from "@/content/types";

export function Contact({ lang, t }: { lang: Lang; t: Dictionary }) {
  const c = t.contact;

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
            <WhatsAppLead lang={lang} t={t} />

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
                    {SITE.street}, {SITE.streetExtra}
                    <br />
                    {SITE.postalCode} {SITE.city}, {c.country}
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
