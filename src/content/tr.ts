import type { Dictionary } from "./types";

export const tr: Dictionary = {
    meta: {
        title: "Gören Hukuk Bürosu – Mannheim | Almanca & Türkçe",
        description: "Mannheim'da Gören Hukuk Bürosu: Sizin hakkınızı arıyoruz – medeni hukuk, iş hukuku, yabancılar hukuku, aile hukuku ve trafik hukukunda, mahkemede ve mahkeme dışında, Almanca ve Türkçe.",
        locale: "tr_TR"
    },
    cta: "Danışmanlık talep et",
    menuLabel: "Menü",
    navLabel: "Ana menü",
    languageLabel: "Dil",
    nav: {
        home: "Ana Sayfa",
        about: "Kişiye dair",
        areas: "Hukuk Alanları",
        blog: "Blog",
        contact: "İletişim"
    },
    hero: {
        label: "Avukat Meral Gören · Mannheim",
        title: {
            lead: "Sizin hakkınızı",
            accent: "arıyoruz."
        },
        text: "Görevimiz, sizi eksiksiz ve en iyi şekilde bilgilendirmek; çıkarlarınızı mahkemede ve mahkeme dışında temsil etmektir – Almanca ve Türkçe.",
        whatsapp: "WhatsApp'tan ulaşın"
    },
    areas: {
        label: "Hukuk Alanları",
        title: "Beş uzmanlık alanı. Tek muhatap.",
        text: "Sizi beş hukuk alanında temsil ediyoruz, kişisel, anlaşılır ve iki dilde.",
        more: "Daha fazla bilgi",
        moreTo: "Daha fazla bilgi:",
        ctaText: "Konunuzun hangi hukuk alanına girdiğinden emin değil misiniz? Çekinmeden sorun.",
        items: [
            {
                slug: "zivilrecht",
                num: "01",
                title: "Genel Medeni Hukuk",
                text: "Sözleşmeler, alacaklar, satış hukuku, kira hukuku, tazminat.",
                lead: "Kişiler arası veya şirketlerle sözleşmeler, alacaklar ve uyuşmazlıklar.",
                topics: [
                    "Sözleşme incelemesi ve hazırlanması",
                    "Alacak ve ihtarname",
                    "Satış hukuku ve ayıp",
                    "Kira hukuku",
                    "Tazminat",
                    "Sulh görüşmeleri"
                ],
                how: "Belgelerinizi inceler, olasılık ve masrafları değerlendirir, sizi mahkeme dışında veya mahkemede temsil ederiz.",
                illustration: "/images/areas/zivilrecht.webp",
                headline: "Sözleşmeler, alacaklar ve uyuşmazlıklar – sonuca.",
                intro: "Medeni hukuk, kişiler ile şirketler arasındaki hukuki ilişkileri düzenler: yerine getirilmesi gereken sözleşmeler, hak ettiğiniz para ve net bir cevap gerektiren uyuşmazlıklar.",
                chips: [
                    "Sözleşme hukuku",
                    "Alacak ve tahsilat",
                    "Kira ve satış hukuku"
                ],
                services: [
                    {
                        icon: "document",
                        title: "Sözleşme incelemesi ve hazırlanması",
                        text: "Sözleşmenizi imzadan önce inceler ya da uyuşmazlık halinde ayakta kalacak şekilde hazırlarız."
                    },
                    {
                        icon: "euro",
                        title: "Alacak ve ihtar",
                        text: "Ödenmemiş faturaları takip ederiz – mahkeme dışında, icra yoluyla veya dava ile."
                    },
                    {
                        icon: "scale",
                        title: "Satış hukuku ve ayıp",
                        text: "Satılan malda ayıp varsa; onarım, dönme, indirim ve tazminat seçeneklerini netleştiririz."
                    },
                    {
                        icon: "home",
                        title: "Kira hukuku",
                        text: "Ayıplar, yan giderler, fesih, tahliye – kiracı için de kiraya veren için de."
                    },
                    {
                        icon: "shield",
                        title: "Tazminat",
                        text: "Zararınızı hesaplar ve karşı tarafa ya da sigortasına karşı ileri süreriz."
                    },
                    {
                        icon: "handshake",
                        title: "Mahkeme dışı anlaşma",
                        text: "Sağlam bir sulh çoğu zaman karardan daha hızlı ve daha ucuzdur. Sizin adınıza müzakere ederiz."
                    }
                ],
                highlight: {
                    eyebrow: "KİRA İNDİRİMİ",
                    title: "Kirayı hangi durumlarda azaltabilirsiniz",
                    text: "Küf, kombi arızası, inşaat gürültüsü: Ayıp varsa kira kanun gereği kendiliğinden azalır. Fazla indirim yapan ise tahliye riskiyle karşılaşır – sıralama önemlidir.",
                    postSlug: "mietminderung-maengel"
                }
            },
            {
                slug: "arbeitsrecht",
                num: "02",
                title: "İş Hukuku",
                text: "Fesih, ihtar, iş sözleşmesi, ücret ve izin alacakları.",
                lead: "İşe iadeden hesaplaşmaya – iş hukuku sorunlarında süreler genellikle kısadır.",
                topics: [
                    "İşe iade davası",
                    "İhtar",
                    "İş sözleşmesi ve ikale",
                    "Ücret ve izin alacakları",
                    "Bonservis",
                    "İşletmesel nedenle fesih"
                ],
                how: "Fesihte dava süresi, bildirimin ulaşmasından itibaren üç haftadır. Önce süreyi, sonra geçerliliği inceleriz – ve hedefinizin işe iade mi yoksa tazminat mı olduğunu netleştiririz.",
                illustration: "/images/areas/arbeitsrecht.webp",
                headline: "Fesih, tazminat, bonservis – ve süre işliyor.",
                intro: "İş hukuku sorunları çoğu zaman birkaç hafta içinde belirlenir. İşe iade, ikale veya ücret alacağı; durumunuzu ne kadar erken değerlendirirsek o kadar çok yol açık kalır.",
                chips: [
                    "İşe iade",
                    "İkale ve tazminat",
                    "Ücret, izin, bonservis"
                ],
                services: [
                    {
                        icon: "clock",
                        title: "İşe iade davası",
                        text: "Dava süresi, bildirimin ulaşmasından itibaren üç haftadır. Önce süreyi, sonra feshin geçerliliğini inceleriz."
                    },
                    {
                        icon: "document",
                        title: "İhtar",
                        text: "İhtarın haklı olup olmadığını inceler, haksız ihtarlara itiraz eder ve gerekirse özlük dosyasından çıkarılmasını sağlarız."
                    },
                    {
                        icon: "handshake",
                        title: "İş sözleşmesi ve ikale",
                        text: "İmzadan önce: koşulları değerlendirir, değerse yeniden müzakere ederiz."
                    },
                    {
                        icon: "euro",
                        title: "Ücret ve izin alacakları",
                        text: "Ödenmemiş ücret, fazla mesai, kullanılmayan izin – haklarınızı süresi içinde ileri süreriz."
                    },
                    {
                        icon: "file-check",
                        title: "Bonservis",
                        text: "Bonservis iyi niyetli ve doğru olmalıdır. İfadeleri inceler, düzeltme talep ederiz."
                    },
                    {
                        icon: "shield",
                        title: "İşletmesel nedenle fesih",
                        text: "Sosyal seçim, uzlaşma, sosyal plan: Feshin bunlara dayanıp dayanmadığını inceleriz."
                    }
                ],
                highlight: {
                    eyebrow: "FESİHTEN SONRA",
                    title: "İlk üç hafta belirleyicidir",
                    text: "Feshin ulaşmasından itibaren işe iade davası için üç haftalık süre işler. Bu süre kaçırılırsa fesih baştan itibaren geçerli sayılır – ne kadar sakat olduğuna bakılmaksızın.",
                    postSlug: "kuendigung-drei-wochen"
                }
            },
            {
                slug: "auslaenderrecht",
                num: "03",
                title: "Yabancılar Hukuku",
                text: "Oturma izni, vatandaşlık, aile birleşimi, süresiz oturma izni.",
                lead: "Oturma, vatandaşlık ve aile birleşimi – süreler ve eksiksiz belgelerle yürüyen süreçler.",
                topics: [
                    "Oturma izni ve uzatma",
                    "Vatandaşlık",
                    "Aile birleşimi",
                    "Vize ve süresiz oturma izni",
                    "Sınır dışı ve ihraç",
                    "Taahhütname"
                ],
                how: "Önce statünüzü ve yetkili makamları netleştirir, belgeleri eksiksiz hazırlar ve yabancılar dairesi nezdinde size eşlik ederiz – Almanca ve Türkçe.",
                illustration: "/images/areas/auslaenderrecht.webp",
                headline: "Oturma, vatandaşlık ve aile birleşimi.",
                intro: "Yabancılar hukukunda hazırlık belirleyicidir. Eksiksiz belgeler, doğru makam, kaçırılmayan süre: Statünüzü netleştirir ve süreç boyunca yanınızda oluruz – Almanca ve Türkçe.",
                chips: [
                    "Oturma izni",
                    "Vatandaşlık",
                    "Aile birleşimi"
                ],
                services: [
                    {
                        icon: "file-check",
                        title: "Oturma izni ve uzatma",
                        text: "Verilme, uzatma, oturma amacının değiştirilmesi – başvuruyu eksiksiz ve gerekçeli hazırlarız."
                    },
                    {
                        icon: "shield",
                        title: "Vatandaşlık",
                        text: "2024 reformundan bu yana kısaltılmış süre geçerli. Koşullarınızı inceler, başvuruyu hazırlarız."
                    },
                    {
                        icon: "handshake",
                        title: "Aile birleşimi",
                        text: "Eş ve çocuk birleşimi: Dil şartı, konut ve geçim koşullarını önceden netleştiririz."
                    },
                    {
                        icon: "globe",
                        title: "Vize ve süresiz oturma izni",
                        text: "Ulusal vizeden süresiz oturma iznine kadar – dosyanız için doğru yolu değerlendiririz."
                    },
                    {
                        icon: "document",
                        title: "Sınır dışı ve ihraç",
                        text: "İhraç, sınır dışı bildirimi veya giriş yasağı durumunda kısa sürede ve acil hukuki koruma ile hareket ederiz."
                    },
                    {
                        icon: "euro",
                        title: "Taahhütname",
                        text: "Bir taahhütname vermeden önce kapsamını ve risklerini inceleriz."
                    }
                ],
                highlight: {
                    eyebrow: "VATANDAŞLIK 2026",
                    title: "Şu anda hangi koşullar geçerli",
                    text: "Reformdan sonra kural olarak beş yıllık yasal ikamet yeterli oluyor ve mevcut vatandaşlıktan çoğu zaman vazgeçilmesi gerekmiyor. En sık takılınan nokta güvenceli geçim şartıdır.",
                    postSlug: "einbuergerung-2026"
                }
            },
            {
                slug: "familienrecht",
                num: "04",
                title: "Aile Hukuku",
                text: "Boşanma, nafaka, velayet ve kişisel ilişki kurma hakkı, evlilik sözleşmesi.",
                lead: "Ayrılık, boşanma, nafaka ve çocuklar – gerektiğinde Alman ve Türk hukuku birlikte değerlendirilir.",
                topics: [
                    "Boşanma",
                    "Ayrılık ve çocuk nafakası",
                    "Velayet ve kişisel ilişki",
                    "Edinilmiş mal ve mal paylaşımı",
                    "Evlilik sözleşmesi",
                    "Yabancı kararların tanınması"
                ],
                how: "Aile davaları sakinlik ve net adımlar gerektirir. Önce hangi hukukun uygulanacağını, sonra yolu netleştiririz.",
                illustration: "/images/areas/familienrecht.webp",
                headline: "Ayrılık, boşanma, nafaka ve çocuklar.",
                intro: "Aile davaları soğukkanlılık gerektirir. Önce hangi hukukun uygulanacağını – Alman, Türk ya da her ikisi – ardından izlenecek yolu netleştiririz.",
                chips: [
                    "Boşanma",
                    "Nafaka",
                    "Velayet ve kişisel ilişki"
                ],
                services: [
                    {
                        icon: "document",
                        title: "Boşanma",
                        text: "Ayrılık yılından dilekçeye ve duruşmaya kadar – Türkiye bağlantılı durumlar dahil."
                    },
                    {
                        icon: "euro",
                        title: "Ayrılık ve çocuk nafakası",
                        text: "Nafakayı Düsseldorf Tablosu'na göre hesaplar, takip eder ya da fahiş taleplere karşı savunuruz."
                    },
                    {
                        icon: "home",
                        title: "Velayet ve kişisel ilişki",
                        text: "Günlük bakım, kişisel ilişki düzeni, çocuğun üstün yararı – gerekirse aile mahkemesinde, kalıcı çözümü ararız."
                    },
                    {
                        icon: "scale",
                        title: "Edinilmiş mal ve mal paylaşımı",
                        text: "Katılma alacağını belirler; taşınmaz, hesaplar ve ev eşyasının akıbetini netleştiririz."
                    },
                    {
                        icon: "file-check",
                        title: "Evlilik sözleşmesi",
                        text: "Evlilikten önce veya sonra: sonradan yapılacak bir denetime dayanacak bir sözleşme hazırlarız."
                    },
                    {
                        icon: "globe",
                        title: "Yabancı kararların tanınması",
                        text: "Türkiye'de verilen bir boşanma Almanya'da kendiliğinden geçerli olmaz. Tanınmasını sağlarız."
                    }
                ],
                highlight: {
                    eyebrow: "TÜRKİYE BAĞLANTILI BOŞANMA",
                    title: "Hangi hukuk uygulanır?",
                    text: "Türkiye bağlantılı bir boşanmada, hangi hukukun uygulanacağı – ve bir Alman kararının Türkiye'de tanınmasının gerekip gerekmediği – çoğu şeyi belirler.",
                    postSlug: "scheidung-tuerkei"
                }
            },
            {
                slug: "verkehrsrecht",
                num: "05",
                title: "Trafik Hukuku",
                text: "İdari para cezası, sürüş yasağı, kaza tasfiyesi ve tazminat.",
                lead: "Bir kazadan veya para cezası kararından sonra çoğu zaman ne kadar hızlı hareket edildiği belirleyicidir.",
                topics: [
                    "Para cezası kararı ve ceza puanı",
                    "Sürüş yasağı ve ehliyet",
                    "Kaza tasfiyesi",
                    "Maddi ve manevi tazminat",
                    "Sigortayla uyuşmazlık",
                    "Trafik ceza hukuku"
                ],
                how: "Para cezası kararına itiraz için yalnızca iki haftanız var. Kazadan sonra, siz bir şey imzalamadan önce sorumluluğu, ekspertiz raporunu ve sigortanın teklifini inceleriz.",
                illustration: "/images/areas/verkehrsrecht.webp",
                headline: "Para cezası, sürüş yasağı, kaza – hızlı hareket.",
                intro: "Bir kazadan veya para cezası kararından sonra çoğu zaman ne kadar hızlı hareket ettiğiniz belirleyicidir. Para cezası kararına itiraz için yalnızca iki haftanız var.",
                chips: [
                    "Ceza & sürüş yasağı",
                    "Kaza tasfiyesi",
                    "Trafik ceza hukuku"
                ],
                services: [
                    {
                        icon: "clock",
                        title: "Para cezası kararı ve puan",
                        text: "İki hafta içinde itiraz. Ölçümü, tebligatı ve usulü hatalar açısından inceleriz."
                    },
                    {
                        icon: "shield",
                        title: "Sürüş yasağı ve ehliyet",
                        text: "Sürüş yasağının önlenip önlenemeyeceğini inceler, ehliyetin yeniden verilmesi sürecine eşlik ederiz."
                    },
                    {
                        icon: "euro",
                        title: "Kaza tasfiyesi",
                        text: "Zararı bildirir, ekspertiz raporunu ve sigortanın teklifini inceler, tam alacağınızı takip ederiz."
                    },
                    {
                        icon: "file-check",
                        title: "Maddi ve manevi tazminat",
                        text: "Onarım, değer kaybı, ikame araç, manevi tazminat – her kalemi ayrı ayrı hesaplarız."
                    },
                    {
                        icon: "scale",
                        title: "Kfz sigortasıyla uyuşmazlık",
                        text: "Sigorta kısıntı yapar ya da reddederse sizi temsil ederiz – mahkeme dışında ve mahkemede."
                    },
                    {
                        icon: "document",
                        title: "Trafik ceza hukuku",
                        text: "Alkollü araç kullanma, kaza sonrası kaçma veya tehlikeye atmada ehliyet ve ceza söz konusudur. Sizi savunuruz."
                    }
                ],
                highlight: {
                    eyebrow: "KAZADAN SONRA",
                    title: "Aceleyle hiçbir şey imzalamayın",
                    text: "Karşı tarafın sigortasının ibra beyanını imzalamadan önce sorumluluk, ekspertiz raporu ve teklif incelenmiş olmalıdır. Sonrasında çoğu zaman ek talep mümkün olmaz.",
                    postSlug: "bussgeldbescheid-einspruch"
                }
            }
        ]
    },
    about: {
        label: "Kişiye dair",
        title: "Alman hukukunda avukat, ana dilinizde danışmanlık",
        p1: "Meral Gören, Türk kökenli Alman vatandaşıdır. Heidelberg Ruprecht-Karls Üniversitesi'nde hukuk okumuş ve 2005 yılında birinci hukuk devlet sınavını vermiştir.",
        p2: "Heidelberg Eyalet Mahkemesi'nde iki yıllık avukatlık stajının ardından, 6 Haziran 2008'den bu yana avukatlık ruhsatına sahiptir ve tüm sulh, asliye ve istinaf mahkemelerinde temsil yetkilidir.",
        background: "Tüm hukuki sorularınızda size danışmanlık verir ve sizi temsil ederiz – başta genel medeni hukuk, iş hukuku, yabancılar hukuku, aile hukuku ve trafik hukuku olmak üzere, Almanca ve Türkçe.",
        cta: "İletişime geçin",
        more: "Kişiye dair",
        page: {
            lead: "Mannheim'da, Alman mahkemelerinde sizi temsil eden ve ana dilinizde danışmanlık veren avukat",
            wordmark: "Meral Gören",
            pull: {
                before: "Görevimiz, ",
                mark: "sizi eksiksiz ve en iyi şekilde bilgilendirmek",
                after: " ve çıkarlarınızı mahkemede ve mahkeme dışında temsil etmektir."
            },
            facts: [
                {
                    value: "2",
                    label: "Dil — Almanca & Türkçe"
                },
                {
                    value: "5",
                    label: "Hukuk alanı"
                },
                {
                    value: "2008",
                    label: "Avukatlık ruhsatı"
                },
                {
                    value: "Mannheim",
                    label: "Büro"
                }
            ],
            closingTitle: "Durumunuzu bize anlatın",
            sections: [
                {
                    heading: "Hakkında",
                    body: [
                        "Meral Gören, Türk kökenli Alman vatandaşıdır. Heidelberg Ruprecht-Karls Üniversitesi'nde hukuk okumuş ve 2005 yılında birinci hukuk devlet sınavını vermiştir.",
                        "Ardından Heidelberg Eyalet Mahkemesi'nde iki yıllık avukatlık stajını tamamlamıştır. 6 Haziran 2008'den bu yana avukatlık ruhsatına sahiptir."
                    ],
                    image: "/images/about/profil.webp"
                },
                {
                    heading: "Baro kaydı ve yetki",
                    body: [
                        "Almanya Federal Cumhuriyeti'nde avukatlık ruhsatına sahip; tüm sulh, asliye ve istinaf mahkemelerinde temsil yetkilidir.",
                        "Bağlı olduğu baro: Karlsruhe Barosu (Rechtsanwaltskammer Karlsruhe)."
                    ],
                    image: "/images/about/zulassung.webp"
                },
                {
                    heading: "Yaklaşımımız",
                    body: [
                        "Görevimiz, sizi eksiksiz ve en iyi şekilde bilgilendirmek ve çıkarlarınızı mahkemede ve mahkeme dışında olabildiğince iyi temsil etmektir.",
                        "Çalışmamız; yetkinlik, kararlılık ve özenle öne çıkar. Anlaşılır bir dil kullanır, her adımda sizi bilgilendiririz."
                    ],
                    image: "/images/about/anspruch.webp"
                },
                {
                    heading: "Hukuk alanları",
                    body: [
                        "Tüm hukuki sorularınızda bize danışabilirsiniz – başta genel medeni hukuk, iş hukuku, yabancılar hukuku, aile hukuku ve trafik hukuku olmak üzere, Almanca ve Türkçe.",
                        "Türk hukukuna giren konularda Mannheim'daki Doğru Kanzlei ile birlikte çalışırız."
                    ],
                    image: "/images/about/taetigkeit.webp"
                }
            ],
            asideText: "Tüm hukuki sorularınızda bize danışabilirsiniz – Almanca ya da Türkçe."
        }
    },
    why: {
        label: "Sizi ne bekliyor",
        title: "Neden bizim büromuz?",
        ctaText: "Sizin için doğru büro gibi mi görünüyor?",
        items: [
            {
                title: "Almanca ve Türkçe",
                text: "Görüşmeler ve yazışmalar iki dilde – tercümansız."
            },
            {
                title: "Kişisel takip",
                text: "Dosyanız ilk görüşmeden sonuca kadar tek elde kalır."
            },
            {
                title: "Mannheim'da büro",
                text: "R1 2-3, 68161 Mannheim. Yüz yüze veya telefonla randevu."
            },
            {
                title: "Açık iletişim",
                text: "Anlaşılır değerlendirme, şeffaf ücretler, açıklamasız hukuk jargonu yok."
            }
        ]
    },
    reviews: {
        label: "Değerlendirmeler",
        title: "Danışanlarımız ne diyor",
        note: "Büro değerlendirmelerinden.",
        items: [
            { quote: "Ich bin mit der Beratung von Frau Meral Gören sehr zufrieden. Sie war freundlich, professionell und hat sich Zeit genommen, alles verständlich zu erklären. Ich habe mich sehr gut aufgehoben gefühlt und kann sie definitiv weiterempfehlen.", name: "Müvekkil", context: "Değerlendirme" },
            { quote: "Frau Gören ist sehr kompetent und zuverlässig. Die Kommunikation war schnell und unkompliziert, und meine Fragen wurden immer ausführlich beantwortet. Vielen Dank für die tolle Unterstützung!", name: "Müvekkil", context: "Değerlendirme" },
            { quote: "Eine sehr positive Erfahrung mit Frau Meral Gören. Sie arbeitet professionell, ist sehr sympathisch und geht aufmerksam auf ihre Kunden ein. Ich würde mich jederzeit wieder an sie wenden und kann sie uneingeschränkt empfehlen.", name: "Müvekkil", context: "Değerlendirme" }
        ]
    },
    blog: {
        label: "Blog",
        title: "Güncel Yazılar",
        all: "Tüm yazılar",
        more: "Devamını oku",
        moreTo: "Devamını oku:",
        posts: [
            {
                slug: "erbfall-tuerkei",
                areaSlug: "zivilrecht",
                category: "Medeni Hukuk",
                iso: "2026-09-12",
                date: "12 Eylül 2026",
                title: "Türkiye bağlantılı miras: Hangi hukuk uygulanır?",
                excerpt: "Alman mı Türk miras hukuku mu? 1929 tarihli Tereke Sözleşmesi'nin AB Miras Tüzüğü'ne neden üstün geldiği ve Türkiye'deki taşınmazlar için ne anlama geldiği.",
                ctaLine: "Türkiye bağlantılı bir miras dosyası sıralama hatasını affetmez: Hukuki durumu netleştirmeden reddeden ya da tapuda devir yaptıran kişi, bunu sonradan nadiren düzeltebilir.",
                body: [
                    "Hem Almanya hem Türkiye ile bağlantılı bir miras olayında tek bir miras hukuku değil, kural olarak iki hukuk yan yana uygulanır. Belirleyici olan Alman-Türk Tereke Sözleşmesi'dir: Taşınmazlarda taşınmazın bulunduğu devletin hukuku, taşınırlarda ise ölen kişinin vatandaşı olduğu devletin hukuku geçerlidir.",
                    "Pek çok rehberin yanıldığı nokta tam burasıdır. 2015'ten bu yana AB Miras Tüzüğü, kural olarak son mutat meskenin hukukunun uygulanacağını öngörür. Alman-Türk miras olaylarında bu kural geçerli değildir: Tüzük, daha önceki ikili anlaşmaları açıkça saklı tutar ve Alman-Türk sözleşmesi bunlardan biridir.",
                    "Pratikte şu anlama gelir: Kırk yıldır Mannheim'da yaşayan ve İzmir'de bir dairesi olan bir Türk vatandaşı, o daireyi Türk hukukuna göre miras bırakır – tüm hayatı Almanya'da geçmiş olsa bile. Almanya'daki banka hesabını da Türk hukukuna göre bırakır, çünkü hesap taşınırdır ve kendisi Türk vatandaşıdır. Buna karşılık Mannheim'daki evi Alman hukukuna tabidir.",
                    {
                        note: "Önemli: Alman-Türk Tereke Sözleşmesi, AB Miras Tüzüğü'ne üstün gelir. Planını mutat mesken esasına dayandıran kişi, yürürlükteki hukukun yanından geçmiş olur – saklı paylar, vasiyetname düzenlemesi ve hangi mahkemenin yetkili olduğu bakımından sonuçlarıyla birlikte."
                    },
                    {
                        h2: "Alman-Türk Tereke Sözleşmesi – temel kural"
                    },
                    "Sözleşme, 28 Mayıs 1929 tarihli Alman-Türk Konsolosluk Anlaşması'nın 20. maddesine ekli metindir; İkinci Dünya Savaşı'ndan sonra 29 Mayıs 1952'de yeniden yürürlüğe konmuştur. Bir devletler hukuku anlaşmasıdır ve her iki devletin iç kanunlar ihtilafı kurallarına üstün gelir.",
                    "Temel kural şudur:",
                    {
                        list: [
                            "Taşınmaz mallar – arsa, daire, ev: Taşınmazın bulunduğu devletin hukuku uygulanır. Almanya'daki taşınmaz için Alman hukuku, Türkiye'deki taşınmaz için Türk hukuku.",
                            "Taşınır mallar – banka hesapları, araçlar, ev eşyası, alacaklar, şirket payları: Ölen kişinin ölüm anındaki vatandaşlığının hukuku uygulanır."
                        ]
                    },
                    {
                        h3: "Tereke bölünmesi tam olarak ne demek"
                    },
                    "Tereke, her biri kendi kurallarına tabi iki ayrı mal kütlesine ayrılır. O zaman tek bir miras payı değil, iki pay söz konusu olur – ve bunlar farklı çıkabilir. Bir kütlede mirasçı olan kişi, diğerinde zorunlu olarak aynı oranda mirasçı değildir.",
                    "Bu durum neredeyse her şeyi etkiler: yasal mirasçılığı, saklı pay taleplerini, vasiyetnamenin geçerliliğini ve bankalar ile tapu müdürlüklerinin hangi belgeleri isteyeceğini.",
                    {
                        h2: "Çifte vatandaşlık – en sık karşılaşılan özel durum"
                    },
                    "2024 vatandaşlık reformundan bu yana çifte vatandaşlık asıl kuraldır. Böylece ölen kişinin her iki vatandaşlığa da sahip olduğu miras olaylarının sayısı artmaktadır – ve sözleşme taşınırlar bakımından tam da vatandaşlığa bağlanmaktadır.",
                    "Bu durumda hangi vatandaşlığın esas alınacağı basit bir soru değildir ve defalarca yargı kararlarına konu olmuştur. İki pasaporta sahip olan kişi bunu belirsiz bırakmamalıdır: Bu soru, sonuçta tüm taşınır malların hangi hukuka göre intikal edeceğini belirler.",
                    {
                        h2: "Hangi belgeler gerekir – Erbschein mi, veraset ilamı mı"
                    },
                    "Avrupa Miras Belgesi burada işe yaramaz, çünkü Türkiye AB Miras Tüzüğü'ne taraf değildir. Uygulamada:",
                    {
                        list: [
                            "Almanya'daki taşınmazlar için mirasçıların bir Alman mirasçılık belgesine – Erbschein – ihtiyacı vardır. Tapu dairesi bu belge olmadan devir yapmaz.",
                            "Bir Türk vatandaşı Almanya'da yalnızca taşınır mal bırakmışsa, bir veraset ilamı yeterli olabilir. Ancak bu belgenin yetkili Türk temsilciliği aracılığıyla onaylanması ya da apostilli olması ve yeminli tercümesinin bulunması gerekir.",
                            "Türkiye'deki taşınmazlar için tapuda devir gerekir; burada Türk hukuku ve Türk usulü geçerlidir."
                        ]
                    },
                    "Her iki tarafın da diğer taraftan belge isteyeceğini hesaba katın: ölüm belgesi, vukuatlı nüfus kayıt örneği, vatandaşlığa ilişkin belgeler – her biri tercüme ve tasdik edilmiş olarak.",
                    {
                        h2: "Süreler – ve burada neden tehlikeli oldukları"
                    },
                    {
                        table: {
                            caption: "Sürelerin karşılaştırması: Almanya ve Türkiye",
                            head: [
                                "İşlem",
                                "Almanya",
                                "Türkiye"
                            ],
                            rows: [
                                [
                                    "Mirasın reddi",
                                    "Öğrenmeden itibaren 6 hafta; ölen kişinin son ikametgâhı yalnızca yurt dışındaysa veya mirasçı süre başlangıcında yurt dışındaysa 6 ay (§ 1944 BGB)",
                                    "Öğrenmeden itibaren 3 ay (TMK m. 606)"
                                ],
                                [
                                    "Kısmi ret",
                                    "mümkün değil",
                                    "mümkün değil"
                                ],
                                [
                                    "Vergi dairesine bildirim",
                                    "kural olarak 3 ay içinde (§ 30 ErbStG)",
                                    "Türk hukukuna göre kendi süreleri"
                                ]
                            ]
                        }
                    },
                    "§ 1944 BGB'deki altı aylık uzatılmış süre tam da bu tür olaylarda asıl haldir ve sıklıkla gözden kaçar – her iki yönde de. Bazı mirasçılar yalnızca altı haftaları olduğunu sanıp aceleyle hareket eder; bazıları ise koşulları oluşmadığı hâlde altı aya güvenir.",
                    "Ayrıca dikkat edin: Ret her zaman terekenin tamamını kapsar. Türkiye'deki borca batık taşınmazı reddedip Almanya'daki banka hesabını alıkoyamazsınız.",
                    {
                        h2: "Saklı pay – sistemler birbirinden ayrılır"
                    },
                    "Saklı pay bakımından da iki hukuk düzeni ayrışır ve tereke bölündüğünde her ikisi yan yana uygulanır.",
                    "Türk hukukunda yasal miras payları belirli ölçüde bağlıdır: Altsoy yasal miras payının yarısı ile, ana baba dörtte biri ile korunur; sağ kalan eşe ise yasal miras payının tamamı saklı pay olarak tanınır. Alman hukukundaki saklı pay ise yasal miras payının yarısı tutarında salt bir para alacağıdır.",
                    "Her iki mal kütlesini de kapsaması istenen bir vasiyetname düzenleyen kişi, bu nedenle her iki saklı pay düzenini birlikte düşünmek zorundadır. Alman hukukuna göre kusursuz olan bir vasiyetname, Türk kütlesi bakımından sakatlanabilir.",
                    {
                        h2: "Veraset vergisi – ve çifte vergilendirme riski"
                    },
                    "Almanya ile Türkiye arasında veraset vergisi bakımından bir çifte vergilendirmeyi önleme anlaşması yoktur. Her iki devlet de aynı intikali vergilendirebilir; yabancı verginin mahsubu ancak iç hukukun izin verdiği ölçüde söz konusu olur.",
                    "§ 16 ErbStG uyarınca Almanya'daki kişisel istisna tutarları hâlen şunlardır:",
                    {
                        table: {
                            caption: "§ 16 ErbStG uyarınca kişisel istisna tutarları (2026 itibarıyla)",
                            head: [
                                "Mirasçı",
                                "İstisna tutarı"
                            ],
                            rows: [
                                [
                                    "Eş veya tescilli birlikte yaşayan",
                                    "500.000 € ve ayrıca 256.000 € geçim istisnası"
                                ],
                                [
                                    "Çocuklar ve üvey çocuklar",
                                    "400.000 €"
                                ],
                                [
                                    "Torunlar",
                                    "200.000 €"
                                ],
                                [
                                    "Ana baba ve büyükanne/büyükbaba, ölüme bağlı intikalde",
                                    "100.000 €"
                                ]
                            ]
                        }
                    },
                    "I. vergi sınıfında oranlar yüzde 7 ile yüzde 30 arasındadır. Türkiye bağlantılı aileler için önemli olan nokta: Bu istisnalar tam tutarıyla yalnızca tam mükellefiyet hâlinde kullanılabilir. Ne miras bırakanın ne de mirasçının Almanya'da yerleşik olmadığı hâllerde dar mükellefiyet devreye girer ve yalnızca Almanya'daki malvarlığı kavranır – sonuçları belirgin biçimde daha dardır. Tam mı yoksa dar mükellef mi olduğunuz erken incelenmelidir.",
                    {
                        h2: "Önce ne yapmalısınız"
                    },
                    {
                        list: [
                            "Belgeleri toplayın: ölüm belgesi, her iki taraftan kimlik ve vatandaşlık belgeleri, Türkiye'den vukuatlı nüfus kayıt örneği.",
                            "Malvarlığının bir dökümünü çıkarın; taşınır ve taşınmaz ayrımına ve bulundukları ülkeye göre ayırın – sonraki her değerlendirmenin temeli budur.",
                            "Ölen kişinin ölüm anındaki vatandaşlığını netleştirin.",
                            "Vasiyetname olup olmadığını araştırın – Almanya'da, Türkiye'de ya da her ikisinde.",
                            "Herhangi bir belge imzalamadan ya da tereke malını zilyetliğinize almadan önce ret süresini netleştirin."
                        ]
                    },
                    {
                        h2: "Nasıl ilerliyoruz"
                    },
                    "Kural olarak önce hangi mal kütlelerinin oluştuğunu ve hangi kütleye hangi hukukun uygulanacağını netleştiriyoruz. Miras payları, saklı paylar ve gerekli belgeler ancak bundan sonra anlamlı biçimde belirlenebiliyor. Size bu süreçte Almanca ve Türkçe danışmanlık veriyoruz. Türk hukukuna göre değerlendirilmesi gereken sorular için – örneğin tapuda devir ya da bir Türk mahkemesi önündeki dava – Türk hukuku alanında uzmanlaşmış bir hukuk bürosuyla işbirliği yapıyor, böylece dosyanın her iki tarafını da kapsıyoruz.",
                    {
                        h2: "Sık sorulan sorular"
                    },
                    {
                        faq: [
                            {
                                q: "Türkiye bağlantılı miraslarda AB Miras Tüzüğü uygulanır mı?",
                                a: "Hayır. 1929 tarihli Alman-Türk Tereke Sözleşmesi ikili bir devletler hukuku anlaşmasıdır ve AB Miras Tüzüğü'ne üstün gelir. Bu nedenle belirleyici olan son mutat mesken değil, taşınmaz için bulunduğu yer hukuku ile taşınır için vatandaşlık hukuku ayrımıdır."
                            },
                            {
                                q: "Türkiye'deki bir taşınmaz hangi hukuka göre intikal eder?",
                                a: "Türk hukukuna göre; ölen kişinin nerede yaşadığından ve hangi vatandaşlığa sahip olduğundan bağımsız olarak. Taşınmazlarda her zaman taşınmazın bulunduğu devletin hukuku uygulanır."
                            },
                            {
                                q: "Alman mirasçılık belgesi mi gerekir, veraset ilamı yeterli mi?",
                                a: "Almanya'daki taşınmazlar için Alman mirasçılık belgesi gerekir. Bir Türk vatandaşı Almanya'da yalnızca taşınır mal bırakmışsa veraset ilamı yeterli olabilir; belgenin onaylı ya da apostilli ve yeminli tercümeli olması gerekir."
                            },
                            {
                                q: "Mirası reddetmek için ne kadar sürem var?",
                                a: "Almanya'da öğrenmeden itibaren altı hafta; ancak ölen kişinin son ikametgâhı yalnızca yurt dışındaysa veya süre başlangıcında yurt dışındaysanız altı ay (§ 1944 BGB). Türk hukukunda süre, öğrenmeden itibaren üç aydır."
                            },
                            {
                                q: "Mirası Türkiye'de reddedip Almanya'da kabul edebilir miyim?",
                                a: "Hayır. Kısmi ret ne Alman ne de Türk hukukunda mümkündür. Ret, terekenin tamamını kapsar."
                            },
                            {
                                q: "Çifte vatandaşlıkta ne olur?",
                                a: "Sözleşme taşınırlar bakımından vatandaşlığa bağlandığından, hangi vatandaşlığın esas alınacağı netleştirilmelidir. Bu, somut olaya bağlı bir sorudur ve belirsiz bırakılmamalıdır; çünkü tüm taşınır malvarlığı buna bağlıdır."
                            },
                            {
                                q: "Her iki ülkede de veraset vergisi öder miyim?",
                                a: "Bu mümkündür. Almanya ile Türkiye arasında veraset vergisi bakımından çifte vergilendirmeyi önleme anlaşması bulunmadığından, her iki devlet de aynı intikali vergilendirebilir. Mahsup iç hukuka göre belirlenir ve erkenden incelenmelidir."
                            }
                        ]
                    },
                    "Türkiye bağlantılı bir miras olayı gerçekleştiyse, ölüm belgesini, vatandaşlığa ilişkin belgeleri ve malvarlığının kaba bir dökümünü getirin. Bununla çoğu zaman daha ilk görüşmede terekenin hangi kütlelere ayrıldığı ve önce hangi adımın atılması gerektiği söylenebiliyor."
                ],
                image: "/images/blog/erbrecht.webp"
            },
            {
                slug: "mietminderung-maengel",
                areaSlug: "zivilrecht",
                category: "Medeni Hukuk",
                iso: "2026-09-02",
                date: "2 Eylül 2026",
                title: "Kira indirimi: Kirayı hangi durumlarda azaltabilirsiniz?",
                excerpt: "Küf, kombi arızası, inşaat gürültüsü – hangi ayıp indirim hakkı verir, ne kadar indirim yapılabilir ve neden en güvenli yol „ihtirazi kayıtla\" ödemektir.",
                ctaLine: "Kirayı kesmeden önce oranı değerlendirtin. Bir görüşme yarım saatinizi alır; yüksek tutulmuş bir oran ise evinize mal olabilir.",
                body: [
                    "Konutta bir ayıp varsa, kira kanun gereği kendiliğinden azalır (§ 536 BGB). Bunu ayrıca beyan etmeniz ya da talep etmeniz gerekmez: Ayıp, konutun sözleşmeye uygun kullanımını önemsiz sayılamayacak ölçüde kısıtlıyorsa indirim otomatik olarak devreye girer.",
                    "Ancak uygulamada en pahalıya mal olan hata tam da bu otomatiklikten doğar. Sorun genellikle indirim hakkının kendisi değildir; sorun oranı ve zamanlamasıdır. Kirayı kendi kararıyla fazla kesen kiracı ödeme gecikmesine düşer – ve peteği çalışmayan dairede bu kez tahliye tehdidiyle karşılaşır.",
                    "Kısa cevap şudur: Ayıbı derhal yazılı olarak bildirin, delilleri toplayın ve kirayı önce tam olarak, açıkça „iade talebi saklı kalmak kaydıyla\" ödemeye devam edin. Fazla ödediğiniz tutarı sonradan geri istersiniz. Böylece hiçbir şey kaybetmezsiniz – tahliye riski dışında.",
                    {
                        note: "Önemli: Kirayı fazla kesen kiracı temerrüde düşer. Birikmiş borç iki aylık kirayı bulursa, ev sahibi sözleşmeyi derhal feshedebilir (§ 543 Abs. 2 Nr. 3 BGB). Ayıbın gerçekten var olması sizi bundan korumaz; belirleyici olan, seçtiğiniz indirim oranının mahkeme önünde ayakta kalıp kalmadığıdır."
                    },
                    {
                        h2: "Hukuken „ayıp\" nedir?"
                    },
                    "Konutun fiili durumu sözleşmede kararlaştırılan durumdan sapıyor ve kullanım bu nedenle hissedilir biçimde kısıtlanıyorsa ayıp vardır. Ev sahibinin kusurlu olup olmaması önemli değildir. Kimsenin sorumlu tutulamayacağı bir su borusu patlaması da ayıptır.",
                    "Danışmanlık pratiğinden tipik örnekler:",
                    {
                        list: [
                            "oturma veya yatak odalarında küf, özellikle yapı kusurundan ya da ısı köprüsünden kaynaklanıyorsa",
                            "ısıtma döneminde kombinin arızalanması veya yetersiz kalması",
                            "sızdıran pencereler, cereyan, sürekli nemli duvarlar",
                            "su baskını ve bunun yol açtığı zararlar",
                            "sıcak su, asansör veya sıhhi tesisatın devre dışı kalması",
                            "uzun süren ciddi inşaat gürültüsü – komşu parseldeki şantiyeden kaynaklansa bile",
                            "kira sözleşmesinde yazan metrekarenin belirgin biçimde altında kalan gerçek alan"
                        ]
                    },
                    "Konut dışındaki koşullar da, oturmayı hissedilir ölçüde etkiliyorsa ayıp oluşturabilir. Buna karşılık önemsiz kısıtlamalar dikkate alınmaz: Damlayan bir musluk ya da tek bir gürültülü gece yeterli değildir.",
                    {
                        h2: "Ayıp bildirimi – atlanmaması gereken adım"
                    },
                    "§ 536c BGB uyarınca ayıbı gecikmeksizin bildirmeniz gerekir. Bu bir formalite değil, kiracının asıl yükümlülüğüdür. Bildirimde bulunmazsanız haklarınızı kaybedersiniz; koşullara göre tazminat sorumluluğunuz bile doğabilir – örneğin erken bildirilseydi küçük kalacak bir sızıntı büyük bir nem hasarına dönüştüyse.",
                    "İşe yarar bir ayıp bildirimi dört şey içerir: ayıbın somut tarifi, ortaya çıktığı tarih, giderilmesi talebi ve makul bir süre. „Daire nemli\" diye yazmayın; „yatak odasının dış duvarında, pencerenin solunda yaklaşık 0,5 m² alanda siyah küf oluştu, ilk kez 3 Eylül'de fark edildi\" diye yazın.",
                    "İspatlanabilir bir yol seçin: okundu bilgili e-posta, Einwurf-Einschreiben ya da tanık huzurunda teslim. Telefon görüşmesi hukuken geçerlidir ama uyuşmazlıkta değersizdir, çünkü ispatlayamazsınız.",
                    {
                        h2: "Ayıp kaybolmadan delilleri toplayın"
                    },
                    "Uyuşmazlıkta çoğu zaman kimin haklı olduğu değil, ayıbı ve boyutunu kimin ispatlayabildiği belirleyicidir. Ayıpların kaybolma huyu vardır: Küfün üstü boyanır, şantiye biter, kombi ilkbaharda yeniden çalışır. Bu yüzden hemen ve düzenli olarak belgeleyin.",
                    {
                        list: [
                            "tarihi görünen fotoğraflar ve kısa videolar, mümkünse kadrajda bir ölçü aletiyle",
                            "gürültüde tarih, saat, süre ve türü içeren bir gürültü tutanağı",
                            "ısıtma arızasında günün sabit saatlerinde yapılan, tarihiyle not edilen sıcaklık ölçümleri",
                            "olası tanıkların ad ve adresleri – ziyaretçiler, komşular, ustalar",
                            "ev sahibi ve yönetimle yapılan tüm yazışmalar",
                            "taşınma sırasındaki teslim tutanağı"
                        ]
                    },
                    {
                        h2: "İndirim ne kadar olabilir?"
                    },
                    "Oran, somut olaydaki fiili kısıtlamaya göre ve brüt kira üzerinden belirlenir. İnternette dolaşan indirim tabloları olsa olsa kaba bir fikir verir. Bunlar tek tek mahkeme kararlarının derlemesidir, hukuk kuralı değildir – mahkeme bunlarla bağlı değildir ve sizin dairenizin koşullarına göre karar verir.",
                    "Özellikle şunlar belirleyicidir: hangi odaların etkilendiği ve ne yoğunlukta kullanıldığı, ayıbın ne kadar sürdüğü, gün boyu mu yoksa yalnızca zaman zaman mı ortaya çıktığı ve konutun oturulabilir kalıp kalmadığı. Ocak ayındaki bir kombi arızası, aynı arızanın mayıs ayındaki halinden çok daha ağır basar.",
                    "Bu değerlendirmeyi kimse önceden kesin olarak yapamayacağı için, asıl risk ayıbın kendisi değil, sizin seçtiğiniz orandır.",
                    {
                        h2: "Kira karşısında üç yol"
                    },
                    {
                        table: {
                            caption: "Tespit edilmiş bir ayıpta izlenebilecek yollar ve riskleri",
                            head: [
                                "Yol",
                                "Avantajı",
                                "Riski"
                            ],
                            rows: [
                                [
                                    "Kirayı tam ve kayıtsız ödemeye devam etmek",
                                    "Tahliye riski yok",
                                    "Ayıbı bilerek kayıtsız ödeme yapıldığında iade talebi § 814 BGB uyarınca sonradan reddedilebilir"
                                ],
                                [
                                    "Kirayı tam ödemek, ancak açıkça iade kaydıyla",
                                    "Tahliye riski yok, haklar tümüyle korunur",
                                    "Önce siz ödemiş olursunuz ve tutarı sonradan talep etmeniz gerekir"
                                ],
                                [
                                    "Kirayı kendiliğinden kesmek",
                                    "Anında mali rahatlama",
                                    "Oran yüksek tutulursa temerrüt doğar; iki aylık kira birikince derhal fesih mümkündür"
                                ]
                            ]
                        }
                    },
                    "İhtirazi kaydı açıkça ve yazılı olarak koyun; en iyisi havale açıklamasına yazmak ve ayrıca e-posta ile bildirmektir: „… tarihli yazıyla bildirilen ayıp nedeniyle iade talebi saklı kalmak kaydıyla ödeme\". Zımni bir kayıt yeterli değildir.",
                    {
                        h2: "İndirim hakkının tamamen ortadan kalktığı haller"
                    },
                    "Sözleşme kurulurken ayıbı biliyorsanız (§ 536b BGB) ya da ayıba kendiniz sebep olduysanız indirim hakkı doğmaz – örneğin yanlış ısıtma ve havalandırma davranışının ispatlandığı küf olaylarında. Konutun tesliminde durumu özenle tutanağa bağlamanın bir nedeni de budur.",
                    "Daha az bilinen ikinci hal: Ayıbı bilmesine rağmen kirayı uzun süre kayıtsız ve tam ödeyen kiracı, § 814 BGB nedeniyle iade talebini artık ileri süremeyebilir. Kanun, kayıtsız ödemeyi borçlu olunmayan bir edimin bilerek yerine getirilmesi sayar. İhtirazi kayıt bu yüzden yalnızca bir tedbir değil, ödeme seçeneğinin işlemesini sağlayan asıl unsurdur.",
                    {
                        h3: "Özel durum: komşudaki inşaat gürültüsü"
                    },
                    "Komşu parselden gelen inşaat gürültüsü sık görülen bir uyuşmazlık konusudur. Kısıtlamanın önemli olup olmadığı ve ev sahibinin bunu kaynağına karşı önleyip önleyemeyeceği belirleyicidir. Burada gürültü tutanağı neredeyse vazgeçilmezdir, çünkü rahatsızlığın boyutu sonradan yeniden kurulamaz.",
                    {
                        h2: "Bu tür dosyalarda nasıl ilerliyoruz"
                    },
                    "Kural olarak önce ayıbın ispatlanabilir olup olmadığını ve bildirimin usulüne uygun yapılıp yapılmadığını inceliyoruz; sonraki her şeyi bu belirliyor. Ardından indirimin gerçekçi büyüklüğünü değerlendiriyor, indirimin yanında başka talepler bulunup bulunmadığını – ayıbın giderilmesi, masrafların iadesi veya tazminat gibi – açıklığa kavuşturuyoruz. Belgeleme baştan düzgünse dosya çoğu zaman mahkemeye gitmeden çözülebiliyor.",
                    "Size bu süreçte Almanca ve Türkçe olarak, mahkeme içinde ve dışında danışmanlık veriyor ve sizi temsil ediyoruz.",
                    {
                        h2: "Sık sorulan sorular"
                    },
                    {
                        faq: [
                            {
                                q: "Kira indirimini ev sahibine önceden bildirmem gerekir mi?",
                                a: "İndirimin kendisi kanun gereği kendiliğinden doğar ve beyan edilmesi gerekmez (§ 536 BGB). Ancak ayıbı gecikmeksizin bildirmeniz zorunludur (§ 536c BGB). Bu bildirim yapılmazsa haklarınızı kaybedersiniz. Asıl yükümlülük bildirimdir, indirim beyanı değil."
                            },
                            {
                                q: "İndirimi ne zamandan itibaren yapabilirim?",
                                a: "Kural olarak ayıbın ortaya çıktığı andan itibaren, ancak uygulamada ayıp bildiriminizin ev sahibine ulaştığı tarihten itibaren. Öncesi için genellikle talep doğmaz, çünkü ev sahibi ayıptan haberdar değildi ve gideremezdi."
                            },
                            {
                                q: "Yüzde kaç indirim yapabilirim?",
                                a: "Kanunda belirlenmiş bir oran yoktur. Somut olaydaki fiili kısıtlama, brüt kira üzerinden esas alınır. İnternetteki indirim tabloları tek tek kararların derlemesidir ve mahkemeyi bağlamaz. Kesinti yapmadan önce oranı inceletmenizde yarar vardır."
                            },
                            {
                                q: "Kira indirimi nedeniyle tahliye edilebilir miyim?",
                                a: "Fazla indirim yaparsanız evet. Kesilen tutarlar borç sayılır. Bu borç iki aylık kirayı bulursa § 543 Abs. 2 Nr. 3 BGB uyarınca derhal fesih mümkündür. Bu nedenle ihtirazi kayıtla ödeme daha güvenli yoldur."
                            },
                            {
                                q: "„İhtirazi kayıtla ödeme\" tam olarak ne demek?",
                                a: "Kirayı tam ödemeye devam edersiniz, ancak ödemenin yalnızca iade talebi saklı kalmak kaydıyla yapıldığını açıkça ve yazılı olarak belirtirsiniz. Böylece temerrüde düşmez, fazla ödediğiniz kısmı sonradan geri isteme hakkınızı korursunuz."
                            },
                            {
                                q: "Ayıba aylarca katlandım. Artık geç mi kaldım?",
                                a: "Zorunlu olarak değil, ama zorlaşır. Ayıbı bilerek kayıtsız ödeme yapan kiracı § 814 BGB nedeniyle iade talebini kaybedebilir. Geleceğe yönelik indirim hakkı çoğunlukla devam eder. Bu nedenle bundan sonrası için ihtirazi kaydı hemen koyun, geçmişi ayrıca inceletin."
                            },
                            {
                                q: "Kira indirimi için avukata ihtiyacım var mı?",
                                a: "Ayıp bildirimi için gerekmez. İndirimin oranı, ev sahibinin fesih tehdidi ya da ödenmiş kiranın iadesi söz konusu olduğunda hukuki değerlendirme yerinde olur; çünkü bu noktadan sonra yapılacak bir hata konutunuza mal olabilir."
                            }
                        ]
                    },
                    "Durumunuzun ayıp sayılıp sayılmadığından ya da hangi oranın gerçekçi olduğundan emin değilseniz, olayı kısaca bize aktarın. Çoğu zaman ayıp bildirimine ve belgelere bakmak, doğru sıralamayı belirlemek için yeterli oluyor."
                ],
                image: "/images/blog/zivilrecht.webp"
            },
            {
                slug: "einbuergerung-2026",
                areaSlug: "auslaenderrecht",
                category: "Yabancılar Hukuku",
                iso: "2026-08-12",
                date: "12 Ağustos 2026",
                updated: "2026-09-12",
                title: "2026'da Alman vatandaşlığı: Koşullar, masraflar, süreler",
                excerpt: "Beş yıl ikamet, B1, geçimin sağlanması – ve üç yılda vatandaşlık Ekim 2025'te kaldırıldı. Güncel durumun tam görünümü.",
                ctaLine: "Beş yıl, geçim, B1: Koşulları bugün karşılayıp karşılamadığınız önceden netleşebilir. Başvuru ile kabul edilen başvuru arasındaki fark budur.",
                body: [
                    "Alman vatandaşlığına geçiş kural olarak Almanya'da beş yıl hukuka uygun mutat ikametten sonra mümkündür (§ 10 StAG). Mevcut vatandaşlığınızdan kural olarak artık çıkmanız gerekmez – 27 Haziran 2024 reformundan bu yana çifte vatandaşlık istisna değil, asıl kuraldır.",
                    "Başvuruyu yıllarca erteleyenler için bu, hesabı kökten değiştiren bir gelişmedir. Reformdan önce sekiz yıl ikamet aranıyordu ve Alman vatandaşı olmak isteyen kişi kural olarak eski pasaportunu bırakmak zorundaydı. Her ikisi de artık geçerli değil.",
                    "Buna karşılık bir nokta ters yönde değişti ve eski rehberlerin çoğunda hâlâ yanlış anlatılıyor.",
                    {
                        note: "Önemli: 2024'te getirilen, üstün uyum başarısı hâlinde üç yılda vatandaşlık imkânı kaldırıldı. Değişiklik Federal Meclis'te 8 Ekim 2025'te kabul edildi ve kanun 30 Ekim 2025'te yürürlüğe girdi. Yeniden istisnasız biçimde beş yıllık süre geçerlidir. Planınız üç yıllık yola dayanıyorsa gözden geçirilmesinde yarar vardır."
                    },
                    {
                        h2: "Koşullara genel bakış"
                    },
                    "§ 10 StAG kapsamındaki hak temelli vatandaşlık için şu koşulları karşılamanız gerekir:",
                    {
                        list: [
                            "geçerli bir oturum izni veya süresiz oturma hakkı",
                            "Almanya'da beş yıl hukuka uygun mutat ikamet",
                            "kendinizin ve bakmakla yükümlü olduğunuz yakınlarınızın geçiminin sağlanmış olması",
                            "Avrupa Ortak Referans Çerçevesi'ne göre B1 düzeyinde Almanca",
                            "vatandaşlık testinin geçilmiş olması veya eşdeğer bir belge",
                            "kayda değer bir adli sicil kaydının bulunmaması",
                            "özgür demokratik temel düzene, insan onurunun korunmasına ve Almanya'nın özel tarihsel sorumluluğuna bağlılık beyanı"
                        ]
                    },
                    "Koşulların yalnızca başvuru anında değil, başvurunuz hakkında karar verildiği anda da mevcut olması gerekir. Bu, pratikte önemlidir: Başvuru ile karar arasında idareye göre aylar geçebilir ve bu sürede işini kaybetmek dosyayı tehlikeye atabilir.",
                    {
                        h2: "Beş yıl ikamet: hangi süreler sayılır, hangileri sayılmaz"
                    },
                    "Hukuka uygun mutat ikamet süreleri sayılır; Almanya'da geçirilen her süre bu niteliğe sahip değildir. Duldung süreleri kural olarak sayılmaz; nitelik olarak geçici bir amaca dayanan ikametler de sayılmaz. İltica sürecindeki süreler, sonradan tanınma hâlinde mahsup edilebilir.",
                    "Uzun yurt dışı kalışları zinciri kesebilir. Örneğin ailede bir bakım durumu nedeniyle aylarca yurt dışında kalan kişi, başvurudan önce bunun ikamet sürelerine etkisini netleştirmelidir.",
                    "Tecrübemize göre ikamet geçmişindeki boşluklar gecikmelerin en sık nedenidir. Erken başlanırsa bu boşluklar hemen her zaman kapatılabilir – örneğin yabancılar dosyasından alınacak bilgilerle.",
                    {
                        h2: "Geçimin sağlanması – en sık takılınan koşul"
                    },
                    "Kendinizin ve bakmakla yükümlü olduğunuz yakınlarınızın geçimini kural olarak SGB II veya SGB XII yardımları olmaksızın karşılayabiliyor olmanız gerekir. Kindergeld, Elterngeld, Wohngeld ve BAföG bu açıdan sorun oluşturmaz; Bürgergeld ise oluşturur.",
                    "Bu kuralın dar kapsamlı istisnaları vardır. Özellikle eski misafir işçi kuşağı mensupları ile tam zamanlı çalışan ve yardım almasında kusuru bulunmayan kişiler bakımından geçerlidir. Bu istisnalardan birinin sizin durumunuza uyup uymadığını, başvuruyu ertelemeden önce inceletmenizde yarar vardır – pek çok kişi kapsam dışında olmadığı hâlde kendini kapsam dışı sanmaktadır.",
                    {
                        h2: "B1 dil belgesi ve muafiyetler"
                    },
                    "Kural olarak B1 düzeyinde bir sertifika, Alman okul diploması, Almanca tamamlanmış bir yükseköğrenim ya da benzer bir belge yeterlidir. Belgenin yalnızca konuşmayı değil, dört beceriyi de kapsaması gerekir.",
                    "İşe alım anlaşmaları çerçevesinde Almanya'ya gelen misafir işçi kuşağı mensupları için kanun bir kolaylık öngörür: Belge sözlü olarak sunulabilir, yazılı sınav aranmaz. Yaş, hastalık veya engellilik hâllerinde de, belge bu nedenlerle beklenemez durumdaysa ek kolaylıklar mevcuttur.",
                    {
                        h2: "Vatandaşlık testi"
                    },
                    "Test, hukuk düzeni, tarih ve toplum konularında 33 sorudan oluşur; bunların 17'sinin doğru yanıtlanması gerekir. Alman okul diploması olanlar kural olarak muaftır. Test istenildiği kadar tekrarlanabilir; ancak harç her seferinde yeniden ödenir.",
                    {
                        h2: "Masraflar ve süre"
                    },
                    {
                        table: {
                            caption: "Vatandaşlık başvurusunun tipik masrafları (2026 itibarıyla, somut olayda değişebilir)",
                            head: [
                                "Kalem",
                                "Tutar",
                                "Açıklama"
                            ],
                            rows: [
                                [
                                    "Vatandaşlık harcı",
                                    "255 €",
                                    "yetişkin kişi başına"
                                ],
                                [
                                    "Reşit olmayan çocuğun birlikte vatandaşlığa alınması",
                                    "51 €",
                                    "bir ebeveynle birlikte başvuruda"
                                ],
                                [
                                    "Vatandaşlık testi",
                                    "25 €",
                                    "her giriş için, tekrarda da"
                                ],
                                [
                                    "B1 dil sınavı",
                                    "yaklaşık 150–250 €",
                                    "kuruma ve sınav yerine göre"
                                ],
                                [
                                    "Belgeler, tercümeler, onaylar",
                                    "değişken",
                                    "menşe ülkeye ve kapsama bağlı"
                                ]
                            ]
                        }
                    },
                    "İşlem süresi vatandaşlık dairesine göre belirgin biçimde değişir ve en çok evraklarınızın eksiksizliğine bağlıdır. Eksiksiz bir başvuru, tümüyle sizin elinizde olan en etkili araçtır.",
                    {
                        h2: "Çifte vatandaşlık – Türk vatandaşları için özellikle önemli"
                    },
                    "2024 reformundan bu yana mevcut vatandaşlığınızdan kural olarak çıkmanız gerekmez. Türk vatandaşları için bu belirgin bir kolaylıktır: Türk vatandaşlığından çıkma ve ardından Mavi Kart alma şeklindeki eski yol, yeni başvurular için artık gerekli değildir.",
                    "Alman vatandaşlığına geçişin Türk hukuku bakımından Türk vatandaşlığınıza, miras hukukuna ilişkin sorulara veya Türkiye'deki taşınmazlarınıza etkisi ayrı bir incelemeyi gerektirir; bu, Türk hukukunun konusudur. Bu tür sorular için Türk hukuku alanında uzmanlaşmış bir hukuk bürosuyla işbirliği yapıyoruz.",
                    {
                        h2: "Şimdiden hazırlamanız gerekenler"
                    },
                    {
                        list: [
                            "ikamet sürelerinizin ve tüm oturum izinlerinizin kesintisiz belgesi",
                            "son aylara ait gelir belgeleri, serbest çalışanlarda ayrıca kazanç tespiti",
                            "Deutsche Rentenversicherung'dan sigorta dökümü",
                            "dil sertifikası ya da okul/yükseköğrenim diploması",
                            "vatandaşlık testini geçtiğinize dair belge",
                            "kimlik belgeleri, doğum belgesi, varsa evlilik belgesi – onaylı tercümeleriyle",
                            "kira sözleşmesi ve ikametgâh belgesi"
                        ]
                    },
                    {
                        h2: "Nasıl destek oluyoruz"
                    },
                    "Başvurudan önce yapılacak bir inceleme yerinde olur: Beş yıl gerçekten kesintisiz belgelenebiliyor mu? Geçim, idarenin değerlendireceği biçimde sağlanmış görünüyor mu? İstisnalardan biri uygulanabilir mi? Başvuru reddedilmişse kararı ve kanun yollarının başarı şansını inceliyoruz. Size bu süreçte Almanca ve Türkçe danışmanlık veriyoruz.",
                    {
                        h2: "Sık sorulan sorular"
                    },
                    {
                        faq: [
                            {
                                q: "Üç yılda vatandaşlık hâlâ mümkün mü?",
                                a: "Hayır. 2024'te getirilen hızlandırılmış üç yıllık vatandaşlık, 8 Ekim 2025'te Federal Meclis tarafından kaldırıldı; kanun 30 Ekim 2025'te yürürlüğe girdi. Yeniden beş yıllık hukuka uygun mutat ikamet süresi geçerlidir."
                            },
                            {
                                q: "Türk vatandaşlığımdan çıkmam gerekir mi?",
                                a: "Kural olarak hayır. 27 Haziran 2024 reformundan bu yana çifte vatandaşlık asıl kuraldır. Türk vatandaşlığından çıkma ve Mavi Kart alma şeklindeki eski yol, yeni başvurular bakımından artık gerekli değildir."
                            },
                            {
                                q: "Bürgergeld alıyorsam vatandaşlığa geçebilir miyim?",
                                a: "Kural olarak hayır, çünkü geçimin SGB II veya SGB XII yardımları olmadan sağlanmış olması gerekir. Ancak misafir işçi kuşağı mensupları ya da tam zamanlı çalışmasına rağmen kusursuz biçimde yardım alanlar için dar istisnalar vardır. Bu, somut olayda incelenmelidir."
                            },
                            {
                                q: "Hangi dil düzeyi gerekli?",
                                a: "B1 düzeyi gereklidir. Alman okul diploması veya Almanca tamamlanmış bir yükseköğrenim de kabul edilir. Misafir işçi kuşağı için sözlü belge yeterlidir; yaş, hastalık veya engellilik hâlinde ek kolaylıklar mümkündür."
                            },
                            {
                                q: "Vatandaşlık başvurusu toplam ne kadar tutar?",
                                a: "Harç yetişkin başına 255 €, birlikte vatandaşlığa alınan reşit olmayan çocuk için 51 €'dur. Buna vatandaşlık testi için 25 €, B1 sınavı için yaklaşık 150–250 € ile belge ve onaylı tercüme masrafları eklenir."
                            },
                            {
                                q: "İşlem ne kadar sürer?",
                                a: "Bu, yetkili daireye ve evraklarınızın eksiksizliğine göre birkaç aydan bir yılı belirgin biçimde aşan sürelere kadar değişir. İkamet belgelerindeki boşluklar gecikmelerin en sık nedenidir."
                            },
                            {
                                q: "Başvurum reddedildi. Ne yapabilirim?",
                                a: "Ret kararına karşı kanun yolları söz konusu olabilir; kararın gerekçesi ve içindeki süreler belirleyicidir. Başvuru yolu süreleri kısa olduğundan kararı vakit geçirmeden inceletin."
                            }
                        ]
                    },
                    "Koşulları bugün karşılayıp karşılamadığınızı öğrenmek isterseniz, oturum izinlerinizi, gelir belgelerinizi ve sigorta dökümünüzü getirin. Çoğu durumda daha ilk görüşmede başvurunun başarı şansı değerlendirilebiliyor."
                ],
                image: "/images/blog/auslaenderrecht.webp"
            },
            {
                slug: "kuendigung-drei-wochen",
                areaSlug: "arbeitsrecht",
                category: "İş Hukuku",
                iso: "2026-07-28",
                date: "28 Temmuz 2026",
                title: "Fesih bildirimi aldınız: İlk üç hafta belirleyici",
                excerpt: "İşe iade davası süresi, bildirimin ulaşmasından itibaren üç haftadır – ve açıkça geçersiz fesihler için de geçerlidir. Şimdi yapmanız gerekenler.",
                ctaLine: "Üç haftalık süre bugünden işliyor, karar verdiğiniz günden değil. Süre açıkken bize ulaşın – sonrasında hatalı bir fesih de geçerli hâle gelir.",
                body: [
                    "Bir fesih bildirimi aldığınızda, bildirimin size ulaştığı andan itibaren üç haftalık bir süre işlemeye başlar. Bu süre içinde işe iade davasının iş mahkemesine ulaşmış olması gerekir (§ 4 KSchG). Süreyi kaçırırsanız fesih, § 7 KSchG uyarınca başından itibaren geçerli sayılır – içerik olarak ne kadar sakat olduğuna bakılmaksızın.",
                    "Bu, Alman iş güvencesi hukukunun en sert kuralıdır ve ilgililerin çoğunu şaşırtır. Sosyal olarak haklı olmayan, şekil yönünden hatalı ya da temsil yetkisi bulunmayan bir kişi tarafından imzalanmış bir fesih, yalnızca sürenin geçmesiyle geçerli hâle gelir. Sonrasında incelenecek bir şey kalmaz.",
                    "Pratik sonuç: Erken yapılan telefon görüşmesi, kusursuz hazırlanmış dosyadan daha önemlidir. Sonradan işinize yarayacak olan üç şeydir – zarf, tarih ve zamanında açılmış dava.",
                    {
                        note: "Önemli: Belirleyici olan dava dilekçesinin iş mahkemesine ulaşmasıdır, gönderilmesi değil. 20. günde postaya verilip 22. günde ulaşan bir dava süresinde sayılmaz. Hiçbir zaman son güne bırakmayın."
                    },
                    {
                        h2: "Süre ne zaman başlar"
                    },
                    "Belirleyici olan fesih bildiriminin size ulaşmasıdır, yazının üzerindeki tarih değil. Ulaşma, yazının normal koşullarda öğrenebileceğiniz şekilde hâkimiyet alanınıza girmesi demektir.",
                    {
                        list: [
                            "Posta kutusuna atılmışsa, kutunun olağan olarak boşaltılmasının beklendiği gün esas alınır – öğleden sonra geç saatte atılmışsa kural olarak ertesi gün",
                            "Elden teslimde teslim günü esastır",
                            "İadeli taahhütlü gönderide, haber kâğıdının bırakıldığı gün değil, evrakın teslim alındığı gün",
                            "İzin veya hastalık, ulaşmayı kural olarak ertelemez"
                        ]
                    },
                    "Bu nedenle bildirimi ne zaman ve hangi yolla aldığınızı hemen not edin, zarfı posta damgasıyla birlikte saklayın. Zarf, uyuşmazlıkta en önemli delildir ve neredeyse her zaman atılır.",
                    {
                        h2: "Süre, apaçık hatalarda da geçerlidir"
                    },
                    "Aşağıdaki itirazların da üç hafta içinde ileri sürülmesi gerekir; aksi hâlde kaybedilirler:",
                    {
                        list: [
                            "fesih bildiriminin ıslak imzalı olmaması ya da yalnızca e-posta veya mesajla iletilmiş olması",
                            "temsil yetkisi bulunmayan bir kişiden gelmesi",
                            "işyeri kurulunun (Betriebsrat) usulüne uygun dinlenmemiş olması",
                            "gebelik, ebeveyn izni, bakım izni veya ağır engellilik nedeniyle özel fesih korumasının göz ardı edilmesi",
                            "fesih ihbar süresinin yanlış hesaplanması"
                        ]
                    },
                    "§ 5 KSchG yalnızca istisnaen, kendinizden beklenebilecek tüm özeni göstermenize rağmen zamanında dava açmanız engellenmişse davanın sonradan kabulüne izin verir. Ölçüt katıdır; kimsenin planını buna dayandırmaması gerekir.",
                    {
                        h2: "Süreler bir bakışta"
                    },
                    {
                        table: {
                            caption: "Fesih bildiriminin ulaşmasından sonra ne zaman ne yapılmalı",
                            head: [
                                "Süre",
                                "Yapılacak iş",
                                "Kaçırılırsa sonucu"
                            ],
                            rows: [
                                [
                                    "Derhal",
                                    "Ulaşma tarihini not etmek, zarfı saklamak, hiçbir şey imzalamamak",
                                    "Sonraki yargılamada ispat sorunları"
                                ],
                                [
                                    "Fesihten haberdar olduktan sonra 3 gün içinde",
                                    "İş Kurumu'na iş arayan olarak başvurmak (§ 38 SGB III)",
                                    "İşsizlik parasında kesinti"
                                ],
                                [
                                    "Ulaşmadan itibaren 3 hafta",
                                    "İş mahkemesinde işe iade davası açmak (§ 4 KSchG)",
                                    "Fesih geçerli sayılır (§ 7 KSchG)"
                                ],
                                [
                                    "En geç iş ilişkisinin sona erdiği tarihte",
                                    "İş Kurumu'na işsiz olarak başvurmak",
                                    "Ödemelerin geç başlaması"
                                ]
                            ]
                        }
                    },
                    {
                        h2: "Acele ile hiçbir şey imzalamayın"
                    },
                    "Fesih bildirimiyle birlikte önünüze bir ikale sözleşmesi (Aufhebungsvertrag) konur ve çoğu zaman „bu teklif yalnızca bugün geçerli\" denirse, temkinli olmak gerekir. İkale sözleşmesi işsizlik parasında kural olarak on iki hafta süren bir bekleme süresine (Sperrzeit) yol açabilir. Aynı zamanda, henüz kullanmadan pazarlık gücünüzü de bırakmış olursunuz.",
                    "İbraname niteliğindeki bir belgeyi ya da işe iade davası açmaktan feragat ettiğinizi gösteren bir beyanı da incelenmeden imzalamayın.",
                    {
                        h2: "Yargılamada gerçekte ne oluyor"
                    },
                    "Dava ulaştıktan sonra iş mahkemesi, çoğu zaman birkaç hafta içinde gerçekleşen bir uzlaşma duruşması (Gütetermin) belirler. Orada karar verilmez, müzakere edilir: sona erme tarihi, tazminat, çalışmaktan muafiyet, kalan izin ve bonservis. İşe iade davalarının büyük bölümü bu aşamada sulhle sonuçlanır.",
                    "Bilinmesi gereken önemli nokta: Kural olarak kanundan doğan bir tazminat hakkı yoktur. Tazminat bir müzakerenin sonucudur ve müzakere gücü ancak süresinde açılmış davayla doğar. Dava açmayan kişi müzakere de edemez.",
                    "İş mahkemesindeki ilk derece yargılamasında, sonuç ne olursa olsun her taraf kendi avukatlık masrafını üstlenir (§ 12a ArbGG). Bu, diğer yargılamalardan ayrılan bir özelliktir ve karar verirken hesaba katılmalıdır.",
                    {
                        h2: "İlk görüşmeye getirmeniz gerekenler"
                    },
                    {
                        list: [
                            "fesih bildirimi ve zarfı",
                            "iş sözleşmesi ve ekleri",
                            "son üç maaş bordrosu",
                            "işyerinin büyüklüğü ve çalışma sürenize ilişkin bilgiler",
                            "varsa özel fesih korumasına dair bilgiler",
                            "size ayrıca imzalatılmak istenen tüm belgeler"
                        ]
                    },
                    "İşyerinin büyüklüğü ve çalışma süreniz, İş Güvencesi Kanunu'nun uygulanıp uygulanmayacağını belirler. Ancak kanun uygulanmasa bile üç haftalık süre pek çok itiraz bakımından geçerliliğini korur – bu nedenle küçük işletmelerde de dava seçeneği değerlendirilmelidir.",
                    {
                        h2: "Sık sorulan sorular"
                    },
                    {
                        faq: [
                            {
                                q: "Feshe karşı ne kadar sürede dava açabilirim?",
                                a: "Yazılı fesih bildiriminin size ulaşmasından itibaren üç hafta. Bu süre içinde davanın iş mahkemesine ulaşmış olması gerekir (§ 4 KSchG). Süre geçtikten sonra fesih, § 7 KSchG uyarınca başından itibaren geçerli sayılır."
                            },
                            {
                                q: "Fesih apaçık geçersizse de süre işler mi?",
                                a: "Evet. İmzasız bir fesih, işyeri kurulu dinlenmeden yapılan bir fesih veya özel fesih korumasına rağmen yapılan bir fesih de üç hafta içinde dava konusu edilmelidir. Aksi hâlde sürenin geçmesiyle geçerli hâle gelir."
                            },
                            {
                                q: "Süre tam olarak ne zaman başlar?",
                                a: "Yazının üzerindeki tarihten değil, bildirimin size ulaşmasından itibaren. Posta kutusuna atılmışsa kutunun olağan olarak boşaltılmasının beklendiği gün esas alınır. İzin veya hastalık ulaşmayı kural olarak ertelemez."
                            },
                            {
                                q: "Tazminat almaya hakkım var mı?",
                                a: "Kural olarak kanundan doğan bir hak yoktur. Tazminatlar çoğunlukla sulh yoluyla, sıklıkla daha uzlaşma duruşmasında doğar. Bunun için gereken müzakere gücü ise süresinde açılan işe iade davasıyla ortaya çıkar."
                            },
                            {
                                q: "İkale sözleşmesi imzalamalı mıyım?",
                                a: "Önceden incelenmeden imzalamayın. İkale sözleşmesi işsizlik parasında kural olarak on iki haftalık bir bekleme süresine yol açabilir ve aynı zamanda işe iade davasındaki müzakere gücünüzü elinizden alır."
                            },
                            {
                                q: "İş Kurumu'na başvurmam gerekir mi?",
                                a: "Evet, fesihten haberdar olduktan sonra en geç üç gün içinde iş arayan olarak (§ 38 SGB III). Bunu kaçırırsanız işsizlik parasında kesinti söz konusu olabilir. Bu yükümlülük, feshe karşı dava açıp açmadığınızdan bağımsızdır."
                            },
                            {
                                q: "İşe iade davası ne kadara mal olur?",
                                a: "İş mahkemesindeki ilk derecede, sonuç ne olursa olsun her taraf kendi avukatlık masrafını üstlenir (§ 12a ArbGG). Hukuki koruma sigortası masrafları çoğu zaman karşılar; bu, dava açmadan önce netleştirilmelidir."
                            }
                        ]
                    },
                    "Bir fesih bildirimi aldıysanız değerlendirmeyi sürenin sonuna bırakmayın. Üç hafta işlerken bize ulaşın – gerisi sakin biçimde ele alınabilir."
                ],
                image: "/images/blog/arbeitsrecht.webp"
            },
            {
                slug: "scheidung-tuerkei",
                areaSlug: "familienrecht",
                category: "Aile Hukuku",
                iso: "2026-07-09",
                date: "9 Temmuz 2026",
                title: "Türkiye bağlantılı boşanma: Hangi hukuk uygulanır?",
                excerpt: "Yetki, uygulanacak hukuk ve her iki ülkede tanıma – Türkiye'de verilen bir boşanma kararı Almanya'da neden kendiliğinden geçerli değildir.",
                ctaLine: "Yetki, uygulanacak hukuk ve her iki ülkedeki tanıma: Sıralamayı önceden netleştiren kişi, ülkelerden birinde yanlış görünen bir nüfus kaydından kurtulur.",
                body: [
                    "Eşlerin hem Almanya hem Türkiye ile bağlantısı varsa iki soruyu birbirinden ayırmak gerekir: Hangi mahkeme yetkilidir ve bu mahkeme hangi hukuku uygular? Yanıtlar zorunlu olarak örtüşmez. Bir Alman mahkemesi Türk hukukunu uygulayabilir, bir Türk mahkemesi de Alman hukukunu.",
                    "Danışmanlıkta en sık karşılaşılan yanlış varsayım ise başkadır: Türkiye'de verilen bir boşanma kararının Almanya'da doğrudan geçerli olduğu sanılır. Oysa geçerli değildir. Resmî bir tanıma işlemi yapılmadan Almanya'da hâlâ evli sayılırsınız – yeniden evlenme, miras hukuku ve nüfus kaydı bakımından tüm sonuçlarıyla birlikte.",
                    {
                        note: "Önemli: Türkiye'de verilen bir boşanma kararı Almanya'da ancak resmî tanımadan sonra hüküm doğurur (§ 107 FamFG). Türkiye'de boşanıp tanıma işlemini yaptırmadan Almanya'da yeniden evlenen kişi, ikinci evliliğinin geçersiz olması riskini taşır."
                    },
                    {
                        h2: "Hangi mahkeme yetkilidir"
                    },
                    "Alman mahkemelerinin milletlerarası yetkisi Brüksel IIb Tüzüğü'ne göre belirlenir. Tüzük öncelikle mutat meskeni esas alır. Her iki eş de Almanya'da yaşıyorsa Alman mahkemeleri yetkilidir – her ikisi de yalnızca Türk vatandaşı olsa bile. Dolayısıyla tek başına vatandaşlık belirleyici değildir.",
                    "Her iki ülkenin mahkemelerinin birlikte yetkili olması da mümkündür. Bu durumda davayı önce kimin açtığı önem kazanabilir. Bu soruyu erken sormak gerekir, çünkü sonradan düzeltilemez.",
                    {
                        h2: "Hangi hukuk uygulanır"
                    },
                    "Boşanmaya hangi hukukun uygulanacağını Roma III Tüzüğü belirler. Tüzük, kendisi taraf olmayan devletlerle ilişkide de uygulanır; Türkiye de bunlardandır. Öncelikle eşlerin mahkemeye başvurulduğu andaki mutat meskeni esas alınır.",
                    "Her ikisi de Almanya'da yaşıyorsa kural olarak Alman boşanma hukuku uygulanır – iki Türk vatandaşı hakkında karar veren bir Alman mahkemesi tarafından da.",
                    {
                        h3: "Hukuk seçimi"
                    },
                    "Eşler, boşanmaya hangi hukukun uygulanacağını kararlaştırabilirler; örneğin Türk hukukunu. Bu hukuk seçimi noter şeklinde yapılmalıdır. Yerinde olabilir, ancak tüm fer'î sonuçları kapsamaz: Nafaka, emeklilik haklarının denkleştirilmesi (Versorgungsausgleich) ve mal rejimi kendi kanunlar ihtilafı kurallarına tabidir. Yalnızca boşanmanın kendisini kapsayan bir hukuk seçimi bu nedenle tüm soruları nadiren çözer.",
                    {
                        h2: "Fer'î sonuçlar kendi kurallarına tabidir"
                    },
                    {
                        table: {
                            caption: "Hangi soruda hangi düzenleme geçerli",
                            head: [
                                "Soru",
                                "Uygulanacak düzenleme",
                                "Kural olarak bağlanma noktası"
                            ],
                            rows: [
                                [
                                    "Mahkemenin yetkisi",
                                    "Brüksel IIb Tüzüğü",
                                    "eşlerin mutat meskeni"
                                ],
                                [
                                    "Uygulanacak boşanma hukuku",
                                    "Roma III Tüzüğü",
                                    "mutat mesken, hukuk seçimi mümkün"
                                ],
                                [
                                    "Eş ve çocuk nafakası",
                                    "Lahey Nafaka Protokolü",
                                    "hak sahibinin mutat meskeni"
                                ],
                                [
                                    "Mal rejimi",
                                    "AB Mal Rejimi Tüzüğü veya geçiş hükümleri",
                                    "evlenme tarihine bağlı"
                                ],
                                [
                                    "Türk boşanma kararının tanınması",
                                    "§ 107 FamFG",
                                    "Landesjustizverwaltung'a başvuru"
                                ]
                            ]
                        }
                    },
                    "Bu bölünme, „bizde Türk hukuku geçerli\" gibi genel ifadelerin neden hemen her zaman yetersiz kaldığını açıklar. Tek bir dosyada birden çok hukuk düzeni yan yana uygulanabilir.",
                    {
                        h2: "Türk boşanma kararının Almanya'da tanınması"
                    },
                    "Türkiye Avrupa Birliği üyesi olmadığından, orada verilen bir boşanma kararı için kural olarak resmî bir tanıma işlemi gerekir (§ 107 FamFG). Yetkili makam, eşlerden birinin mutat meskeninin bulunduğu eyaletin Landesjustizverwaltung'udur; bu görev çoğu yerde eyalet yüksek mahkemelerine (Oberlandesgericht) devredilmiştir.",
                    "Özellikle Türk mahkemesinin yetkili olup olmadığı ve her iki eşin hukuki dinlenilme hakkının sağlanıp sağlanmadığı incelenir. Harç gelire göre belirlenir ve kural olarak yaklaşık 10 ile 305 euro arasında değişir. Tanıma kararı verilirse, Türk kararının tarihine geri etkili olarak hüküm doğurur.",
                    {
                        list: [
                            "kesinleşme şerhli Türk boşanma ilamı",
                            "Almancaya onaylı tercümesi",
                            "gerekiyorsa apostil veya konsolosluk onayı",
                            "evlilik belgesi ve mutat meskene ilişkin belgeler",
                            "Türk yargılamasının seyrine, özellikle diğer eşe yapılan tebligata ilişkin bilgiler"
                        ]
                    },
                    {
                        h2: "Ters yön: Alman boşanmasının Türkiye'de tescili"
                    },
                    "Almanya'da verilen bir boşanma kararının Türkiye'de nüfus kaydına işlenebilmesi için tescil edilmesi gerekir. Bu yapılmazsa bir ülkede boşanmış, diğerinde evli görünürsünüz.",
                    "Bu nedenle her iki tarafı baştan birlikte düşünmek gerekir. Yalnızca bir ülkedeki işlemi yürüten kişinin nüfus durumu sonunda doğru olmaz – ve bunu tipik olarak yıllar sonra, yeni bir evlilikte ya da bir miras olayında fark eder.",
                    {
                        h2: "Nasıl ilerliyoruz"
                    },
                    "Kural olarak önce yetkiyi ve uygulanacak hukuku, sonra fer'î sonuçları, ardından diğer ülkedeki tanımayı ele alıyoruz. Bu sıralama, sonradan ortaya çıkan sürprizlerin çoğunu önlüyor.",
                    "Size Almanca ve Türkçe danışmanlık veriyoruz. Türk hukukuna göre değerlendirilmesi gereken sorular için Türk hukuku alanında uzmanlaşmış bir hukuk bürosuyla işbirliği yapıyor, böylece dosyanın her iki tarafını da kapsıyoruz.",
                    {
                        h2: "Sık sorulan sorular"
                    },
                    {
                        faq: [
                            {
                                q: "Türkiye'deki boşanmam Almanya'da kendiliğinden tanınır mı?",
                                a: "Hayır. Kural olarak yetkili Landesjustizverwaltung nezdinde § 107 FamFG uyarınca bir tanıma işlemi gerekir. Tanımaya kadar Almanya'da evli sayılırsınız; bunun evlenme, miras hukuku ve nüfus kaydı bakımından sonuçları vardır."
                            },
                            {
                                q: "Her iki eş de Türk vatandaşıysa Alman mahkemeleri karar verebilir mi?",
                                a: "Evet. Yetki, Brüksel IIb Tüzüğü'ne göre belirlenir ve öncelikle mutat meskeni esas alır. Her iki eş de Almanya'da yaşıyorsa, vatandaşlıktan bağımsız olarak Alman mahkemeleri yetkilidir."
                            },
                            {
                                q: "Türk hukukunun uygulanmasını seçebilir miyiz?",
                                a: "Roma III Tüzüğü uyarınca hukuk seçimi mümkündür ve noter şeklinde yapılmalıdır. Ancak yalnızca boşanmanın kendisini kapsar. Nafaka, emeklilik haklarının denkleştirilmesi ve mal rejimi kendi kurallarına tabidir ve bu seçime otomatik olarak dahil olmaz."
                            },
                            {
                                q: "Tanıma işlemi ne kadara mal olur?",
                                a: "Harç gelire göre belirlenir ve kural olarak yaklaşık 10 ile 305 euro arasındadır. Buna onaylı tercüme ve gerekiyorsa Türk ilamının apostil masrafları eklenir."
                            },
                            {
                                q: "Tanıma için hangi belgeler gerekir?",
                                a: "Kural olarak kesinleşme şerhli Türk boşanma ilamı, onaylı tercümesi, gerekiyorsa apostil, evlilik belgesi ve her iki eşin mutat meskenine ilişkin belgeler."
                            },
                            {
                                q: "Alman boşanması Türkiye'de tescil edilmeli mi?",
                                a: "Evet. Boşanmanın Türk nüfus kaydına işlenebilmesi için tescil gerekir. Aksi hâlde Türkiye'de evli olarak kayıtlı kalmaya devam edersiniz."
                            },
                            {
                                q: "Ayrı ülkelerde yaşıyoruz. Davayı nerede açmalıyız?",
                                a: "Bu soruya genel bir yanıt verilemez. Her iki ülkenin mahkemeleri yetkiliyse zaman önceliği belirleyici olabilir ve seçim nafaka, emeklilik denkleştirmesi ile mal rejimini etkiler. Bu nedenle dava açılmadan önce netleştirilmelidir."
                            }
                        ]
                    },
                    "Türkiye bağlantılı bir boşanma söz konusuysa ya da Türkiye'de karar çoktan verilmişse, erken bir değerlendirme işinizi kolaylaştırır. Evlilik belgesini ve varsa Türk ilamını getirin; böylece bir sonraki adımın ne olduğu çoğu zaman hızla söylenebiliyor."
                ],
                image: "/images/blog/familienrecht.webp"
            }
        ]
    },
    contact: {
        label: "İletişim",
        title: "Bize danışabilirsiniz.",
        text: "Konunuzu kısaca açıklayın – Almanca ya da Türkçe. En kısa sürede size dönüş yaparız.",
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon (isteğe bağlı)",
        area: "Hukuk alanı",
        areaPlaceholder: "Lütfen seçin",
        message: "Mesaj",
        consentA: "",
        consentLink: "Gizlilik politikasını",
        consentB: "okudum ve talebimin işlenmesi için verilerimin kullanılmasını kabul ediyorum.",
        submit: "Talebi gönder",
        sending: "Gönderiliyor…",
        error: "Gönderim başarısız oldu. Lütfen tekrar deneyin veya telefonla ulaşın.",
        addressLabel: "Büro",
        country: "Almanya",
        route: "Yol tarifi",
        phoneLabel: "Telefon",
        whatsapp: "WhatsApp'tan ulaşın",
        whatsappNote: "Kısa sorular için doğrudan sohbet.",
        hoursLabel: "Ulaşılabilirlik",
        hours: "Pzt–Cum, randevu ile",
        hoursNote: "Telefon ve e-posta ile.",
        wa: {
            eyebrow: "WhatsApp talebi",
            title: "Kısa bir bilgi, sonra WhatsApp",
            intro: "Bilgileriniz önce büroya iletilir. Ardından WhatsApp, mesajınız hazır şekilde açılır.",
            firstName: "Ad",
            lastName: "Soyad",
            phone: "Telefon",
            foundVia: "Bizi nasıl buldunuz?",
            foundViaPlaceholder: "Lütfen seçin",
            foundViaOptions: [
                "Google araması",
                "Google Haritalar",
                "Instagram",
                "WhatsApp",
                "Tavsiye",
                "Avukat rehberi",
                "Diğer"
            ],
            privacy: "Göndererek, bilgilerimin talebimin işlenmesi için Meral Gören bürosu ve nüll ile paylaşılmasını kabul ediyorum.",
            submit: "WhatsApp'a devam et",
            submitting: "Hazırlanıyor…",
            error: "Gönderilemedi. WhatsApp yalnızca bilgileriniz ulaştıktan sonra açılır.",
            close: "Kapat"
        }
    },
    finalCta: {
        label: "Son adım",
        title: "Süreler veya deliller kaybolmadan konunuzu inceletin.",
        text: "Mannheim'da hukuki konular için Almanca ve Türkçe kişisel ilk değerlendirme.",
        panelText: "En önemli belgeleri ve kısa bir açıklamayı gönderin. Avukat Meral Gören konunuzu sınıflandırır, mantıklı bir sonraki adımı netleştirir ve şimdi neyin öncelikli olduğunu açıkça söyler.",
        listTitle: "Sizin için neleri üstleniyoruz",
        items: [
            "Yazıların, kararların, sözleşmelerin ve mahkeme evraklarının incelenmesi",
            "Sürelerin, başarı ihtimalinin, risklerin ve masrafların değerlendirilmesi",
            "Gerektiğinde dava öncesi temsil ve mahkeme sürecinin yürütülmesi"
        ],
        note: "Medeni hukuk · İş hukuku · Yabancılar hukuku · Aile hukuku · Trafik hukuku",
        primary: "Konumu şimdi incelet",
        bottomLabel: "Hızlı iletişim",
        bottomTitle: "Kısaca anlatın, belgeleri gönderin, geri dönüş alın.",
        bottomText: "İletişim formu, telefon veya hazırlanmış WhatsApp talebi."
    },
    footer: {
        blurb: "Mannheim'da hukuk bürosu. Sizin hakkınızı arıyoruz – Almanca ve Türkçe.",
        navTitle: "Menü",
        areasTitle: "Hukuk Alanları",
        contactTitle: "İletişim",
        imprint: "Künye (Impressum)",
        privacy: "Gizlilik",
        copyright: "© 2026 Avukatlık Bürosu Meral Gören",
        callLink: "Telefon",
        waLink: "WhatsApp",
        formLink: "İletişim formu",
        route: "Yol tarifi",
        madeBy: "Site made by"
    },
    partner: {
        label: "İş birliği",
        title: "Türk hukuku için iş birliği ortağımız",
        text: "Boşanma, miras ve tanıma davaları çoğu zaman iki hukuk düzenini birden ilgilendirir. Türk hukukuna giren her konuda, Mannheim'daki Doğru Kanzlei ile birlikte çalışırız. Böylece işiniz tek elden yürür, Türkiye'ye gitmenize gerek kalmaz.",
        firm: "Doğru Kanzlei",
        person: "Avukat Hasan Doğru",
        bio: "Ankara Barosu'na ve § 207 BRAO uyarınca Karlsruhe Barosu'na kayıtlıdır. Mannheim Sulh Mahkemesi'nde Türk hukuku bilirkişisi olarak listelenmiştir.",
        locationsLabel: "Ofisler",
        locations: "Mannheim · Ankara",
        languagesLabel: "Diller",
        languages: "Türkçe · Deutsch · English",
        areasLabel: "Destek verdiği konular",
        areas: [
            "Alman mahkeme kararlarının Türkiye'de tanınması",
            "Boşanma ve aile hukuku",
            "Türkiye'deki miras işleri",
            "Türkiye'deki ceza davaları",
            "Vekâletname ve apostil"
        ],
        cta: "Doğru Kanzlei web sitesi"
    },
    cookie: {
        title: "Çerezler ve gizlilik",
        text: "Bu web sitesi teknik olarak gerekli çerezler kullanır. İstatistik amaçlı isteğe bağlı çerezler yalnızca onayınızla kullanılır (§ 25 TDDDG, GDPR md. 6).",
        acceptAll: "Tümünü kabul et",
        necessaryOnly: "Yalnızca gerekli",
        customize: "Özelleştir",
        save: "Seçimi kaydet",
        necessary: "Gerekli",
        necessaryText: "Sitenin çalışması için zorunludur.",
        stats: "İstatistik",
        statsText: "Siteyi iyileştirmek için anonim kullanım istatistiği."
    },
    page: {
        home: "Ana Sayfa",
        more: "Devamını oku",
        allPosts: "Tüm yazılar",
        backHome: "Ana sayfaya dön",
        areaEyebrow: "Hukuk Alanları",
        areaTopics: "Tipik konular",
        areaHow: "Çalışma yöntemi",
        areaAside: "Konunuzu kısaca açıklayın – Almanca veya Türkçe.",
        otherAreas: "Diğer hukuk alanları",
        areaServicesTitle: "Size nasıl yardımcı oluyoruz",
        areaStepsTitle: "Süreç nasıl ilerler",
        areaSteps: [
            {
                title: "Konuyu anlatın",
                text: "Durumunuzu yazın – form, WhatsApp ya da telefon ile. Yardımcı olup olamayacağımızı ve nasıl olabileceğimizi söyleriz."
            },
            {
                title: "Belgeleri inceleyelim",
                text: "Sözleşmelerinizi, kararları ve yazışmaları inceler, süreleri netleştirir, olasılık ve masrafları değerlendiririz."
            },
            {
                title: "Temsil edelim",
                text: "Yazışmaları üstlenir, karşı tarafla müzakere eder ve sizi mahkeme dışında ve mahkemede temsil ederiz."
            }
        ],
        areaWhyTitle: "Neden bizim büromuz",
        areaNextTitle: "Konunuzu bize anlatın.",
        areaNextText: "Tüm hukuki sorularınızda bize danışabilirsiniz – Almanca ya da Türkçe. En kısa sürede size dönüş yaparız.",
        areaRelated: "Diğer hukuk alanları",
        areaTrust: [
            "Karlsruhe Barosu",
            "2008'den bu yana avukat",
            "Almanca & Türkçe",
            "Mannheim'da büro"
        ],
        postDisclaimer: "Bu yazı genel bir bakış sunar ve somut olaydaki hukuki danışmanlığın yerine geçmez. Her zaman başvurunuz sırasındaki hukuki durum esas alınır.",
        postCta: {
            eyebrow: "Sonraki adım",
            call: "Arayın:",
                role: "Avukat, Mannheim"
        },
        legalNote: "Köşeli parantez içindeki tüm bilgiler yer tutucudur; yayından önce müvekkil tarafından tamamlanmalı ve hukuki olarak kontrol edilmelidir.",
        blog: {
            eyebrow: "Blog",
            title: "Yazılar",
            lead: "Kısa ve anlaşılır: medeni, iş, yabancılar, aile ve trafik hukukundan güncel sorular."
        },
        danke: {
            eyebrow: "İletişim",
            title: "Talebiniz için teşekkürler",
            lead: "Mesajınız ulaştı.",
            body: "Belirttiğiniz kanaldan – e-posta ya da telefon – en kısa sürede size döneriz.",
            urgent: "Acil durumlarda bana şu numaradan ulaşabilirsiniz:"
        },
        impressum: {
            eyebrow: "Hukuki bilgiler",
            title: "Künye (Impressum)",
            lead: "§ 5 DDG uyarınca bilgiler. Bağlayıcı sürüm Almancadır.",
            sections: [
                {
                    heading: "Sağlayıcı",
                    paragraphs: [
                        "Meral Gören – Rechtsanwältin\nR1 2-3\n68161 Mannheim\nAlmanya"
                    ]
                },
                {
                    heading: "İletişim",
                    paragraphs: [
                        "Telefon: 06201 84 57 95\nFaks: 06201 84 57 96\nE-posta: anwalt@kanzlei-goeren.de"
                    ]
                },
                {
                    heading: "Meslek unvanı ve baro",
                    paragraphs: [
                        "Meslek unvanı: Rechtsanwältin – Avukat (Almanya Federal Cumhuriyeti). Tüm sulh, asliye ve istinaf mahkemelerinde temsil yetkilidir.\nYetkili denetim makamı: Karlsruhe Barosu (Rechtsanwaltskammer Karlsruhe), Reinhold-Frank-Str. 72, 76133 Karlsruhe, Telefon 0721 25340."
                    ]
                },
                {
                    heading: "Mesleki düzenlemeler",
                    paragraphs: [
                        "BRAO, BORA, FAO, RVG, CCBE meslek kuralları – www.brak.de adresinde."
                    ]
                },
                {
                    heading: "Mesleki sorumluluk sigortası",
                    paragraphs: [
                        "[Yer tutucu: sigortacı, adres, geçerlilik alanı]"
                    ]
                },
                {
                    heading: "KDV kimlik numarası",
                    paragraphs: [
                        "[Yer tutucu]"
                    ]
                }
            ]
        },
        datenschutz: {
            eyebrow: "Hukuki bilgiler",
            title: "Gizlilik Politikası",
            lead: "GDPR md. 13 uyarınca kişisel verilerin işlenmesine ilişkin bilgiler. Bağlayıcı sürüm Almancadır.",
            sections: [
                {
                    heading: "1. Sorumlu",
                    paragraphs: [
                        "Avukat Meral Gören, R1 2-3, 68161 Mannheim, Telefon 06201 84 57 95, E-posta anwalt@kanzlei-goeren.de."
                    ]
                },
                {
                    heading: "2. Barındırma ve sunucu kayıtları",
                    paragraphs: [
                        "Siteye erişimde barındırma sağlayıcısı [Yer tutucu] IP adresi, zaman, açılan sayfa ve tarayıcı bilgilerini otomatik işler. Hukuki dayanak: GDPR md. 6/1-f."
                    ]
                },
                {
                    heading: "3. İletişim formu ve e-posta",
                    paragraphs: [
                        "Formdaki bilgiler (ad, e-posta, telefon, hukuk alanı, mesaj) talebinizin işlenmesi için kullanılır ve e-posta ile büroya iletilir. Hukuki dayanak: GDPR md. 6/1-b ve onayınız (1-a). Vekâlet verilmez ve saklama yükümlülüğü yoksa talep sonrasında silinir."
                    ]
                },
                {
                    heading: "4. WhatsApp",
                    paragraphs: [
                        "WhatsApp üzerinden iletişimde WhatsApp Ireland Ltd. verilerinizi kendi kurallarına göre işler. Lütfen gizli dosya içeriklerini WhatsApp'tan göndermeyin."
                    ]
                },
                {
                    heading: "5. Çerezler",
                    paragraphs: [
                        "Teknik olarak gerekli çerezler § 25/2 TDDDG uyarınca kullanılır. İsteğe bağlı istatistik çerezleri yalnızca onayınızla (§ 25/1 TDDDG, GDPR md. 6/1-a). Seçiminizi çerez bildirimi üzerinden değiştirebilirsiniz. [Yer tutucu: kullanılan hizmetler]"
                    ]
                },
                {
                    heading: "6. Haklarınız",
                    paragraphs: [
                        "Erişim, düzeltme, silme, işlemenin kısıtlanması, veri taşınabilirliği ve itiraz hakkına (GDPR md. 15–21) ve bir denetim makamına şikâyet hakkına sahipsiniz."
                    ]
                }
            ]
        }
    }
};
