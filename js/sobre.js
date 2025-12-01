document.addEventListener('DOMContentLoaded', function() {
    // Cambio de idioma
    const updateContent = (lang) => {
        const translations = {
            es: {
                menu: ["Inicio", "Sobre Nosotros", "Hotel", "Cabaña", "Contacto", "Reseña", "ES"],
                title: "Bienvenido a tu lujoso hogar lejos de casa.",
                description: "Hotel y Cabañas Atlanta es una marca acogedora, natural y familiar que invita al descanso, la conexión y la aventura en el corazón de Chignahuapan. Inspirada en la tranquilidad del bosque y la calidez de un hogar, Atlanta ofrece experiencias únicas para quienes buscan escapar de la rutina y reconectar con lo esencial."
            },
            en: {
                menu: ["Home", "About Us", "Hotel", "Cabin", "Contact", "Reviews", "EN"],
                title: "Welcome to your luxurious home away from home.",
                description: "Hotel y Cabañas Atlanta is a welcoming, natural, and family-friendly brand that invites guests to relax, connect, and adventure in the heart of Chignahuapan. Inspired by the tranquility of the forest and the warmth of a home, Atlanta offers unique experiences for those seeking to escape routine and reconnect with what truly matters."
            },
            ru: {
                menu: ["Главная", "О нас", "Отель", "Домик", "Контакт", "Отзывы", "RU"],
                title: "Добро пожаловать в ваш роскошный дом вдали от дома.",
                description: "Отель и коттеджи Atlanta — это уютный, природный и семейный бренд, который приглашает гостей отдохнуть, насладиться общением и приключениями в сердце Чигнауапана. Вдохновленный тишиной леса и теплом домашнего очага, Atlanta предлагает уникальные впечатления для тех, кто хочет сбежать от рутины и вернуться к главному."
            }
        };
        
        // Actualizar menú
        const menuItems = document.querySelectorAll('.menu-link span');
        menuItems.forEach((item, index) => {
            item.textContent = translations[lang].menu[index];
        });
        
        // Actualizar contenido de la nueva sección
        document.querySelector('.section-title').textContent = translations[lang].title;
        document.querySelector('.section-description').textContent = translations[lang].description;
    };

    // Configurar eventos para el selector de idioma
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