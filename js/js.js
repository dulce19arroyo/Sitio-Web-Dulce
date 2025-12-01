document.addEventListener('DOMContentLoaded', function() {
    // Simular carga de la página
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 800);

    // Cambio de idioma
    const updateContent = (lang) => {
        const translations = {
            es: {
                title: "Te damos la bienvenida a nuestro a",
                text: "",
                menu: ["Inicio", "Sobre Nosotros", "Hotel", "Cabaña", "Contacto", "Reseña", "ES"]
            },
            en: {
                title: "Welcome to Our",
                text: "",
                menu: ["Home", "About Us", "Hotel", "Cabin", "Contact", "Reviews", "EN"]
            },
            ru: {
                title: "Добро пожаловать в наш...",
                text: "",
                menu: ["Главная", "О нас", "Отель", "Домик", "Контакт", "Отзывы", "RU"]
            }
        };

        document.querySelector('.section-title').textContent = translations[lang].title;
        document.querySelector('.section-text').textContent = translations[lang].text;
        
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

    // Smooth scroll para el contenido
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});