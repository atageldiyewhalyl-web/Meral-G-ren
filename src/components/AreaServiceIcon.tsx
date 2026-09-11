type Props = { icon: string; className?: string };

/** Thin line icons for the practice-area service cards. */
const PATHS: Record<string, React.ReactNode> = {
  document: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M10 12h5M10 16h5" />
    </>
  ),
  "file-check": (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="m10 14 2 2 3.5-4" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10" />
      <path d="M6 7h12l-3 6H9z" />
      <path d="M4.5 13a3 3 0 0 0 4.5 0M15 13a3 3 0 0 0 4.5 0" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 9.5 8 6l4 2 4-2 5 3.5" />
      <path d="M8 8v6M16 8v6" />
      <path d="M6.5 14.5 10 18a2 2 0 0 0 3 0l4.5-4.5" />
    </>
  ),
  home: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  euro: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5A4.5 4.5 0 0 0 8 12a4.5 4.5 0 0 0 7.5 3.5" />
      <path d="M6.5 10.5h6M6.5 13.5h6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.5 2.5 3.8 5.5 3.8 8.5S14.5 18 12 20.5C9.5 18 8.2 15 8.2 12S9.5 6 12 3.5z" />
    </>
  ),
};

export function AreaServiceIcon({ icon, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[icon] ?? PATHS.document}
    </svg>
  );
}
