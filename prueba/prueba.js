document.addEventListener('DOMContentLoaded', function() {
    // Cambio de idioma
    const updateContent = (lang) => {
        const translations = {
            es: {
                menu: ["Inicio", "Sobre Nosotros", "Hotel", "Cabaña", "Contacto", "Reseña", "ES"]
            },
            en: {
                menu: ["Home", "About Us", "Hotel", "Cabin", "Contact", "Reviews", "EN"]
            },
            ru: {
                menu: ["Главная", "О нас", "Отель", "Домик", "Контакт", "Отзывы", "RU"]
            }
        };
        
        const menuItems = document.querySelectorAll('.menu-link span');
        menuItems.forEach((item, index) => {
            item.textContent = translations[lang].menu[index];
        });
    };

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