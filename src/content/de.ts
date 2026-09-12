import type { Dictionary } from "./types";

export const de: Dictionary = {
    meta: {
        title: "Rechtsanwaltskanzlei Meral Gören – Mannheim | Deutsch & Türkisch",
        description: "Rechtsanwaltskanzlei Meral Gören in Mannheim: Wir verhelfen Ihnen zu Ihrem Recht – im Zivil-, Arbeits-, Ausländer-, Familien- und Verkehrsrecht, gerichtlich wie außergerichtlich, auf Deutsch und Türkisch.",
        locale: "de_DE"
    },
    cta: "Beratung anfragen",
    menuLabel: "Menü",
    navLabel: "Hauptnavigation",
    languageLabel: "Sprache",
    nav: {
        home: "Startseite",
        about: "Zur Person",
        areas: "Rechtsgebiete",
        blog: "Blog",
        contact: "Kontakt"
    },
    hero: {
        label: "Rechtsanwältin Meral Gören · Mannheim",
        title: {
            lead: "Wir verhelfen Ihnen",
            accent: "zu Ihrem Recht."
        },
        text: "Wir sehen unsere Aufgabe darin, Sie umfassend und in höchster Qualität zu beraten und Ihre Interessen gerichtlich wie außergerichtlich zu vertreten – auf Deutsch und Türkisch.",
        whatsapp: "Per WhatsApp schreiben"
    },
    areas: {
        label: "Rechtsgebiete",
        title: "Fünf Schwerpunkte. Eine Ansprechpartnerin.",
        text: "Ich vertrete Sie in fünf Rechtsgebieten – persönlich, verständlich und in beiden Sprachen.",
        more: "Mehr erfahren",
        moreTo: "Mehr erfahren zu",
        ctaText: "Nicht sicher, wohin Ihr Anliegen gehört? Fragen Sie unverbindlich nach.",
        items: [
            {
                slug: "zivilrecht",
                num: "01",
                title: "Allgemeines Zivilrecht",
                text: "Verträge, Forderungen, Kaufrecht, Mietrecht, Schadensersatz.",
                lead: "Verträge, Forderungen und Streitigkeiten zwischen Privatpersonen oder mit Unternehmen.",
                topics: [
                    "Vertragsprüfung und -gestaltung",
                    "Forderungen und Mahnverfahren",
                    "Kaufrecht und Gewährleistung",
                    "Mietrecht",
                    "Schadensersatz",
                    "Außergerichtliche Einigung"
                ],
                how: "Ich prüfe Ihre Unterlagen, bewerte Chancen und Kosten und vertrete Sie außergerichtlich oder vor Gericht.",
                illustration: "/images/areas/zivilrecht.webp",
                headline: "Verträge, Forderungen und Streit – zum Abschluss gebracht.",
                intro: "Im Zivilrecht geht es um die Rechtsbeziehungen zwischen Privatpersonen und Unternehmen: um Verträge, die eingehalten werden sollen, um Geld, das Ihnen zusteht, und um Streit, der eine klare Antwort braucht.",
                chips: [
                    "Vertragsrecht",
                    "Forderungen & Inkasso",
                    "Miet- und Kaufrecht"
                ],
                services: [
                    {
                        icon: "document",
                        title: "Vertragsprüfung und -gestaltung",
                        text: "Wir prüfen Ihren Vertrag vor der Unterschrift oder gestalten ihn so, dass er im Streitfall trägt."
                    },
                    {
                        icon: "euro",
                        title: "Forderungen und Mahnverfahren",
                        text: "Offene Rechnungen setzen wir durch – außergerichtlich, im gerichtlichen Mahnverfahren oder mit Klage."
                    },
                    {
                        icon: "scale",
                        title: "Kaufrecht und Gewährleistung",
                        text: "Bei Mängeln an der Kaufsache klären wir Nacherfüllung, Rücktritt, Minderung und Schadensersatz."
                    },
                    {
                        icon: "home",
                        title: "Mietrecht",
                        text: "Mängel, Nebenkosten, Kündigung, Räumung – für Mieterinnen und Mieter ebenso wie für Vermieter."
                    },
                    {
                        icon: "shield",
                        title: "Schadensersatz",
                        text: "Wir beziffern Ihren Schaden und machen ihn gegenüber der Gegenseite oder deren Versicherung geltend."
                    },
                    {
                        icon: "handshake",
                        title: "Außergerichtliche Einigung",
                        text: "Oft ist ein tragfähiger Vergleich schneller und günstiger als ein Urteil. Wir verhandeln ihn für Sie."
                    }
                ],
                highlight: {
                    eyebrow: "MIETMINDERUNG",
                    title: "Wann Sie die Miete kürzen dürfen",
                    text: "Schimmel, Heizungsausfall, Baulärm: Bei einem Mangel ist die Miete kraft Gesetzes gemindert. Wer allerdings zu viel kürzt, riskiert die Kündigung – die Reihenfolge entscheidet.",
                    postSlug: "mietminderung-maengel"
                }
            },
            {
                slug: "arbeitsrecht",
                num: "02",
                title: "Arbeitsrecht",
                text: "Kündigung, Abmahnung, Arbeitsvertrag, Lohn- und Urlaubsansprüche.",
                lead: "Vom Kündigungsschutz bis zur Abrechnung – arbeitsrechtliche Fragen haben meist kurze Fristen.",
                topics: [
                    "Kündigungsschutzklage",
                    "Abmahnung",
                    "Arbeitsvertrag und Aufhebungsvertrag",
                    "Lohn- und Urlaubsansprüche",
                    "Arbeitszeugnis",
                    "Betriebsbedingte Kündigung"
                ],
                how: "Bei einer Kündigung gilt: Die Klagefrist beträgt drei Wochen ab Zugang. Wir prüfen zuerst die Frist, dann die Wirksamkeit – und klären, ob Weiterbeschäftigung oder Abfindung Ihr Ziel ist.",
                illustration: "/images/areas/arbeitsrecht.webp",
                headline: "Kündigung, Abfindung, Zeugnis – und die Frist läuft.",
                intro: "Arbeitsrechtliche Fragen entscheiden sich meist in wenigen Wochen. Ob Kündigungsschutz, Aufhebungsvertrag oder Lohnrückstand: Je früher wir Ihre Lage einschätzen, desto mehr Wege bleiben offen.",
                chips: [
                    "Kündigungsschutz",
                    "Aufhebung & Abfindung",
                    "Lohn, Urlaub, Zeugnis"
                ],
                services: [
                    {
                        icon: "clock",
                        title: "Kündigungsschutzklage",
                        text: "Die Klagefrist beträgt drei Wochen ab Zugang. Wir prüfen zuerst die Frist, dann die Wirksamkeit der Kündigung."
                    },
                    {
                        icon: "document",
                        title: "Abmahnung",
                        text: "Wir prüfen, ob die Abmahnung berechtigt ist, und wehren unberechtigte Abmahnungen ab – notfalls mit Entfernung aus der Personalakte."
                    },
                    {
                        icon: "handshake",
                        title: "Arbeitsvertrag und Aufhebungsvertrag",
                        text: "Vor der Unterschrift: Wir bewerten die Bedingungen und verhandeln nach, wo es sich lohnt."
                    },
                    {
                        icon: "euro",
                        title: "Lohn- und Urlaubsansprüche",
                        text: "Nicht gezahlter Lohn, Überstunden, offener Urlaub – wir machen Ihre Ansprüche fristgerecht geltend."
                    },
                    {
                        icon: "file-check",
                        title: "Arbeitszeugnis",
                        text: "Ein Zeugnis muss wohlwollend und wahr sein. Wir prüfen die Formulierungen und fordern Korrekturen ein."
                    },
                    {
                        icon: "shield",
                        title: "Betriebsbedingte Kündigung",
                        text: "Sozialauswahl, Interessenausgleich, Sozialplan: Wir prüfen, ob die Kündigung dem standhält."
                    }
                ],
                highlight: {
                    eyebrow: "NACH DER KÜNDIGUNG",
                    title: "Die ersten drei Wochen entscheiden",
                    text: "Ab Zugang der Kündigung läuft eine Frist von drei Wochen für die Kündigungsschutzklage. Wird sie versäumt, gilt die Kündigung als von Anfang an wirksam – unabhängig davon, wie angreifbar sie war.",
                    postSlug: "kuendigung-drei-wochen"
                }
            },
            {
                slug: "auslaenderrecht",
                num: "03",
                title: "Ausländerrecht",
                text: "Aufenthaltstitel, Einbürgerung, Familiennachzug, Niederlassungserlaubnis.",
                lead: "Aufenthalt, Einbürgerung und Familiennachzug – Verfahren, die von Fristen und vollständigen Unterlagen leben.",
                topics: [
                    "Aufenthaltstitel und Verlängerung",
                    "Einbürgerung",
                    "Familiennachzug",
                    "Visum und Niederlassungserlaubnis",
                    "Ausweisung und Abschiebung",
                    "Verpflichtungserklärung"
                ],
                how: "Wir klären zuerst Ihren Status und die Zuständigkeiten, stellen die Unterlagen vollständig zusammen und begleiten Sie gegenüber der Ausländerbehörde – auf Deutsch und auf Türkisch.",
                illustration: "/images/areas/auslaenderrecht.webp",
                headline: "Aufenthalt, Einbürgerung und Familiennachzug.",
                intro: "Im Ausländerrecht entscheidet die Vorbereitung. Die vollständigen Unterlagen, die richtige Behörde, die eingehaltene Frist: Wir klären Ihren Status und begleiten Sie durch das Verfahren – auf Deutsch und Türkisch.",
                chips: [
                    "Aufenthaltstitel",
                    "Einbürgerung",
                    "Familiennachzug"
                ],
                services: [
                    {
                        icon: "file-check",
                        title: "Aufenthaltstitel und Verlängerung",
                        text: "Erteilung, Verlängerung, Wechsel des Aufenthaltszwecks – wir stellen den Antrag vollständig und begründet."
                    },
                    {
                        icon: "shield",
                        title: "Einbürgerung",
                        text: "Seit der Reform 2024 gilt die verkürzte Frist. Wir prüfen Ihre Voraussetzungen und bereiten den Antrag vor."
                    },
                    {
                        icon: "handshake",
                        title: "Familiennachzug",
                        text: "Ehegatten- und Kindernachzug: Wir klären Sprachnachweis, Wohnraum und Lebensunterhalt vorab."
                    },
                    {
                        icon: "globe",
                        title: "Visum und Niederlassungserlaubnis",
                        text: "Vom nationalen Visum bis zur unbefristeten Niederlassungserlaubnis – wir prüfen den Weg für Ihren Fall."
                    },
                    {
                        icon: "document",
                        title: "Ausweisung und Abschiebung",
                        text: "Bei Ausweisung, Abschiebungsandrohung oder Einreisesperre handeln wir kurzfristig und mit Eilrechtsschutz."
                    },
                    {
                        icon: "euro",
                        title: "Verpflichtungserklärung",
                        text: "Wir prüfen Umfang und Risiken, bevor Sie eine Verpflichtungserklärung abgeben."
                    }
                ],
                highlight: {
                    eyebrow: "EINBÜRGERUNG 2026",
                    title: "Welche Voraussetzungen jetzt gelten",
                    text: "Nach der Reform reicht in der Regel ein fünfjähriger rechtmäßiger Aufenthalt, und die bisherige Staatsangehörigkeit muss meist nicht mehr aufgegeben werden. Der häufigste Stolperstein bleibt der gesicherte Lebensunterhalt.",
                    postSlug: "einbuergerung-2026"
                }
            },
            {
                slug: "familienrecht",
                num: "04",
                title: "Familienrecht",
                text: "Scheidung, Unterhalt, Sorge- und Umgangsrecht, Ehevertrag.",
                lead: "Trennung, Scheidung, Unterhalt und Kinder – mit Blick auf deutsches und türkisches Recht, wo beides eine Rolle spielt.",
                topics: [
                    "Scheidung",
                    "Trennungs- und Kindesunterhalt",
                    "Sorge- und Umgangsrecht",
                    "Zugewinn und Vermögensaufteilung",
                    "Ehevertrag",
                    "Anerkennung ausländischer Entscheidungen"
                ],
                how: "Familienrechtliche Verfahren brauchen Ruhe und klare Schritte. Wir klären zuerst, welches Recht anwendbar ist, dann das Vorgehen.",
                illustration: "/images/areas/familienrecht.webp",
                headline: "Trennung, Scheidung, Unterhalt und Kinder.",
                intro: "Familienrechtliche Verfahren brauchen einen kühlen Kopf. Wir klären zuerst, welches Recht anwendbar ist – deutsches, türkisches oder beides – und dann das Vorgehen.",
                chips: [
                    "Scheidung",
                    "Unterhalt",
                    "Sorge- und Umgangsrecht"
                ],
                services: [
                    {
                        icon: "document",
                        title: "Scheidung",
                        text: "Vom Trennungsjahr über den Antrag bis zum Termin – auch bei Auslandsbezug zur Türkei."
                    },
                    {
                        icon: "euro",
                        title: "Trennungs- und Kindesunterhalt",
                        text: "Wir berechnen den Unterhalt nach der Düsseldorfer Tabelle, setzen ihn durch oder wehren überhöhte Forderungen ab."
                    },
                    {
                        icon: "home",
                        title: "Sorge- und Umgangsrecht",
                        text: "Alltagssorge, Umgangsregelung, Kindeswohl – wir suchen die tragfähige Lösung, notfalls vor dem Familiengericht."
                    },
                    {
                        icon: "scale",
                        title: "Zugewinn und Vermögensaufteilung",
                        text: "Wir ermitteln den Zugewinnausgleich und klären, was mit Immobilie, Konten und Hausrat geschieht."
                    },
                    {
                        icon: "file-check",
                        title: "Ehevertrag",
                        text: "Vor oder während der Ehe: Wir gestalten einen Vertrag, der einer späteren Prüfung standhält."
                    },
                    {
                        icon: "globe",
                        title: "Anerkennung ausländischer Entscheidungen",
                        text: "Eine in der Türkei ergangene Scheidung wirkt in Deutschland nicht automatisch. Wir klären die Anerkennung."
                    }
                ],
                highlight: {
                    eyebrow: "SCHEIDUNG MIT TÜRKEI-BEZUG",
                    title: "Welches Recht gilt?",
                    text: "Bei einer Scheidung mit Bezug zur Türkei hängt viel davon ab, welches Recht zur Anwendung kommt – und ob eine deutsche Entscheidung in der Türkei anerkannt werden muss.",
                    postSlug: "scheidung-tuerkei"
                }
            },
            {
                slug: "verkehrsrecht",
                num: "05",
                title: "Verkehrsrecht",
                text: "Bußgeld, Fahrverbot, Unfallregulierung und Schadensersatz.",
                lead: "Nach einem Unfall oder einem Bußgeldbescheid entscheidet oft, wie schnell reagiert wird.",
                topics: [
                    "Bußgeldbescheid und Punkte",
                    "Fahrverbot und Fahrerlaubnis",
                    "Unfallregulierung",
                    "Schadensersatz und Schmerzensgeld",
                    "Streit mit der Kfz-Versicherung",
                    "Verkehrsstrafrecht"
                ],
                how: "Gegen einen Bußgeldbescheid haben Sie nur zwei Wochen Zeit für den Einspruch. Nach einem Unfall prüfe ich Haftung, Gutachten und das Angebot der Versicherung, bevor Sie etwas unterschreiben.",
                illustration: "/images/areas/verkehrsrecht.webp",
                headline: "Bußgeld, Fahrverbot, Unfall – schnell reagieren.",
                intro: "Nach einem Unfall oder einem Bußgeldbescheid entscheidet oft, wie schnell Sie handeln. Gegen einen Bußgeldbescheid haben Sie nur zwei Wochen Zeit für den Einspruch.",
                chips: [
                    "Bußgeld & Fahrverbot",
                    "Unfallregulierung",
                    "Verkehrsstrafrecht"
                ],
                services: [
                    {
                        icon: "clock",
                        title: "Bußgeldbescheid und Punkte",
                        text: "Einspruch innerhalb von zwei Wochen. Wir prüfen Messung, Zustellung und Verfahren auf Fehler."
                    },
                    {
                        icon: "shield",
                        title: "Fahrverbot und Fahrerlaubnis",
                        text: "Wir prüfen, ob das Fahrverbot abwendbar ist, und begleiten die Wiedererteilung der Fahrerlaubnis."
                    },
                    {
                        icon: "euro",
                        title: "Unfallregulierung",
                        text: "Wir melden den Schaden, prüfen Gutachten und Angebot der Versicherung und setzen Ihren vollen Anspruch durch."
                    },
                    {
                        icon: "file-check",
                        title: "Schadensersatz und Schmerzensgeld",
                        text: "Reparatur, Wertminderung, Nutzungsausfall, Schmerzensgeld – wir beziffern jeden Posten."
                    },
                    {
                        icon: "scale",
                        title: "Streit mit der Kfz-Versicherung",
                        text: "Wenn die Versicherung kürzt oder ablehnt, vertreten wir Sie – außergerichtlich und vor Gericht."
                    },
                    {
                        icon: "document",
                        title: "Verkehrsstrafrecht",
                        text: "Bei Trunkenheitsfahrt, Unfallflucht oder Gefährdung geht es um die Fahrerlaubnis und um die Strafe. Wir verteidigen Sie."
                    }
                ],
                highlight: {
                    eyebrow: "NACH EINEM UNFALL",
                    title: "Unterschreiben Sie nichts vorschnell",
                    text: "Bevor Sie eine Abfindungserklärung der gegnerischen Versicherung unterschreiben, sollten Haftung, Gutachten und Angebot geprüft sein. Danach lässt sich meist nichts mehr nachfordern.",
                    postSlug: "bussgeldbescheid-einspruch"
                }
            }
        ]
    },
    about: {
        label: "Zur Person",
        title: "Deutsche Rechtsanwältin türkischer Herkunft.",
        p1: "Meral Gören ist deutsche Staatsangehörige türkischer Herkunft. Sie studierte Rechtswissenschaften an der Ruprecht-Karls-Universität Heidelberg und legte 2005 ihr erstes juristisches Staatsexamen ab.",
        p2: "Nach dem zweijährigen Referendariat am Landgericht Heidelberg ist sie seit dem 6. Juni 2008 als Rechtsanwältin zugelassen und an allen Amts-, Land- und Oberlandesgerichten vertretungsbefugt.",
        background: "Wir beraten und vertreten Sie bei allen rechtlichen Fragen – vorwiegend im allgemeinen Zivilrecht, Arbeitsrecht, Ausländerrecht, Familienrecht und Straßenverkehrsrecht, auf Deutsch und Türkisch.",
        cta: "Kontakt aufnehmen",
        more: "Mehr zur Person",
        page: {
            lead: "Rechtsanwältin in Mannheim – deutsche Staatsangehörige türkischer Herkunft, mit Beratung auf Deutsch und Türkisch.",
            wordmark: "Meral Gören",
            pull: {
                before: "Wir sehen unsere Aufgabe darin, ",
                mark: "Sie umfassend und in höchster Qualität zu beraten",
                after: " und Ihre Interessen gerichtlich wie außergerichtlich zu vertreten."
            },
            facts: [
                {
                    value: "2",
                    label: "Sprachen — Deutsch & Türkisch"
                },
                {
                    value: "5",
                    label: "Rechtsgebiete"
                },
                {
                    value: "2008",
                    label: "Als Rechtsanwältin zugelassen"
                },
                {
                    value: "Mannheim",
                    label: "Kanzleisitz"
                }
            ],
            closingTitle: "Schildern Sie uns Ihr Anliegen.",
            sections: [
                {
                    heading: "Zur Person",
                    body: [
                        "Meral Gören ist deutsche Staatsangehörige türkischer Herkunft. Sie studierte Rechtswissenschaften an der Ruprecht-Karls-Universität Heidelberg und legte 2005 ihr erstes juristisches Staatsexamen ab.",
                        "Es folgte der zweijährige Vorbereitungsdienst als Rechtsreferendarin am Landgericht Heidelberg. Seit dem 6. Juni 2008 ist sie als Rechtsanwältin zugelassen."
                    ],
                    image: "/images/about/profil.webp"
                },
                {
                    heading: "Zulassung",
                    body: [
                        "Als Rechtsanwältin in der Bundesrepublik Deutschland zugelassen und an allen Amts-, Land- und Oberlandesgerichten vertretungsbefugt.",
                        "Zuständige Aufsichtsbehörde: Rechtsanwaltskammer Karlsruhe."
                    ],
                    image: "/images/about/zulassung.webp"
                },
                {
                    heading: "Unser Anspruch",
                    body: [
                        "Wir sehen unsere Aufgabe darin, Sie umfassend und in höchster Qualität zu beraten und Ihre Interessen gerichtlich wie außergerichtlich bestmöglich zu vertreten.",
                        "Unsere Arbeit zeichnet sich durch Kompetenz, Zielstrebigkeit und Engagement aus. Wir erklären in verständlicher Sprache und halten Sie über jeden Schritt auf dem Laufenden."
                    ],
                    image: "/images/about/anspruch.webp"
                },
                {
                    heading: "Tätigkeitsfelder",
                    body: [
                        "Sie können sich bei allen rechtlichen Fragen an uns wenden – vorwiegend im allgemeinen Zivilrecht, Arbeitsrecht, Ausländerrecht, Familienrecht und Straßenverkehrsrecht, auf Deutsch und Türkisch.",
                        "Bei Sachverhalten mit Bezug zum türkischen Recht arbeiten wir mit der Doğru Kanzlei in Mannheim zusammen."
                    ],
                    image: "/images/about/taetigkeit.webp"
                }
            ],
            asideText: "Sie können sich bei allen rechtlichen Fragen an uns wenden – auf Deutsch oder Türkisch."
        }
    },
    why: {
        label: "Was Sie erwartet",
        title: "Warum unsere Kanzlei?",
        ctaText: "Klingt das nach der richtigen Kanzlei für Sie?",
        items: [
            {
                title: "Deutsch und Türkisch",
                text: "Beratung und Schriftverkehr in beiden Sprachen – ohne Dolmetscher."
            },
            {
                title: "Persönliche Bearbeitung",
                text: "Ihr Fall bleibt in einer Hand – von der Erstberatung bis zum Abschluss."
            },
            {
                title: "Kanzlei in Mannheim",
                text: "R1 2-3, 68161 Mannheim. Termine vor Ort oder telefonisch."
            },
            {
                title: "Klare Kommunikation",
                text: "Verständliche Einschätzung, transparente Kosten, kein Fachjargon ohne Erklärung."
            }
        ]
    },
    reviews: {
        label: "Bewertungen",
        title: "Was Mandantinnen und Mandanten sagen",
        note: "Aus den Bewertungen der Kanzlei.",
        items: [
            { quote: "Ich bin mit der Beratung von Frau Meral Gören sehr zufrieden. Sie war freundlich, professionell und hat sich Zeit genommen, alles verständlich zu erklären. Ich habe mich sehr gut aufgehoben gefühlt und kann sie definitiv weiterempfehlen.", name: "Mandantin / Mandant", context: "Bewertung" },
            { quote: "Frau Gören ist sehr kompetent und zuverlässig. Die Kommunikation war schnell und unkompliziert, und meine Fragen wurden immer ausführlich beantwortet. Vielen Dank für die tolle Unterstützung!", name: "Mandantin / Mandant", context: "Bewertung" },
            { quote: "Eine sehr positive Erfahrung mit Frau Meral Gören. Sie arbeitet professionell, ist sehr sympathisch und geht aufmerksam auf ihre Kunden ein. Ich würde mich jederzeit wieder an sie wenden und kann sie uneingeschränkt empfehlen.", name: "Mandantin / Mandant", context: "Bewertung" }
        ]
    },
    blog: {
        label: "Blog",
        title: "Aktuelle Beiträge",
        all: "Alle Beiträge",
        more: "Weiterlesen",
        moreTo: "Weiterlesen:",
        posts: [
            {
                slug: "erbfall-tuerkei",
                areaSlug: "zivilrecht",
                category: "Zivilrecht",
                iso: "2026-09-12",
                date: "12. September 2026",
                title: "Erbfall mit Bezug zur Türkei: Welches Recht gilt?",
                excerpt: "Deutsches oder türkisches Erbrecht? Warum das Nachlassabkommen von 1929 der EU-Erbrechtsverordnung vorgeht und was das für Immobilien in der Türkei bedeutet.",
                ctaLine: "Ein Erbfall mit Türkeibezug verzeiht keine Reihenfolgefehler: Wer zuerst ausschlägt oder umschreiben lässt, ohne die Rechtslage geklärt zu haben, korrigiert das später selten.",
                body: [
                    "Bei einem Erbfall mit Bezug zu Deutschland und zur Türkei gilt nicht ein einziges Erbrecht, sondern in aller Regel zwei nebeneinander. Maßgeblich ist das deutsch-türkische Nachlassabkommen: Für unbewegliches Vermögen gilt das Recht des Staates, in dem das Grundstück liegt; für bewegliches Vermögen das Recht des Staates, dessen Staatsangehörigkeit die verstorbene Person besaß.",
                    "Das ist der Punkt, an dem die meisten Ratgeber in die Irre führen. Seit 2015 regelt die EU-Erbrechtsverordnung, dass grundsätzlich das Recht am letzten gewöhnlichen Aufenthalt gilt. Für deutsch-türkische Erbfälle gilt dieser Grundsatz gerade nicht: Die Verordnung lässt ältere bilaterale Abkommen ausdrücklich unberührt, und das deutsch-türkische Abkommen ist ein solches.",
                    "Praktisch heißt das: Ein türkischer Staatsangehöriger, der seit vierzig Jahren in Mannheim lebt und eine Eigentumswohnung in Izmir besitzt, vererbt diese Wohnung nach türkischem Recht – auch wenn sein gesamtes Leben in Deutschland stattgefunden hat. Sein Bankguthaben in Deutschland vererbt er ebenfalls nach türkischem Recht, weil es beweglich ist und er türkischer Staatsangehöriger war. Sein Haus in Mannheim dagegen nach deutschem Recht.",
                    {
                        note: "Wichtig: Das deutsch-türkische Nachlassabkommen geht der EU-Erbrechtsverordnung vor. Wer seine Planung auf den gewöhnlichen Aufenthalt stützt, plant am geltenden Recht vorbei – mit Folgen für Pflichtteile, Testamentsgestaltung und die Frage, welches Gericht überhaupt zuständig ist."
                    },
                    {
                        h2: "Das deutsch-türkische Nachlassabkommen – die Grundregel"
                    },
                    "Das Abkommen ist die Anlage zu Artikel 20 des deutsch-türkischen Konsularvertrags vom 28. Mai 1929, nach dem Zweiten Weltkrieg am 29. Mai 1952 wieder in Kraft gesetzt. Es ist ein völkerrechtlicher Vertrag und geht dem nationalen Kollisionsrecht beider Staaten vor.",
                    "Die Grundregel lautet:",
                    {
                        list: [
                            "Unbewegliches Vermögen – Grundstücke, Wohnungen, Häuser: Es gilt das Recht des Staates, in dem das Grundstück liegt. Deutsches Recht für die Immobilie in Deutschland, türkisches Recht für die Immobilie in der Türkei.",
                            "Bewegliches Vermögen – Bankguthaben, Fahrzeuge, Hausrat, Forderungen, Gesellschaftsanteile: Es gilt das Recht des Staates, dessen Staatsangehörigkeit die verstorbene Person im Zeitpunkt des Todes besaß."
                        ]
                    },
                    {
                        h3: "Was Nachlassspaltung konkret bedeutet"
                    },
                    "Der Nachlass zerfällt in zwei getrennte Vermögensmassen, die jeweils eigenen Regeln folgen. Es gibt dann nicht eine Erbquote, sondern zwei – und sie können unterschiedlich ausfallen. Wer in einer Masse Erbe ist, ist es in der anderen nicht zwingend im selben Umfang.",
                    "Das wirkt sich auf fast alles aus: auf die gesetzliche Erbfolge, auf Pflichtteilsansprüche, auf die Wirksamkeit eines Testaments und darauf, welche Nachweise Banken und Grundbuchämter verlangen.",
                    {
                        h2: "Doppelte Staatsangehörigkeit – der häufigste Sonderfall"
                    },
                    "Seit der Reform des Staatsangehörigkeitsrechts 2024 ist die Mehrstaatigkeit der Regelfall. Damit wächst die Zahl der Erbfälle, in denen die verstorbene Person beide Staatsangehörigkeiten besaß – und für das bewegliche Vermögen knüpft das Abkommen gerade an die Staatsangehörigkeit an.",
                    "Welche Staatsangehörigkeit dann maßgeblich ist, ist nicht trivial und war wiederholt Gegenstand gerichtlicher Entscheidungen. Wer beide Pässe besitzt, sollte das nicht ungeklärt lassen: Die Frage entscheidet im Ergebnis darüber, nach welchem Recht das gesamte bewegliche Vermögen vererbt wird.",
                    {
                        h2: "Welche Nachweise Sie brauchen – Erbschein oder veraset ilamı"
                    },
                    "Ein Europäisches Nachlasszeugnis hilft hier nicht weiter, weil die Türkei nicht an der EU-Erbrechtsverordnung teilnimmt. In der Praxis gilt:",
                    {
                        list: [
                            "Für Grundbesitz in Deutschland benötigen die Erben einen deutschen Erbschein. Das Grundbuchamt trägt ohne ihn nicht um.",
                            "Hinterlässt eine türkische Staatsangehörige in Deutschland ausschließlich bewegliches Vermögen, kann ein türkischer Erbschein – veraset ilamı – genügen. Er muss dann über die zuständige türkische Auslandsvertretung legalisiert beziehungsweise mit Apostille versehen und beglaubigt übersetzt werden.",
                            "Für Grundbesitz in der Türkei ist die Umschreibung im türkischen Grundbuch, dem Tapu, erforderlich. Hierfür gelten türkisches Recht und türkisches Verfahren."
                        ]
                    },
                    "Rechnen Sie damit, dass beide Seiten Unterlagen der jeweils anderen Seite verlangen: Sterbeurkunde, Personenstandsregisterauszug aus der Türkei, Nachweise zur Staatsangehörigkeit – jeweils übersetzt und überbeglaubigt.",
                    {
                        h2: "Fristen – und warum sie hier gefährlich sind"
                    },
                    {
                        table: {
                            caption: "Fristen im Vergleich: Deutschland und Türkei",
                            head: [
                                "Vorgang",
                                "Deutschland",
                                "Türkei"
                            ],
                            rows: [
                                [
                                    "Ausschlagung der Erbschaft",
                                    "6 Wochen ab Kenntnis; 6 Monate, wenn die verstorbene Person ihren letzten Wohnsitz nur im Ausland hatte oder der Erbe sich bei Fristbeginn im Ausland aufhält (§ 1944 BGB)",
                                    "3 Monate ab Kenntnis (Art. 606 türk. ZGB)"
                                ],
                                [
                                    "Teilausschlagung",
                                    "nicht möglich",
                                    "nicht möglich"
                                ],
                                [
                                    "Anzeige beim Finanzamt",
                                    "in der Regel binnen 3 Monaten (§ 30 ErbStG)",
                                    "eigene Fristen nach türkischem Recht"
                                ]
                            ]
                        }
                    },
                    "Die verlängerte Frist von sechs Monaten nach § 1944 BGB ist in genau diesen Fällen der Normalfall und wird oft übersehen – in beide Richtungen. Manche Erben glauben, sie hätten nur sechs Wochen, und handeln überstürzt; andere verlassen sich auf sechs Monate, obwohl die Voraussetzungen nicht vorliegen.",
                    "Beachten Sie außerdem: Eine Ausschlagung erfasst immer den gesamten Nachlass. Sie können nicht die überschuldete Immobilie in der Türkei ausschlagen und das deutsche Bankguthaben behalten.",
                    {
                        h2: "Pflichtteil – die Systeme unterscheiden sich"
                    },
                    "Auch beim Pflichtteil laufen beide Rechtsordnungen auseinander, und bei einer Nachlassspaltung gelten sie nebeneinander.",
                    "Nach türkischem Recht sind die gesetzlichen Erbteile in bestimmtem Umfang gebunden: Abkömmlinge sind mit der Hälfte ihres gesetzlichen Erbteils geschützt, Eltern mit einem Viertel, und dem überlebenden Ehegatten steht sein gesetzlicher Erbteil als Pflichtteil zu. Der deutsche Pflichtteil ist demgegenüber ein reiner Geldanspruch in Höhe der Hälfte des gesetzlichen Erbteils.",
                    "Wer ein Testament errichtet, das beide Vermögensmassen erfassen soll, muss deshalb beide Pflichtteilsordnungen mitdenken. Ein Testament, das nach deutschem Recht einwandfrei ist, kann für die türkische Masse angreifbar sein.",
                    {
                        h2: "Erbschaftsteuer – und das Risiko der Doppelbesteuerung"
                    },
                    "Zwischen Deutschland und der Türkei besteht kein Doppelbesteuerungsabkommen für die Erbschaftsteuer. Beide Staaten können denselben Erwerb besteuern; eine Anrechnung ausländischer Steuer kommt nur nach Maßgabe des nationalen Rechts in Betracht.",
                    "Die deutschen persönlichen Freibeträge nach § 16 ErbStG betragen derzeit unter anderem:",
                    {
                        table: {
                            caption: "Persönliche Freibeträge nach § 16 ErbStG (Stand 2026)",
                            head: [
                                "Erwerber",
                                "Freibetrag"
                            ],
                            rows: [
                                [
                                    "Ehegatte oder eingetragener Lebenspartner",
                                    "500.000 € zzgl. Versorgungsfreibetrag von 256.000 €"
                                ],
                                [
                                    "Kinder und Stiefkinder",
                                    "400.000 €"
                                ],
                                [
                                    "Enkel",
                                    "200.000 €"
                                ],
                                [
                                    "Eltern und Großeltern bei Erwerb von Todes wegen",
                                    "100.000 €"
                                ]
                            ]
                        }
                    },
                    "In Steuerklasse I liegen die Steuersätze zwischen 7 und 30 Prozent. Wichtig für Familien mit Türkeibezug: Diese Freibeträge stehen in voller Höhe nur bei unbeschränkter Steuerpflicht zur Verfügung. Wo weder Erblasser noch Erbe in Deutschland ansässig sind, greift die beschränkte Steuerpflicht und es wird nur das Inlandsvermögen erfasst – mit deutlich engeren Folgen. Ob Sie unbeschränkt oder beschränkt steuerpflichtig sind, sollte früh geprüft werden.",
                    {
                        h2: "Was Sie zuerst tun sollten"
                    },
                    {
                        list: [
                            "Sichern Sie die Unterlagen: Sterbeurkunde, Ausweise und Nachweise zur Staatsangehörigkeit beider Seiten, Personenstandsregisterauszug aus der Türkei.",
                            "Erstellen Sie ein Verzeichnis des Vermögens, getrennt nach beweglich und unbeweglich und nach Belegenheit – das ist die Grundlage jeder weiteren Einschätzung.",
                            "Klären Sie die Staatsangehörigkeit der verstorbenen Person im Todeszeitpunkt.",
                            "Prüfen Sie, ob ein Testament existiert – in Deutschland, in der Türkei oder in beiden Ländern.",
                            "Klären Sie die Ausschlagungsfrist, bevor Sie etwas unterschreiben oder Nachlassgegenstände in Besitz nehmen."
                        ]
                    },
                    {
                        h2: "Wie wir vorgehen"
                    },
                    "In der Regel klären wir zuerst, welche Vermögensmassen entstehen und welches Recht auf welche Masse anzuwenden ist. Erst danach lassen sich Erbquoten, Pflichtteile und die erforderlichen Nachweise sinnvoll bestimmen. Wir beraten Sie dabei auf Deutsch und auf Türkisch. Für Fragen, die sich nach türkischem Recht beurteilen – etwa die Umschreibung im Tapu oder ein Verfahren vor einem türkischen Gericht –, arbeiten wir mit einer auf türkisches Recht spezialisierten Kanzlei zusammen, sodass beide Seiten des Falls abgedeckt sind.",
                    {
                        h2: "Häufige Fragen zum Erbfall mit Türkeibezug"
                    },
                    {
                        faq: [
                            {
                                q: "Gilt bei einem Erbfall mit Türkeibezug die EU-Erbrechtsverordnung?",
                                a: "Nein. Das deutsch-türkische Nachlassabkommen von 1929 ist ein bilateraler Staatsvertrag und geht der EU-Erbrechtsverordnung vor. Maßgeblich ist deshalb nicht der letzte gewöhnliche Aufenthalt, sondern die Unterscheidung zwischen unbeweglichem Vermögen nach Belegenheitsrecht und beweglichem Vermögen nach Heimatrecht."
                            },
                            {
                                q: "Nach welchem Recht wird eine Immobilie in der Türkei vererbt?",
                                a: "Nach türkischem Recht, unabhängig davon, wo die verstorbene Person gelebt hat und welche Staatsangehörigkeit sie besaß. Für unbewegliches Vermögen gilt stets das Recht des Staates, in dem das Grundstück liegt."
                            },
                            {
                                q: "Brauche ich einen deutschen Erbschein oder genügt ein veraset ilamı?",
                                a: "Für Grundbesitz in Deutschland benötigen Sie einen deutschen Erbschein. Hinterlässt eine türkische Staatsangehörige in Deutschland nur bewegliches Vermögen, kann ein türkischer Erbschein genügen; er muss legalisiert beziehungsweise mit Apostille versehen und beglaubigt übersetzt werden."
                            },
                            {
                                q: "Wie lange habe ich Zeit, die Erbschaft auszuschlagen?",
                                a: "In Deutschland sechs Wochen ab Kenntnis, aber sechs Monate, wenn die verstorbene Person ihren letzten Wohnsitz nur im Ausland hatte oder Sie sich bei Fristbeginn im Ausland aufhalten (§ 1944 BGB). Nach türkischem Recht beträgt die Frist drei Monate ab Kenntnis."
                            },
                            {
                                q: "Kann ich die Erbschaft in der Türkei ausschlagen und in Deutschland annehmen?",
                                a: "Nein. Eine Teilausschlagung ist weder nach deutschem noch nach türkischem Recht zulässig. Die Ausschlagung erfasst immer den gesamten Nachlass."
                            },
                            {
                                q: "Was passiert bei doppelter Staatsangehörigkeit?",
                                a: "Da das Abkommen für bewegliches Vermögen an die Staatsangehörigkeit anknüpft, muss geklärt werden, welche Staatsangehörigkeit maßgeblich ist. Das ist eine Frage des Einzelfalls und sollte nicht offengelassen werden, weil davon das gesamte bewegliche Vermögen abhängt."
                            },
                            {
                                q: "Muss ich in beiden Ländern Erbschaftsteuer zahlen?",
                                a: "Das ist möglich. Zwischen Deutschland und der Türkei besteht kein Doppelbesteuerungsabkommen für die Erbschaftsteuer, sodass beide Staaten denselben Erwerb besteuern können. Eine Anrechnung richtet sich nach nationalem Recht und sollte frühzeitig geprüft werden."
                            }
                        ]
                    },
                    "Wenn ein Erbfall mit Türkeibezug eingetreten ist, bringen Sie die Sterbeurkunde, Unterlagen zur Staatsangehörigkeit und eine grobe Aufstellung des Vermögens mit. Damit lässt sich meist schon im ersten Gespräch sagen, in welche Massen der Nachlass zerfällt und welcher Schritt zuerst ansteht."
                ],
                image: "/images/blog/erbrecht.webp"
            },
            {
                slug: "mietminderung-maengel",
                areaSlug: "zivilrecht",
                category: "Zivilrecht",
                iso: "2026-09-02",
                date: "2. September 2026",
                title: "Mietminderung 2026: Wann Sie die Miete kürzen dürfen",
                excerpt: "Schimmel, Heizungsausfall, Baulärm – wann ein Mangel zur Minderung berechtigt, wie hoch Sie kürzen dürfen und warum der sicherste Weg die Zahlung unter Vorbehalt ist.",
                ctaLine: "Bevor Sie die Miete kürzen, lassen Sie die Quote einschätzen. Ein Gespräch kostet Sie eine halbe Stunde – ein zu hoch angesetzter Prozentsatz kann Sie die Wohnung kosten.",
                body: [
                    "Ist die Wohnung mangelhaft, ist die Miete kraft Gesetzes gemindert (§ 536 BGB). Sie müssen die Minderung nicht erst erklären und auch nicht beantragen – sie tritt automatisch ein, sobald der Mangel die Tauglichkeit der Wohnung zum vertragsgemäßen Gebrauch nicht nur unerheblich beeinträchtigt.",
                    "Genau diese Automatik führt aber zu dem Fehler, der in der Praxis am teuersten ist. Das Minderungsrecht ist selten das Problem. Das Problem sind die Höhe und der Zeitpunkt: Wer eigenmächtig zu viel kürzt, gerät in Zahlungsrückstand – und riskiert die Kündigung der Wohnung, in der er gerade um eine funktionierende Heizung kämpft.",
                    "Die kurze Antwort lautet deshalb: Zeigen Sie den Mangel sofort schriftlich an, sichern Sie die Beweise, und zahlen Sie die Miete zunächst in voller Höhe ausdrücklich unter Vorbehalt der Rückforderung weiter. Den zu viel gezahlten Betrag holen Sie sich anschließend zurück. Sie verlieren damit nichts – außer dem Kündigungsrisiko.",
                    {
                        note: "Wichtig: Wer die Miete zu stark kürzt, gerät in Zahlungsverzug. Erreicht der Rückstand zwei Monatsmieten, kann der Vermieter fristlos kündigen (§ 543 Abs. 2 Nr. 3 BGB). Dass der Mangel tatsächlich vorlag, schützt davor nicht – entscheidend ist allein, ob die von Ihnen gewählte Minderungsquote am Ende gerichtlich Bestand hat."
                    },
                    {
                        h2: "Was rechtlich ein Mangel ist"
                    },
                    "Ein Mangel liegt vor, wenn der tatsächliche Zustand der Wohnung vom vertraglich geschuldeten Zustand abweicht und der Gebrauch dadurch spürbar eingeschränkt ist. Es kommt nicht darauf an, ob den Vermieter ein Verschulden trifft. Auch ein Wasserrohrbruch, für den niemand etwas kann, ist ein Mangel.",
                    "Typische Fälle aus der Beratungspraxis:",
                    {
                        list: [
                            "Schimmel in Wohn- oder Schlafräumen, insbesondere wenn er auf Bauschäden oder Wärmebrücken zurückgeht",
                            "Ausfall oder Unterdimensionierung der Heizung während der Heizperiode",
                            "undichte Fenster, Zugluft, dauerhaft feuchte Wände",
                            "Wasserschäden und deren Folgeschäden",
                            "Ausfall von Warmwasser, Aufzug oder Sanitäranlagen",
                            "erheblicher, länger andauernder Baulärm – auch von einer fremden Baustelle",
                            "eine Wohnfläche, die die im Mietvertrag angegebene Fläche deutlich unterschreitet"
                        ]
                    },
                    "Auch Umstände außerhalb der Wohnung können einen Mangel begründen, wenn sie das Wohnen spürbar beeinträchtigen. Unerhebliche Beeinträchtigungen bleiben dagegen außer Betracht: Ein tropfender Wasserhahn oder eine einzelne laute Nacht genügen nicht.",
                    {
                        h2: "Die Mängelanzeige – der Schritt, den Sie nicht überspringen dürfen"
                    },
                    "Nach § 536c BGB müssen Sie den Mangel unverzüglich anzeigen. Das ist keine Formalie, sondern die eigentliche Pflicht des Mieters. Unterlassen Sie die Anzeige, verlieren Sie Ansprüche und können sich unter Umständen sogar schadensersatzpflichtig machen – etwa wenn aus einem kleinen, früh gemeldeten Leck ein großer Feuchtigkeitsschaden geworden wäre.",
                    "Eine brauchbare Mängelanzeige enthält vier Dinge: eine konkrete Beschreibung des Mangels, den Zeitpunkt seines Auftretens, die Aufforderung zur Beseitigung und eine angemessene Frist. Schreiben Sie nicht „die Wohnung ist feucht\", sondern „an der Außenwand des Schlafzimmers, links neben dem Fenster, hat sich auf etwa 0,5 m² schwarzer Schimmel gebildet, erstmals bemerkt am 3. September\".",
                    "Wählen Sie einen nachweisbaren Weg. E-Mail mit Lesebestätigung, Einwurf-Einschreiben oder Übergabe mit Zeugen. Ein Anruf ist rechtlich wirksam, aber im Streit wertlos, weil Sie ihn nicht belegen können.",
                    {
                        h2: "Beweise sichern, bevor der Mangel verschwindet"
                    },
                    "Im Streit entscheidet regelmäßig nicht, wer Recht hat, sondern wer den Mangel und sein Ausmaß belegen kann. Mängel haben die Eigenschaft, zu verschwinden: Der Schimmel wird überstrichen, die Baustelle wird fertig, die Heizung läuft im Frühjahr wieder. Dokumentieren Sie deshalb sofort und laufend.",
                    {
                        list: [
                            "Fotos und kurze Videos mit erkennbarem Datum, möglichst mit Maßstab im Bild",
                            "bei Lärm ein Lärmprotokoll mit Datum, Uhrzeit, Dauer und Art der Störung",
                            "bei Heizungsausfall Temperaturmessungen zu festen Tageszeiten, notiert mit Datum",
                            "Namen und Anschriften möglicher Zeugen – Besucher, Nachbarn, Handwerker",
                            "den vollständigen Schriftverkehr mit Vermieter und Hausverwaltung",
                            "das Übergabeprotokoll vom Einzug"
                        ]
                    },
                    {
                        h2: "Wie hoch darf die Minderung sein?"
                    },
                    "Die Höhe richtet sich nach der tatsächlichen Beeinträchtigung im Einzelfall, gemessen an der Bruttomiete. Die im Internet kursierenden Minderungstabellen geben allenfalls eine grobe Orientierung. Sie sind Sammlungen von Einzelfallentscheidungen und keine Rechtsnormen – ein Gericht ist daran nicht gebunden und entscheidet nach den Umständen Ihrer Wohnung.",
                    "Maßgeblich sind vor allem: welche Räume betroffen sind und wie intensiv sie genutzt werden, wie lange der Mangel andauert, ob er ganztägig oder nur zeitweise auftritt, und ob die Wohnung noch bewohnbar bleibt. Ein Heizungsausfall im Januar wiegt schwerer als derselbe Ausfall im Mai.",
                    "Weil diese Bewertung im Vorhinein niemand sicher treffen kann, ist die selbst gewählte Quote das eigentliche Risiko – und nicht der Mangel.",
                    {
                        h2: "Drei Wege, mit der Miete umzugehen"
                    },
                    {
                        table: {
                            caption: "Vorgehen bei einem festgestellten Mangel – Vorteile und Risiken",
                            head: [
                                "Vorgehen",
                                "Vorteil",
                                "Risiko"
                            ],
                            rows: [
                                [
                                    "Miete voll und vorbehaltlos weiterzahlen",
                                    "Kein Kündigungsrisiko",
                                    "Die Rückforderung kann nach längerer Zeit ausgeschlossen sein (§ 814 BGB), wenn Sie in Kenntnis des Mangels vorbehaltlos zahlen"
                                ],
                                [
                                    "Miete voll zahlen, ausdrücklich unter Vorbehalt der Rückforderung",
                                    "Kein Kündigungsrisiko, Ansprüche bleiben vollständig erhalten",
                                    "Sie gehen zunächst in Vorleistung und müssen den Betrag später geltend machen"
                                ],
                                [
                                    "Miete eigenmächtig kürzen",
                                    "Sofortige finanzielle Entlastung",
                                    "Bei zu hoch angesetzter Quote Zahlungsverzug – ab zwei Monatsmieten Rückstand ist die fristlose Kündigung möglich"
                                ]
                            ]
                        }
                    },
                    "Formulieren Sie den Vorbehalt ausdrücklich und schriftlich, am besten im Verwendungszweck der Überweisung und zusätzlich per E-Mail: „Zahlung unter Vorbehalt der Rückforderung wegen des mit Schreiben vom … angezeigten Mangels\". Ein stillschweigender Vorbehalt genügt nicht.",
                    {
                        h2: "Wann das Minderungsrecht ganz entfällt"
                    },
                    "Kein Minderungsrecht besteht, wenn Sie den Mangel bei Vertragsschluss kannten (§ 536b BGB) oder ihn selbst verursacht haben – etwa Schimmel durch nachweislich falsches Heiz- und Lüftungsverhalten. Auch deshalb lohnt es sich, den Zustand der Wohnung bei der Übergabe sorgfältig zu protokollieren.",
                    "Ein zweiter, weniger bekannter Fall: Wer den Mangel kennt und die Miete über längere Zeit vorbehaltlos in voller Höhe weiterzahlt, riskiert, die Rückforderung nach § 814 BGB nicht mehr durchsetzen zu können. Das Gesetz wertet die vorbehaltlose Zahlung als bewusste Leistung auf eine nicht geschuldete Forderung. Der Vorbehalt ist damit nicht nur eine Vorsichtsmaßnahme, sondern der Grund, warum die Zahlungsvariante überhaupt funktioniert.",
                    {
                        h3: "Sonderfall Baulärm aus der Nachbarschaft"
                    },
                    "Baulärm von einem fremden Grundstück ist ein häufiger Streitpunkt. Entscheidend ist, ob die Beeinträchtigung erheblich ist und ob der Vermieter sie ihrerseits gegenüber dem Verursacher abwehren könnte. Ein Lärmprotokoll ist hier praktisch unverzichtbar, weil sich der Umfang der Störung im Nachhinein sonst nicht mehr rekonstruieren lässt.",
                    {
                        h2: "Wie wir in solchen Fällen vorgehen"
                    },
                    "In der Regel prüfen wir zuerst, ob der Mangel belegbar und die Anzeige wirksam erfolgt ist – das entscheidet über alles Weitere. Danach ordnen wir die realistische Größenordnung der Minderung ein und klären, ob neben der Minderung weitere Ansprüche bestehen, etwa auf Mangelbeseitigung, Aufwendungsersatz oder Schadensersatz. Häufig lässt sich die Sache außergerichtlich klären, wenn die Dokumentation von Anfang an sauber ist.",
                    "Wir beraten und vertreten Sie dabei auf Deutsch und auf Türkisch, außergerichtlich wie vor Gericht.",
                    {
                        h2: "Häufige Fragen zur Mietminderung"
                    },
                    {
                        faq: [
                            {
                                q: "Muss ich die Mietminderung beim Vermieter ankündigen?",
                                a: "Die Minderung selbst tritt kraft Gesetzes ein und muss nicht erklärt werden (§ 536 BGB). Anzeigen müssen Sie aber den Mangel, und zwar unverzüglich (§ 536c BGB). Ohne diese Mängelanzeige verlieren Sie Ihre Rechte. Die Anzeige ist die eigentliche Pflicht, nicht die Minderungserklärung."
                            },
                            {
                                q: "Ab wann kann ich die Miete mindern?",
                                a: "Grundsätzlich ab dem Auftreten des Mangels, praktisch aber erst ab Zugang Ihrer Mängelanzeige beim Vermieter. Für die Zeit davor besteht in der Regel kein Anspruch, weil der Vermieter von dem Mangel nichts wusste und ihn deshalb nicht beseitigen konnte."
                            },
                            {
                                q: "Wie viel Prozent darf ich mindern?",
                                a: "Es gibt keine gesetzlichen Prozentsätze. Maßgeblich ist die tatsächliche Beeinträchtigung im Einzelfall, bezogen auf die Bruttomiete. Minderungstabellen im Internet sind Sammlungen von Einzelfallurteilen und für ein Gericht nicht bindend. Lassen Sie die Größenordnung prüfen, bevor Sie kürzen."
                            },
                            {
                                q: "Kann mir wegen einer Mietminderung gekündigt werden?",
                                a: "Ja, wenn Sie zu viel mindern. Die einbehaltenen Beträge gelten dann als Rückstand. Erreicht dieser zwei Monatsmieten, ist die fristlose Kündigung nach § 543 Abs. 2 Nr. 3 BGB möglich. Deshalb ist die Zahlung unter Vorbehalt der sicherere Weg."
                            },
                            {
                                q: "Was bedeutet „Zahlung unter Vorbehalt\" genau?",
                                a: "Sie zahlen die volle Miete weiter, erklären aber ausdrücklich und schriftlich, dass die Zahlung nur unter Vorbehalt der Rückforderung erfolgt. Damit geraten Sie nicht in Verzug, behalten aber den Anspruch, den zu viel gezahlten Anteil später zurückzuverlangen."
                            },
                            {
                                q: "Ich habe den Mangel monatelang hingenommen. Ist es jetzt zu spät?",
                                a: "Nicht zwingend, aber es wird schwieriger. Wer den Mangel kennt und vorbehaltlos weiterzahlt, kann die Rückforderung nach § 814 BGB verlieren. Für die Zukunft bleibt das Minderungsrecht meist bestehen. Erklären Sie deshalb ab sofort den Vorbehalt und lassen Sie die Vergangenheit gesondert prüfen."
                            },
                            {
                                q: "Brauche ich für eine Mietminderung einen Anwalt?",
                                a: "Für die Mängelanzeige nicht. Sobald es um die Höhe der Minderung, um eine Kündigungsdrohung des Vermieters oder um die Rückforderung bereits gezahlter Miete geht, ist eine anwaltliche Einschätzung sinnvoll, weil ab diesem Punkt ein Fehler die Wohnung kosten kann."
                            }
                        ]
                    },
                    "Wenn Sie unsicher sind, ob Ihre Situation einen Mangel darstellt oder in welcher Höhe eine Minderung realistisch ist, schildern Sie uns den Fall kurz. Oft genügt ein Blick auf die Mängelanzeige und die Dokumentation, um die richtige Reihenfolge festzulegen."
                ],
                image: "/images/blog/zivilrecht.webp"
            },
            {
                slug: "einbuergerung-2026",
                areaSlug: "auslaenderrecht",
                category: "Ausländerrecht",
                iso: "2026-08-12",
                date: "12. August 2026",
                updated: "2026-09-12",
                title: "Einbürgerung 2026: Voraussetzungen, Kosten und Fristen",
                excerpt: "Fünf Jahre Aufenthalt, B1, gesicherter Lebensunterhalt – und die Einbürgerung nach drei Jahren ist seit Oktober 2025 abgeschafft. Der aktuelle Stand im Überblick.",
                ctaLine: "Fünf Jahre, Lebensunterhalt, B1: Ob Sie die Voraussetzungen heute schon erfüllen, lässt sich vorab klären. Das ist der Unterschied zwischen einem Antrag und einem bewilligten Antrag.",
                body: [
                    "Die Einbürgerung ist in der Regel nach fünf Jahren rechtmäßigem gewöhnlichem Aufenthalt in Deutschland möglich (§ 10 StAG). Die bisherige Staatsangehörigkeit müssen Sie dabei grundsätzlich nicht mehr aufgeben – die Mehrstaatigkeit ist seit der Reform vom 27. Juni 2024 der Regelfall und nicht mehr die Ausnahme.",
                    "Für viele, die den Antrag jahrelang aufgeschoben haben, hat sich die Rechnung damit grundlegend verändert. Vor der Reform waren acht Jahre Aufenthalt erforderlich, und wer Deutscher werden wollte, musste seinen bisherigen Pass in aller Regel abgeben. Beides gilt nicht mehr.",
                    "Ein Punkt hat sich allerdings wieder in die andere Richtung bewegt, und er wird in vielen älteren Ratgebern noch falsch dargestellt.",
                    {
                        note: "Wichtig: Die 2024 eingeführte beschleunigte Einbürgerung nach drei Jahren bei besonderen Integrationsleistungen ist abgeschafft. Der Bundestag hat die Änderung am 8. Oktober 2025 beschlossen, das Gesetz ist am 30. Oktober 2025 in Kraft getreten. Es gilt wieder ausnahmslos die Frist von fünf Jahren. Wenn Ihre Planung auf dem Drei-Jahres-Weg beruht, sollten Sie sie überprüfen lassen."
                    },
                    {
                        h2: "Die Voraussetzungen im Überblick"
                    },
                    "Für die Anspruchseinbürgerung nach § 10 StAG müssen Sie folgende Voraussetzungen erfüllen:",
                    {
                        list: [
                            "ein gültiger Aufenthaltstitel oder ein Daueraufenthaltsrecht",
                            "fünf Jahre rechtmäßiger gewöhnlicher Aufenthalt in Deutschland",
                            "ein gesicherter Lebensunterhalt für Sie und Ihre unterhaltsberechtigten Angehörigen",
                            "Deutschkenntnisse auf dem Niveau B1 des Gemeinsamen Europäischen Referenzrahmens",
                            "der bestandene Einbürgerungstest oder ein gleichwertiger Nachweis",
                            "keine relevanten Vorstrafen",
                            "ein Bekenntnis zur freiheitlichen demokratischen Grundordnung, zum Schutz der Menschenwürde und zur besonderen historischen Verantwortung Deutschlands"
                        ]
                    },
                    "Die Voraussetzungen müssen im Zeitpunkt der Entscheidung über Ihren Antrag vorliegen, nicht nur bei Antragstellung. Das ist praktisch bedeutsam, weil zwischen Antrag und Bescheid je nach Behörde viele Monate liegen können – ein Jobverlust in dieser Zeit kann das Verfahren gefährden.",
                    {
                        h2: "Fünf Jahre Aufenthalt: was zählt und was nicht"
                    },
                    "Gezählt werden Zeiten rechtmäßigen gewöhnlichen Aufenthalts. Nicht jede Zeit in Deutschland ist das. Zeiten der Duldung zählen grundsätzlich nicht, ebenso wenig Aufenthalte zu einem seiner Natur nach vorübergehenden Zweck. Zeiten eines Asylverfahrens können bei späterer Anerkennung angerechnet werden.",
                    "Längere Auslandsaufenthalte können die Kette unterbrechen. Wer über Monate im Ausland war – etwa wegen einer Pflegesituation in der Familie –, sollte die Auswirkung auf die Aufenthaltszeiten klären lassen, bevor er den Antrag stellt.",
                    "Lücken in der Aufenthaltshistorie sind nach unserer Erfahrung der häufigste Grund für Verzögerungen. Sie lassen sich fast immer schließen, wenn man früh genug damit beginnt – etwa durch Auskünfte aus der Ausländerakte.",
                    {
                        h2: "Der gesicherte Lebensunterhalt – der häufigste Stolperstein"
                    },
                    "Sie müssen den Unterhalt für sich und Ihre unterhaltsberechtigten Angehörigen grundsätzlich ohne Leistungen nach dem SGB II oder SGB XII bestreiten können. Kindergeld, Elterngeld, Wohngeld und BAföG sind unschädlich; Bürgergeld ist es nicht.",
                    "Von diesem Grundsatz gibt es eng gefasste Ausnahmen. Sie greifen insbesondere für Angehörige der ehemaligen Gastarbeitergeneration und für Menschen, die in Vollzeit erwerbstätig sind und den Leistungsbezug nicht zu vertreten haben. Ob eine dieser Ausnahmen in Ihrem Fall einschlägig ist, sollten Sie prüfen lassen, bevor Sie den Antrag zurückstellen – viele Betroffene halten sich für ausgeschlossen, ohne es zu sein.",
                    {
                        h2: "Sprachnachweis B1 – und wer davon befreit ist"
                    },
                    "In der Regel genügt ein Zertifikat auf dem Niveau B1, ein deutscher Schulabschluss, ein abgeschlossenes Studium in deutscher Sprache oder ein vergleichbarer Nachweis. Der Nachweis muss die vier Fertigkeiten abdecken, nicht nur das Sprechen.",
                    "Für Angehörige der Gastarbeitergeneration, die im Rahmen der Anwerbeabkommen nach Deutschland gekommen sind, sieht das Gesetz eine Erleichterung vor: Der Nachweis kann mündlich erbracht werden, die schriftliche Prüfung entfällt. Weitere Erleichterungen bestehen bei Alter, Krankheit oder Behinderung, wenn der Nachweis aus diesen Gründen nicht zumutbar ist.",
                    {
                        h2: "Einbürgerungstest"
                    },
                    "Der Test besteht aus 33 Fragen zu Rechtsordnung, Geschichte und Gesellschaft, von denen 17 richtig beantwortet werden müssen. Wer einen deutschen Schulabschluss hat, ist davon in der Regel befreit. Der Test kann beliebig oft wiederholt werden; die Gebühr fällt allerdings jedes Mal erneut an.",
                    {
                        h2: "Kosten und Dauer"
                    },
                    {
                        table: {
                            caption: "Typische Kosten der Einbürgerung (Stand 2026, ohne Gewähr im Einzelfall)",
                            head: [
                                "Position",
                                "Betrag",
                                "Anmerkung"
                            ],
                            rows: [
                                [
                                    "Einbürgerungsgebühr",
                                    "255 €",
                                    "pro erwachsener Person"
                                ],
                                [
                                    "Miteinbürgerung eines minderjährigen Kindes",
                                    "51 €",
                                    "wenn zusammen mit einem Elternteil eingebürgert"
                                ],
                                [
                                    "Einbürgerungstest",
                                    "25 €",
                                    "je Antritt, auch bei Wiederholung"
                                ],
                                [
                                    "B1-Sprachprüfung",
                                    "ca. 150–250 €",
                                    "je nach Anbieter und Prüfungsort"
                                ],
                                [
                                    "Urkunden, Übersetzungen, Beglaubigungen",
                                    "variabel",
                                    "abhängig von Herkunftsland und Umfang"
                                ]
                            ]
                        }
                    },
                    "Die Bearbeitungsdauer unterscheidet sich erheblich zwischen den Einbürgerungsbehörden und hängt vor allem von der Vollständigkeit Ihrer Unterlagen ab. Ein vollständiger Antrag ist der wirksamste Hebel, den Sie selbst in der Hand haben.",
                    {
                        h2: "Doppelte Staatsangehörigkeit – besonders für türkische Staatsangehörige"
                    },
                    "Seit der Reform 2024 müssen Sie Ihre bisherige Staatsangehörigkeit grundsätzlich nicht mehr aufgeben. Für türkische Staatsangehörige bedeutet das eine spürbare Vereinfachung: Der frühere Weg über die Entlassung aus der türkischen Staatsangehörigkeit und die anschließende Blaue Karte (Mavi Kart) ist für Neuanträge nicht mehr erforderlich.",
                    "Ob und welche Wirkungen die Einbürgerung nach türkischem Recht auf Ihre türkische Staatsangehörigkeit, auf Erbrechtsfragen oder auf Grundbesitz in der Türkei hat, ist eine Frage des türkischen Rechts und gehört gesondert geprüft. Für solche Fragen arbeiten wir mit einer auf türkisches Recht spezialisierten Kanzlei zusammen.",
                    {
                        h2: "Was Sie jetzt zusammenstellen sollten"
                    },
                    {
                        list: [
                            "lückenloser Nachweis Ihrer Aufenthaltszeiten und aller Aufenthaltstitel",
                            "Einkommensnachweise der letzten Monate, bei Selbständigen zusätzlich die Gewinnermittlung",
                            "Rentenverlauf der Deutschen Rentenversicherung",
                            "Sprachzertifikat oder Schul-/Hochschulzeugnis",
                            "Bescheinigung über den bestandenen Einbürgerungstest",
                            "Identitätsdokumente, Geburtsurkunde, gegebenenfalls Heiratsurkunde – mit beglaubigten Übersetzungen",
                            "Mietvertrag und Meldebescheinigung"
                        ]
                    },
                    {
                        h2: "Wie wir unterstützen"
                    },
                    "Sinnvoll ist eine Prüfung vor der Antragstellung: Sind die fünf Jahre wirklich lückenlos belegt? Steht der Lebensunterhalt so da, wie die Behörde ihn bewerten wird? Greift eine der Ausnahmen? Wenn ein Antrag abgelehnt wurde, prüfen wir den Bescheid und die Erfolgsaussichten der Rechtsmittel. Wir beraten Sie dabei auf Deutsch und auf Türkisch.",
                    {
                        h2: "Häufige Fragen zur Einbürgerung"
                    },
                    {
                        faq: [
                            {
                                q: "Gibt es die Einbürgerung nach drei Jahren noch?",
                                a: "Nein. Die 2024 eingeführte beschleunigte Einbürgerung nach drei Jahren wurde am 8. Oktober 2025 vom Bundestag abgeschafft; das Gesetz trat am 30. Oktober 2025 in Kraft. Maßgeblich ist wieder die Frist von fünf Jahren rechtmäßigen gewöhnlichen Aufenthalts."
                            },
                            {
                                q: "Muss ich meine türkische Staatsangehörigkeit aufgeben?",
                                a: "Grundsätzlich nein. Seit der Reform vom 27. Juni 2024 ist die Mehrstaatigkeit der Regelfall. Die frühere Entlassung aus der türkischen Staatsangehörigkeit und der Weg über die Blaue Karte sind für Neuanträge nicht mehr erforderlich."
                            },
                            {
                                q: "Kann ich eingebürgert werden, wenn ich Bürgergeld beziehe?",
                                a: "In der Regel nicht, da der Lebensunterhalt ohne Leistungen nach dem SGB II oder SGB XII gesichert sein muss. Es gibt jedoch eng gefasste Ausnahmen, etwa für Angehörige der Gastarbeitergeneration oder bei unverschuldetem Bezug trotz Vollzeittätigkeit. Das sollte im Einzelfall geprüft werden."
                            },
                            {
                                q: "Welches Sprachniveau brauche ich?",
                                a: "Erforderlich ist das Niveau B1. Anerkannt werden auch ein deutscher Schulabschluss oder ein in deutscher Sprache abgeschlossenes Studium. Für die Gastarbeitergeneration genügt der mündliche Nachweis; bei Alter, Krankheit oder Behinderung sind weitere Erleichterungen möglich."
                            },
                            {
                                q: "Was kostet die Einbürgerung insgesamt?",
                                a: "Die Gebühr beträgt 255 € pro erwachsener Person und 51 € für ein miteingebürgertes minderjähriges Kind. Hinzu kommen 25 € für den Einbürgerungstest, etwa 150–250 € für die B1-Prüfung sowie Kosten für Urkunden und beglaubigte Übersetzungen."
                            },
                            {
                                q: "Wie lange dauert das Verfahren?",
                                a: "Das hängt stark von der zuständigen Behörde und von der Vollständigkeit Ihrer Unterlagen ab und reicht von einigen Monaten bis zu deutlich über einem Jahr. Lücken bei den Aufenthaltsnachweisen sind die häufigste Ursache für Verzögerungen."
                            },
                            {
                                q: "Mein Antrag wurde abgelehnt. Was kann ich tun?",
                                a: "Gegen den Ablehnungsbescheid können Rechtsmittel in Betracht kommen; maßgeblich sind die Begründung und die Fristen im Bescheid. Lassen Sie den Bescheid zeitnah prüfen, da die Rechtsbehelfsfristen kurz sind."
                            }
                        ]
                    },
                    "Wenn Sie wissen möchten, ob Sie die Voraussetzungen heute schon erfüllen, bringen Sie Ihre Aufenthaltstitel, die Einkommensnachweise und den Rentenverlauf mit. Damit lässt sich in den meisten Fällen bereits im ersten Gespräch einschätzen, ob der Antrag Aussicht auf Erfolg hat."
                ],
                image: "/images/blog/auslaenderrecht.webp"
            },
            {
                slug: "kuendigung-drei-wochen",
                areaSlug: "arbeitsrecht",
                category: "Arbeitsrecht",
                iso: "2026-07-28",
                date: "28. Juli 2026",
                title: "Kündigung erhalten: Die ersten drei Wochen entscheiden",
                excerpt: "Die Frist für die Kündigungsschutzklage beträgt drei Wochen ab Zugang – und sie gilt auch für offensichtlich unwirksame Kündigungen. Was jetzt zu tun ist.",
                ctaLine: "Die drei Wochen laufen ab heute, nicht ab dem Tag, an dem Sie sich entschieden haben. Melden Sie sich, solange die Frist offen ist – danach wird auch eine fehlerhafte Kündigung wirksam.",
                body: [
                    "Wenn Sie eine Kündigung erhalten, läuft ab dem Zugang eine Frist von drei Wochen. Innerhalb dieser Frist muss die Kündigungsschutzklage beim Arbeitsgericht eingegangen sein (§ 4 KSchG). Versäumen Sie die Frist, gilt die Kündigung nach § 7 KSchG als von Anfang an wirksam – unabhängig davon, wie angreifbar sie inhaltlich gewesen wäre.",
                    "Das ist die härteste Regel des deutschen Kündigungsschutzrechts, und sie überrascht die meisten Betroffenen. Eine Kündigung, die sozial ungerechtfertigt, formell fehlerhaft oder von einer gar nicht vertretungsberechtigten Person unterschrieben wurde, wird durch bloßen Zeitablauf wirksam. Es gibt danach nichts mehr zu prüfen.",
                    "Die praktische Konsequenz: Der frühe Anruf ist wichtiger als die perfekt vorbereitete Akte. Was Ihnen später nützt, sind drei Dinge – der Umschlag, das Datum und die rechtzeitige Klage.",
                    {
                        note: "Wichtig: Maßgeblich ist der Eingang der Klageschrift beim Arbeitsgericht, nicht deren Absendung. Eine am 20. Tag zur Post gegebene Klage, die am 22. Tag ankommt, ist verspätet. Rechnen Sie nie bis zum letzten Tag."
                    },
                    {
                        h2: "Wann die Frist zu laufen beginnt"
                    },
                    "Entscheidend ist der Zugang der Kündigung, nicht das Datum auf dem Schreiben. Zugang bedeutet: Das Schreiben ist so in Ihren Machtbereich gelangt, dass Sie unter normalen Umständen davon Kenntnis nehmen konnten.",
                    {
                        list: [
                            "Bei Einwurf in den Briefkasten kommt es auf den Tag an, an dem üblicherweise mit der Leerung zu rechnen ist – bei einem Einwurf am späten Nachmittag regelmäßig erst der Folgetag",
                            "Bei persönlicher Übergabe ist der Tag der Übergabe maßgeblich",
                            "Bei Einschreiben mit Rückschein der Tag der Aushändigung, nicht der Tag des Benachrichtigungszettels",
                            "Urlaub oder Krankheit hemmen den Zugang grundsätzlich nicht"
                        ]
                    },
                    "Notieren Sie deshalb sofort, wann und auf welchem Weg Sie die Kündigung erhalten haben, und heben Sie den Umschlag mit dem Poststempel auf. Der Umschlag ist im Streitfall das wichtigste Beweismittel und wird fast immer weggeworfen.",
                    {
                        h2: "Die Frist gilt auch bei offensichtlichen Fehlern"
                    },
                    "Auch die folgenden Einwände müssen innerhalb der drei Wochen erhoben werden, sonst sind sie verloren:",
                    {
                        list: [
                            "die Kündigung ist nicht eigenhändig unterschrieben oder wurde nur per E-Mail oder Messenger übermittelt",
                            "sie stammt von einer Person ohne Vertretungsmacht",
                            "der Betriebsrat wurde nicht ordnungsgemäß angehört",
                            "ein Sonderkündigungsschutz wegen Schwangerschaft, Elternzeit, Pflegezeit oder Schwerbehinderung wurde übergangen",
                            "die Kündigungsfrist wurde falsch berechnet"
                        ]
                    },
                    "Nur ausnahmsweise lässt § 5 KSchG eine nachträgliche Zulassung der Klage zu, wenn Sie trotz aller zumutbaren Sorgfalt an der rechtzeitigen Klage gehindert waren. Der Maßstab ist streng; darauf sollte niemand seine Planung stützen.",
                    {
                        h2: "Die Fristen auf einen Blick"
                    },
                    {
                        table: {
                            caption: "Was nach Zugang der Kündigung wann zu erledigen ist",
                            head: [
                                "Frist",
                                "Was zu tun ist",
                                "Folge bei Versäumnis"
                            ],
                            rows: [
                                [
                                    "Sofort",
                                    "Zugangsdatum notieren, Umschlag aufbewahren, nichts unterschreiben",
                                    "Beweisprobleme im späteren Verfahren"
                                ],
                                [
                                    "3 Tage nach Kenntnis der Kündigung",
                                    "Arbeitsuchend melden bei der Agentur für Arbeit (§ 38 SGB III)",
                                    "Minderung des Arbeitslosengeldes"
                                ],
                                [
                                    "3 Wochen ab Zugang",
                                    "Kündigungsschutzklage beim Arbeitsgericht (§ 4 KSchG)",
                                    "Kündigung gilt als wirksam (§ 7 KSchG)"
                                ],
                                [
                                    "Spätestens zum Beendigungstermin",
                                    "Arbeitslos melden bei der Agentur für Arbeit",
                                    "Späterer Leistungsbeginn"
                                ]
                            ]
                        }
                    },
                    {
                        h2: "Unterschreiben Sie nichts vorschnell"
                    },
                    "Wird Ihnen zusammen mit der Kündigung ein Aufhebungs- oder Abwicklungsvertrag vorgelegt, oft verbunden mit dem Hinweis, das Angebot gelte nur heute, ist Zurückhaltung geboten. Ein Aufhebungsvertrag kann eine Sperrzeit beim Arbeitslosengeld auslösen, die in der Regel zwölf Wochen beträgt. Zugleich geben Sie damit Ihre Verhandlungsposition auf, bevor Sie sie überhaupt genutzt haben.",
                    "Auch eine Ausgleichsquittung oder eine Erklärung, mit der Sie auf die Erhebung der Kündigungsschutzklage verzichten, sollten Sie nicht ohne Prüfung unterschreiben.",
                    {
                        h2: "Was im Verfahren tatsächlich passiert"
                    },
                    "Nach Eingang der Klage bestimmt das Arbeitsgericht einen Gütetermin, der häufig schon wenige Wochen später stattfindet. Dort wird nicht entschieden, sondern verhandelt: über Beendigungszeitpunkt, Abfindung, Freistellung, Resturlaub und Zeugnis. Ein großer Teil der Kündigungsschutzverfahren endet in diesem Stadium durch Vergleich.",
                    "Wichtig zu wissen: Ein gesetzlicher Anspruch auf eine Abfindung besteht in der Regel nicht. Die Abfindung ist das Ergebnis einer Verhandlung, und die Verhandlungsposition entsteht erst durch die rechtzeitig erhobene Klage. Wer nicht klagt, verhandelt nicht.",
                    "Im arbeitsgerichtlichen Verfahren erster Instanz trägt jede Partei ihre eigenen Anwaltskosten, unabhängig vom Ausgang (§ 12a ArbGG). Das ist eine Besonderheit gegenüber anderen Gerichtsverfahren und sollte in die Entscheidung einbezogen werden.",
                    {
                        h2: "Was Sie zum ersten Gespräch mitbringen sollten"
                    },
                    {
                        list: [
                            "das Kündigungsschreiben und den Umschlag",
                            "den Arbeitsvertrag samt Nachträgen",
                            "die letzten drei Lohnabrechnungen",
                            "Angaben zur Betriebsgröße und zur Dauer Ihrer Beschäftigung",
                            "Hinweise auf einen etwaigen Sonderkündigungsschutz",
                            "alles, was Ihnen zusätzlich vorgelegt wurde"
                        ]
                    },
                    "Betriebsgröße und Beschäftigungsdauer entscheiden darüber, ob das Kündigungsschutzgesetz überhaupt anwendbar ist. Aber selbst wenn es das nicht ist, bleibt die Drei-Wochen-Frist für viele Einwände maßgeblich – die Klage ist deshalb auch im Kleinbetrieb zu prüfen.",
                    {
                        h2: "Häufige Fragen zur Kündigung"
                    },
                    {
                        faq: [
                            {
                                q: "Wie lange habe ich Zeit, gegen eine Kündigung vorzugehen?",
                                a: "Drei Wochen ab Zugang der schriftlichen Kündigung. Innerhalb dieser Frist muss die Klage beim Arbeitsgericht eingegangen sein (§ 4 KSchG). Nach Ablauf gilt die Kündigung nach § 7 KSchG als von Anfang an wirksam."
                            },
                            {
                                q: "Gilt die Frist auch, wenn die Kündigung offensichtlich unwirksam ist?",
                                a: "Ja. Auch eine nicht unterschriebene Kündigung, eine Kündigung ohne Betriebsratsanhörung oder eine Kündigung trotz Sonderkündigungsschutz muss innerhalb der drei Wochen angegriffen werden. Andernfalls wird sie durch Zeitablauf wirksam."
                            },
                            {
                                q: "Ab wann läuft die Frist genau?",
                                a: "Ab dem Zugang, nicht ab dem Datum des Schreibens. Beim Einwurf in den Briefkasten ist der Tag maßgeblich, an dem üblicherweise mit der Leerung zu rechnen ist. Urlaub oder Krankheit verschieben den Zugang grundsätzlich nicht."
                            },
                            {
                                q: "Habe ich Anspruch auf eine Abfindung?",
                                a: "In der Regel nicht kraft Gesetzes. Abfindungen entstehen meist im Vergleich, häufig bereits im Gütetermin. Die Verhandlungsposition dafür entsteht durch die rechtzeitig erhobene Kündigungsschutzklage."
                            },
                            {
                                q: "Soll ich einen Aufhebungsvertrag unterschreiben?",
                                a: "Nicht ohne vorherige Prüfung. Ein Aufhebungsvertrag kann eine Sperrzeit beim Arbeitslosengeld von in der Regel zwölf Wochen auslösen und nimmt Ihnen zugleich die Verhandlungsposition im Kündigungsschutzverfahren."
                            },
                            {
                                q: "Muss ich mich bei der Agentur für Arbeit melden?",
                                a: "Ja, und zwar spätestens drei Tage nach Kenntnis der Kündigung arbeitsuchend (§ 38 SGB III). Versäumen Sie das, droht eine Minderung des Arbeitslosengeldes. Diese Pflicht besteht unabhängig davon, ob Sie gegen die Kündigung klagen."
                            },
                            {
                                q: "Was kostet ein Kündigungsschutzverfahren?",
                                a: "In der ersten Instanz vor dem Arbeitsgericht trägt jede Partei ihre eigenen Anwaltskosten, unabhängig vom Ausgang (§ 12a ArbGG). Eine Rechtsschutzversicherung übernimmt die Kosten häufig; das sollte vor Klageerhebung geklärt werden."
                            }
                        ]
                    },
                    "Wenn Sie eine Kündigung erhalten haben, warten Sie mit der Einschätzung nicht bis zum Ende der Frist. Melden Sie sich, solange die drei Wochen noch laufen – alles Weitere lässt sich dann in Ruhe klären."
                ],
                image: "/images/blog/arbeitsrecht.webp"
            },
            {
                slug: "scheidung-tuerkei",
                areaSlug: "familienrecht",
                category: "Familienrecht",
                iso: "2026-07-09",
                date: "9. Juli 2026",
                title: "Scheidung mit Bezug zur Türkei: Welches Recht gilt?",
                excerpt: "Zuständigkeit, anwendbares Recht, Anerkennung auf beiden Seiten – warum eine türkische Scheidung in Deutschland nicht automatisch gilt und was das für Sie bedeutet.",
                ctaLine: "Zuständigkeit, anwendbares Recht, Anerkennung auf beiden Seiten: Wer die Reihenfolge vorab klärt, erspart sich einen Personenstand, der in einem der beiden Länder nicht stimmt.",
                body: [
                    "Wenn Eheleute Bezüge zu Deutschland und zur Türkei haben, sind zwei Fragen sauber zu trennen: Welches Gericht ist zuständig – und welches Recht wendet dieses Gericht an? Die Antworten fallen nicht zwingend zusammen. Ein deutsches Gericht kann türkisches Recht anwenden, und ein türkisches Gericht kann deutsches Recht anwenden.",
                    "Die häufigste Fehlannahme in der Beratung ist eine andere: dass eine in der Türkei ausgesprochene Scheidung in Deutschland ohne Weiteres gilt. Das tut sie nicht. Ohne ein förmliches Anerkennungsverfahren sind Sie in Deutschland weiterhin verheiratet – mit allen Folgen für eine erneute Eheschließung, für das Erbrecht und für das Melderecht.",
                    {
                        note: "Wichtig: Eine türkische Scheidung entfaltet in Deutschland erst nach förmlicher Anerkennung Wirkung (§ 107 FamFG). Wer in der Türkei geschieden wurde und in Deutschland erneut heiratet, ohne die Anerkennung durchlaufen zu haben, riskiert eine unwirksame zweite Ehe."
                    },
                    {
                        h2: "Welches Gericht zuständig ist"
                    },
                    "Die internationale Zuständigkeit deutscher Gerichte richtet sich nach der Brüssel-IIb-Verordnung. Sie knüpft vor allem an den gewöhnlichen Aufenthalt an. Leben beide Eheleute in Deutschland, sind deutsche Gerichte zuständig – auch dann, wenn beide ausschließlich die türkische Staatsangehörigkeit besitzen. Die Staatsangehörigkeit allein entscheidet also nicht.",
                    "Möglich ist auch, dass die Gerichte beider Staaten zuständig sind. Dann kann es darauf ankommen, wer zuerst das Verfahren einleitet. Diese Frage sollte man früh stellen, weil sie sich später nicht mehr korrigieren lässt.",
                    {
                        h2: "Welches Recht angewendet wird"
                    },
                    "Welches Recht auf die Scheidung anzuwenden ist, bestimmt die Rom-III-Verordnung. Sie gilt auch im Verhältnis zu Staaten, die selbst nicht beteiligt sind; die Türkei gehört dazu. Maßgeblich ist in erster Linie der gewöhnliche Aufenthalt der Eheleute zum Zeitpunkt der Anrufung des Gerichts.",
                    "Leben beide in Deutschland, wird in der Regel deutsches Scheidungsrecht angewendet – auch von einem deutschen Gericht, das über zwei türkische Staatsangehörige entscheidet.",
                    {
                        h3: "Die Rechtswahl"
                    },
                    "Die Eheleute können vereinbaren, welches Recht auf die Scheidung anwendbar sein soll, etwa türkisches Recht. Diese Rechtswahl bedarf der notariellen Form. Sie kann sinnvoll sein, wirkt sich aber nicht auf alle Folgesachen aus: Unterhalt, Versorgungsausgleich und Güterrecht folgen jeweils eigenen Kollisionsregeln. Eine Rechtswahl, die nur die Scheidung selbst erfasst, löst deshalb selten alle Fragen.",
                    {
                        h2: "Die Folgesachen folgen eigenen Regeln"
                    },
                    {
                        table: {
                            caption: "Welche Regelwerke für welche Frage gelten",
                            head: [
                                "Frage",
                                "Maßgebliches Regelwerk",
                                "Anknüpfung im Regelfall"
                            ],
                            rows: [
                                [
                                    "Zuständigkeit des Gerichts",
                                    "Brüssel-IIb-Verordnung",
                                    "gewöhnlicher Aufenthalt der Eheleute"
                                ],
                                [
                                    "Anwendbares Scheidungsrecht",
                                    "Rom-III-Verordnung",
                                    "gewöhnlicher Aufenthalt, Rechtswahl möglich"
                                ],
                                [
                                    "Ehegatten- und Kindesunterhalt",
                                    "Haager Unterhaltsprotokoll",
                                    "gewöhnlicher Aufenthalt der berechtigten Person"
                                ],
                                [
                                    "Güterrecht",
                                    "EU-Güterrechtsverordnung bzw. Übergangsrecht",
                                    "abhängig vom Zeitpunkt der Eheschließung"
                                ],
                                [
                                    "Anerkennung einer türkischen Scheidung",
                                    "§ 107 FamFG",
                                    "Antrag bei der Landesjustizverwaltung"
                                ]
                            ]
                        }
                    },
                    "Diese Aufspaltung ist der Grund, warum pauschale Aussagen wie „bei uns gilt türkisches Recht\" fast immer zu kurz greifen. Es können in einem einzigen Verfahren mehrere Rechtsordnungen nebeneinander zur Anwendung kommen.",
                    {
                        h2: "Die Anerkennung einer türkischen Scheidung in Deutschland"
                    },
                    "Da die Türkei nicht Mitglied der Europäischen Union ist, ist für eine dort ausgesprochene Scheidung grundsätzlich ein förmliches Anerkennungsverfahren erforderlich (§ 107 FamFG). Zuständig ist die Landesjustizverwaltung des Bundeslandes, in dem einer der Ehegatten seinen gewöhnlichen Aufenthalt hat; die Aufgabe ist vielfach auf die Oberlandesgerichte übertragen.",
                    "Geprüft wird insbesondere, ob das türkische Gericht zuständig war und ob beide Ehegatten rechtliches Gehör hatten. Die Gebühr richtet sich nach dem Einkommen und bewegt sich in der Regel zwischen etwa 10 und 305 Euro. Wird die Anerkennung ausgesprochen, wirkt sie auf den Zeitpunkt der türkischen Entscheidung zurück.",
                    {
                        list: [
                            "das türkische Scheidungsurteil mit Rechtskraftvermerk",
                            "eine beglaubigte Übersetzung ins Deutsche",
                            "die Apostille oder Legalisation, soweit erforderlich",
                            "Heiratsurkunde und Nachweise zum gewöhnlichen Aufenthalt",
                            "Angaben zum Ablauf des türkischen Verfahrens, insbesondere zur Ladung des anderen Ehegatten"
                        ]
                    },
                    {
                        h2: "Der umgekehrte Weg: die deutsche Scheidung in der Türkei"
                    },
                    "Eine in Deutschland ausgesprochene Scheidung muss in der Türkei registriert werden, damit sie dort im Personenstandsregister nachvollzogen wird. Geschieht das nicht, sind Sie in einem der beiden Länder geschieden und im anderen weiterhin verheiratet.",
                    "Beides sollte man deshalb von Beginn an zusammen denken. Wer nur eines der beiden Verfahren betreibt, hat am Ende einen Personenstand, der nicht stimmt – und merkt es typischerweise erst Jahre später, bei einer neuen Eheschließung oder in einem Erbfall.",
                    {
                        h2: "Wie wir vorgehen"
                    },
                    "In der Regel klären wir zuerst Zuständigkeit und anwendbares Recht, dann die Folgesachen, dann die Anerkennung auf der jeweils anderen Seite. In dieser Reihenfolge lassen sich die meisten späteren Überraschungen vermeiden.",
                    "Wir beraten Sie auf Deutsch und auf Türkisch. Für Fragen, die sich nach türkischem Recht beurteilen, arbeiten wir mit einer auf türkisches Recht spezialisierten Kanzlei zusammen, sodass beide Seiten des Falls abgedeckt sind.",
                    {
                        h2: "Häufige Fragen zur Scheidung mit Türkeibezug"
                    },
                    {
                        faq: [
                            {
                                q: "Wird meine türkische Scheidung in Deutschland automatisch anerkannt?",
                                a: "Nein. Erforderlich ist grundsätzlich ein Anerkennungsverfahren nach § 107 FamFG bei der zuständigen Landesjustizverwaltung. Bis zur Anerkennung gelten Sie in Deutschland weiterhin als verheiratet, mit Folgen für Eheschließung, Erbrecht und Melderecht."
                            },
                            {
                                q: "Können deutsche Gerichte entscheiden, wenn beide Ehegatten türkische Staatsangehörige sind?",
                                a: "Ja. Die Zuständigkeit richtet sich nach der Brüssel-IIb-Verordnung und knüpft vor allem an den gewöhnlichen Aufenthalt an. Leben beide Eheleute in Deutschland, sind deutsche Gerichte zuständig, unabhängig von der Staatsangehörigkeit."
                            },
                            {
                                q: "Können wir wählen, dass türkisches Recht angewendet wird?",
                                a: "Eine Rechtswahl nach der Rom-III-Verordnung ist möglich und bedarf der notariellen Form. Sie erfasst allerdings nur die Scheidung selbst. Unterhalt, Versorgungsausgleich und Güterrecht folgen eigenen Kollisionsregeln und werden davon nicht automatisch erfasst."
                            },
                            {
                                q: "Was kostet das Anerkennungsverfahren?",
                                a: "Die Gebühr richtet sich nach dem Einkommen und liegt in der Regel zwischen etwa 10 und 305 Euro. Hinzu kommen Kosten für beglaubigte Übersetzungen und gegebenenfalls für die Apostille des türkischen Urteils."
                            },
                            {
                                q: "Welche Unterlagen brauche ich für die Anerkennung?",
                                a: "In der Regel das türkische Scheidungsurteil mit Rechtskraftvermerk, eine beglaubigte Übersetzung, erforderlichenfalls die Apostille, die Heiratsurkunde sowie Nachweise zum gewöhnlichen Aufenthalt beider Ehegatten."
                            },
                            {
                                q: "Muss eine deutsche Scheidung in der Türkei eingetragen werden?",
                                a: "Ja. Damit die Scheidung im türkischen Personenstandsregister nachvollzogen wird, ist eine Registrierung erforderlich. Ohne sie sind Sie in der Türkei weiterhin als verheiratet eingetragen."
                            },
                            {
                                q: "Wir leben getrennt in beiden Ländern. Wo sollten wir das Verfahren führen?",
                                a: "Das lässt sich nicht pauschal beantworten. Sind die Gerichte beider Staaten zuständig, kann es auf den zeitlichen Vorrang ankommen, und die Wahl wirkt sich auf Unterhalt, Versorgungsausgleich und Güterrecht aus. Diese Frage sollte vor Einleitung des Verfahrens geklärt werden."
                            }
                        ]
                    },
                    "Wenn eine Scheidung mit Türkeibezug ansteht oder in der Türkei bereits ausgesprochen wurde, lohnt sich eine frühe Einordnung. Bringen Sie die Heiratsurkunde und – falls vorhanden – das türkische Urteil mit; damit lässt sich meist schnell sagen, welcher Schritt als Nächstes ansteht."
                ],
                image: "/images/blog/familienrecht.webp"
            }
        ]
    },
    contact: {
        label: "Kontakt",
        title: "Sie können sich an uns wenden.",
        text: "Schildern Sie kurz Ihr Anliegen – auf Deutsch oder Türkisch. Wir melden uns zeitnah bei Ihnen.",
        name: "Name",
        email: "E-Mail",
        phone: "Telefon (optional)",
        area: "Rechtsgebiet",
        areaPlaceholder: "Bitte wählen",
        message: "Nachricht",
        consentA: "Ich habe die",
        consentLink: "Datenschutzerklärung",
        consentB: "gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.",
        submit: "Anfrage senden",
        sending: "Wird gesendet…",
        error: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie an.",
        addressLabel: "Kanzlei",
        country: "Deutschland",
        route: "Anfahrt",
        phoneLabel: "Telefon",
        whatsapp: "Per WhatsApp schreiben",
        whatsappNote: "Kurze Fragen direkt im Chat.",
        hoursLabel: "Erreichbarkeit",
        hours: "Mo–Fr, Termine nach Vereinbarung",
        hoursNote: "Telefonisch und per E-Mail.",
        wa: {
            eyebrow: "WhatsApp-Anfrage",
            title: "Kurz einordnen, dann zu WhatsApp",
            intro: "Ihre Angaben gehen zuerst an die Kanzlei. Danach öffnet sich WhatsApp mit Ihrer vorbereiteten Nachricht.",
            firstName: "Vorname",
            lastName: "Nachname",
            phone: "Telefonnummer",
            foundVia: "Wie haben Sie uns gefunden?",
            foundViaPlaceholder: "Bitte wählen",
            foundViaOptions: [
                "Google-Suche",
                "Google Maps",
                "Instagram",
                "WhatsApp",
                "Empfehlung",
                "Anwaltsverzeichnis",
                "Andere"
            ],
            privacy: "Mit dem Absenden stimme ich zu, dass meine Angaben zur Bearbeitung meiner Anfrage an die Kanzlei Meral Gören und an nüll übermittelt werden.",
            submit: "Weiter zu WhatsApp",
            submitting: "Wird vorbereitet…",
            error: "Konnte nicht gesendet werden. WhatsApp öffnet erst, wenn Ihre Angaben angekommen sind.",
            close: "Schließen"
        }
    },
    finalCta: {
        label: "Letzter Schritt",
        title: "Lassen Sie Ihr Anliegen prüfen, bevor Fristen oder Beweise verloren gehen.",
        text: "Persönliche Ersteinschätzung für rechtliche Fragen in Mannheim – auf Deutsch und Türkisch.",
        panelText: "Schicken Sie uns die wichtigsten Unterlagen und eine kurze Schilderung. Rechtsanwältin Meral Gören ordnet Ihr Anliegen ein, klärt den nächsten sinnvollen Schritt und sagt Ihnen offen, was jetzt Priorität hat.",
        listTitle: "Was wir für Sie übernehmen",
        items: [
            "Prüfung von Schreiben, Bescheiden, Verträgen und gerichtlichen Unterlagen",
            "Einschätzung von Fristen, Erfolgsaussichten, Risiken und Kosten",
            "Außergerichtliche Vertretung und gerichtliches Vorgehen, wenn es nötig wird"
        ],
        note: "Zivilrecht · Arbeitsrecht · Ausländerrecht · Familienrecht · Verkehrsrecht",
        primary: "Anliegen jetzt prüfen lassen",
        bottomLabel: "Schneller Kontakt",
        bottomTitle: "Kurz schildern, Unterlagen senden, Rückmeldung erhalten.",
        bottomText: "Kontaktformular, Telefon oder vorbereitete WhatsApp-Anfrage."
    },
    footer: {
        blurb: "Rechtsanwaltskanzlei in Mannheim. Wir verhelfen Ihnen zu Ihrem Recht – auf Deutsch und Türkisch.",
        navTitle: "Navigation",
        areasTitle: "Rechtsgebiete",
        contactTitle: "Kontakt",
        imprint: "Impressum",
        privacy: "Datenschutz",
        copyright: "© 2026 Rechtsanwaltskanzlei Meral Gören",
        callLink: "Anrufen",
        waLink: "WhatsApp",
        formLink: "Kontaktformular",
        route: "Anfahrt",
        madeBy: "Site made by"
    },
    partner: {
        label: "Kooperation",
        title: "Unser Kooperationspartner für Türkisches Recht",
        text: "Scheidungen, Erbfälle und Urteile berühren oft zwei Rechtsordnungen zugleich. Für alles, was türkischem Recht unterliegt, arbeiten wir mit der Doğru Kanzlei in Mannheim zusammen. So bleibt Ihre Sache in einer Hand, und Sie müssen dafür nicht in die Türkei reisen.",
        firm: "Doğru Kanzlei",
        person: "Avukat Hasan Doğru",
        bio: "Zugelassen bei der Anwaltskammer Ankara und nach § 207 BRAO bei der Rechtsanwaltskammer Karlsruhe. Beim Amtsgericht Mannheim als Sachverständiger für türkisches Recht gelistet.",
        locationsLabel: "Standorte",
        locations: "Mannheim · Ankara",
        languagesLabel: "Sprachen",
        languages: "Türkçe · Deutsch · English",
        areasLabel: "Womit er Sie unterstützt",
        areas: [
            "Anerkennung deutscher Urteile in der Türkei",
            "Scheidung und Familiensachen",
            "Erbfälle und Nachlass in der Türkei",
            "Strafverfahren in der Türkei",
            "Vollmachten und Apostille"
        ],
        cta: "Zur Doğru Kanzlei"
    },
    cookie: {
        title: "Cookies & Datenschutz",
        text: "Diese Website verwendet technisch notwendige Cookies. Optionale Cookies für Statistik setzen wir nur mit Ihrer Einwilligung (§ 25 TDDDG, Art. 6 DSGVO).",
        acceptAll: "Alle akzeptieren",
        necessaryOnly: "Nur notwendige",
        customize: "Anpassen",
        save: "Auswahl speichern",
        necessary: "Notwendig",
        necessaryText: "Für den Betrieb der Seite erforderlich.",
        stats: "Statistik",
        statsText: "Anonyme Nutzungsstatistik zur Verbesserung der Seite."
    },
    page: {
        home: "Startseite",
        more: "Weiterlesen",
        allPosts: "Alle Beiträge",
        backHome: "Zur Startseite",
        areaEyebrow: "Rechtsgebiete",
        areaTopics: "Typische Anliegen",
        areaHow: "So arbeite ich",
        areaAside: "Beschreiben Sie kurz Ihr Anliegen – auf Deutsch oder Türkisch.",
        otherAreas: "Weitere Rechtsgebiete",
        areaServicesTitle: "Womit wir Ihnen helfen",
        areaStepsTitle: "So läuft es ab",
        areaSteps: [
            {
                title: "Anliegen schildern",
                text: "Beschreiben Sie Ihren Fall – über das Formular, per WhatsApp oder telefonisch. Wir sagen Ihnen, ob und wie wir helfen können."
            },
            {
                title: "Unterlagen prüfen",
                text: "Wir sichten Ihre Verträge, Bescheide und Schreiben, klären die Fristen und bewerten Chancen und Kosten."
            },
            {
                title: "Vertreten",
                text: "Wir übernehmen den Schriftverkehr, verhandeln mit der Gegenseite und vertreten Sie außergerichtlich wie vor Gericht."
            }
        ],
        areaWhyTitle: "Warum unsere Kanzlei",
        areaNextTitle: "Schildern Sie uns Ihren Fall.",
        areaNextText: "Sie können sich bei allen rechtlichen Fragen an uns wenden – auf Deutsch oder Türkisch. Wir melden uns zeitnah.",
        areaRelated: "Weitere Rechtsgebiete",
        areaTrust: [
            "Rechtsanwaltskammer Karlsruhe",
            "Zugelassen seit 2008",
            "Deutsch & Türkisch",
            "Kanzlei in Mannheim"
        ],
        postDisclaimer: "Dieser Beitrag gibt einen allgemeinen Überblick und ersetzt keine Beratung im Einzelfall. Maßgeblich ist die Rechtslage zum Zeitpunkt Ihres Anliegens.",
        postCta: {
            eyebrow: "Nächster Schritt",
            call: "Anrufen:",
                role: "Rechtsanwältin, Mannheim"
        },
        legalNote: "Alle in eckigen Klammern markierten Angaben sind Platzhalter und müssen vor Veröffentlichung von der Mandantin ergänzt bzw. juristisch geprüft werden.",
        blog: {
            eyebrow: "Blog",
            title: "Beiträge",
            lead: "Kurz und verständlich: aktuelle Fragen aus Zivil-, Arbeits-, Ausländer-, Familien- und Verkehrsrecht."
        },
        danke: {
            eyebrow: "Kontakt",
            title: "Danke für Ihre Anfrage",
            lead: "Ihre Nachricht ist eingegangen.",
            body: "Ich melde mich zeitnah bei Ihnen – per E-Mail oder telefonisch, je nachdem, was Sie angegeben haben.",
            urgent: "In dringenden Fällen erreichen Sie mich unter"
        },
        impressum: {
            eyebrow: "Rechtliches",
            title: "Impressum",
            lead: "Angaben gemäß § 5 DDG.",
            sections: [
                {
                    heading: "Anbieterin",
                    paragraphs: [
                        "Meral Gören – Rechtsanwältin\nR1 2-3\n68161 Mannheim\nDeutschland"
                    ]
                },
                {
                    heading: "Kontakt",
                    paragraphs: [
                        "Telefon: 06201 84 57 95\nTelefax: 06201 84 57 96\nE-Mail: anwalt@kanzlei-goeren.de"
                    ]
                },
                {
                    heading: "Berufsbezeichnung und Kammer",
                    paragraphs: [
                        "Berufsbezeichnung: Rechtsanwältin (verliehen in der Bundesrepublik Deutschland). Zugelassen an allen Amts-, Land- und Oberlandesgerichten.\nZuständige Aufsichtsbehörde: Rechtsanwaltskammer Karlsruhe, Reinhold-Frank-Str. 72, 76133 Karlsruhe, Telefon 0721 25340."
                    ]
                },
                {
                    heading: "Berufsrechtliche Regelungen",
                    paragraphs: [
                        "Bundesrechtsanwaltsordnung (BRAO), Berufsordnung für Rechtsanwälte (BORA), Fachanwaltsordnung (FAO), Rechtsanwaltsvergütungsgesetz (RVG), Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE). Einsehbar unter www.brak.de."
                    ]
                },
                {
                    heading: "Berufshaftpflichtversicherung",
                    paragraphs: [
                        "[Platzhalter: Versicherer, Anschrift, räumlicher Geltungsbereich]"
                    ]
                },
                {
                    heading: "Umsatzsteuer-ID",
                    paragraphs: [
                        "[Platzhalter: USt-IdNr. gemäß § 27a UStG]"
                    ]
                },
                {
                    heading: "Streitbeilegung",
                    paragraphs: [
                        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle: [Platzhalter: bereit/nicht bereit]."
                    ]
                }
            ]
        },
        datenschutz: {
            eyebrow: "Rechtliches",
            title: "Datenschutzerklärung",
            lead: "Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO.",
            sections: [
                {
                    heading: "1. Verantwortliche",
                    paragraphs: [
                        "Rechtsanwältin Meral Gören, R1 2-3, 68161 Mannheim, Telefon 06201 84 57 95, E-Mail anwalt@kanzlei-goeren.de."
                    ]
                },
                {
                    heading: "2. Hosting und Server-Logfiles",
                    paragraphs: [
                        "Beim Aufruf der Website verarbeitet der Hoster [Platzhalter: Hoster] automatisch IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (sicherer Betrieb)."
                    ]
                },
                {
                    heading: "3. Kontaktformular und E-Mail",
                    paragraphs: [
                        "Angaben aus dem Kontaktformular (Name, E-Mail, Telefon, Rechtsgebiet, Nachricht) werden zur Bearbeitung Ihrer Anfrage verarbeitet und per E-Mail an die Kanzlei übermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO sowie Ihre Einwilligung (lit. a). Löschung nach Abschluss der Anfrage, soweit keine Mandatierung erfolgt und keine Aufbewahrungspflichten bestehen."
                    ]
                },
                {
                    heading: "4. WhatsApp",
                    paragraphs: [
                        "Wenn Sie über WhatsApp Kontakt aufnehmen, verarbeitet WhatsApp Ireland Ltd. Ihre Daten nach eigenen Bestimmungen. Bitte übermitteln Sie keine vertraulichen Mandatsinhalte über WhatsApp."
                    ]
                },
                {
                    heading: "5. Cookies",
                    paragraphs: [
                        "Technisch notwendige Cookies werden auf Grundlage von § 25 Abs. 2 TDDDG gesetzt. Optionale Statistik-Cookies nur mit Ihrer Einwilligung (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Ihre Auswahl können Sie jederzeit über das Cookie-Banner ändern. [Platzhalter: eingesetzte Dienste]"
                    ]
                },
                {
                    heading: "6. Ihre Rechte",
                    paragraphs: [
                        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO) sowie auf Beschwerde bei einer Aufsichtsbehörde, z. B. dem Landesbeauftragten für den Datenschutz Baden-Württemberg."
                    ]
                }
            ]
        }
    }
};
