document.addEventListener('DOMContentLoaded', function() {
    // Traducciones
    const translations = {
        es: {
            menu: ["Inicio", "Sobre Nosotros", "Hotel", "Cabaña", "Contacto", "Reseña", "ES"],
            cabanas_title: "Cabañas",
            cabanas_description: "Descubre el encanto de Hotel & Cabañas Atlanta en Chignahuapan. Explora nuestras cabañas, conoce sus precios y elige la opción perfecta para tu estancia.",
            capacidad: "8 personas",
            precio: "desde $3000 la noche",
            alt_cabana: "Cabaña en Hotel Atlanta"
        },
        en: {
            menu: ["Home", "About Us", "Hotel", "Cabin", "Contact", "Reviews", "EN"],
            cabanas_title: "Cabins",
            cabanas_description: "Discover the charm of Hotel & Cabins Atlanta in Chignahuapan. Explore our cabins, check their prices and choose the perfect option for your stay.",
            capacidad: "8 people",
            precio: "from $3000 per night",
            alt_cabana: "Cabin at Atlanta Hotel"
        },
        ru: {
            menu: ["Главная", "О нас", "Отель", "Домик", "Контакт", "Отзывы", "RU"],
            cabanas_title: "Домики",
            cabanas_description: "Откройте для себя очарование отеля и домиков Atlanta в Чигнауапане. Исследуйте наши домики, узнайте их цены и выберите идеальный вариант для вашего проживания.",
            capacidad: "8 человек",
            precio: "от $3000 за ночь",
            alt_cabana: "Домик в отеле Atlanta"
        }
    };

    // Función para actualizar el contenido según el idioma
    const updateContent = (lang) => {
        // Actualizar menú
        const menuItems = document.querySelectorAll('.menu-link span');
        menuItems.forEach((item, index) => {
            item.textContent = translations[lang].menu[index];
        });

        // Actualizar contenido de la sección cabañas
        document.querySelector('[data-translate="cabanas_title"]').textContent = translations[lang].cabanas_title;
        document.querySelector('[data-translate="cabanas_description"]').textContent = translations[lang].cabanas_description;
        document.querySelector('[data-translate="capacidad"]').textContent = translations[lang].capacidad;
        document.querySelector('[data-translate="precio"]').textContent = translations[lang].precio;
        
        // Actualizar atributo alt de la imagen
        const imgCabana = document.querySelector('.cabanas-image img');
        imgCabana.alt = translations[lang].alt_cabana;
    };

    // Manejar el selector de idioma
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            document.querySelector('.language-selector .menu-link span').textContent = lang.toUpperCase();
            updateContent(lang);
            
            // Guardar preferencia de idioma
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // Cargar idioma preferido si existe
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
    document.querySelector(`.language-option[data-lang="${preferredLanguage}"]`).click();

    // Efecto hover mejorado para elementos del menú
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});