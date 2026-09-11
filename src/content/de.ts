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
                text: "Bahnhofstr. 18, 1. OG. Termine vor Ort oder telefonisch."
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
        note: "[Platzhalter: durch echte Google-Bewertungen der Kanzlei ersetzen – Zitat, Name oder Initialen und Rechtsgebiet. Die folgenden Einträge sind Platzhalter.]",
        items: [
            { quote: "[Platzhalter: Zitat aus einer echten Bewertung]", name: "[Platzhalter: Name/Initialen]", context: "[Platzhalter: Rechtsgebiet]" },
            { quote: "[Platzhalter: Zitat aus einer echten Bewertung]", name: "[Platzhalter: Name/Initialen]", context: "[Platzhalter: Rechtsgebiet]" },
            { quote: "[Platzhalter: Zitat aus einer echten Bewertung]", name: "[Platzhalter: Name/Initialen]", context: "[Platzhalter: Rechtsgebiet]" }
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
                slug: "mietminderung-maengel",
                category: "Zivilrecht",
                iso: "2026-09-02",
                date: "2. September 2026",
                title: "Mietminderung: Wann Sie die Miete kürzen dürfen",
                excerpt: "Schimmel, Heizungsausfall, Baulärm – wann ein Mangel zur Minderung berechtigt und was Sie vorher erledigen müssen.",
                body: [
                    "Ist die Wohnung mangelhaft, ist die Miete kraft Gesetzes gemindert (§ 536 BGB). Das ist ein wichtiger Unterschied zu vielen anderen Rechten: Sie müssen die Minderung nicht erst erklären, sie tritt automatisch ein. Voraussetzung ist ein Mangel, der die Tauglichkeit der Wohnung zum vertragsgemäßen Gebrauch nicht nur unerheblich beeinträchtigt.",
                    "Typische Fälle sind Schimmel, ein Heizungsausfall in der Heizperiode, undichte Fenster, Wasserschäden oder länger andauernder Baulärm. Auch Umstände außerhalb der Wohnung können einen Mangel begründen, wenn sie das Wohnen spürbar beeinträchtigen.",
                    "Zwingend ist die Mängelanzeige. Nach § 536c BGB müssen Sie den Mangel unverzüglich anzeigen. Unterlassen Sie das, verlieren Sie Ansprüche und können sich unter Umständen sogar schadensersatzpflichtig machen. Zeigen Sie den Mangel deshalb schriftlich an, beschreiben Sie ihn konkret und setzen Sie eine angemessene Frist zur Beseitigung.",
                    "Sichern Sie parallel die Beweise: Fotos mit Datum, ein Protokoll mit Uhrzeiten und Dauer der Störung – bei Lärm ein Lärmprotokoll –, Zeugen sowie den gesamten Schriftverkehr. Im Streit entscheidet regelmäßig, wer den Mangel und sein Ausmaß belegen kann.",
                    "Die Höhe der Minderung richtet sich nach der tatsächlichen Beeinträchtigung. Die kursierenden Minderungstabellen geben allenfalls eine grobe Orientierung; Gerichte entscheiden im Einzelfall. Hier liegt das eigentliche Risiko: Wer zu viel mindert, gerät in Zahlungsrückstand – und bei einem Rückstand von zwei Monatsmieten kann der Vermieter fristlos kündigen (§ 543 Abs. 2 Nr. 3 BGB).",
                    "Der sichere Weg ist deshalb, die Miete zunächst in voller Höhe ausdrücklich unter Vorbehalt der Rückforderung weiterzuzahlen und den geminderten Betrag anschließend zurückzuverlangen. Sie behalten damit Ihre Ansprüche, riskieren aber keine Kündigung.",
                    "Kein Minderungsrecht besteht, wenn Sie den Mangel bei Vertragsschluss kannten (§ 536b BGB) oder ihn selbst verursacht haben. Auch deshalb lohnt es sich, den Zustand der Wohnung bei der Übergabe sorgfältig zu protokollieren."
                ],
                image: "/images/blog/zivilrecht.webp"
            },
            {
                slug: "einbuergerung-2026",
                category: "Ausländerrecht",
                iso: "2026-08-12",
                date: "12. August 2026",
                title: "Einbürgerung 2026: Welche Voraussetzungen jetzt gelten",
                excerpt: "Aufenthaltsdauer, Sprachnachweis, Lebensunterhalt – ein Überblick über die aktuellen Anforderungen.",
                body: [
                    "Seit der Reform des Staatsangehörigkeitsrechts vom 27. Juni 2024 ist die Einbürgerung in der Regel schon nach fünf Jahren rechtmäßigem gewöhnlichem Aufenthalt möglich – zuvor waren es acht. Ebenso wichtig: Die bisherige Staatsangehörigkeit muss grundsätzlich nicht mehr aufgegeben werden. Für viele, die den Antrag jahrelang aufgeschoben haben, hat sich die Rechnung damit verändert.",
                    "Die Voraussetzungen im Überblick: ein gültiger Aufenthaltstitel beziehungsweise ein Daueraufenthaltsrecht, fünf Jahre rechtmäßiger gewöhnlicher Aufenthalt in Deutschland, ein gesicherter Lebensunterhalt, Deutschkenntnisse auf dem Niveau B1, der bestandene Einbürgerungstest, keine relevanten Vorstrafen und ein Bekenntnis zur freiheitlichen demokratischen Grundordnung.",
                    "Der Lebensunterhalt ist in der Praxis der häufigste Stolperstein. Sie müssen den Unterhalt für sich und Ihre unterhaltsberechtigten Angehörigen grundsätzlich ohne Leistungen nach dem SGB II oder SGB XII bestreiten können. Von diesem Grundsatz gibt es eng gefasste Ausnahmen – etwa für Angehörige der ehemaligen Gastarbeitergeneration oder für Menschen, die in Vollzeit erwerbstätig sind. Ob eine dieser Ausnahmen greift, sollten Sie prüfen lassen, bevor Sie den Antrag zurückstellen.",
                    "Beim Sprachnachweis genügt in der Regel ein Zertifikat auf dem Niveau B1 oder ein deutscher Schulabschluss. Für Fälle von Alter, Krankheit oder Behinderung sieht das Gesetz Erleichterungen vor.",
                    "Neu ist seit der Reform außerdem ein ausdrückliches Bekenntnis zum Schutz der Menschenwürde und zur besonderen historischen Verantwortung Deutschlands. Antisemitisch, rassistisch oder sonst menschenverachtend motivierte Taten schließen die Einbürgerung aus.",
                    "Die Regelungen zur beschleunigten Einbürgerung bei besonderen Integrationsleistungen sind seit 2024 mehrfach Gegenstand gesetzlicher Änderungen gewesen. Bevor Sie Ihre Planung darauf stützen, lassen Sie den aktuellen Stand für Ihren Fall prüfen.",
                    "Was Sie jetzt zusammenstellen sollten: den lückenlosen Nachweis Ihrer Aufenthaltszeiten und -titel, Einkommensnachweise der letzten Monate, den Rentenverlauf, das Sprachzertifikat, die Bescheinigung über den Einbürgerungstest und Ihre Identitätsdokumente. Lücken in der Aufenthaltshistorie sind der häufigste Grund für Verzögerungen – und sie lassen sich fast immer schließen, wenn man früh damit beginnt."
                ],
                image: "/images/blog/auslaenderrecht.webp"
            },
            {
                slug: "kuendigung-drei-wochen",
                category: "Arbeitsrecht",
                iso: "2026-07-28",
                date: "28. Juli 2026",
                title: "Kündigung erhalten – die ersten drei Wochen entscheiden",
                excerpt: "Warum die Frist für die Kündigungsschutzklage so wichtig ist und was Sie sofort tun sollten.",
                body: [
                    "Wenn Sie eine Kündigung erhalten, läuft ab dem Zugang eine Frist von drei Wochen. Innerhalb dieser Frist muss die Kündigungsschutzklage beim Arbeitsgericht eingegangen sein (§ 4 KSchG). Versäumen Sie die Frist, gilt die Kündigung nach § 7 KSchG als von Anfang an wirksam – unabhängig davon, wie angreifbar sie inhaltlich gewesen wäre.",
                    "Entscheidend ist der Zugang, nicht das Datum auf dem Schreiben. Bei einem Einwurf in den Briefkasten kommt es auf den Tag an, an dem üblicherweise mit der Leerung zu rechnen ist. Notieren Sie deshalb sofort, wann und auf welchem Weg Sie die Kündigung erhalten haben, und heben Sie den Umschlag auf.",
                    "Die Frist gilt auch dann, wenn die Kündigung offensichtlich unwirksam erscheint – etwa weil sie nicht eigenhändig unterschrieben ist, von einer nicht vertretungsberechtigten Person stammt oder ein Sonderkündigungsschutz wegen Schwangerschaft, Elternzeit oder Schwerbehinderung übergangen wurde. Auch diese Einwände müssen innerhalb der drei Wochen erhoben werden.",
                    "Nur ausnahmsweise lässt § 5 KSchG eine nachträgliche Zulassung der Klage zu, wenn Sie trotz aller zumutbaren Sorgfalt gehindert waren, rechtzeitig zu klagen. Darauf sollte niemand seine Planung stützen.",
                    "Unabhängig von der Klage gilt: Melden Sie sich spätestens drei Tage nach Kenntnis der Kündigung bei der Agentur für Arbeit arbeitsuchend (§ 38 SGB III), sonst droht eine Minderung des Arbeitslosengeldes. Und unterschreiben Sie nichts vorschnell – ein Aufhebungs- oder Abwicklungsvertrag kann eine Sperrzeit auslösen und nimmt Ihnen zugleich die Verhandlungsposition.",
                    "Ob am Ende die Weiterbeschäftigung, eine Abfindung oder ein verbessertes Zeugnis steht, entscheidet sich meist im Gütetermin, der häufig schon wenige Wochen nach Klageeingang stattfindet. Die drei Wochen sind der Zugang zu dieser Verhandlung. Deshalb ist der frühe Anruf wichtiger als die perfekt vorbereitete Akte."
                ],
                image: "/images/blog/arbeitsrecht.webp"
            },
            {
                slug: "scheidung-tuerkei",
                category: "Familienrecht",
                iso: "2026-07-09",
                date: "9. Juli 2026",
                title: "Scheidung mit Bezug zur Türkei: Welches Recht gilt?",
                excerpt: "Deutsches oder türkisches Familienrecht – wovon die Antwort abhängt.",
                body: [
                    "Wenn Eheleute Bezüge zu Deutschland und zur Türkei haben, sind zwei Fragen sauber zu trennen: Welches Gericht ist zuständig – und welches Recht wendet dieses Gericht an? Die Antworten fallen nicht zwingend zusammen. Ein deutsches Gericht kann türkisches Recht anwenden, und umgekehrt.",
                    "Die internationale Zuständigkeit deutscher Gerichte richtet sich nach der Brüssel-IIb-Verordnung. Sie knüpft vor allem an den gewöhnlichen Aufenthalt an: Leben beide Eheleute in Deutschland, sind deutsche Gerichte zuständig – auch dann, wenn beide ausschließlich die türkische Staatsangehörigkeit besitzen.",
                    "Welches Recht anzuwenden ist, bestimmt die Rom-III-Verordnung. Sie gilt auch im Verhältnis zu Staaten, die selbst nicht beteiligt sind; die Türkei gehört dazu. Maßgeblich ist in erster Linie der gewöhnliche Aufenthalt der Eheleute zum Zeitpunkt der Anrufung des Gerichts. Leben beide in Deutschland, wird in der Regel deutsches Scheidungsrecht angewendet.",
                    "Wichtig ist die Möglichkeit der Rechtswahl: Die Eheleute können in notarieller Form vereinbaren, welches Recht auf die Scheidung anwendbar sein soll – etwa türkisches Recht. Das kann sinnvoll sein, wirkt sich aber nicht auf alle Folgesachen aus. Unterhalt, Versorgungsausgleich und Güterrecht folgen jeweils eigenen Kollisionsregeln.",
                    "Eine in der Türkei ausgesprochene Scheidung wird in Deutschland nicht automatisch anerkannt. Erforderlich ist grundsätzlich ein Anerkennungsverfahren bei der zuständigen Landesjustizverwaltung (§ 107 FamFG). Ohne diese Anerkennung gelten Sie in Deutschland weiterhin als verheiratet – mit allen Folgen für eine erneute Eheschließung, das Erbrecht und das Melderecht.",
                    "Umgekehrt muss eine deutsche Scheidung in der Türkei registriert werden, damit sie dort im Personenstandsregister nachvollzogen wird. Beides sollte man von Beginn an mitdenken: Wer nur eines der beiden Verfahren betreibt, hat am Ende einen Personenstand, der in einem der beiden Länder nicht stimmt.",
                    "Für die Beratung heißt das: Zuerst klären wir Zuständigkeit und anwendbares Recht, dann die Folgesachen, dann die Anerkennung auf der jeweils anderen Seite. In dieser Reihenfolge lassen sich die meisten späteren Überraschungen vermeiden."
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
                        "Meral Gören – Rechtsanwältin\nBahnhofstr. 18, 1. OG\n69469 Mannheim\nDeutschland"
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
                        "Rechtsanwältin Meral Gören, Bahnhofstr. 18, 69469 Mannheim, Telefon 06201 84 57 95, E-Mail anwalt@kanzlei-goeren.de."
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
