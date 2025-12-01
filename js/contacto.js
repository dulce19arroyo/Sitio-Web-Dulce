// Sistema de traducción
document.addEventListener('DOMContentLoaded', function() {
    // Diccionario de traducciones
    const translations = {
        es: {
            // Menú
            "menu.home": "Inicio",
            "menu.about": "Sobre Nosotros",
            "menu.hotel": "Hotel",
            "menu.cabin": "Cabaña",
            "menu.contact": "Contacto",
            "menu.reviews": "Reseña",
            
            // Habitaciones
            "rooms.title": "Nuestras Habitaciones",
            "rooms.king": "Habitación King Size",
            "rooms.double": "Habitación Doble",
            "rooms.triple": "Habitación Triple",
            "rooms.capacity": "Capacidad",
            "rooms.2people": "2 Personas",
            "rooms.4people": "4 Personas",
            "rooms.6people": "6 Personas",
            "rooms.bed": "Cama",
            "rooms.beds": "Camas",
            "rooms.kingsize": "King Size",
            "rooms.2double": "2 Dobles",
            "rooms.3double": "3 Dobles",
            "rooms.from": "Desde",
            "rooms.pernight": "por noche",
            
            // Contacto
            "contact.address": "Dirección",
            "contact.contact": "Contacto",
            "contact.phone": "Teléfono",
            "contact.mobile": "Celular",
            "contact.hours": "Horarios de oficina",
            
            // Días de la semana
            "days.monday": "Lunes",
            "days.tuesday": "Martes",
            "days.wednesday": "Miércoles",
            "days.thursday": "Jueves",
            "days.friday": "Viernes",
            "days.saturday": "Sábado",
            "days.sunday": "Domingo",
            
            // Footer
            "footer.rights": "Todos los derechos reservados"
        },
        en: {
            // Menú
            "menu.home": "Home",
            "menu.about": "About Us",
            "menu.hotel": "Hotel",
            "menu.cabin": "Cabin",
            "menu.contact": "Contact",
            "menu.reviews": "Reviews",
            
            // Habitaciones
            "rooms.title": "Our Rooms",
            "rooms.king": "King Size Room",
            "rooms.double": "Double Room",
            "rooms.triple": "Triple Room",
            "rooms.capacity": "Capacity",
            "rooms.2people": "2 People",
            "rooms.4people": "4 People",
            "rooms.6people": "6 People",
            "rooms.bed": "Bed",
            "rooms.beds": "Beds",
            "rooms.kingsize": "King Size",
            "rooms.2double": "2 Double",
            "rooms.3double": "3 Double",
            "rooms.from": "From",
            "rooms.pernight": "per night",
            
            // Contacto
            "contact.address": "Address",
            "contact.contact": "Contact",
            "contact.phone": "Phone",
            "contact.mobile": "Mobile",
            "contact.hours": "Office Hours",
            
            // Días de la semana
            "days.monday": "Monday",
            "days.tuesday": "Tuesday",
            "days.wednesday": "Wednesday",
            "days.thursday": "Thursday",
            "days.friday": "Friday",
            "days.saturday": "Saturday",
            "days.sunday": "Sunday",
            
            // Footer
            "footer.rights": "All rights reserved"
        },
        ru: {
            // Menú
            "menu.home": "Главная",
            "menu.about": "О нас",
            "menu.hotel": "Отель",
            "menu.cabin": "Домик",
            "menu.contact": "Контакт",
            "menu.reviews": "Отзывы",
            
            // Habitaciones
            "rooms.title": "Наши Номера",
            "rooms.king": "Номер Кинг Сайз",
            "rooms.double": "Двойной Номер",
            "rooms.triple": "Тройной Номер",
            "rooms.capacity": "Вместимость",
            "rooms.2people": "2 Человека",
            "rooms.4people": "4 Человека",
            "rooms.6people": "6 Человек",
            "rooms.bed": "Кровать",
            "rooms.beds": "Кровати",
            "rooms.kingsize": "Кинг Сайз",
            "rooms.2double": "2 Двойные",
            "rooms.3double": "3 Двойные",
            "rooms.from": "От",
            "rooms.pernight": "за ночь",
            
            // Contacto
            "contact.address": "Адрес",
            "contact.contact": "Контакт",
            "contact.phone": "Телефон",
            "contact.mobile": "Мобильный",
            "contact.hours": "Часы работы",
            
            // Días de la semana
            "days.monday": "Понедельник",
            "days.tuesday": "Вторник",
            "days.wednesday": "Среда",
            "days.thursday": "Четверг",
            "days.friday": "Пятница",
            "days.saturday": "Суббота",
            "days.sunday": "Воскресенье",
            
            // Footer
            "footer.rights": "Все права защищены"
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        // Actualizar todos los elementos con data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Actualizar el indicador de idioma actual
        document.getElementById('current-lang').textContent = lang.toUpperCase();
        
        // Cambiar el atributo lang del documento
        document.documentElement.lang = lang;
        
        // Guardar preferencia de idioma
        localStorage.setItem('preferredLanguage', lang);
    }

    // Configurar eventos para los selectores de idioma
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Cargar idioma preferido si existe
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(preferredLanguage);

    // Efecto hover mejorado para elementos del menú
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efectos adicionales para mejorar la interactividad
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.12)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.08)';
        });
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});