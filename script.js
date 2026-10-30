// --- ДАТАСЕТ ИЗ 40 МОДЕЛЕЙ С РЕАЛЬНЫМИ ИЗОБРАЖЕНИЯМИ ---
const SNEAKERS_DATA = [
    // --- NIKE (10 моделей) ---
    { id: 1, brand: 'Nike', name: 'Nike LeBron 21', price: '95,000 ₸', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop', rec: 'Именная модель Леброна Джеймса. Двойной Air Zoom дает абсолютную амортизацию.' },
    { id: 2, brand: 'Nike', name: 'Nike KD 16', price: '85,000 ₸', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop', rec: 'Модель Кевина Дюранта. Подушка Nike Air в пятке мягко гасит ударные нагрузки.' },
    { id: 3, brand: 'Nike', name: 'Nike Kobe 8 Protro', price: '110,000 ₸', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop', rec: 'Легендарный низкий силуэт Кобе Брайанта для максимального чувства паркета.' },
    { id: 4, brand: 'Nike', name: 'Nike GT Cut 3', price: '92,000 ₸', img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop', rec: 'Пена ZoomX обеспечивает невероятный отклик при резком первом шаге.' },
    { id: 5, brand: 'Nike', name: 'Nike Ja 1', price: '65,000 ₸', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop', rec: 'Взрывная пара Джа Моранта для молниеносных проходов под кольцо.' },
    { id: 6, brand: 'Nike', name: 'Nike Freak 5', price: '73,000 ₸', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop', rec: 'Модель Янниса Адетокумбо с мощными фиксаторами для доминирования в краске.' },
    { id: 7, brand: 'Nike', name: 'Nike Sabrina 1', price: '68,000 ₸', img: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&auto=format&fit=crop', rec: 'Эталонный зацеп на любом покрытии и плотная фиксация стопы.' },
    { id: 8, brand: 'Nike', name: 'Nike Book 1', price: '78,000 ₸', img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop', rec: 'Классический стиль Девина Букера в сочетании с упругой пеной Cushlon.' },
    { id: 9, brand: 'Nike', name: 'Nike Zoom GT Jump 2', price: '96,000 ₸', img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&auto=format&fit=crop', rec: 'Максимум амортизации на трех баллонах Zoom Air для прыгунов.' },
    { id: 10, brand: 'Nike', name: 'Nike Precision 6', price: '42,000 ₸', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop', rec: 'Надежный вариант для ежедневных интенсивных тренировок.' },

    // --- JORDAN (6 моделей) ---
    { id: 11, brand: 'Jordan', name: 'Air Jordan 38', price: '89,000 ₸', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop', rec: 'Флагман бренда. Система X-Plate гарантирует стабильность при нагрузках.' },
    { id: 12, brand: 'Jordan', name: 'Jordan Tatum 2', price: '76,000 ₸', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop', rec: 'Именная пара Джейсона Тейтума с легкими вентилируемыми материалами.' },
    { id: 13, brand: 'Jordan', name: 'Jordan Luka 2', price: '74,000 ₸', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop', rec: 'Созданы под контроль шага и баланс в стиле Луки Дончича.' },
    { id: 14, brand: 'Jordan', name: 'Jordan Zion 3', price: '79,000 ₸', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop', rec: 'Разработаны под взрывную физическую мощь Зайона Уильямсона.' },
    { id: 15, brand: 'Jordan', name: 'Air Jordan 11 Retro', price: '120,000 ₸', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop', rec: 'Культовая баскетбольная классика с элементами лакированной кожи.' },
    { id: 16, brand: 'Jordan', name: 'Jordan Why Not 6', price: '64,000 ₸', img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop', rec: 'Агрессивная модель Уэстбрука для реактивных защитников.' },

    // --- ADIDAS (5 моделей) ---
    { id: 17, brand: 'adidas', name: 'adidas AE 1', price: '84,000 ₸', img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&auto=format&fit=crop', rec: 'Хит от Энтони Эдвардса с футуристическим каркасом поддержки.' },
    { id: 18, brand: 'adidas', name: 'adidas Harden Vol. 8', price: '78,000 ₸', img: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&auto=format&fit=crop', rec: 'Пена BOOST и манжет для фирменных степ-бэков Джеймса Хардена.' },
    { id: 19, brand: 'adidas', name: 'adidas Trae Young 3', price: '69,000 ₸', img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop', rec: 'Анатомическая подошва для резких остановок и дальних бросков.' },
    { id: 20, brand: 'adidas', name: 'adidas Dame 8 EXTPLY', price: '67,000 ₸', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop', rec: 'Амортизация Bounce Pro для результативных концовок от Дэмиана Лилларда.' },
    { id: 21, brand: 'adidas', name: 'adidas D.O.N. Issue 5', price: '62,000 ₸', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop', rec: 'Модель Донована Митчелла с ультраплотной посадкой.' },

    // --- PUMA (4 модели) ---
    { id: 22, brand: 'PUMA', name: 'PUMA MB.03', price: '72,000 ₸', img: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&auto=format&fit=crop', rec: 'Именные кроссовки Ламело Болла с пеной NITRO.' },
    { id: 23, brand: 'PUMA', name: 'PUMA All-Pro NITRO', price: '71,000 ₸', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop', rec: 'Универсальная игровая модель с мягким и упругим ходом.' },
    { id: 24, brand: 'PUMA', name: 'PUMA Stewie 2', price: '59,000 ₸', img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop', rec: 'Отличная вентиляция и баланс на паркете от Брианны Стюарт.' },
    { id: 25, brand: 'PUMA', name: 'PUMA Clyde All-Pro', price: '66,000 ₸', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop', rec: 'Низкопрофильная обувь для быстрой динамичной игры.' },

    // --- UNDER ARMOUR (3 модели) ---
    { id: 26, brand: 'Under Armour', name: 'Curry Flow 11', price: '82,000 ₸', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop', rec: 'Технология Flow без резиновой подметки для сцепления от Стефена Карри.' },
    { id: 27, brand: 'Under Armour', name: 'UA Spawn 5', price: '49,000 ₸', img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&auto=format&fit=crop', rec: 'Анатомический каркас под форму стопы.' },
    { id: 28, brand: 'Under Armour', name: 'UA Lockdown 6', price: '39,000 ₸', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop', rec: 'Прочная конструкция для надежной фиксации голеностопа.' },

    // --- 361° (4 модели) ---
    { id: 29, brand: '361°', name: '361° Big3 Future', price: '68,000 ₸', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop', rec: 'Именная линейка Николы Йокича. Стабильность для тяжелых игроков.' },
    { id: 30, brand: '361°', name: '361° Team Joker Ace', price: '56,000 ₸', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop', rec: 'Усиленная подметка для жестких уличных кортов.' },
    { id: 31, brand: '361°', name: '361° AG4', price: '63,000 ₸', img: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&auto=format&fit=crop', rec: 'Модель Аарона Гордона с мощной системой энерговозврата.' },
    { id: 32, brand: '361°', name: '361° DVD 2', price: '54,000 ₸', img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop', rec: 'Низкий профиль для маневренных гардов.' },

    // --- ANTA (3 модели) ---
    { id: 33, brand: 'ANTA', name: 'ANTA KAI 1', price: '75,000 ₸', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop', rec: 'Именная пара Кайри Ирвинга для молниеносных кроссоверов.' },
    { id: 34, brand: 'ANTA', name: 'ANTA Shock Wave 5', price: '67,000 ₸', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop', rec: 'Противоскользящий протектор «Волна» для зала и улицы.' },
    { id: 35, brand: 'ANTA', name: 'ANTA GH4', price: '61,000 ₸', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop', rec: 'Модель Гордона Хейворда с защитой ахилла.' },

    // --- LI-NING (2 модели) ---
    { id: 36, brand: 'Li-Ning', name: 'Way of Wade 10', price: '98,000 ₸', img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop', rec: 'Карбоновая пластина во всю длину. Элитный игровой уровень.' },
    { id: 37, brand: 'Li-Ning', name: 'Li-Ning Speed 9', price: '64,000 ₸', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop', rec: 'Созданы для максимальной скорости и резких ускорений.' },

    // --- RIGORER (2 модели) ---
    { id: 38, brand: 'Rigorer', name: 'Rigorer AR1', price: '62,000 ₸', img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&auto=format&fit=crop', rec: 'Именные кроссовки Остина Ривза с вязаным верхом.' },
    { id: 39, brand: 'Rigorer', name: 'Rigorer Z-Factor', price: '53,000 ₸', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop', rec: 'Надежная боковая поддержка.' },

    // --- NEW BALANCE (1 модель) ---
    { id: 40, brand: 'New Balance', name: 'NB TWO WXY v4', price: '70,000 ₸', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop', rec: 'Гибридная амортизация FuelCell и Fresh Foam.' }
];

const ALL_40_BRANDS = [
    'Nike', 'Jordan', 'adidas', 'PUMA', 'Under Armour', '361°', 'ANTA', 'Li-Ning', 'Rigorer', 'New Balance',
    'Peak', 'Converse', 'AND1', 'Mizuno', 'Asics', 'Reebok', 'Skechers', 'K1X', 'Spoact', 'Ektio',
    'Crossover', 'Qiaodan', 'Xtep', 'Erke', '361-Degrees', 'Big3', 'Way of Wade', 'Curry Brand', 'Kobe Brand', 'LeBron Co',
    'Hoop Culture', 'Streetball Co', 'Dada Supreme', 'Ballislife', 'Pro-Keds', 'Nivia', 'K1X Sub', 'Dunlop Hoop', 'Molten Wear', 'Wilson Kicks'
];

const CatalogModule = {
    init() {
        this.renderSneakers(SNEAKERS_DATA);
        this.initAllBrandsModalList();
    },

    renderSneakers(data) {
        const grid = document.getElementById('sneakersGrid');
        if (!grid) return;

        grid.innerHTML = data.map(item => `
            <div class="sneaker-card">
                <div class="sneaker-card__img-box">
                    <span class="sneaker-card__brand-badge">${item.brand}</span>
                    <img src="${item.img}" alt="${item.name}" class="sneaker-card__img" loading="lazy">
                </div>
                <div class="sneaker-card__body">
                    <div>
                        <h3 class="sneaker-card__title">${item.name}</h3>
                        <div class="sneaker-card__price">${item.price}</div>
                    </div>
                    <button class="sneaker-card__btn" onclick="CatalogModule.openDetailModal(${item.id})">
                        Подробнее и рекомендация
                    </button>
                </div>
            </div>
        `).join('');
    },

    filterByBrand(brandName) {
        const filtered = SNEAKERS_DATA.filter(item => item.brand.toLowerCase() === brandName.toLowerCase());
        this.renderSneakers(filtered.length > 0 ? filtered : SNEAKERS_DATA);
        
        document.getElementById('catalogTitle').textContent = `КРОССОВКИ ${brandName.toUpperCase()} (${filtered.length})`;
        document.getElementById('resetFilterBtn').classList.remove('hidden');
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    },

    resetFilter() {
        this.renderSneakers(SNEAKERS_DATA);
        document.getElementById('catalogTitle').textContent = 'ВСЕ КРОССОВКИ (40 МОДЕЛЕЙ)';
        document.getElementById('resetFilterBtn').classList.add('hidden');
    },

    openDetailModal(id) {
        const sneaker = SNEAKERS_DATA.find(item => item.id === id);
        if (!sneaker) return;

        const content = document.getElementById('sneakerDetailContent');
        content.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div class="h-64 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center p-4">
                    <img src="${sneaker.img}" alt="${sneaker.name}" class="max-h-full object-contain">
                </div>
                <div>
                    <span class="text-xs text-orange-500 font-bold uppercase tracking-wider">${sneaker.brand}</span>
                    <h3 class="text-2xl font-bold mt-1 mb-2">${sneaker.name}</h3>
                    <div class="text-xl font-extrabold text-orange-500 mb-4">${sneaker.price}</div>
                    
                    <div class="bg-neutral-900/80 p-4 rounded-xl border border-orange-500/20 mb-6">
                        <h4 class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                            <i class="fa-solid fa-thumbs-up mr-1"></i> Почему стоит брать именно эту модель:
                        </h4>
                        <p class="text-xs text-neutral-300 leading-relaxed">${sneaker.rec}</p>
                    </div>

                    <button onclick="alert('Заказ успешно оформлен! Менеджер свяжется с вами.'); CatalogModule.closeModal('sneakerDetailModal');" class="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer">
                        Заказать модель
                    </button>
                </div>
            </div>
        `;

        document.getElementById('sneakerDetailModal').classList.add('modal--active');
    },

    showAllBrandsModal() {
        document.getElementById('allBrandsModal').classList.add('modal--active');
    },

    openPrivacyModal() {
        document.getElementById('privacyModal').classList.add('modal--active');
    },

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('modal--active');
    },

    initAllBrandsModalList() {
        const list = document.getElementById('allBrandsList');
        if (!list) return;

        list.innerHTML = ALL_40_BRANDS.map(brand => `
            <button class="modal-brand-item" onclick="CatalogModule.closeModal('allBrandsModal'); CatalogModule.filterByBrand('${brand}')">
                ${brand}
            </button>
        `).join('');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    CatalogModule.init();
});