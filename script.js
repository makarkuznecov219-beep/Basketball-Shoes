// --- 40 МОДЕЛЕЙ КРОССОВОК ---
const SNEAKERS_DATA = [

    // NIKE
    { id: 1, brand: 'Nike', name: 'Nike LeBron 21', price: '95,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Nike%20LeBron%2021', rec: 'Именная модель Леброна Джеймса. Двойной Air Zoom дает абсолютную амортизацию.' },
    { id: 2, brand: 'Nike', name: 'Nike KD 16', price: '85,000 ₸', img: 'https://static.luck-d.com/product/7256/main_carousel/NIKE_KD_16_BLACK_VIVID_PURPLE_DV2916002_75890.webp', rec: 'Модель Кевина Дюранта. Подушка Nike Air в пятке мягко гасит ударные нагрузки.' },
    { id: 3, brand: 'Nike', name: 'Nike Kobe 8 Protro', price: '110,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Nike%20Kobe%208%20Protro', rec: 'Легендарный низкий силуэт Кобе Брайанта для максимального чувства паркета.' },
    { id: 4, brand: 'Nike', name: 'Nike GT Cut 3', price: '92,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Nike%20GT%20Cut%203', rec: 'Пена ZoomX обеспечивает невероятный отклик при резком первом шаге.' },
    { id: 5, brand: 'Nike', name: 'Nike Ja 1', price: '65,000 ₸', img: 'https://images.prodirectsport.com/ProductImages/Gallery_1/1000449_Gallery_1_1649815.jpg', rec: 'Взрывная пара Джа Моранта для молниеносных проходов под кольцо.' },
    { id: 6, brand: 'Nike', name: 'Nike Freak 5', price: '73,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Nike%20Freak%205', rec: 'Модель Янниса Адетокумбо с мощными фиксаторами для доминирования в краске.' },
    { id: 7, brand: 'Nike', name: 'Nike Sabrina 1', price: '68,000 ₸', img: 'https://images.prodirectsport.com/ProductImages/Main/1000476_Main_Thumb_1676173.jpg', rec: 'Эталонный зацеп на любом покрытии и плотная фиксация стопы.' },
    { id: 8, brand: 'Nike', name: 'Nike Book 1', price: '78,000 ₸', img: 'https://static.luck-d.com/product/7495/main_carousel/NIKE_BOOK_1_MIRAGE_FJ4249100_97694.webp', rec: 'Классический стиль Девина Букера в сочетании с упругой пеной Cushlon.' },
    { id: 9, brand: 'Nike', name: 'Nike Zoom GT Jump 2', price: '96,000 ₸', img: 'https://www.basketballshop24.de/media/ba/5e/51/1688640484/d7ce5a9fa9591076a2b1ce15f67ea285.jpg', rec: 'Максимум амортизации на трех баллонах Zoom Air для прыгунов.' },
    { id: 10, brand: 'Nike', name: 'Nike Precision 6', price: '42,000 ₸', img: 'https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw25987a7f/nk/911/2/f/e/b/5/9112feb5_031c_480f_9f95_b52db0133224.jpg?q=100&sh=700&sm=fit&strip=false&sw=700', rec: 'Надежный вариант для ежедневных интенсивных тренировок.' },

    // JORDAN
    { id: 11, brand: 'Jordan', name: 'Air Jordan 38', price: '89,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Air%20Jordan%2038', rec: 'Флагман бренда. Система X-Plate гарантирует стабильность при нагрузках.' },
    { id: 12, brand: 'Jordan', name: 'Jordan Tatum 2', price: '76,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Jordan%20Tatum%202', rec: 'Именная пара Джейсона Тейтума с легкими вентилируемыми материалами.' },
    { id: 13, brand: 'Jordan', name: 'Jordan Luka 2', price: '74,000 ₸', img: 'https://bouncewear.co.uk/cdn/shop/files/AURORA_DX8733-017_PHSRH000-2000.jpg?v=1706627469&width=1024', rec: 'Созданы под контроль шага и баланс в стиле Луки Дончича.' },
    { id: 14, brand: 'Jordan', name: 'Jordan Zion 3', price: '79,000 ₸', img: 'https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_jordan-zion-3-pink-foam-vapor-green-1.png', rec: 'Разработаны под взрывную физическую мощь Зайона Уильямсона.' },
    { id: 15, brand: 'Jordan', name: 'Air Jordan 11 Retro', price: '120,000 ₸', img: 'https://trilogymerchph.com/cdn/shop/products/Mens-Air-Jordan-11-Retro-Cherry-CT8012-116-5_1024x1024%402x.jpg?v=1671177857', rec: 'Культовая баскетбольная классика с элементами лакированной кожи.' },
    { id: 16, brand: 'Jordan', name: 'Jordan Why Not 6', price: '64,000 ₸', img: 'https://static.luck-d.com/product/5198/main_carousel/NIKE_JORDAN_WHY_NOT_6_WHITE_MULTI_DV1249101_54228.webp', rec: 'Агрессивная модель Уэстбрука для реактивных защитников.' },

    // ADIDAS
    { id: 17, brand: 'adidas', name: 'adidas AE 1', price: '84,000 ₸', img: 'https://i.ebayimg.com/images/g/DnYAAOSwddhl6ebg/s-l1200.png', rec: 'Хит от Энтони Эдвардса с футуристическим каркасом поддержки.' },
    { id: 18, brand: 'adidas', name: 'adidas Harden Vol. 8', price: '78,000 ₸', img: 'https://cdn.sneaktorious.com/_Resources/Persistent/4/8/8/a/488a542800848d704911ffddcfe0b773fa6933df/adidas_Harden_Vol_8_Feather_Grey_2-600x600.png', rec: 'Пена BOOST и манжет для фирменных степ-бэков Джеймса Хардена.' },
    { id: 19, brand: 'adidas', name: 'adidas Trae Young 3', price: '69,000 ₸', img: 'https://www.datocms-assets.com/24293/1753057898-adidas-trae-young-3-sky-tint-release-heat-mvmnt-1.png?fm=jpg&max-h=420&max-w=645', rec: 'Анатомическая подошва для резких остановок и дальних бросков.' },
    { id: 20, brand: 'adidas', name: 'adidas Dame 8 EXTPLY', price: '67,000 ₸', img: 'https://static.sneakerjagers.com/p/z0kIPUI4pbVeZhaTKspeKiz1JT9zAoG4Pq6dBzh3.png', rec: 'Амортизация Bounce Pro для результативных концовок от Дэмиана Лилларда.' },
    { id: 21, brand: 'adidas', name: 'adidas D.O.N. Issue 5', price: '62,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=adidas%20D.O.N.%20Issue%205', rec: 'Модель Донована Митчелла с ультраплотной посадкой.' },

    // PUMA
    { id: 22, brand: 'PUMA', name: 'PUMA MB.03', price: '72,000 ₸', img: 'https://images.puma.com/image/upload/f_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_2000%2Ch_2000/global/379904/01/fnd/SEA/fmt/png/MB.03-Iridescent-Basketball-Shoes', rec: 'Именные кроссовки Ламело Болла с пеной NITRO.' },
    { id: 23, brand: 'PUMA', name: 'PUMA All-Pro NITRO', price: '71,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=PUMA%20All-Pro%20NITRO', rec: 'Универсальная игровая модель с мягким и упругим ходом.' },
    { id: 24, brand: 'PUMA', name: 'PUMA Stewie 2', price: '59,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=PUMA%20Stewie%202', rec: 'Отличная вентиляция и баланс на паркете от Брианны Стюарт.' },
    { id: 25, brand: 'PUMA', name: 'PUMA Clyde All-Pro', price: '66,000 ₸', img: 'https://www.slamdunk.ru/uploads/monthly_2021_03/Puma-Clyde-All-Pro-194039-02_05.jpg.8abe78c46dbfa651cb8710bf17ef3069.jpg', rec: 'Низкопрофильная обувь для быстрой динамичной игры.' },

    // UNDER ARMOUR
    { id: 26, brand: 'Under Armour', name: 'Curry Flow 11', price: '82,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Curry%20Flow%2011', rec: 'Технология Flow без резиновой подметки для сцепления от Стефена Карри.' },
    { id: 27, brand: 'Under Armour', name: 'UA Spawn 5', price: '49,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=UA%20Spawn%205', rec: 'Анатомический каркас под форму стопы.' },
    { id: 28, brand: 'Under Armour', name: 'UA Lockdown 6', price: '39,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=UA%20Lockdown%206', rec: 'Прочная конструкция для надежной фиксации голеностопа.' },

    // 361°
    { id: 29, brand: '361°', name: '361° Big3 Future', price: '68,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=361%C2%B0%20Big3%20Future', rec: 'Именная линейка Николы Йокича. Стабильность для тяжелых игроков.' },
    { id: 30, brand: '361°', name: '361° Team Joker Ace', price: '56,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=361%C2%B0%20Team%20Joker%20Ace', rec: 'Усиленная подметка для жестких уличных кортов.' },
    { id: 31, brand: '361°', name: '361° AG4', price: '63,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=361%C2%B0%20AG4', rec: 'Модель Аарона Гордона с мощной системой энерговозврата.' },
    { id: 32, brand: '361°', name: '361° DVD 2', price: '54,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=361%C2%B0%20DVD%202', rec: 'Низкий профиль для маневренных гардов.' },

    // ANTA
    { id: 33, brand: 'ANTA', name: 'ANTA KAI 1', price: '75,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=ANTA%20KAI%201', rec: 'Именная пара Кайри Ирвинга для молниеносных кроссоверов.' },
    { id: 34, brand: 'ANTA', name: 'ANTA Shock Wave 5', price: '67,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=ANTA%20Shock%20Wave%205', rec: 'Противоскользящий протектор «Волна» для зала и улицы.' },
    { id: 35, brand: 'ANTA', name: 'ANTA GH4', price: '61,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=ANTA%20GH4', rec: 'Модель Гордона Хейворда с защитой ахилла.' },

    // LI-NING
    { id: 36, brand: 'Li-Ning', name: 'Way of Wade 10', price: '98,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Way%20of%20Wade%2010', rec: 'Карбоновая пластина во всю длину. Элитный игровой уровень.' },
    { id: 37, brand: 'Li-Ning', name: 'Li-Ning Speed 9', price: '64,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Li-Ning%20Speed%209', rec: 'Созданы для максимальной скорости и резких ускорений.' },

    // RIGORER
    { id: 38, brand: 'Rigorer', name: 'Rigorer AR1', price: '62,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Rigorer%20AR1', rec: 'Именные кроссовки Остина Ривза с вязаным верхом.' },
    { id: 39, brand: 'Rigorer', name: 'Rigorer Z-Factor', price: '53,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=Rigorer%20Z-Factor', rec: 'Надежная боковая поддержка.' },

    // NEW BALANCE
    { id: 40, brand: 'New Balance', name: 'NB TWO WXY v4', price: '70,000 ₸', img: 'https://placehold.co/600x600/171717/F5F5F5?text=NB%20TWO%20WXY%20v4', rec: 'Гибридная амортизация FuelCell и Fresh Foam.' }

];

const UPDATED_IMAGES = {
    1: 'https://i.ebayimg.com/images/g/9zUAAOSwfdllFpxu/s-l500.png',
    3: 'https://www.kickbulk.cc/image/cache/catalog/KOBE/HF9550-600/Nike-Kobe-8-Protro-University-Red-HF9550-600-3-550x550w.jpg',
    4: 'https://media-www.sportchek.ca/product/div-05-footwear/dpt-80-footwear/sdpt-01-mens/334397742/nike-men-s-women-s-g-t-cut-3-basketball-shoes-70e59090-2b2d-460e-913b-b965cb859554-jpgrendition.jpg?imdensity=1&impolicy=gZoom&imwidth=1244',
    6: 'https://www.slamdunk.gr/2868417-product_medium/nike-zoom-freak-5.jpg',
    11: 'https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_83cb5cb3-1dd5-414d-a6b0-e8173ce9d697_3840x.jpg?=75&v=1708091758',
    12: 'https://imgnike-a.akamaihd.net/1300x1300/02865551A9.jpg',
    21: 'https://img.pchome.com.tw/cs/items/DXAX0TA900HMHB1/l000002_1719977551.jpg',
    23: 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa2100126/products/PU309890-01/PU309890-01-1.JPG',
    24: 'https://www.manelsanchez.com/uploads/media/images/800x800/puma-stewie-2-water-light-aqua-12.jpg.webp',
    26: 'https://image.rakuten.co.jp/lustyle-arc/cabinet/09921709/09922691/09925186/3026615-100.jpg',
    27: 'https://www.manelsanchez.com/uploads/media/images/576x576/under-armour-spawn-5-white-gold-11.jpg.webp',
    28: 'https://images-cdn.ubuy.co.in/65b4a909ebd53f04662d8c08-under-armour-adult-ua-lockdown-6.jpg',
    29: 'https://361sport.com/cdn/shop/files/2_21cf8119-bfc4-473a-a91b-fe93745f6049.jpg?v=1708337486',
    30: 'https://361sport.com/cdn/shop/files/TeamJokerAce3.jpg?v=1736146822&width=1090',
    31: 'https://images.novelship.com/product/361_degrees_ag4_soar_aaron_gordon__ice_blade__6723_0_18917.jpeg',
    32: 'https://item-shopping.c.yimg.jp/i/n/athlete-gear_w572411107-1',
    33: 'https://justfreshkicks.com/wp-content/uploads/2024/02/2024-anta-kai-1-artist-on-court-8124B1102S-7.png',
    34: 'https://antosports.com/cdn/shop/files/IMG_6843.jpg?v=1719463144',
    35: 'https://www.basketballstore.net/cdn/shop/files/6812331104-4-anta-gh4-gordon-hayward-polar-white-scarpe-basket1-1000x1000.jpg?v=1696431084',
    36: 'https://cdn.idealo.com/folder/Product/205273/9/205273981/s1_produktbild_max/li-ning-way-of-wade-10.jpg',
    37: 'https://funkydunky.ru/upload/iblock/a50/4jky9s2tz66854xudbxq5m4kfgglpr1o.jpg',
    38: 'https://cmdsports.com.au/cdn/shop/files/rigorer-austin-reaves-ar1-basketball-shoe-246922.webp?v=1722924745&width=1080',
    40: 'https://pl.sportland.com/media/catalog/product/cache/9e32c470f79bf98a7a5a5a75b8eb1c40/B/B/BB2WYKC4_MIV_3_cb42.jpg'
};

SNEAKERS_DATA.forEach(item => {
    if (UPDATED_IMAGES[item.id]) {
        item.img = UPDATED_IMAGES[item.id];
    }
});

const ALL_40_BRANDS = [
    'Nike', 'Jordan', 'adidas', 'PUMA', 'Under Armour',
    '361°', 'ANTA', 'Li-Ning', 'Rigorer', 'New Balance',
    'Peak', 'Converse', 'AND1', 'Mizuno', 'Asics',
    'Reebok', 'Skechers', 'K1X', 'Spoact', 'Ektio',
    'Crossover', 'Qiaodan', 'Xtep', 'Erke', '361-Degrees',
    'Big3', 'Way of Wade', 'Curry Brand', 'Kobe Brand', 'LeBron Co',
    'Hoop Culture', 'Streetball Co', 'Dada Supreme', 'Ballislife',
    'Pro-Keds', 'Nivia', 'K1X Sub', 'Dunlop Hoop', 'Molten Wear',
    'Wilson Kicks'
];

const CatalogModule = {
    init() {
        this.renderSneakers(SNEAKERS_DATA);
        this.initAllBrandsModalList();
    },

    createFallbackImage(name) {
        const safeName = String(name || 'Модель кроссовок')
            .replace(/[&<>"']/g, char => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&apos;'
            }[char]));

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
                <rect width="600" height="600" fill="#171717"/>
                <path d="M110 360 Q190 330 245 270 L330 315 Q385 345 470 350 L510 390 Q500 430 450 435 L155 435 Q105 430 110 390Z"
                    fill="#292929" stroke="#f97316" stroke-width="9"/>
                <path d="M145 410 L475 410" stroke="#f97316" stroke-width="8" stroke-linecap="round"/>
                <text x="300" y="500" fill="#f5f5f5" font-family="Arial" font-size="25" text-anchor="middle">${safeName}</text>
                <text x="300" y="540" fill="#a3a3a3" font-family="Arial" font-size="17" text-anchor="middle">ФОТО НЕДОСТУПНО</text>
            </svg>`;

        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    },

    handleImageError(img) {
        if (!img || img.dataset.fallbackApplied === 'true') return;

        img.dataset.fallbackApplied = 'true';
        img.src = this.createFallbackImage(
            img.dataset.sneakerName || img.alt
        );
    },

    renderSneakers(data) {
        const grid = document.getElementById('sneakersGrid');

        if (!grid) {
            console.error('Не найден контейнер #sneakersGrid');
            return;
        }

        grid.innerHTML = data.map(item => `
            <div class="sneaker-card">
                <div class="sneaker-card__img-box">
                    <span class="sneaker-card__brand-badge">${item.brand}</span>

                    <img
                        src="${item.img}"
                        alt="${item.name}"
                        data-sneaker-name="${item.name}"
                        class="sneaker-card__img"
                        loading="lazy"
                        decoding="async"
                        onerror="CatalogModule.handleImageError(this)"
                    >
                </div>

                <div class="sneaker-card__body">
                    <div>
                        <h3 class="sneaker-card__title">${item.name}</h3>
                        <div class="sneaker-card__price">${item.price}</div>
                    </div>

                    <button
                        class="sneaker-card__btn"
                        onclick="CatalogModule.openDetailModal(${item.id})"
                    >
                        Подробнее и рекомендация
                    </button>
                </div>
            </div>
        `).join('');
    },

    filterByBrand(brandName) {
        const filtered = SNEAKERS_DATA.filter(
            item => item.brand.toLowerCase() === brandName.toLowerCase()
        );

        this.renderSneakers(
            filtered.length > 0 ? filtered : SNEAKERS_DATA
        );

        document.getElementById('catalogTitle').textContent =
            `КРОССОВКИ ${brandName.toUpperCase()} (${filtered.length})`;

        document.getElementById('resetFilterBtn').classList.remove('hidden');

        document.getElementById('catalog').scrollIntoView({
            behavior: 'smooth'
        });
    },

    resetFilter() {
        this.renderSneakers(SNEAKERS_DATA);

        document.getElementById('catalogTitle').textContent =
            'ВСЕ КРОССОВКИ (40 МОДЕЛЕЙ)';

        document.getElementById('resetFilterBtn').classList.add('hidden');
    },

    openDetailModal(id) {
        const sneaker = SNEAKERS_DATA.find(
            item => item.id === id
        );

        if (!sneaker) return;

        const content = document.getElementById('sneakerDetailContent');

        content.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                <div class="h-64 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center p-4">
                    <img
                        src="${sneaker.img}"
                        alt="${sneaker.name}"
                        data-sneaker-name="${sneaker.name}"
                        class="max-h-full object-contain"
                        loading="eager"
                        decoding="async"
                        onerror="CatalogModule.handleImageError(this)"
                    >
                </div>

                <div>
                    <span class="text-xs text-orange-500 font-bold uppercase tracking-wider">
                        ${sneaker.brand}
                    </span>

                    <h3 class="text-2xl font-bold mt-1 mb-2">
                        ${sneaker.name}
                    </h3>

                    <div class="text-xl font-extrabold text-orange-500 mb-4">
                        ${sneaker.price}
                    </div>

                    <div class="bg-neutral-900/80 p-4 rounded-xl border border-orange-500/20 mb-6">
                        <h4 class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                            <i class="fa-solid fa-thumbs-up mr-1"></i>
                            Почему стоит брать именно эту модель:
                        </h4>

                        <p class="text-xs text-neutral-300 leading-relaxed">
                            ${sneaker.rec}
                        </p>
                    </div>

                    <button
                        onclick="alert('Заказ успешно оформлен! Менеджер свяжется с вами.'); CatalogModule.closeModal('sneakerDetailModal');"
                        class="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                        Заказать модель
                    </button>
                </div>
            </div>
        `;

        document.getElementById('sneakerDetailModal')
            .classList.add('modal--active');
    },

    showAllBrandsModal() {
        document.getElementById('allBrandsModal')
            .classList.add('modal--active');
    },

    openPrivacyModal() {
        document.getElementById('privacyModal')
            .classList.add('modal--active');
    },

    closeModal(modalId) {
        document.getElementById(modalId)
            .classList.remove('modal--active');
    },

    initAllBrandsModalList() {
        const list = document.getElementById('allBrandsList');

        if (!list) return;

        list.innerHTML = ALL_40_BRANDS.map(brand => `
            <button
                class="modal-brand-item"
                onclick="CatalogModule.closeModal('allBrandsModal'); CatalogModule.filterByBrand('${brand}')"
            >
                ${brand}
            </button>
        `).join('');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    CatalogModule.init();
});
