document.addEventListener('DOMContentLoaded', function() {
    // Objeto de traducciones actualizado
    const translations = {
        es: {
            menu: ["Inicio", "Sobre Nosotros", "Hotel", "Cabaña", "Contacto", "Reseña", "ES"],
            title: "HOTEL",
            paragraph: "Descubre el encanto de Hotel & Cabañas Atlanta en Chignahuapan. Explora nuestras habitaciones, conoce sus precios y elige la opción perfecta para tu estancia.",
            descriptions: [
                "2 Personas, Habitación King Size desde $500 por noche.",
                "4 Personas, Habitación doble desde $700 por noche.",
                "6 Personas, Habitación triple desde $900 por noche."
            ]
        },
        en: {
            menu: ["Home", "About Us", "Hotel", "Cabin", "Contact", "Reviews", "EN"],
            title: "HOTEL",
            paragraph: "Discover the charm of Hotel & Cabañas Atlanta in Chignahuapan. Explore our rooms, check out their prices, and choose the perfect option for your stay.",
            descriptions: [
                "2 people, King Size room from $500 per night.",
                "4 people, double room from $700 per night.",
                "6 people, triple room from $900 per night."
            ]
        },
        ru: {
            menu: ["Главная", "О нас", "Отель", "Домик", "Контакт", "Отзывы", "RU"],
            title: "ОТЕЛЬ",
            paragraph: "Откройте для себя очарование Hotel & Cabañas Atlanta в Чигнауапане. Изучите наши номера, узнайте цены и выберите идеальный вариант для вашего проживания.",
            descriptions: [
                "2 человека, номер King Size от $500 за ночь.",
                "4 человека, двухместный номер от $700 за ночь.",
                "6 человек, трёхместный номер от $900 за ночь."
            ]
        }
    };

    // Función para actualizar el contenido según el idioma
    const updateContent = (lang) => {
        // Actualizar menú
        const menuItems = document.querySelectorAll('.menu-link span');
        menuItems.forEach((item, index) => {
            if (translations[lang].menu[index]) {
                item.textContent = translations[lang].menu[index];
            }
        });

        // Actualizar título y párrafo
        const mainTitle = document.querySelector('.main-title');
        const paragraph = document.querySelector('.paragraph');
        
        if (mainTitle && translations[lang].title) {
            mainTitle.textContent = translations[lang].title;
        }
        
        if (paragraph && translations[lang].paragraph) {
            paragraph.textContent = translations[lang].paragraph;
        }

        // Actualizar descripciones de imágenes
        const descriptions = document.querySelectorAll('.image-description');
        if (translations[lang].descriptions) {
            translations[lang].descriptions.forEach((text, index) => {
                if (descriptions[index]) {
                    descriptions[index].textContent = text;
                }
            });
        }
    };

    // Configurar eventos para el selector de idioma
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            const selectorSpan = document.querySelector('.language-selector .menu-link span');
            
            if (selectorSpan) {
                selectorSpan.textContent = lang.toUpperCase();
            }
            
            updateContent(lang);
            
            // Guardar preferencia de idioma
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // Cargar idioma preferido si existe
    const loadPreferredLanguage = () => {
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
        const preferredOption = document.querySelector(`.language-option[data-lang="${preferredLanguage}"]`);
        
        if (preferredOption) {
            preferredOption.click();
        } else {
            // Cargar español por defecto
            updateContent('es');
            const defaultOption = document.querySelector('.language-option[data-lang="es"]');
            if (defaultOption) {
                const selectorSpan = document.querySelector('.language-selector .menu-link span');
                if (selectorSpan) {
                    selectorSpan.textContent = 'ES';
                }
            }
        }
    };

    // Inicializar
    loadPreferredLanguage();

    // Efectos hover para menú (opcional, manteniendo tu estilo)
    const menuLinks = document.querySelectorAll('.menu-link');
    if (menuLinks) {
        menuLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Efectos hover para imágenes (opcional, manteniendo tu estilo)
    const galleryImages = document.querySelectorAll('.gallery-image');
    if (galleryImages) {
        galleryImages.forEach(img => {
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.03)';
                this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
            });
            img.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            });
        });
    }
});