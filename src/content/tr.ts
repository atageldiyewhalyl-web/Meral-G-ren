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
        title: "Türk kökenli Alman avukat.",
        p1: "Meral Gören, Türk kökenli Alman vatandaşıdır. Heidelberg Ruprecht-Karls Üniversitesi'nde hukuk okumuş ve 2005 yılında birinci hukuk devlet sınavını vermiştir.",
        p2: "Heidelberg Eyalet Mahkemesi'nde iki yıllık avukatlık stajının ardından, 6 Haziran 2008'den bu yana avukatlık ruhsatına sahiptir ve tüm sulh, asliye ve istinaf mahkemelerinde temsil yetkilidir.",
        background: "Tüm hukuki sorularınızda size danışmanlık verir ve sizi temsil ederiz – başta genel medeni hukuk, iş hukuku, yabancılar hukuku, aile hukuku ve trafik hukuku olmak üzere, Almanca ve Türkçe.",
        cta: "İletişime geçin",
        more: "Kişiye dair",
        page: {
            lead: "Mannheim'da avukat – Türk kökenli Alman vatandaşı, Almanca ve Türkçe danışmanlık.",
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
            closingTitle: "Konunuzu bize anlatın.",
            sections: [
                {
                    heading: "Kişiye dair",
                    body: [
                        "Meral Gören, Türk kökenli Alman vatandaşıdır. Heidelberg Ruprecht-Karls Üniversitesi'nde hukuk okumuş ve 2005 yılında birinci hukuk devlet sınavını vermiştir.",
                        "Ardından Heidelberg Eyalet Mahkemesi'nde iki yıllık avukatlık stajını tamamlamıştır. 6 Haziran 2008'den bu yana avukatlık ruhsatına sahiptir."
                    ],
                    image: "/images/about/profil.webp"
                },
                {
                    heading: "Ruhsat",
                    body: [
                        "Almanya Federal Cumhuriyeti'nde avukatlık ruhsatına sahip; tüm sulh, asliye ve istinaf mahkemelerinde temsil yetkilidir.",
                        "Bağlı olduğu baro: Karlsruhe Barosu (Rechtsanwaltskammer Karlsruhe)."
                    ],
                    image: "/images/about/zulassung.webp"
                },
                {
                    heading: "İlkemiz",
                    body: [
                        "Görevimiz, sizi eksiksiz ve en iyi şekilde bilgilendirmek ve çıkarlarınızı mahkemede ve mahkeme dışında olabildiğince iyi temsil etmektir.",
                        "Çalışmamız; yetkinlik, kararlılık ve özenle öne çıkar. Anlaşılır bir dil kullanır, her adımda sizi bilgilendiririz."
                    ],
                    image: "/images/about/anspruch.webp"
                },
                {
                    heading: "Çalışma alanları",
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
                text: "Bahnhofstr. 18, 1. kat. Yüz yüze veya telefonla randevu."
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
        note: "[Yer tutucu: büronun gerçek Google değerlendirmeleriyle değiştirin – alıntı, isim veya baş harfler ve hukuk alanı. Aşağıdaki kayıtlar yer tutucudur.]",
        items: [
            { quote: "[Yer tutucu: gerçek bir değerlendirmeden alıntı]", name: "[Yer tutucu: isim/baş harfler]", context: "[Yer tutucu: hukuk alanı]" },
            { quote: "[Yer tutucu: gerçek bir değerlendirmeden alıntı]", name: "[Yer tutucu: isim/baş harfler]", context: "[Yer tutucu: hukuk alanı]" },
            { quote: "[Yer tutucu: gerçek bir değerlendirmeden alıntı]", name: "[Yer tutucu: isim/baş harfler]", context: "[Yer tutucu: hukuk alanı]" }
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
                slug: "mietminderung-maengel",
                category: "Medeni Hukuk",
                iso: "2026-09-02",
                date: "2 Eylül 2026",
                title: "Kira indirimi: Kirayı hangi durumlarda azaltabilirsiniz?",
                excerpt: "Küf, kombi arızası, inşaat gürültüsü – hangi ayıp indirim hakkı verir ve öncesinde ne yapmanız gerekir.",
                body: [
                    "Konutta ayıp varsa kira bedeli kanun gereği kendiliğinden azalır (§ 536 BGB). Bu, diğer birçok haktan önemli bir farktır: İndirimi ayrıca beyan etmeniz gerekmez, kendiliğinden gerçekleşir. Koşul, konutun sözleşmeye uygun kullanıma elverişliliğini önemsiz olmayan ölçüde bozan bir ayıbın bulunmasıdır.",
                    "Tipik örnekler: küf, ısıtma döneminde kombi veya kalorifer arızası, sızdıran pencereler, su hasarı ya da uzun süren inşaat gürültüsü. Konut dışındaki koşullar da oturmayı hissedilir biçimde bozuyorsa ayıp oluşturabilir.",
                    "Ayıp bildirimi zorunludur. § 536c BGB uyarınca ayıbı gecikmeksizin bildirmeniz gerekir. Bildirmezseniz haklarınızı yitirirsiniz ve duruma göre tazminat sorumluluğu dahi doğabilir. Bu nedenle ayıbı yazılı olarak bildirin, somut biçimde tarif edin ve giderilmesi için uygun bir süre verin.",
                    "Aynı anda delilleri de güvence altına alın: tarihli fotoğraflar, rahatsızlığın saatlerini ve süresini gösteren bir tutanak – gürültüde bir gürültü günlüğü –, tanıklar ve tüm yazışmalar. Uyuşmazlıkta çoğu kez ayıbı ve boyutunu kimin ispatlayabildiği belirleyici olur.",
                    "İndirimin oranı fiilî bozulmaya göre belirlenir. Dolaşımdaki indirim tabloları olsa olsa kaba bir yön gösterir; mahkemeler somut olaya göre karar verir. Asıl risk burada: Fazla indirim yapan kişi ödeme gecikmesine düşer – iki aylık kira tutarında birikmiş borçta ev sahibi haklı nedenle derhâl feshedebilir (§ 543 f. 2 b. 3 BGB).",
                    "Bu nedenle güvenli yol, kirayı önce tam olarak ve açıkça iade talebi saklı kalmak kaydıyla ödemeye devam etmek, indirilen tutarı sonrasında geri istemektir. Böylece haklarınızı korur, ancak fesih riskine girmezsiniz.",
                    "Ayıbı sözleşmenin kurulduğu sırada biliyorsanız (§ 536b BGB) veya ayıba kendiniz sebep olduysanız indirim hakkı doğmaz. Konutun teslim sırasındaki durumunu özenle tutanağa bağlamak da bu yüzden değerlidir."
                ],
                image: "/images/blog/zivilrecht.webp"
            },
            {
                slug: "einbuergerung-2026",
                category: "Yabancılar Hukuku",
                iso: "2026-08-12",
                date: "12 Ağustos 2026",
                title: "2026'da vatandaşlık: Güncel koşullar",
                excerpt: "İkamet süresi, dil belgesi, geçim – güncel şartlara genel bakış.",
                body: [
                    "27 Haziran 2024 tarihli vatandaşlık hukuku reformundan bu yana vatandaşlık, kural olarak sekiz yıl yerine beş yıllık hukuka uygun mutat ikametten sonra mümkün. En az onun kadar önemlisi: Mevcut vatandaşlığın artık kural olarak bırakılması gerekmiyor. Başvuruyu yıllarca erteleyenler için hesap böylece değişti.",
                    "Koşullara genel bakış: geçerli bir oturma izni ya da süresiz oturma hakkı, Almanya'da beş yıllık hukuka uygun mutat ikamet, güvence altına alınmış geçim, B1 düzeyinde Almanca, başarıyla geçilmiş vatandaşlık testi, ilgili bir sabıka kaydının bulunmaması ve özgür demokratik temel düzene bağlılık beyanı.",
                    "Uygulamada en sık takılınan nokta geçimdir. Kendinizin ve bakmakla yükümlü olduğunuz yakınlarınızın geçimini kural olarak SGB II veya SGB XII yardımları olmadan sağlayabilmeniz gerekir. Bu kuralın dar kapsamlı istisnaları vardır – örneğin eski misafir işçi kuşağına mensup olanlar ya da tam zamanlı çalışanlar için. Başvuruyu ertelemeden önce bu istisnalardan birinin sizin için geçerli olup olmadığını incelettirin.",
                    "Dil belgesinde kural olarak B1 düzeyinde bir sertifika veya bir Alman okul diploması yeterlidir. Yaş, hastalık veya engellilik hâllerinde kanun kolaylıklar öngörür.",
                    "Reformla birlikte ayrıca insan onurunun korunmasına ve Almanya'nın özel tarihsel sorumluluğuna ilişkin açık bir bağlılık beyanı geldi. Antisemitik, ırkçı veya insan onurunu başka biçimde çiğneyen saiklerle işlenen fiiller vatandaşlığa engeldir.",
                    "Özel uyum başarıları hâlinde hızlandırılmış vatandaşlığa ilişkin düzenlemeler 2024'ten bu yana birden çok kez yasal değişikliğe konu oldu. Planınızı buna dayandırmadan önce kendi durumunuz için güncel hukuki durumu incelettirin.",
                    "Şimdiden hazırlamanız gerekenler: ikamet sürelerinizin ve izinlerinizin kesintisiz belgesi, son aylara ait gelir belgeleri, emeklilik hizmet dökümü, dil sertifikası, vatandaşlık testi belgesi ve kimlik belgeleriniz. İkamet geçmişindeki boşluklar gecikmelerin en sık nedenidir – ve erken başlanırsa neredeyse her zaman kapatılabilir."
                ],
                image: "/images/blog/auslaenderrecht.webp"
            },
            {
                slug: "kuendigung-drei-wochen",
                category: "İş Hukuku",
                iso: "2026-07-28",
                date: "28 Temmuz 2026",
                title: "Fesih bildirimi aldınız – ilk üç hafta belirleyici",
                excerpt: "İşe iade davası süresi neden bu kadar önemli ve hemen ne yapmalısınız.",
                body: [
                    "Bir fesih bildirimi aldığınızda, bildirimin size ulaşmasından itibaren üç haftalık bir süre işlemeye başlar. Bu süre içinde işe iade davasının iş mahkemesine ulaşmış olması gerekir (§ 4 KSchG). Süreyi kaçırırsanız, fesih § 7 KSchG uyarınca baştan itibaren geçerli sayılır – içerik olarak ne kadar sakat olursa olsun.",
                    "Belirleyici olan bildirimin size ulaşması, yazının üzerindeki tarih değil. Posta kutusuna bırakma hâlinde, kutunun olağan olarak boşaltılacağı gün esas alınır. Bu nedenle feshi ne zaman ve hangi yolla aldığınızı hemen not edin ve zarfı saklayın.",
                    "Süre, fesih açıkça geçersiz görünse bile işler – örneğin ıslak imza taşımıyorsa, temsil yetkisi olmayan bir kişiden geliyorsa ya da gebelik, ebeveyn izni veya ağır engellilik nedeniyle özel fesih koruması göz ardı edilmişse. Bu itirazların da üç hafta içinde ileri sürülmesi gerekir.",
                    "§ 5 KSchG yalnızca istisnaen, kendinizden beklenen tüm özeni göstermenize rağmen zamanında dava açmanız engellenmişse davanın sonradan kabulüne izin verir. Hiç kimse planını buna dayandırmamalı.",
                    "Davadan bağımsız olarak: Fesihten haberdar olduktan en geç üç gün içinde İş Kurumu'na iş arayan olarak başvurun (§ 38 SGB III); aksi hâlde işsizlik ödeneğinde kesinti riski doğar. Ve aceleyle hiçbir şey imzalamayın – ikale veya tasfiye sözleşmesi bekleme süresi (Sperrzeit) doğurabilir ve aynı zamanda pazarlık gücünüzü elinizden alır.",
                    "Sonuçta işe iadenin mi, bir tazminatın mı yoksa iyileştirilmiş bir bonservisin mi çıkacağı çoğu kez, dava açıldıktan birkaç hafta sonra yapılan uzlaşma duruşmasında belli olur. Üç hafta, bu duruşmaya açılan kapıdır. Bu yüzden erken yapılan telefon, kusursuz hazırlanmış bir dosyadan daha önemlidir."
                ],
                image: "/images/blog/arbeitsrecht.webp"
            },
            {
                slug: "scheidung-tuerkei",
                category: "Aile Hukuku",
                iso: "2026-07-09",
                date: "9 Temmuz 2026",
                title: "Türkiye bağlantılı boşanma: Hangi hukuk uygulanır?",
                excerpt: "Alman mı Türk aile hukuku mu – cevap neye bağlı.",
                body: [
                    "Eşlerin hem Almanya hem Türkiye ile bağlantısı varsa iki soruyu net biçimde ayırmak gerekir: Hangi mahkeme yetkilidir – ve bu mahkeme hangi hukuku uygular? Cevaplar zorunlu olarak örtüşmez. Bir Alman mahkemesi Türk hukukunu uygulayabilir, tersi de mümkündür.",
                    "Alman mahkemelerinin milletlerarası yetkisi Brüksel IIb Tüzüğü'ne göre belirlenir. Tüzük öncelikle mutat meskeni esas alır: Her iki eş de Almanya'da yaşıyorsa, ikisi de yalnızca Türk vatandaşı olsa dahi Alman mahkemeleri yetkilidir.",
                    "Hangi hukukun uygulanacağını Roma III Tüzüğü belirler. Tüzük, kendisine taraf olmayan devletlerle ilişkide de uygulanır; Türkiye bunlardandır. Öncelikle eşlerin mahkemeye başvuru anındaki mutat meskeni esas alınır. İkisi de Almanya'da yaşıyorsa kural olarak Alman boşanma hukuku uygulanır.",
                    "Hukuk seçimi imkânı önemlidir: Eşler noter huzurunda, boşanmaya hangi hukukun uygulanacağını – örneğin Türk hukukunu – kararlaştırabilir. Bu yerinde olabilir, ancak tüm fer'î sonuçları kapsamaz. Nafaka, emeklilik haklarının denkleştirilmesi ve mal rejimi kendi kanunlar ihtilafı kurallarına tabidir.",
                    "Türkiye'de verilen bir boşanma kararı Almanya'da kendiliğinden tanınmaz. Kural olarak yetkili eyalet adalet idaresi nezdinde bir tanıma prosedürü gerekir (§ 107 FamFG). Bu tanıma olmadan Almanya'da hâlâ evli sayılırsınız – yeniden evlenme, miras hukuku ve nüfus kaydı bakımından tüm sonuçlarıyla birlikte.",
                    "Bunun tersi de geçerli: Alman boşanma kararının Türkiye'de nüfus siciline işlenmesi için tescil ettirilmesi gerekir. Her ikisi de en baştan düşünülmeli. Yalnızca bir prosedürü yürüten kişi, sonunda iki ülkeden birinde doğru olmayan bir medeni hâle sahip olur.",
                    "Danışmanlık açısından bu şu demek: Önce yetki ve uygulanacak hukuku, sonra fer'î sonuçları, ardından karşı taraftaki tanımayı netleştiririz. Bu sıra izlendiğinde sonraki sürprizlerin çoğu önlenebilir."
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
                        "Meral Gören – Rechtsanwältin\nBahnhofstr. 18, 1. OG\n69469 Mannheim\nAlmanya"
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
                        "Avukat Meral Gören, Bahnhofstr. 18, 69469 Mannheim, Telefon 06201 84 57 95, E-posta anwalt@kanzlei-goeren.de."
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
