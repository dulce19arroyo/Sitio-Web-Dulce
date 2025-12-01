// Sistema de traducción y almacenamiento de comentarios
const CommentManager = {
    // Comentarios predeterminados en todos los idiomas
    defaultComments: {
        es: [
            {
                text: "Nuestra estancia fue maravillosa. La cabaña era cómoda, limpia y con un ambiente acogedor que nos hizo sentir como en casa. Lo mejor fue despertar con la vista al bosque y disfrutar de la tranquilidad que ofrece este lugar.",
                author: "Luis Salazar"
            },
            {
                text: "El hotel superó nuestras expectativas. La atención del personal fue excelente y las habitaciones están muy bien cuidadas. Es el sitio ideal para descansar y pasar tiempo en familia rodeados de naturaleza.",
                author: "Julia Fuentes"
            },
            {
                text: "Me encantó la combinación de comodidad y entorno natural. Los precios son justos y el ambiente invita a relajarse. Sin duda, una experiencia que vale la pena repetir.",
                author: "Lucía de la Garza"
            }
        ],
        en: [
            {
                text: "Our stay was wonderful. The cabin was comfortable, clean, and with a cozy atmosphere that made us feel at home. The best part was waking up to the forest view and enjoying the tranquility this place offers.",
                author: "Luis Salazar"
            },
            {
                text: "The hotel exceeded our expectations. The staff's attention was excellent and the rooms are very well maintained. It's the ideal place to rest and spend time with family surrounded by nature.",
                author: "Julia Fuentes"
            },
            {
                text: "I loved the combination of comfort and natural surroundings. The prices are fair and the atmosphere invites relaxation. Without a doubt, an experience worth repeating.",
                author: "Lucía de la Garza"
            }
        ],
        ru: [
            {
                text: "Наше пребывание было прекрасным. Домик был удобным, чистым и с уютной атмосферой, которая заставляла нас чувствовать себя как дома. Лучшей частью было пробуждение с видом на лес и наслаждение спокойствием, которое предлагает это место.",
                author: "Luis Salazar"
            },
            {
                text: "Отель превзошел наши ожидания. Внимание персонала было превосходным, а номера очень хорошо maintained. Это идеальное место для отдыха и проведения времени с семьей в окружении природы.",
                author: "Julia Fuentes"
            },
            {
                text: "Мне понравилось сочетание комфорта и природного окружения. Цены справедливые, а атмосфера способствует расслаблению. Несомненно, опыт, который стоит повторить.",
                author: "Lucía de la Garza"
            }
        ]
    },
    
    // Traducciones de la interfaz
    translations: {
        es: {
            menu: ["Inicio", "Sobre Nosotros", "Hotel", "Cabaña", "Contacto", "Reseña", "ES"],
            commentsTitle: "Nuestros viajeros favoritos",
            formTitle: "Deja tu comentario",
            namePlaceholder: "Tu nombre",
            commentPlaceholder: "Tu comentario",
            buttonText: "Enviar comentario",
            successMessage: "¡Comentario agregado!",
            deleteButton: "Eliminar todos los comentarios",
            confirmDelete: "¿Estás seguro de que quieres eliminar todos los comentarios?",
            deleteSuccess: "Comentarios eliminados correctamente"
        },
        en: {
            menu: ["Home", "About Us", "Hotel", "Cabin", "Contact", "Reviews", "EN"],
            commentsTitle: "Our favorite travelers",
            formTitle: "Leave your comment",
            namePlaceholder: "Your name",
            commentPlaceholder: "Your comment",
            buttonText: "Submit comment",
            successMessage: "Comment added!",
            deleteButton: "Delete all comments",
            confirmDelete: "Are you sure you want to delete all comments?",
            deleteSuccess: "Comments deleted successfully"
        },
        ru: {
            menu: ["Главная", "О нас", "Отель", "Домик", "Контакт", "Отзывы", "RU"],
            commentsTitle: "Наши любимые путешественники",
            formTitle: "Оставьте ваш комментарий",
            namePlaceholder: "Ваше имя",
            commentPlaceholder: "Ваш комментарий",
            buttonText: "Отправить комментарий",
            successMessage: "Комментарий добавлен!",
            deleteButton: "Удалить все комментарии",
            confirmDelete: "Вы уверены, что хотите удалить все комментарии?",
            deleteSuccess: "Комментарии успешно удалены"
        }
    },
    
    // Almacenamiento de comentarios de usuario
    userComments: {
        es: [],
        en: [],
        ru: []
    },
    
    // Idioma actual
    currentLanguage: 'es',
    
    // Inicialización
    init() {
        this.loadUserComments();
        this.setupEventListeners();
        this.setLanguage(localStorage.getItem('preferredLanguage') || 'es');
        this.renderComments();
    },
    
    // Cargar comentarios de usuario desde localStorage
    loadUserComments() {
        const savedComments = localStorage.getItem('userComments');
        if (savedComments) {
            this.userComments = JSON.parse(savedComments);
        }
    },
    
    // Guardar comentarios de usuario en localStorage
    saveUserComments() {
        localStorage.setItem('userComments', JSON.stringify(this.userComments));
    },
    
    // Configurar event listeners
    setupEventListeners() {
        // Selector de idioma
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.setLanguage(lang);
                localStorage.setItem('preferredLanguage', lang);
            });
        });
        
        // Formulario de comentarios
        document.getElementById('new-comment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addNewComment();
        });
        
        // Botón de eliminar todos los comentarios
        document.getElementById('delete-all-btn').addEventListener('click', () => {
            this.deleteAllComments();
        });
        
        // Efectos hover en el menú
        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-3px)';
            });
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
            });
        });
    },
    
    // Establecer idioma
    setLanguage(lang) {
        this.currentLanguage = lang;
        
        // Actualizar textos de la interfaz
        const texts = this.translations[lang];
        document.querySelectorAll('.menu-link span').forEach((item, index) => {
            item.textContent = texts.menu[index];
        });
        
        document.querySelector('.comments-title').textContent = texts.commentsTitle;
        document.querySelector('.form-title').textContent = texts.formTitle;
        document.getElementById('comment-name').placeholder = texts.namePlaceholder;
        document.getElementById('comment-text').placeholder = texts.commentPlaceholder;
        document.getElementById('submit-text').textContent = texts.buttonText;
        document.getElementById('delete-all-btn').innerHTML = `<i class="fas fa-trash"></i> ${texts.deleteButton}`;
        
        // Actualizar selector de idioma
        document.querySelector('.language-selector .menu-link span').textContent = lang.toUpperCase();
        
        // Volver a renderizar comentarios
        this.renderComments();
    },
    
    // Renderizar comentarios
    renderComments() {
        const container = document.getElementById('comments-container');
        container.innerHTML = '';
        
        // Combinar comentarios predeterminados y comentarios de usuario
        const allComments = [
            ...this.defaultComments[this.currentLanguage],
            ...this.userComments[this.currentLanguage]
        ];
        
        allComments.forEach((comment, index) => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-box';
            commentElement.style.animation = 'slideIn 0.5s ease forwards';
            commentElement.style.animationDelay = `${index * 0.1}s`;
            commentElement.style.opacity = '0';
            
            commentElement.innerHTML = `
                <button class="delete-comment" data-id="${index}">
                    <i class="fas fa-times"></i>
                </button>
                <p class="comment-text">${comment.text}</p>
                <p class="comment-author">${comment.author}</p>
            `;
            
            // Añadir evento de eliminación para comentarios de usuario
            if (index >= this.defaultComments[this.currentLanguage].length) {
                const deleteBtn = commentElement.querySelector('.delete-comment');
                deleteBtn.addEventListener('click', () => {
                    this.deleteUserComment(index - this.defaultComments[this.currentLanguage].length);
                });
            } else {
                commentElement.querySelector('.delete-comment').style.display = 'none';
            }
            
            container.appendChild(commentElement);
        });
    },
    
    // Añadir nuevo comentario
    async addNewComment() {
        const nameInput = document.getElementById('comment-name');
        const textInput = document.getElementById('comment-text');
        const submitBtn = document.getElementById('submit-btn');
        const submitText = document.getElementById('submit-text');
        const submitLoading = document.getElementById('submit-loading');
        
        const name = nameInput.value.trim();
        const text = textInput.value.trim();
        
        if (name && text) {
            // Mostrar loading
            submitText.style.display = 'none';
            submitLoading.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            try {
                // Traducir el comentario a todos los idiomas
                await this.translateAndStoreComment(name, text);
                
                // Limpiar formulario
                nameInput.value = '';
                textInput.value = '';
                
                // Mostrar mensaje de éxito
                alert(this.translations[this.currentLanguage].successMessage);
                
                // Volver a renderizar comentarios
                this.renderComments();
            } catch (error) {
                console.error("Error adding comment:", error);
                alert("Error al agregar el comentario. Inténtalo de nuevo.");
            } finally {
                // Ocultar loading
                submitText.style.display = 'inline-block';
                submitLoading.style.display = 'none';
                submitBtn.disabled = false;
            }
        }
    },
    
    // Traducir y almacenar comentario usando Google Translate API
    async translateAndStoreComment(name, originalText) {
        // Almacenar comentario en español (idioma original)
        this.userComments.es.push({
            text: originalText,
            author: name
        });
        
        // Traducir a inglés
        try {
            const enText = await this.translateText(originalText, 'en');
            this.userComments.en.push({
                text: enText,
                author: name
            });
        } catch (error) {
            console.error("Error translating to English:", error);
            this.userComments.en.push({
                text: originalText + " [Error en traducción]",
                author: name
            });
        }
        
        // Traducir a ruso
        try {
            const ruText = await this.translateText(originalText, 'ru');
            this.userComments.ru.push({
                text: ruText,
                author: name
            });
        } catch (error) {
            console.error("Error translating to Russian:", error);
            this.userComments.ru.push({
                text: originalText + " [Ошибка перевода]",
                author: name
            });
        }
        
        this.saveUserComments();
    },
    
    // Usar la API de Google Translate (versión gratuita)
    async translateText(text, targetLang) {
        // Esta es una implementación con la API gratuita de Google Translate
        const sourceLang = 'auto';
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Translation failed: ${response.status}`);
        }
        
        const data = await response.json();
        return data[0][0][0];
    },
    
    // Eliminar comentario de usuario
    deleteUserComment(index) {
        // Eliminar de todos los idiomas
        for (const lang of ['es', 'en', 'ru']) {
            this.userComments[lang].splice(index, 1);
        }
        
        this.saveUserComments();
        this.renderComments();
    },
    
    // Eliminar todos los comentarios de usuario
    deleteAllComments() {
        if (confirm(this.translations[this.currentLanguage].confirmDelete)) {
            // Eliminar todos los comentarios de usuario (mantener los predeterminados)
            this.userComments = { es: [], en: [], ru: [] };
            this.saveUserComments();
            this.renderComments();
            alert(this.translations[this.currentLanguage].deleteSuccess);
        }
    }
};

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    CommentManager.init();
});