// Локализация контента
const translations = {
    ru: {
        // Header
        'register-btn': 'Зарегистрироваться',
        
        // Hero section
        'hero-title': 'Digitalization of Education in the Era of AI',
        'hero-desc': 'Международная научно-практическая конференция',
        'hero-meta': '📅 2025 • Алматы',
        'hero-cta': 'Узнать программу',
        
        // Navigation
        'nav-about': 'О конференции',
        'nav-program': 'Темы',
        'nav-speakers': 'Спикеры',
        'nav-faq': 'FAQ',
        'nav-contacts': 'Контакты',
        
        // About section
        'about-title': 'О конференции',
        'about-text': 'Здесь будет блок «о конференции» — цель, организаторы, партнёры.',
        
        // Program section
        'program-title': 'Темы',
        'program-session-1': 'Открытие конференции',
        'program-speaker-1': 'Докладчик — Иван Иванов',
        
        // Speakers section
        'speakers-title': 'Спикеры',
        'speaker-1-name': 'Иван Иванов',
        'speaker-1-bio': 'Краткая биография.',
        
        // FAQ section
        'faq-title': 'FAQ',
        'faq-text': 'Часто задаваемые вопросы о конференции.',
        
        // Registration section
        'registration-title': 'Регистрация',
        'registration-desc': 'Заполните форму, чтобы зарегистрироваться на конференцию.',
        'label-name': 'Имя',
        'label-email': 'Email',
        'label-affiliation': 'Организация',
        'submit-btn': 'Отправить',
        'reset-btn': 'Очистить',
        'form-success': 'Спасибо! Временная форма: данные не будут сохранены.',
        'form-hint': 'Это заглушка — позже замените форму на Google Form или подключите сервер.',
        
        // Contacts section
        'contacts-title': 'Контакты',
        'contacts-text': 'Email: conf@example.edu • Адрес: г. Алматы',
        
        // Footer
        'footer-text': '© Организаторы — AlmaU'
    },
    
    kz: {
        // Header
        'register-btn': 'Тіркелу',
        
        // Hero section
        'hero-title': 'Digitalization of Education in the Era of AI',
        'hero-desc': 'Халықаралық ғылыми-тәжірибелік конференция',
        'hero-meta': '📅 2025 • Алматы',
        'hero-cta': 'Бағдарламаны білу',
        
        // Navigation
        'nav-about': 'Конференция туралы',
        'nav-program': 'Тақырыптар',
        'nav-speakers': 'Спикерлер',
        'nav-faq': 'Жиі қойылатын сұрақтар',
        'nav-contacts': 'Байланыс',
        
        // About section
        'about-title': 'Конференция туралы',
        'about-text': 'Конференцияның мақсаты, ұйымдастырушылар, серіктестер туралы ақпарат.',
        
        // Program section
        'program-title': 'Тақырыптар',
        'program-session-1': 'Конференцияның ашылуы',
        'program-speaker-1': 'Докладшы — Иван Иванов',
        
        // Speakers section
        'speakers-title': 'Спикерлер',
        'speaker-1-name': 'Иван Иванов',
        'speaker-1-bio': 'Қысқаша өмірбаяны.',
        
        // FAQ section
        'faq-title': 'Жиі қойылатын сұрақтар',
        'faq-text': 'Конференция туралы жиі қойылатын сұрақтар.',
        
        // Registration section
        'registration-title': 'Тіркелу',
        'registration-desc': 'Конференцияға тіркелу үшін форманы толтырыңыз.',
        'label-name': 'Аты-жөні',
        'label-email': 'Электрондық пошта',
        'label-affiliation': 'Ұйым',
        'submit-btn': 'Жіберу',
        'reset-btn': 'Тазарту',
        'form-success': 'Рахмет! Уақытша форма: деректер сақталмайды.',
        'form-hint': 'Бұл уақытша нұсқа — кейін Google Forms-пен ауыстырыңыз.',
        
        // Contacts section
        'contacts-title': 'Байланыс',
        'contacts-text': 'Email: conf@example.edu • Мекен-жайы: Алматы қ.',
        
        // Footer
        'footer-text': '© Ұйымдастырушылар — AlmaU'
    },
    
    en: {
        // Header
        'register-btn': 'Register',
        
        // Hero section
        'hero-title': 'Digitalization of Education in the Era of AI',
        'hero-desc': 'International Scientific and Practical Conference',
        'hero-meta': '📅 2025 • Almaty',
        'hero-cta': 'View Program',
        
        // Navigation
        'nav-about': 'About',
        'nav-program': 'Topics',
        'nav-speakers': 'Speakers',
        'nav-faq': 'FAQ',
        'nav-contacts': 'Contacts',
        
        // About section
        'about-title': 'About Conference',
        'about-text': 'Information about the conference goals, organizers, and partners.',
        
        // Program section
        'program-title': 'Topics',
        'program-session-1': 'Conference Opening',
        'program-speaker-1': 'Speaker — Ivan Ivanov',
        
        // Speakers section
        'speakers-title': 'Speakers',
        'speaker-1-name': 'Ivan Ivanov',
        'speaker-1-bio': 'Short biography.',
        
        // FAQ section
        'faq-title': 'FAQ',
        'faq-text': 'Frequently asked questions about the conference.',
        
        // Registration section
        'registration-title': 'Registration',
        'registration-desc': 'Fill out the form to register for the conference.',
        'label-name': 'Name',
        'label-email': 'Email',
        'label-affiliation': 'Organization',
        'submit-btn': 'Submit',
        'reset-btn': 'Clear',
        'form-success': 'Thank you! Temporary form: data will not be saved.',
        'form-hint': 'This is a placeholder — replace with Google Forms later.',
        
        // Contacts section
        'contacts-title': 'Contacts',
        'contacts-text': 'Email: conf@example.edu • Address: Almaty',
        
        // Footer
        'footer-text': '© Organizers — AlmaU'
    }
};

// Текущий язык
let currentLang = 'ru';

// Функция для изменения языка
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    
    // Обновляем все элементы с data-i18n атрибутом
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Обновляем aria-selected у кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        btn.setAttribute('aria-selected', btnLang === lang);
    });
    
    // Сохраняем выбор языка в localStorage
    localStorage.setItem('preferred-language', lang);
}

// Функция для обработки отправки формы
function handleDummySubmit(event) {
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    feedback.hidden = false;
    feedback.textContent = translations[currentLang]['form-success'];
    
    // Очищаем форму
    event.target.reset();
    
    // Скрываем сообщение через 5 секунд
    setTimeout(() => {
        feedback.hidden = true;
    }, 5000);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Восстанавливаем сохраненный язык или используем русский по умолчанию
    const savedLang = localStorage.getItem('preferred-language') || 'ru';
    changeLanguage(savedLang);
    
    // Добавляем обработчики для кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
