import type { Dictionary } from "./types";

export const en: Dictionary = {
    meta: {
        title: "Law Office of Meral Gören – Mannheim | German & Turkish",
        description: "Law office of Meral Gören in Mannheim: we help you assert your rights – in civil, employment, immigration, family and road traffic law, in and out of court, in German and Turkish.",
        locale: "en_GB"
    },
    cta: "Request a consultation",
    menuLabel: "Menu",
    navLabel: "Main navigation",
    languageLabel: "Language",
    nav: {
        home: "Home",
        about: "Profile",
        areas: "Practice areas",
        blog: "Blog",
        contact: "Contact"
    },
    hero: {
        label: "Meral Gören, Attorney at Law · Mannheim",
        title: {
            lead: "We help you assert",
            accent: "your rights."
        },
        text: "We see it as our task to advise you comprehensively and to the highest standard, and to represent your interests in and out of court – in German and Turkish.",
        whatsapp: "Message on WhatsApp"
    },
    areas: {
        label: "Practice areas",
        title: "Five focus areas. One person to talk to.",
        text: "I represent you in five areas of law – personally, in plain language, and in both languages.",
        more: "Learn more",
        moreTo: "Learn more about",
        ctaText: "Not sure which area your matter falls under? Ask — with no obligation.",
        items: [
            {
                slug: "zivilrecht",
                num: "01",
                title: "General Civil Law",
                text: "Contracts, claims, sales law, tenancy law, damages.",
                lead: "Contracts, claims and disputes between private individuals or with companies.",
                topics: [
                    "Reviewing and drafting contracts",
                    "Claims and payment orders",
                    "Sales law and warranty",
                    "Tenancy law",
                    "Damages",
                    "Out-of-court settlement"
                ],
                how: "I review your documents, weigh up the prospects and the costs, and represent you out of court or before the courts.",
                illustration: "/images/areas/zivilrecht.webp",
                headline: "Contracts, claims and disputes – brought to a close.",
                intro: "Civil law governs the legal relationships between private individuals and companies: contracts that should be honoured, money that is owed to you, and disputes that need a clear answer.",
                chips: [
                    "Contract law",
                    "Claims & debt recovery",
                    "Tenancy & sales law"
                ],
                services: [
                    {
                        icon: "document",
                        title: "Reviewing and drafting contracts",
                        text: "We review your contract before you sign, or draft it so that it holds up if it comes to a dispute."
                    },
                    {
                        icon: "euro",
                        title: "Claims and payment orders",
                        text: "We enforce unpaid invoices – out of court, through the court payment-order procedure, or by action."
                    },
                    {
                        icon: "scale",
                        title: "Sales law and warranty",
                        text: "Where the goods are defective we deal with cure, rescission, price reduction and damages."
                    },
                    {
                        icon: "home",
                        title: "Tenancy law",
                        text: "Defects, service charges, termination, eviction – for tenants and landlords alike."
                    },
                    {
                        icon: "shield",
                        title: "Damages",
                        text: "We quantify your loss and pursue it against the other side or their insurer."
                    },
                    {
                        icon: "handshake",
                        title: "Out-of-court settlement",
                        text: "A workable settlement is often faster and cheaper than a judgment. We negotiate it for you."
                    }
                ],
                highlight: {
                    eyebrow: "RENT REDUCTION",
                    title: "When you may withhold part of the rent",
                    text: "Mould, a broken boiler, building noise: where there is a defect the rent is reduced by operation of law. But reduce too much and you risk termination – the order of steps matters.",
                    postSlug: "mietminderung-maengel"
                }
            },
            {
                slug: "arbeitsrecht",
                num: "02",
                title: "Employment Law",
                text: "Dismissal, formal warnings, contracts, pay and holiday entitlements.",
                lead: "From unfair dismissal to the final payslip – employment matters usually run on short deadlines.",
                topics: [
                    "Unfair dismissal claims",
                    "Formal warnings",
                    "Employment and termination agreements",
                    "Pay and holiday entitlements",
                    "Employment references",
                    "Redundancy"
                ],
                how: "For a dismissal the deadline to file is three weeks from receipt. We check the deadline first, then the merits – and establish whether reinstatement or a settlement is what you are after.",
                illustration: "/images/areas/arbeitsrecht.webp",
                headline: "Dismissal, settlement, reference – and the clock is running.",
                intro: "Employment matters are usually decided within a few weeks. Whether it is unfair dismissal, a termination agreement or unpaid wages: the sooner we assess your position, the more options stay open.",
                chips: [
                    "Unfair dismissal",
                    "Settlement & severance",
                    "Pay, leave, reference"
                ],
                services: [
                    {
                        icon: "clock",
                        title: "Unfair dismissal claim",
                        text: "The deadline to file is three weeks from receipt. We check the deadline first, then whether the dismissal is valid."
                    },
                    {
                        icon: "document",
                        title: "Formal warning",
                        text: "We check whether the warning is justified and challenge unjustified ones – if need be, by having them removed from your file."
                    },
                    {
                        icon: "handshake",
                        title: "Employment and termination agreements",
                        text: "Before you sign: we assess the terms and negotiate where it is worth it."
                    },
                    {
                        icon: "euro",
                        title: "Pay and holiday entitlements",
                        text: "Unpaid wages, overtime, outstanding leave – we assert your claims within the time limits."
                    },
                    {
                        icon: "file-check",
                        title: "Employment reference",
                        text: "A reference must be benevolent and truthful. We check the wording and demand corrections."
                    },
                    {
                        icon: "shield",
                        title: "Redundancy",
                        text: "Social selection, works-council agreement, social plan: we check whether the dismissal holds up."
                    }
                ],
                highlight: {
                    eyebrow: "AFTER A DISMISSAL",
                    title: "The first three weeks decide it",
                    text: "From receipt of the dismissal a three-week deadline runs for the unfair dismissal claim. Miss it and the dismissal is treated as valid from the outset – however weak it was.",
                    postSlug: "kuendigung-drei-wochen"
                }
            },
            {
                slug: "auslaenderrecht",
                num: "03",
                title: "Immigration Law",
                text: "Residence permits, naturalisation, family reunification, settlement permits.",
                lead: "Residence, citizenship and family reunification – procedures that live on deadlines and complete paperwork.",
                topics: [
                    "Residence permits and extensions",
                    "Naturalisation",
                    "Family reunification",
                    "Visas and permanent settlement permits",
                    "Expulsion and removal",
                    "Formal undertakings of support"
                ],
                how: "We establish your status and the competent authorities first, assemble the paperwork in full, and deal with the immigration office alongside you – in German and in Turkish.",
                illustration: "/images/areas/auslaenderrecht.webp",
                headline: "Residence, citizenship and family reunification.",
                intro: "In immigration law, preparation is everything. The complete file, the right authority, the deadline met: we establish your status and see you through the procedure – in German and Turkish.",
                chips: [
                    "Residence permits",
                    "Naturalisation",
                    "Family reunification"
                ],
                services: [
                    {
                        icon: "file-check",
                        title: "Residence permits and extensions",
                        text: "Grant, extension, change of purpose – we file the application in full and with reasons."
                    },
                    {
                        icon: "shield",
                        title: "Naturalisation",
                        text: "Since the 2024 reform the shortened period applies. We check your requirements and prepare the application."
                    },
                    {
                        icon: "handshake",
                        title: "Family reunification",
                        text: "Spouse and child reunification: we settle the language proof, housing and income requirements in advance."
                    },
                    {
                        icon: "globe",
                        title: "Visas and settlement permits",
                        text: "From the national visa to the permanent settlement permit – we assess the route for your case."
                    },
                    {
                        icon: "document",
                        title: "Expulsion and removal",
                        text: "Where there is an expulsion, removal notice or entry ban we act quickly and with urgent legal protection."
                    },
                    {
                        icon: "euro",
                        title: "Formal undertakings of support",
                        text: "We check the scope and the risks before you sign a formal undertaking."
                    }
                ],
                highlight: {
                    eyebrow: "NATURALISATION 2026",
                    title: "Which requirements now apply",
                    text: "After the reform, five years of lawful residence is generally enough and the existing nationality usually no longer has to be given up. The most common stumbling block remains a secure livelihood.",
                    postSlug: "einbuergerung-2026"
                }
            },
            {
                slug: "familienrecht",
                num: "04",
                title: "Family Law",
                text: "Divorce, maintenance, custody and contact rights, prenuptial agreements.",
                lead: "Separation, divorce, maintenance and children – with an eye on both German and Turkish law where both apply.",
                topics: [
                    "Divorce",
                    "Separation and child maintenance",
                    "Custody and contact rights",
                    "Equalisation of accrued gains and division of assets",
                    "Prenuptial agreements",
                    "Recognition of foreign judgments"
                ],
                how: "Family proceedings need calm and clear steps. First we establish which law applies, then how to proceed.",
                illustration: "/images/areas/familienrecht.webp",
                headline: "Separation, divorce, maintenance and children.",
                intro: "Family proceedings call for a cool head. First we establish which law applies – German, Turkish or both – and then the way forward.",
                chips: [
                    "Divorce",
                    "Maintenance",
                    "Custody & contact"
                ],
                services: [
                    {
                        icon: "document",
                        title: "Divorce",
                        text: "From the year of separation through the petition to the hearing – including where there is a connection to Turkey."
                    },
                    {
                        icon: "euro",
                        title: "Separation and child maintenance",
                        text: "We calculate maintenance under the Düsseldorf Table, enforce it, or defend against inflated claims."
                    },
                    {
                        icon: "home",
                        title: "Custody and contact",
                        text: "Day-to-day care, contact arrangements, the child's welfare – we look for the workable solution, before the family court if necessary."
                    },
                    {
                        icon: "scale",
                        title: "Equalisation of gains and division of assets",
                        text: "We determine the equalisation claim and clarify what happens to the property, the accounts and the household goods."
                    },
                    {
                        icon: "file-check",
                        title: "Prenuptial agreement",
                        text: "Before or during the marriage: we draft an agreement that stands up to later review."
                    },
                    {
                        icon: "globe",
                        title: "Recognition of foreign decisions",
                        text: "A divorce granted in Turkey does not take effect in Germany automatically. We deal with the recognition."
                    }
                ],
                highlight: {
                    eyebrow: "DIVORCE WITH A TURKISH DIMENSION",
                    title: "Which law applies?",
                    text: "Where a divorce has a connection to Turkey, much depends on which law applies – and on whether a German decision has to be recognised in Turkey.",
                    postSlug: "scheidung-tuerkei"
                }
            },
            {
                slug: "verkehrsrecht",
                num: "05",
                title: "Road Traffic Law",
                text: "Fines, driving bans, accident claims and damages.",
                lead: "After an accident or a fixed-penalty notice, how quickly you respond often decides the outcome.",
                topics: [
                    "Fixed-penalty notices and licence points",
                    "Driving bans and licence withdrawal",
                    "Accident claims",
                    "Damages and compensation for pain and suffering",
                    "Disputes with the motor insurer",
                    "Traffic criminal law"
                ],
                how: "You have only two weeks to appeal a fixed-penalty notice. After an accident I review liability, the expert report and the insurer's offer before you sign anything.",
                illustration: "/images/areas/verkehrsrecht.webp",
                headline: "Fines, driving bans, accidents – respond quickly.",
                intro: "After an accident or a fixed-penalty notice, how quickly you respond often decides the outcome. You have only two weeks to appeal a fixed-penalty notice.",
                chips: [
                    "Fines & driving bans",
                    "Accident claims",
                    "Traffic criminal law"
                ],
                services: [
                    {
                        icon: "clock",
                        title: "Fixed-penalty notices and points",
                        text: "Appeal within two weeks. We check the measurement, the service and the procedure for errors."
                    },
                    {
                        icon: "shield",
                        title: "Driving bans and licence",
                        text: "We check whether the driving ban can be avoided and see the reissue of the licence through."
                    },
                    {
                        icon: "euro",
                        title: "Accident claims",
                        text: "We report the loss, check the expert report and the insurer's offer, and enforce your full claim."
                    },
                    {
                        icon: "file-check",
                        title: "Damages and compensation for pain and suffering",
                        text: "Repair, diminished value, loss of use, pain and suffering – we quantify every item."
                    },
                    {
                        icon: "scale",
                        title: "Disputes with the motor insurer",
                        text: "When the insurer cuts back or refuses, we represent you – out of court and before the courts."
                    },
                    {
                        icon: "document",
                        title: "Traffic criminal law",
                        text: "With drink-driving, failing to stop or endangering road users, your licence and the penalty are at stake. We defend you."
                    }
                ],
                highlight: {
                    eyebrow: "AFTER AN ACCIDENT",
                    title: "Do not sign anything too quickly",
                    text: "Before you sign a settlement declaration from the other side's insurer, liability, the expert report and the offer should have been checked. Afterwards there is usually nothing left to claim.",
                    postSlug: "bussgeldbescheid-einspruch"
                }
            }
        ]
    },
    about: {
        label: "Profile",
        title: "A German lawyer of Turkish origin.",
        p1: "Meral Gören is a German national of Turkish origin. She studied law at Ruprecht-Karls-Universität Heidelberg and passed her first state examination in law in 2005.",
        p2: "After the two-year traineeship at Heidelberg Regional Court she has been admitted to the bar since 6 June 2008, entitled to appear before all local, regional and higher regional courts.",
        background: "We advise and represent you on all legal questions – chiefly in general civil law, employment law, immigration law, family law and road traffic law, in German and Turkish.",
        cta: "Get in touch",
        more: "About the lawyer",
        page: {
            lead: "A lawyer in Mannheim – a German national of Turkish origin, advising in German and Turkish.",
            wordmark: "Meral Gören",
            pull: {
                before: "We see it as our task to ",
                mark: "advise you comprehensively and to the highest standard",
                after: " and to represent your interests in and out of court."
            },
            facts: [
                {
                    value: "2",
                    label: "Languages — German & Turkish"
                },
                {
                    value: "5",
                    label: "Practice areas"
                },
                {
                    value: "2008",
                    label: "Admitted to the bar"
                },
                {
                    value: "Mannheim",
                    label: "Office"
                }
            ],
            closingTitle: "Tell us about your matter.",
            sections: [
                {
                    heading: "Profile",
                    body: [
                        "Meral Gören is a German national of Turkish origin. She studied law at Ruprecht-Karls-Universität Heidelberg and passed her first state examination in law in 2005.",
                        "This was followed by the two-year traineeship as a legal trainee at Heidelberg Regional Court. She has been admitted to the bar since 6 June 2008."
                    ],
                    image: "/images/about/profil.webp"
                },
                {
                    heading: "Admission",
                    body: [
                        "Admitted to the bar in the Federal Republic of Germany and entitled to appear before all local, regional and higher regional courts.",
                        "Supervising authority: Rechtsanwaltskammer Karlsruhe (Karlsruhe Bar Association)."
                    ],
                    image: "/images/about/zulassung.webp"
                },
                {
                    heading: "Our standard",
                    body: [
                        "We see it as our task to advise you comprehensively and to the highest standard, and to represent your interests in and out of court as effectively as possible.",
                        "Our work is marked by competence, determination and commitment. We explain things in plain language and keep you informed at every step."
                    ],
                    image: "/images/about/anspruch.webp"
                },
                {
                    heading: "Areas of practice",
                    body: [
                        "You can bring us any legal question – chiefly in general civil law, employment law, immigration law, family law and road traffic law, in German and Turkish.",
                        "For matters that touch Turkish law we work together with Doğru Kanzlei in Mannheim."
                    ],
                    image: "/images/about/taetigkeit.webp"
                }
            ],
            asideText: "You can bring any legal question to us – in German or Turkish."
        }
    },
    why: {
        label: "What to expect",
        title: "Why our office?",
        ctaText: "Does that sound like the right office for you?",
        items: [
            {
                title: "German and Turkish",
                text: "Advice and correspondence in both languages – without an interpreter."
            },
            {
                title: "Handled personally",
                text: "Your case stays in one pair of hands – from the first consultation to the conclusion."
            },
            {
                title: "Office in Mannheim",
                text: "R1 2-3, 68161 Mannheim. Appointments in person or by phone."
            },
            {
                title: "Clear communication",
                text: "An assessment you can follow, transparent costs, no jargon without an explanation."
            }
        ]
    },
    reviews: {
        label: "Reviews",
        title: "What clients say",
        note: "From the firm's client reviews.",
        items: [
            { quote: "Ich bin mit der Beratung von Frau Meral Gören sehr zufrieden. Sie war freundlich, professionell und hat sich Zeit genommen, alles verständlich zu erklären. Ich habe mich sehr gut aufgehoben gefühlt und kann sie definitiv weiterempfehlen.", name: "Client", context: "Review" },
            { quote: "Frau Gören ist sehr kompetent und zuverlässig. Die Kommunikation war schnell und unkompliziert, und meine Fragen wurden immer ausführlich beantwortet. Vielen Dank für die tolle Unterstützung!", name: "Client", context: "Review" },
            { quote: "Eine sehr positive Erfahrung mit Frau Meral Gören. Sie arbeitet professionell, ist sehr sympathisch und geht aufmerksam auf ihre Kunden ein. Ich würde mich jederzeit wieder an sie wenden und kann sie uneingeschränkt empfehlen.", name: "Client", context: "Review" }
        ]
    },
    blog: {
        label: "Blog",
        title: "Latest articles",
        all: "All articles",
        more: "Read more",
        moreTo: "Read more:",
        posts: [
            {
                slug: "erbfall-tuerkei",
                areaSlug: "zivilrecht",
                category: "Civil Law",
                iso: "2026-09-12",
                date: "12 September 2026",
                title: "Inheritance with a Turkish connection: which law applies?",
                excerpt: "German or Turkish succession law? Why the 1929 estate treaty overrides the EU Succession Regulation, and what that means for property in Turkey.",
                ctaLine: "An estate with a Turkish connection does not forgive a wrong order of steps: disclaiming, or transferring title, before the legal position is settled is rarely put right afterwards.",
                body: [
                    "Where an estate has connections to both Germany and Turkey, it is not one succession law that applies but, as a rule, two side by side. What governs is the German-Turkish estate treaty: immovable property follows the law of the state where the property is located, movable property the law of the state whose nationality the deceased held.",
                    "This is where most guides go wrong. Since 2015 the EU Succession Regulation has provided that, in principle, the law of the last habitual residence applies. For German-Turkish estates that principle does not apply: the Regulation expressly leaves earlier bilateral treaties untouched, and the German-Turkish treaty is one of them.",
                    "In practice: a Turkish national who has lived in Mannheim for forty years and owns a flat in Izmir passes that flat on under Turkish law – even though his entire life took place in Germany. His bank account in Germany also passes under Turkish law, because it is movable and he was a Turkish national. His house in Mannheim, by contrast, passes under German law.",
                    {
                        note: "Important: the German-Turkish estate treaty takes precedence over the EU Succession Regulation. Planning around habitual residence is planning around the law that actually applies – with consequences for compulsory shares, for drafting a will, and for which court has jurisdiction at all."
                    },
                    {
                        h2: "The German-Turkish estate treaty – the basic rule"
                    },
                    "The treaty is the annex to Article 20 of the German-Turkish Consular Treaty of 28 May 1929, brought back into force on 29 May 1952 after the Second World War. It is a treaty under international law and takes precedence over the domestic conflict-of-laws rules of both states.",
                    "The basic rule:",
                    {
                        list: [
                            "Immovable property – land, flats, houses: the law of the state where the property is located applies. German law for property in Germany, Turkish law for property in Turkey.",
                            "Movable property – bank accounts, vehicles, household contents, claims, company shares: the law of the state whose nationality the deceased held at the time of death."
                        ]
                    },
                    {
                        h3: "What splitting of the estate means in practice"
                    },
                    "The estate divides into two separate bodies of assets, each following its own rules. There is then not one share of the estate but two – and they can differ. Someone who is an heir in one body is not necessarily an heir to the same extent in the other.",
                    "This affects almost everything: intestate succession, compulsory-share claims, the validity of a will, and what evidence banks and land registries will demand.",
                    {
                        h2: "Dual nationality – the most common special case"
                    },
                    "Since the 2024 citizenship reform, multiple nationality is the norm. That increases the number of estates where the deceased held both nationalities – and for movable property the treaty turns precisely on nationality.",
                    "Which nationality then governs is not a trivial question and has repeatedly come before the courts. Anyone holding both passports should not leave it unresolved: the answer determines the law under which the entire movable estate passes.",
                    {
                        h2: "What evidence you need – Erbschein or veraset ilamı"
                    },
                    "A European Certificate of Succession does not help here, because Turkey does not participate in the EU Succession Regulation. In practice:",
                    {
                        list: [
                            "For real property in Germany, the heirs need a German certificate of inheritance, the Erbschein. The land registry will not transfer title without one.",
                            "Where a Turkish national leaves only movable property in Germany, a Turkish certificate of inheritance – veraset ilamı – may suffice. It must then be legalised through the competent Turkish mission or carry an apostille, with a certified translation.",
                            "For real property in Turkey, transfer in the Turkish land registry, the Tapu, is required. Turkish law and Turkish procedure govern."
                        ]
                    },
                    "Expect each side to ask for documents from the other: death certificate, Turkish civil status register extract, evidence of nationality – each translated and certified.",
                    {
                        h2: "Deadlines – and why they are dangerous here"
                    },
                    {
                        table: {
                            caption: "Deadlines compared: Germany and Turkey",
                            head: [
                                "Step",
                                "Germany",
                                "Turkey"
                            ],
                            rows: [
                                [
                                    "Disclaiming the inheritance",
                                    "6 weeks from knowledge; 6 months where the deceased's last residence was solely abroad or the heir is abroad when the period starts (§ 1944 BGB)",
                                    "3 months from knowledge (Art. 606 Turkish Civil Code)"
                                ],
                                [
                                    "Partial disclaimer",
                                    "not possible",
                                    "not possible"
                                ],
                                [
                                    "Notification to the tax office",
                                    "generally within 3 months (§ 30 ErbStG)",
                                    "separate deadlines under Turkish law"
                                ]
                            ]
                        }
                    },
                    "The extended six-month period under § 1944 BGB is the normal case in exactly these situations and is often missed – in both directions. Some heirs believe they have only six weeks and act in haste; others rely on six months when the conditions are not met.",
                    "Note as well: a disclaimer always covers the entire estate. You cannot disclaim the over-indebted property in Turkey and keep the German bank account.",
                    {
                        h2: "Compulsory shares – the systems diverge"
                    },
                    "The two legal systems also diverge on compulsory shares, and where the estate is split they apply side by side.",
                    "Under Turkish law the statutory shares are protected to a defined extent: descendants are protected as to half of their statutory share, parents as to a quarter, and the surviving spouse is entitled to the full statutory share as a compulsory share. The German compulsory share, by contrast, is purely a monetary claim amounting to half of the statutory share.",
                    "Anyone making a will intended to cover both bodies of assets must therefore account for both regimes. A will that is faultless under German law may be open to challenge as regards the Turkish body of assets.",
                    {
                        h2: "Inheritance tax – and the risk of double taxation"
                    },
                    "There is no double taxation treaty for inheritance tax between Germany and Turkey. Both states may tax the same acquisition; credit for foreign tax arises only to the extent domestic law allows.",
                    "The German personal allowances under § 16 ErbStG currently include:",
                    {
                        table: {
                            caption: "Personal allowances under § 16 ErbStG (as at 2026)",
                            head: [
                                "Beneficiary",
                                "Allowance"
                            ],
                            rows: [
                                [
                                    "Spouse or registered partner",
                                    "€500,000 plus a pension allowance of €256,000"
                                ],
                                [
                                    "Children and stepchildren",
                                    "€400,000"
                                ],
                                [
                                    "Grandchildren",
                                    "€200,000"
                                ],
                                [
                                    "Parents and grandparents, on acquisition upon death",
                                    "€100,000"
                                ]
                            ]
                        }
                    },
                    "In tax class I the rates run from 7 to 30 per cent. Important for families with a Turkish connection: these allowances are available in full only under unlimited tax liability. Where neither the deceased nor the heir is resident in Germany, limited tax liability applies and only German-situs assets are caught – with considerably narrower consequences. Whether you are subject to unlimited or limited liability should be assessed early.",
                    {
                        h2: "What to do first"
                    },
                    {
                        list: [
                            "Secure the documents: death certificate, identity and nationality evidence from both sides, Turkish civil status register extract.",
                            "Draw up a schedule of the assets, separated into movable and immovable and by location – this is the basis of every further assessment.",
                            "Establish the deceased's nationality at the time of death.",
                            "Check whether a will exists – in Germany, in Turkey, or in both.",
                            "Establish the disclaimer deadline before signing anything or taking possession of estate assets."
                        ]
                    },
                    {
                        h2: "How we proceed"
                    },
                    "As a rule we first establish which bodies of assets arise and which law applies to each. Only then can shares, compulsory shares and the required evidence sensibly be determined. We advise you in German and in Turkish. For questions falling to be assessed under Turkish law – such as transfer in the Tapu or proceedings before a Turkish court – we work with a firm specialising in Turkish law, so that both sides of the case are covered.",
                    {
                        h2: "Frequently asked questions"
                    },
                    {
                        faq: [
                            {
                                q: "Does the EU Succession Regulation apply to an estate with a Turkish connection?",
                                a: "No. The German-Turkish estate treaty of 1929 is a bilateral treaty and takes precedence over the EU Succession Regulation. What governs is therefore not the last habitual residence but the distinction between immovable property, under the law of its location, and movable property, under the law of nationality."
                            },
                            {
                                q: "Under which law does property in Turkey pass?",
                                a: "Under Turkish law, regardless of where the deceased lived or which nationality they held. Immovable property always follows the law of the state where it is located."
                            },
                            {
                                q: "Do I need a German Erbschein, or is a veraset ilamı enough?",
                                a: "For real property in Germany you need a German certificate of inheritance. Where a Turkish national leaves only movable property in Germany, a Turkish certificate may suffice; it must be legalised or apostilled and accompanied by a certified translation."
                            },
                            {
                                q: "How long do I have to disclaim the inheritance?",
                                a: "In Germany six weeks from knowledge, but six months where the deceased's last residence was solely abroad or you are abroad when the period begins (§ 1944 BGB). Under Turkish law the period is three months from knowledge."
                            },
                            {
                                q: "Can I disclaim in Turkey and accept in Germany?",
                                a: "No. A partial disclaimer is permitted under neither German nor Turkish law. A disclaimer covers the entire estate."
                            },
                            {
                                q: "What happens with dual nationality?",
                                a: "Because the treaty turns on nationality for movable property, it must be established which nationality governs. That is a question of the individual case and should not be left open, since the entire movable estate depends on it."
                            },
                            {
                                q: "Will I pay inheritance tax in both countries?",
                                a: "That is possible. There is no double taxation treaty for inheritance tax between Germany and Turkey, so both states may tax the same acquisition. Any credit depends on domestic law and should be assessed early."
                            }
                        ]
                    },
                    "If an estate with a Turkish connection has arisen, bring the death certificate, evidence of nationality and a rough schedule of the assets. That is usually enough to say, in the first meeting, how the estate divides and which step comes first."
                ],
                image: "/images/blog/erbrecht.webp"
            },
            {
                slug: "mietminderung-maengel",
                areaSlug: "zivilrecht",
                category: "Civil Law",
                iso: "2026-09-02",
                date: "2 September 2026",
                title: "Rent reduction: when you may withhold part of the rent",
                excerpt: "Mould, a broken boiler, building noise – when a defect entitles you to reduce the rent, how much you may withhold, and why paying under reservation is the safer route.",
                ctaLine: "Before you withhold rent, have the rate assessed. A conversation costs you half an hour; a percentage set too high can cost you the flat.",
                body: [
                    "If the flat is defective, the rent is reduced by operation of law (§ 536 BGB). You do not have to declare the reduction or apply for it: it takes effect automatically as soon as the defect impairs the fitness of the flat for its contractual use to more than an insignificant degree.",
                    "But it is precisely this automatic effect that produces the most expensive mistake in practice. The right to reduce is rarely the problem. The problem is the amount and the timing: a tenant who withholds too much falls into arrears – and ends up facing termination of the very flat in which they were fighting for a working heater.",
                    "The short answer is therefore: report the defect in writing immediately, secure your evidence, and keep paying the rent in full, expressly under reservation of reclaim. You then recover the overpaid amount afterwards. You lose nothing that way – except the risk of losing the flat.",
                    {
                        note: "Important: a tenant who reduces the rent too far falls into default. Once the arrears reach two months' rent, the landlord may terminate without notice (§ 543 para. 2 no. 3 BGB). The fact that the defect genuinely existed does not protect you – all that matters is whether the reduction rate you chose is upheld in court."
                    },
                    {
                        h2: "What counts as a defect in law"
                    },
                    "A defect exists where the actual condition of the flat departs from the condition owed under the contract and the use of the flat is noticeably restricted as a result. It does not matter whether the landlord is at fault. A burst water pipe that nobody could have prevented is still a defect.",
                    "Typical cases from practice:",
                    {
                        list: [
                            "mould in living or sleeping areas, particularly where it stems from structural damage or thermal bridges",
                            "failure or under-dimensioning of the heating during the heating season",
                            "leaking windows, draughts, persistently damp walls",
                            "water damage and its consequential damage",
                            "loss of hot water, lift or sanitary facilities",
                            "substantial, prolonged building noise – including from a neighbouring site",
                            "a floor area significantly smaller than the area stated in the tenancy agreement"
                        ]
                    },
                    "Circumstances outside the flat can also constitute a defect if they noticeably affect living there. Insignificant impairments, by contrast, are disregarded: a dripping tap or a single noisy night is not enough.",
                    {
                        h2: "The defect notice – the step you must not skip"
                    },
                    "Under § 536c BGB you must report the defect without undue delay. This is not a formality but the tenant's actual obligation. If you fail to report it, you lose claims and may in some circumstances even become liable in damages – for instance where a small leak, reported early, would never have become major moisture damage.",
                    "A usable defect notice contains four things: a concrete description of the defect, the date it appeared, a request to remedy it, and a reasonable deadline. Do not write \"the flat is damp\"; write \"black mould has formed on the external wall of the bedroom, to the left of the window, over roughly 0.5 m², first noticed on 3 September\".",
                    "Choose a provable route: email with a read receipt, registered post with proof of delivery, or handover in front of a witness. A phone call is legally effective but worthless in a dispute, because you cannot prove it.",
                    {
                        h2: "Secure the evidence before the defect disappears"
                    },
                    "In a dispute, what usually decides the case is not who is right but who can prove the defect and its extent. Defects have a habit of disappearing: the mould gets painted over, the building site is finished, the heating works again in spring. Document immediately and continuously.",
                    {
                        list: [
                            "photos and short videos with a visible date, ideally with a measure in frame",
                            "for noise, a noise log with date, time, duration and type of disturbance",
                            "for heating failures, temperature readings at fixed times of day, noted with the date",
                            "names and addresses of potential witnesses – visitors, neighbours, tradespeople",
                            "the complete correspondence with the landlord and the property management",
                            "the handover protocol from when you moved in"
                        ]
                    },
                    {
                        h2: "How much may you reduce?"
                    },
                    "The amount depends on the actual impairment in the individual case, measured against the gross rent. The reduction tables circulating online offer rough orientation at best. They are collections of individual decisions, not legal rules – a court is not bound by them and decides on the circumstances of your flat.",
                    "What matters above all: which rooms are affected and how intensively they are used, how long the defect lasts, whether it occurs all day or only intermittently, and whether the flat remains habitable. A heating failure in January weighs far more heavily than the same failure in May.",
                    "Because nobody can make that assessment with certainty in advance, the rate you choose yourself is the real risk – not the defect.",
                    {
                        h2: "Three ways to handle the rent"
                    },
                    {
                        table: {
                            caption: "Options once a defect is established – benefits and risks",
                            head: [
                                "Approach",
                                "Benefit",
                                "Risk"
                            ],
                            rows: [
                                [
                                    "Keep paying in full, without reservation",
                                    "No risk of termination",
                                    "Reclaim may later be barred under § 814 BGB where you paid knowing of the defect"
                                ],
                                [
                                    "Pay in full, expressly under reservation of reclaim",
                                    "No risk of termination, claims fully preserved",
                                    "You are out of pocket first and must claim the amount back later"
                                ],
                                [
                                    "Withhold rent on your own assessment",
                                    "Immediate financial relief",
                                    "If the rate is set too high, you fall into default – two months' arrears allow termination without notice"
                                ]
                            ]
                        }
                    },
                    "State the reservation expressly and in writing, ideally in the payment reference and additionally by email: \"payment under reservation of reclaim on account of the defect notified by letter of …\". An implied reservation is not enough.",
                    {
                        h2: "When the right to reduce falls away entirely"
                    },
                    "There is no right to reduce where you knew of the defect when the contract was concluded (§ 536b BGB) or caused it yourself – for instance mould demonstrably caused by incorrect heating and ventilation. This is another reason to record the condition of the flat carefully at handover.",
                    "A second, less well known case: a tenant who knows of the defect and keeps paying in full without reservation over a longer period risks being unable to enforce the reclaim under § 814 BGB. The law treats payment without reservation as a deliberate performance of an obligation not owed. The reservation is therefore not merely a precaution – it is what makes the paying option work at all.",
                    {
                        h3: "Special case: building noise from next door"
                    },
                    "Building noise from a neighbouring property is a frequent point of dispute. What matters is whether the impairment is substantial and whether the landlord could in turn take action against the source. A noise log is practically indispensable here, because the extent of the disturbance cannot be reconstructed afterwards.",
                    {
                        h2: "How we approach these cases"
                    },
                    "As a rule we first check whether the defect can be proven and whether the notice was validly given – that determines everything else. We then assess the realistic order of magnitude of the reduction and clarify whether claims beyond the reduction exist, such as remedy of the defect, reimbursement of expenses or damages. Where the documentation is sound from the outset, the matter can often be resolved without going to court.",
                    "We advise and represent you in German and in Turkish, both out of court and before the courts.",
                    {
                        h2: "Frequently asked questions"
                    },
                    {
                        faq: [
                            {
                                q: "Do I have to announce the rent reduction to my landlord?",
                                a: "The reduction itself takes effect by operation of law and does not need to be declared (§ 536 BGB). What you must report, without undue delay, is the defect (§ 536c BGB). Without that notice you lose your rights. The obligation is the notice, not the declaration of reduction."
                            },
                            {
                                q: "From when can I reduce the rent?",
                                a: "In principle from when the defect arises, but in practice from when your defect notice reaches the landlord. For the period before that there is generally no claim, because the landlord did not know of the defect and could not remedy it."
                            },
                            {
                                q: "What percentage may I withhold?",
                                a: "There are no statutory percentages. What counts is the actual impairment in the individual case, measured against the gross rent. Online reduction tables are collections of individual judgments and do not bind a court. Have the order of magnitude checked before you withhold anything."
                            },
                            {
                                q: "Can I be evicted over a rent reduction?",
                                a: "Yes, if you reduce too much. The withheld sums then count as arrears. Once these reach two months' rent, termination without notice under § 543 para. 2 no. 3 BGB becomes possible. This is why paying under reservation is the safer route."
                            },
                            {
                                q: "What exactly does paying under reservation mean?",
                                a: "You continue to pay the full rent but state expressly and in writing that payment is made only under reservation of reclaim. You therefore do not fall into default, while retaining the right to reclaim the overpaid portion later."
                            },
                            {
                                q: "I put up with the defect for months. Is it too late now?",
                                a: "Not necessarily, but it becomes harder. A tenant who knows of the defect and keeps paying without reservation may lose the reclaim under § 814 BGB. For the future, the right to reduce usually survives. Declare the reservation from now on and have the past assessed separately."
                            },
                            {
                                q: "Do I need a lawyer for a rent reduction?",
                                a: "Not for the defect notice. Once the amount of the reduction, a threat of termination from the landlord, or the reclaim of rent already paid is at stake, legal advice is worthwhile – because from that point a mistake can cost you the flat."
                            }
                        ]
                    },
                    "If you are unsure whether your situation amounts to a defect, or what reduction is realistic, describe the case to us briefly. Often a look at the defect notice and the documentation is enough to establish the right order of steps."
                ],
                image: "/images/blog/zivilrecht.webp"
            },
            {
                slug: "einbuergerung-2026",
                areaSlug: "auslaenderrecht",
                category: "Immigration Law",
                iso: "2026-08-12",
                date: "12 August 2026",
                updated: "2026-09-12",
                title: "Naturalisation in 2026: requirements, costs and timelines",
                excerpt: "Five years of residence, B1, secure means of support – and the three-year route was abolished in October 2025. The current position in full.",
                ctaLine: "Five years, means of support, B1: whether you already meet the requirements can be established in advance. That is the difference between an application and a granted one.",
                body: [
                    "Naturalisation is generally possible after five years of lawful habitual residence in Germany (§ 10 StAG). As a rule you no longer have to give up your existing citizenship – since the reform of 27 June 2024, multiple citizenship is the norm rather than the exception.",
                    "For many who put the application off for years, that fundamentally changes the calculation. Before the reform, eight years of residence were required, and anyone wanting to become German usually had to surrender their existing passport. Neither is the case any more.",
                    "One point, however, has moved back in the other direction, and many older guides still get it wrong.",
                    {
                        note: "Important: the accelerated naturalisation after three years for special integration achievements, introduced in 2024, has been abolished. The Bundestag passed the change on 8 October 2025 and the act came into force on 30 October 2025. The five-year period applies again without exception. If your planning rests on the three-year route, it should be reviewed."
                    },
                    {
                        h2: "The requirements at a glance"
                    },
                    "For naturalisation as of right under § 10 StAG you must meet the following requirements:",
                    {
                        list: [
                            "a valid residence permit or a right of permanent residence",
                            "five years of lawful habitual residence in Germany",
                            "secure means of support for yourself and your dependants",
                            "German at level B1 of the Common European Framework of Reference",
                            "a passed naturalisation test or an equivalent qualification",
                            "no relevant criminal convictions",
                            "a commitment to the free democratic basic order, to the protection of human dignity and to Germany's particular historical responsibility"
                        ]
                    },
                    "The requirements must be met at the time the decision on your application is taken, not merely when you apply. That matters in practice, because many months can pass between application and decision depending on the authority – losing your job in that window can jeopardise the case.",
                    {
                        h2: "Five years of residence: what counts and what does not"
                    },
                    "Periods of lawful habitual residence count, and not every period spent in Germany qualifies. Periods of tolerated stay (Duldung) generally do not count, nor do stays for a purpose that is temporary by nature. Time spent in asylum proceedings can be credited where recognition follows.",
                    "Longer stays abroad can break the chain. Anyone who spent months abroad – because of a care situation in the family, for instance – should clarify the effect on their residence periods before applying.",
                    "In our experience, gaps in the residence history are the most common cause of delay. They can almost always be closed if you start early enough, for example by obtaining information from the immigration file.",
                    {
                        h2: "Secure means of support – the most common obstacle"
                    },
                    "You must generally be able to support yourself and your dependants without benefits under SGB II or SGB XII. Child benefit, parental allowance, housing benefit and BAföG are harmless in this respect; Bürgergeld is not.",
                    "There are narrowly drawn exceptions to this principle. They apply in particular to members of the former guest worker generation and to people in full-time employment who are not responsible for the receipt of benefits. Whether one of these exceptions applies in your case should be checked before you shelve the application – many people assume they are excluded when they are not.",
                    {
                        h2: "B1 language proof – and who is exempt"
                    },
                    "As a rule a certificate at level B1, a German school leaving qualification, a degree completed in German or a comparable proof is sufficient. The proof must cover all four skills, not only speaking.",
                    "For members of the guest worker generation who came to Germany under the recruitment agreements, the law provides relief: proof may be given orally and the written examination is dispensed with. Further relief is available on grounds of age, illness or disability where proof cannot reasonably be expected for those reasons.",
                    {
                        h2: "The naturalisation test"
                    },
                    "The test consists of 33 questions on the legal order, history and society, of which 17 must be answered correctly. Those holding a German school leaving qualification are generally exempt. The test may be repeated as often as necessary, though the fee falls due each time.",
                    {
                        h2: "Costs and duration"
                    },
                    {
                        table: {
                            caption: "Typical costs of naturalisation (as at 2026, subject to the individual case)",
                            head: [
                                "Item",
                                "Amount",
                                "Note"
                            ],
                            rows: [
                                [
                                    "Naturalisation fee",
                                    "€255",
                                    "per adult"
                                ],
                                [
                                    "Co-naturalisation of a minor child",
                                    "€51",
                                    "where naturalised together with a parent"
                                ],
                                [
                                    "Naturalisation test",
                                    "€25",
                                    "per attempt, including repeats"
                                ],
                                [
                                    "B1 language examination",
                                    "approx. €150–250",
                                    "depending on provider and venue"
                                ],
                                [
                                    "Documents, translations, certifications",
                                    "variable",
                                    "depending on country of origin and scope"
                                ]
                            ]
                        }
                    },
                    "Processing times differ considerably between naturalisation authorities and depend above all on how complete your documents are. A complete application is the most effective lever you hold yourself.",
                    {
                        h2: "Dual citizenship – particularly for Turkish nationals"
                    },
                    "Since the 2024 reform you generally no longer have to give up your existing citizenship. For Turkish nationals this is a marked simplification: the former route of release from Turkish citizenship followed by the Blue Card (Mavi Kart) is no longer necessary for new applications.",
                    "Whether and how naturalisation affects your Turkish citizenship, questions of succession, or property in Turkey is a matter of Turkish law and must be assessed separately. For such questions we work with a firm specialising in Turkish law.",
                    {
                        h2: "What to assemble now"
                    },
                    {
                        list: [
                            "complete proof of your residence periods and of every residence permit",
                            "proof of income for recent months, and for the self-employed also the statement of profits",
                            "your pension record from Deutsche Rentenversicherung",
                            "language certificate or school/university qualification",
                            "confirmation that you passed the naturalisation test",
                            "identity documents, birth certificate and, where applicable, marriage certificate – with certified translations",
                            "tenancy agreement and registration certificate"
                        ]
                    },
                    {
                        h2: "How we help"
                    },
                    "A review before filing is worthwhile: are the five years genuinely documented without gaps? Do your means of support look the way the authority will assess them? Does one of the exceptions apply? If an application has been refused, we examine the decision and the prospects of a challenge. We advise you in German and in Turkish.",
                    {
                        h2: "Frequently asked questions"
                    },
                    {
                        faq: [
                            {
                                q: "Is naturalisation after three years still possible?",
                                a: "No. The accelerated three-year naturalisation introduced in 2024 was abolished by the Bundestag on 8 October 2025, with the act entering into force on 30 October 2025. The five-year period of lawful habitual residence applies again."
                            },
                            {
                                q: "Do I have to give up my Turkish citizenship?",
                                a: "As a rule, no. Since the reform of 27 June 2024 multiple citizenship is the norm. The former route of release from Turkish citizenship and the Blue Card is no longer required for new applications."
                            },
                            {
                                q: "Can I be naturalised while receiving Bürgergeld?",
                                a: "Generally no, since means of support must be secure without benefits under SGB II or SGB XII. There are narrow exceptions, for instance for the guest worker generation or where benefits are received through no fault of your own despite full-time work. This should be assessed individually."
                            },
                            {
                                q: "What level of German do I need?",
                                a: "Level B1 is required. A German school leaving qualification or a degree completed in German is also accepted. For the guest worker generation oral proof suffices; further relief is possible on grounds of age, illness or disability."
                            },
                            {
                                q: "What does naturalisation cost in total?",
                                a: "The fee is €255 per adult and €51 for a minor child naturalised at the same time. Added to that are €25 for the naturalisation test, roughly €150–250 for the B1 examination, and the cost of documents and certified translations."
                            },
                            {
                                q: "How long does the procedure take?",
                                a: "That depends heavily on the competent authority and on how complete your documents are, ranging from a few months to well over a year. Gaps in the residence documentation are the most common cause of delay."
                            },
                            {
                                q: "My application was refused. What can I do?",
                                a: "Legal remedies may be available against the refusal; the reasoning and the deadlines stated in the decision are decisive. Have the decision reviewed promptly, as the time limits for challenging it are short."
                            }
                        ]
                    },
                    "If you want to know whether you already meet the requirements, bring your residence permits, proof of income and pension record. In most cases that is enough to assess the prospects of an application in the first meeting."
                ],
                image: "/images/blog/auslaenderrecht.webp"
            },
            {
                slug: "kuendigung-drei-wochen",
                areaSlug: "arbeitsrecht",
                category: "Employment Law",
                iso: "2026-07-28",
                date: "28 July 2026",
                title: "Dismissed: the first three weeks decide it",
                excerpt: "The deadline for an unfair dismissal claim is three weeks from receipt – and it applies even to obviously invalid dismissals. What to do now.",
                ctaLine: "The three weeks run from today, not from the day you make up your mind. Get in touch while the deadline is open — after it, even a defective dismissal stands.",
                body: [
                    "When you receive a dismissal, a three-week period starts running from the moment it reaches you. Within that period the unfair dismissal claim must have arrived at the labour court (§ 4 KSchG). If you miss the deadline, the dismissal is treated under § 7 KSchG as having been valid from the outset – regardless of how vulnerable it would have been on the merits.",
                    "This is the harshest rule in German dismissal protection law, and it surprises most of those affected. A dismissal that is socially unjustified, formally defective, or signed by someone with no authority to represent the employer becomes valid through the mere passage of time. After that there is nothing left to examine.",
                    "The practical consequence: the early phone call matters more than the perfectly prepared file. What helps you later is three things – the envelope, the date, and a claim filed in time.",
                    {
                        note: "Important: what counts is the arrival of the claim at the labour court, not its dispatch. A claim posted on day 20 that arrives on day 22 is out of time. Never count on the last day."
                    },
                    {
                        h2: "When the deadline starts"
                    },
                    "What matters is receipt of the dismissal, not the date on the letter. Receipt means the letter has entered your sphere of control in such a way that you could take note of it in the ordinary course of events.",
                    {
                        list: [
                            "For delivery to a letterbox, the relevant day is the one on which emptying it would ordinarily be expected – for a late afternoon delivery, usually the following day",
                            "For personal handover, the day of handover applies",
                            "For registered post with acknowledgement, the day of actual handover, not the day the collection slip was left",
                            "Holiday or illness generally does not postpone receipt"
                        ]
                    },
                    "Note immediately when and by what route you received the dismissal, and keep the envelope with the postmark. The envelope is the single most important piece of evidence in a dispute, and it is almost always thrown away.",
                    {
                        h2: "The deadline applies even to obvious defects"
                    },
                    "The following objections must also be raised within the three weeks, or they are lost:",
                    {
                        list: [
                            "the dismissal is not signed by hand, or was sent only by email or messenger",
                            "it comes from a person without authority to represent the employer",
                            "the works council was not properly consulted",
                            "special protection against dismissal for pregnancy, parental leave, carer's leave or severe disability was disregarded",
                            "the notice period was calculated incorrectly"
                        ]
                    },
                    "Only exceptionally does § 5 KSchG permit a claim to be admitted late, where you were prevented from filing in time despite exercising all the care that could reasonably be expected of you. The standard is strict; nobody should plan around it.",
                    {
                        h2: "The deadlines at a glance"
                    },
                    {
                        table: {
                            caption: "What has to be done, and when, after a dismissal arrives",
                            head: [
                                "Deadline",
                                "What to do",
                                "Consequence if missed"
                            ],
                            rows: [
                                [
                                    "Immediately",
                                    "Note the date of receipt, keep the envelope, sign nothing",
                                    "Evidential problems in any later proceedings"
                                ],
                                [
                                    "Within 3 days of learning of the dismissal",
                                    "Register as seeking work with the employment agency (§ 38 SGB III)",
                                    "Reduction of unemployment benefit"
                                ],
                                [
                                    "Within 3 weeks of receipt",
                                    "File the unfair dismissal claim at the labour court (§ 4 KSchG)",
                                    "The dismissal is treated as valid (§ 7 KSchG)"
                                ],
                                [
                                    "By the termination date at the latest",
                                    "Register as unemployed with the employment agency",
                                    "Later start of payments"
                                ]
                            ]
                        }
                    },
                    {
                        h2: "Do not sign anything in haste"
                    },
                    "If a termination agreement (Aufhebungsvertrag) is put in front of you along with the dismissal, often with the suggestion that the offer is only valid today, caution is called for. A termination agreement can trigger a disqualification period for unemployment benefit, which is usually twelve weeks. At the same time you give up your negotiating position before you have used it at all.",
                    "A general release or a declaration waiving your right to bring an unfair dismissal claim should likewise not be signed without review.",
                    {
                        h2: "What actually happens in the proceedings"
                    },
                    "Once the claim is filed, the labour court sets a conciliation hearing (Gütetermin), often only a few weeks later. Nothing is decided there; it is negotiated: the termination date, a severance payment, release from duties, remaining holiday and the reference. A large proportion of dismissal cases settle at this stage.",
                    "Worth knowing: as a rule there is no statutory entitlement to a severance payment. Severance is the outcome of a negotiation, and the negotiating position only arises through a claim filed in time. Someone who does not sue does not negotiate.",
                    "At first instance before the labour court, each party bears its own legal costs regardless of the outcome (§ 12a ArbGG). This differs from other court proceedings and should be factored into the decision.",
                    {
                        h2: "What to bring to a first meeting"
                    },
                    {
                        list: [
                            "the dismissal letter and the envelope",
                            "the employment contract and any addenda",
                            "the last three payslips",
                            "details of the size of the business and the length of your employment",
                            "any indication of special protection against dismissal",
                            "everything else that was put in front of you to sign"
                        ]
                    },
                    "The size of the business and your length of service determine whether the Dismissal Protection Act applies at all. But even where it does not, the three-week deadline remains decisive for many objections – so a claim is worth considering in a small business too.",
                    {
                        h2: "Frequently asked questions"
                    },
                    {
                        faq: [
                            {
                                q: "How long do I have to challenge a dismissal?",
                                a: "Three weeks from receipt of the written dismissal. Within that period the claim must have arrived at the labour court (§ 4 KSchG). After it expires the dismissal is treated under § 7 KSchG as having been valid from the outset."
                            },
                            {
                                q: "Does the deadline apply if the dismissal is obviously invalid?",
                                a: "Yes. An unsigned dismissal, one issued without consulting the works council, or one issued despite special protection must still be challenged within the three weeks. Otherwise it becomes valid through the passage of time."
                            },
                            {
                                q: "When exactly does the deadline start?",
                                a: "On receipt, not on the date of the letter. For delivery to a letterbox, the relevant day is the one on which emptying it would ordinarily be expected. Holiday or illness generally does not postpone receipt."
                            },
                            {
                                q: "Am I entitled to a severance payment?",
                                a: "Generally not as a matter of statutory right. Severance usually arises by settlement, often already at the conciliation hearing. The negotiating position for it comes from an unfair dismissal claim filed in time."
                            },
                            {
                                q: "Should I sign a termination agreement?",
                                a: "Not without review. A termination agreement can trigger a disqualification period for unemployment benefit of usually twelve weeks, and it removes your negotiating position in the dismissal proceedings at the same time."
                            },
                            {
                                q: "Do I have to notify the employment agency?",
                                a: "Yes, as a person seeking work within three days of learning of the dismissal (§ 38 SGB III). Missing this can reduce your unemployment benefit. The obligation applies whether or not you challenge the dismissal."
                            },
                            {
                                q: "What does an unfair dismissal case cost?",
                                a: "At first instance before the labour court each party bears its own legal costs regardless of the outcome (§ 12a ArbGG). Legal expenses insurance often covers them; this should be clarified before filing."
                            }
                        ]
                    },
                    "If you have received a dismissal, do not leave the assessment until the end of the deadline. Get in touch while the three weeks are still running – everything else can then be dealt with calmly."
                ],
                image: "/images/blog/arbeitsrecht.webp"
            },
            {
                slug: "scheidung-tuerkei",
                areaSlug: "familienrecht",
                category: "Family Law",
                iso: "2026-07-09",
                date: "9 July 2026",
                title: "Divorce with a Turkish connection: which law applies?",
                excerpt: "Jurisdiction, applicable law and recognition on both sides – why a Turkish divorce is not automatically valid in Germany, and what that means for you.",
                ctaLine: "Jurisdiction, applicable law, recognition on both sides: clarifying the order in advance is what saves you a civil status that is wrong in one of the two countries.",
                body: [
                    "Where spouses have connections to both Germany and Turkey, two questions must be kept apart: which court has jurisdiction – and which law does that court apply? The answers do not necessarily coincide. A German court can apply Turkish law, and a Turkish court can apply German law.",
                    "The most common misconception in practice is a different one: that a divorce pronounced in Turkey is simply valid in Germany. It is not. Without a formal recognition procedure you remain married in Germany – with all the consequences for remarriage, succession and civil registration.",
                    {
                        note: "Important: a Turkish divorce only takes effect in Germany after formal recognition (§ 107 FamFG). Anyone divorced in Turkey who remarries in Germany without going through recognition risks the second marriage being invalid."
                    },
                    {
                        h2: "Which court has jurisdiction"
                    },
                    "The international jurisdiction of German courts is governed by the Brussels IIb Regulation, which turns primarily on habitual residence. If both spouses live in Germany, German courts have jurisdiction – even where both hold Turkish nationality only. Nationality alone is therefore not decisive.",
                    "It is also possible for the courts of both states to have jurisdiction. In that case it can matter who initiates proceedings first. This question should be asked early, because it cannot be corrected later.",
                    {
                        h2: "Which law is applied"
                    },
                    "Which law applies to the divorce is determined by the Rome III Regulation. It applies also in relation to states that are not themselves participating; Turkey is one of them. What matters in the first instance is the spouses' habitual residence at the time the court is seised.",
                    "If both live in Germany, German divorce law is generally applied – including by a German court deciding between two Turkish nationals.",
                    {
                        h3: "Choice of law"
                    },
                    "The spouses may agree which law is to apply to the divorce, for example Turkish law. This choice of law requires notarial form. It can be sensible, but it does not extend to all ancillary matters: maintenance, pension rights adjustment and matrimonial property each follow their own conflict rules. A choice of law covering only the divorce itself therefore rarely resolves every question.",
                    {
                        h2: "Ancillary matters follow their own rules"
                    },
                    {
                        table: {
                            caption: "Which instrument governs which question",
                            head: [
                                "Question",
                                "Governing instrument",
                                "Usual connecting factor"
                            ],
                            rows: [
                                [
                                    "Jurisdiction of the court",
                                    "Brussels IIb Regulation",
                                    "habitual residence of the spouses"
                                ],
                                [
                                    "Applicable divorce law",
                                    "Rome III Regulation",
                                    "habitual residence, choice of law possible"
                                ],
                                [
                                    "Spousal and child maintenance",
                                    "Hague Maintenance Protocol",
                                    "habitual residence of the creditor"
                                ],
                                [
                                    "Matrimonial property",
                                    "EU Matrimonial Property Regulation or transitional law",
                                    "depends on the date of marriage"
                                ],
                                [
                                    "Recognition of a Turkish divorce",
                                    "§ 107 FamFG",
                                    "application to the Landesjustizverwaltung"
                                ]
                            ]
                        }
                    },
                    "This fragmentation is why blanket statements such as \"Turkish law applies to us\" almost always fall short. Several legal systems can apply side by side within a single case.",
                    {
                        h2: "Recognition of a Turkish divorce in Germany"
                    },
                    "Because Turkey is not a member of the European Union, a divorce pronounced there generally requires a formal recognition procedure (§ 107 FamFG). The competent authority is the Landesjustizverwaltung of the federal state in which one of the spouses is habitually resident; in many states the task is delegated to the higher regional courts.",
                    "The examination focuses in particular on whether the Turkish court had jurisdiction and whether both spouses were given a proper hearing. The fee depends on income and generally ranges between roughly €10 and €305. Once recognition is granted, it takes effect retroactively as of the date of the Turkish decision.",
                    {
                        list: [
                            "the Turkish divorce judgment with a certificate of finality",
                            "a certified translation into German",
                            "an apostille or legalisation where required",
                            "the marriage certificate and proof of habitual residence",
                            "details of how the Turkish proceedings ran, in particular the service on the other spouse"
                        ]
                    },
                    {
                        h2: "The other direction: registering a German divorce in Turkey"
                    },
                    "A divorce pronounced in Germany must be registered in Turkey so that it is reflected in the Turkish civil register. If that does not happen, you are divorced in one country and still married in the other.",
                    "Both sides should therefore be considered together from the outset. Anyone who pursues only one of the two procedures ends up with a civil status that is wrong in one country – and typically notices only years later, on remarriage or in a succession case.",
                    {
                        h2: "How we proceed"
                    },
                    "As a rule we first clarify jurisdiction and applicable law, then the ancillary matters, then recognition on the other side. In that order, most later surprises can be avoided.",
                    "We advise you in German and in Turkish. For questions falling to be assessed under Turkish law we work with a firm specialising in Turkish law, so that both sides of the case are covered.",
                    {
                        h2: "Frequently asked questions"
                    },
                    {
                        faq: [
                            {
                                q: "Is my Turkish divorce automatically recognised in Germany?",
                                a: "No. A recognition procedure under § 107 FamFG before the competent Landesjustizverwaltung is generally required. Until recognition you are still regarded as married in Germany, with consequences for remarriage, succession and civil registration."
                            },
                            {
                                q: "Can German courts decide if both spouses are Turkish nationals?",
                                a: "Yes. Jurisdiction follows the Brussels IIb Regulation and turns primarily on habitual residence. If both spouses live in Germany, German courts have jurisdiction regardless of nationality."
                            },
                            {
                                q: "Can we choose to have Turkish law applied?",
                                a: "A choice of law under the Rome III Regulation is possible and requires notarial form. It covers only the divorce itself, however. Maintenance, pension rights adjustment and matrimonial property follow their own rules and are not automatically included."
                            },
                            {
                                q: "What does the recognition procedure cost?",
                                a: "The fee depends on income and generally lies between roughly €10 and €305. Added to that are the costs of certified translations and, where required, an apostille for the Turkish judgment."
                            },
                            {
                                q: "Which documents do I need for recognition?",
                                a: "As a rule the Turkish divorce judgment with a certificate of finality, a certified translation, an apostille where required, the marriage certificate and proof of the habitual residence of both spouses."
                            },
                            {
                                q: "Does a German divorce have to be registered in Turkey?",
                                a: "Yes. Registration is required for the divorce to be reflected in the Turkish civil register. Without it you remain recorded as married in Turkey."
                            },
                            {
                                q: "We live in different countries. Where should we bring proceedings?",
                                a: "There is no general answer. Where the courts of both states have jurisdiction, timing can be decisive, and the choice affects maintenance, pension rights adjustment and matrimonial property. It should be clarified before proceedings are commenced."
                            }
                        ]
                    },
                    "If a divorce with a Turkish connection is on the horizon, or has already been pronounced in Turkey, an early assessment helps. Bring the marriage certificate and, if you have it, the Turkish judgment; that is usually enough to say what the next step should be."
                ],
                image: "/images/blog/familienrecht.webp"
            }
        ]
    },
    contact: {
        label: "Contact",
        title: "You can bring us any legal question.",
        text: "Describe your matter briefly – in German or Turkish. We will get back to you promptly.",
        name: "Name",
        email: "Email",
        phone: "Phone (optional)",
        area: "Area of law",
        areaPlaceholder: "Please choose",
        message: "Message",
        consentA: "I have read the",
        consentLink: "privacy notice",
        consentB: "and consent to my data being processed in order to handle my enquiry.",
        submit: "Send enquiry",
        sending: "Sending…",
        error: "Sending failed. Please try again or give me a call.",
        addressLabel: "Office",
        country: "Germany",
        route: "Directions",
        phoneLabel: "Phone",
        whatsapp: "Message on WhatsApp",
        whatsappNote: "Quick questions, straight to chat.",
        hoursLabel: "Availability",
        hours: "Mon–Fri, appointments by arrangement",
        hoursNote: "By phone and email.",
        wa: {
            eyebrow: "WhatsApp request",
            title: "A little context, then WhatsApp",
            intro: "Your details go to the office first. WhatsApp then opens with your message prepared.",
            firstName: "First name",
            lastName: "Last name",
            phone: "Phone number",
            foundVia: "How did you find us?",
            foundViaPlaceholder: "Please choose",
            foundViaOptions: [
                "Google search",
                "Google Maps",
                "Instagram",
                "WhatsApp",
                "Recommendation",
                "Lawyer directory",
                "Other"
            ],
            privacy: "By submitting, I agree that my details are shared with the office of Meral Gören and with nüll to handle my request.",
            submit: "Continue to WhatsApp",
            submitting: "Preparing…",
            error: "Could not be sent. WhatsApp opens only once your details have arrived.",
            close: "Close"
        }
    },
    finalCta: {
        label: "Final step",
        title: "Have your matter reviewed before deadlines or evidence are lost.",
        text: "A personal first assessment for legal questions in Mannheim – in German and Turkish.",
        panelText: "Send us the key documents and a short description. Attorney Meral Gören will classify your matter, clarify the next sensible step and tell you plainly what deserves priority now.",
        listTitle: "What we take care of",
        items: [
            "Review of letters, notices, contracts and court documents",
            "Assessment of deadlines, prospects, risks and costs",
            "Out-of-court representation and court action where needed"
        ],
        note: "Civil law · Employment law · Immigration law · Family law · Traffic law",
        primary: "Have my matter reviewed",
        bottomLabel: "Fast contact",
        bottomTitle: "Describe it briefly, send documents, get a response.",
        bottomText: "Contact form, phone or prepared WhatsApp request."
    },
    footer: {
        blurb: "A law office in Mannheim. We help you assert your rights – in German and Turkish.",
        navTitle: "Navigation",
        areasTitle: "Practice areas",
        contactTitle: "Contact",
        imprint: "Legal notice (Impressum)",
        privacy: "Privacy",
        copyright: "© 2026 Law Office of Meral Gören",
        callLink: "Call",
        waLink: "WhatsApp",
        formLink: "Contact form",
        route: "Directions",
        madeBy: "Site made by"
    },
    partner: {
        label: "Cooperation",
        title: "Our cooperation partner for Turkish law",
        text: "Divorces, estates and judgments often touch two legal systems at once. For everything that falls under Turkish law we work together with Doğru Kanzlei in Mannheim. Your matter stays in one pair of hands, and you do not have to travel to Turkey for it.",
        firm: "Doğru Kanzlei",
        person: "Avukat Hasan Doğru",
        bio: "Admitted to the Ankara Bar and, under § 207 BRAO, to the Karlsruhe Bar. Listed at Mannheim Local Court as an expert on Turkish law.",
        locationsLabel: "Offices",
        locations: "Mannheim · Ankara",
        languagesLabel: "Languages",
        languages: "Türkçe · Deutsch · English",
        areasLabel: "Where he supports you",
        areas: [
            "Recognition of German judgments in Turkey",
            "Divorce and family matters",
            "Inheritance and estates in Turkey",
            "Criminal proceedings in Turkey",
            "Powers of attorney and apostilles"
        ],
        cta: "Visit Doğru Kanzlei"
    },
    cookie: {
        title: "Cookies & privacy",
        text: "This website uses technically necessary cookies. Optional statistics cookies are only set with your consent (§ 25 TDDDG, Art. 6 GDPR).",
        acceptAll: "Accept all",
        necessaryOnly: "Necessary only",
        customize: "Customise",
        save: "Save selection",
        necessary: "Necessary",
        necessaryText: "Required for the site to work.",
        stats: "Statistics",
        statsText: "Anonymous usage statistics, to improve the site."
    },
    page: {
        home: "Home",
        more: "Read more",
        allPosts: "All articles",
        backHome: "Back to the home page",
        areaEyebrow: "Practice areas",
        areaTopics: "Typical matters",
        areaHow: "How I work",
        areaAside: "Describe your matter briefly – in German or Turkish.",
        otherAreas: "Other practice areas",
        areaServicesTitle: "How we help you",
        areaStepsTitle: "How it works",
        areaSteps: [
            {
                title: "Describe your matter",
                text: "Tell us about your case – via the form, on WhatsApp or by phone. We tell you whether and how we can help."
            },
            {
                title: "Review the papers",
                text: "We go through your contracts, notices and letters, establish the deadlines and weigh the prospects and costs."
            },
            {
                title: "Represent you",
                text: "We take over the correspondence, negotiate with the other side, and represent you out of court and before the courts."
            }
        ],
        areaWhyTitle: "Why our office",
        areaNextTitle: "Tell us about your case.",
        areaNextText: "You can bring us any legal question – in German or Turkish. We will get back to you promptly.",
        areaRelated: "Other practice areas",
        areaTrust: [
            "Rechtsanwaltskammer Karlsruhe",
            "Admitted since 2008",
            "German & Turkish",
            "Office in Mannheim"
        ],
        postDisclaimer: "This article is a general overview and does not replace advice on an individual case. What applies is the law in force at the time your matter arises.",
        postCta: {
            eyebrow: "Next step",
            call: "Call:",
                role: "Rechtsanwältin, Mannheim"
        },
        legalNote: "Everything marked in square brackets is a placeholder and must be completed and legally reviewed by the client before publication.",
        blog: {
            eyebrow: "Blog",
            title: "Articles",
            lead: "Short and readable: current questions from civil, employment, immigration, family and road traffic law."
        },
        danke: {
            eyebrow: "Contact",
            title: "Thank you for your enquiry",
            lead: "Your message has arrived.",
            body: "I will get back to you promptly – by email or by phone, depending on what you provided.",
            urgent: "In urgent cases you can reach me on"
        },
        impressum: {
            eyebrow: "Legal",
            title: "Legal notice (Impressum)",
            lead: "Information pursuant to § 5 DDG. The binding version is the German one.",
            sections: [
                {
                    heading: "Provider",
                    paragraphs: [
                        "Meral Gören – Rechtsanwältin\nR1 2-3\n68161 Mannheim\nGermany"
                    ]
                },
                {
                    heading: "Contact",
                    paragraphs: [
                        "Phone: 06201 84 57 95\nFax: 06201 84 57 96\nEmail: anwalt@kanzlei-goeren.de"
                    ]
                },
                {
                    heading: "Professional title and bar association",
                    paragraphs: [
                        "Professional title: Rechtsanwältin (conferred in the Federal Republic of Germany). Entitled to appear before all local, regional and higher regional courts.\nSupervising authority: Rechtsanwaltskammer Karlsruhe, Reinhold-Frank-Str. 72, 76133 Karlsruhe, phone 0721 25340."
                    ]
                },
                {
                    heading: "Professional regulations",
                    paragraphs: [
                        "Federal Lawyers' Act (BRAO), Code of Conduct for Lawyers (BORA), Specialist Lawyers' Regulations (FAO), Lawyers' Remuneration Act (RVG), Code of Conduct for European Lawyers (CCBE). Available at www.brak.de."
                    ]
                },
                {
                    heading: "Professional indemnity insurance",
                    paragraphs: [
                        "[Placeholder: insurer, address, territorial scope]"
                    ]
                },
                {
                    heading: "VAT identification number",
                    paragraphs: [
                        "[Placeholder: VAT ID pursuant to § 27a UStG]"
                    ]
                },
                {
                    heading: "Dispute resolution",
                    paragraphs: [
                        "The European Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr. Regarding participation in dispute resolution proceedings before a consumer arbitration board: [Placeholder: willing / not willing]."
                    ]
                }
            ]
        },
        datenschutz: {
            eyebrow: "Legal",
            title: "Privacy notice",
            lead: "Information on the processing of personal data pursuant to Art. 13 GDPR. The binding version is the German one.",
            sections: [
                {
                    heading: "1. Controller",
                    paragraphs: [
                        "Meral Gören, Rechtsanwältin, R1 2-3, 68161 Mannheim, phone 06201 84 57 95, email anwalt@kanzlei-goeren.de."
                    ]
                },
                {
                    heading: "2. Hosting and server log files",
                    paragraphs: [
                        "When you access the website, the host [Placeholder: host] automatically processes your IP address, the time of access, the page requested and your browser. Legal basis: Art. 6(1)(f) GDPR (secure operation)."
                    ]
                },
                {
                    heading: "3. Contact form and email",
                    paragraphs: [
                        "The details from the contact form (name, email, phone, area of law, message) are processed in order to handle your enquiry and are sent to the office by email. Legal basis: Art. 6(1)(b) GDPR together with your consent (Art. 6(1)(a)). Deleted once the enquiry is concluded, provided no engagement follows and no retention obligations apply."
                    ]
                },
                {
                    heading: "4. WhatsApp",
                    paragraphs: [
                        "If you get in touch via WhatsApp, WhatsApp Ireland Ltd. processes your data under its own terms. Please do not send confidential case material over WhatsApp."
                    ]
                },
                {
                    heading: "5. Cookies",
                    paragraphs: [
                        "Technically necessary cookies are set on the basis of § 25(2) TDDDG. Optional statistics cookies are set only with your consent (§ 25(1) TDDDG, Art. 6(1)(a) GDPR). You can change your choice at any time via the cookie banner. [Placeholder: services used]"
                    ]
                },
                {
                    heading: "6. Your rights",
                    paragraphs: [
                        "You have the right of access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR), as well as the right to lodge a complaint with a supervisory authority, for example the State Commissioner for Data Protection of Baden-Württemberg."
                    ]
                }
            ]
        }
    }
};
