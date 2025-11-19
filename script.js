// --------------------- ЛОКАЛИЗАЦИЯ ----------------------
const translations = {
    ru: {
        // Header
        'register-btn': 'Зарегистрироваться',

        // Hero section
        'hero-title': 'Digitalization of Education in the Era of AI',
        'hero-desc': 'Международная научно-практическая конференция',
        'hero-meta': '📅 Алматы, Казахстан 17-18 марта 2026',
        'hero-cta': 'Узнать программу',

        // Navigation
        'nav-about': 'О конференции',
        'nav-program': 'Темы',
        'nav-speakers': 'Спикеры',
        'nav-contacts': 'Контакты',

        // Contacts section
        'contacts-title': 'Контакты',
        'contacts-text1': '📍 Адрес: г. Алматы, ул. Розыбакиева, 227, кабинет 25                                                                                                                                                             3',
        'contacts-text2': '📱 Телефон: +7 701 761 9108',
        'contacts-text3': '📧 E-mail: decai.almau.edu.kz',
        'contacts-text4': '🌐 Сайт: https://almau.edu.kz',

        // Footer
        'footer-text': '© Организаторы — AlmaU',

        // Форма регистрации
        'form-success': '✅ Вы успешно зарегистрированы на конференцию! Мы отпра                                                                                                                                                             вили вам подтверждение на email.',
        'form-error': ' Вы успешно зарегистрированы на конференцию!',
        'form-missing-fields': '⚠ Пожалуйста, заполните все обязательные поля.',
        'form-network-error': '❌ Ошибка сети. Проверьте подключение к интернету                                                                                                                                                             .'
    },

    kz: {
        // Header
        'register-btn': 'Тіркелу',

        // Hero section
        'hero-title': 'Digitalization of Education in the Era of AI',
        'hero-desc': 'Халықаралық ғылыми-тәжірибелік конференция',
        'hero-meta': '📅 Алматы, Қазақстан 17-18 наурыз 2026',
        'hero-cta': 'Бағдарламаны білу',

        // Navigation
        'nav-about': 'Конференция туралы',
        'nav-program': 'Тақырыптар',
        'nav-speakers': 'Спикерлер',
        'nav-contacts': 'Байланыс',

        // Contacts section
        'contacts-title': 'Байланыс',
        'contacts-text1': '📍 Мекенжай: Алматы қ., Розыбакиева көш., 227, 253 ка                                                                                                                                                             бинет',
        'contacts-text2': '📱 Телефон: +7 701 761 9108',
        'contacts-text3': '📧 E-mail: decai.almau.edu.kz',
        'contacts-text4': '🌐 Сайт: https://almau.edu.kz',

        // Footer
        'footer-text': '© Ұйымдастырушылар — AlmaU',

        // Форма регистрации
        'form-success': '✅ Сіз конференцияға сәтті тіркелдіңіз! Біз сізге элект                                                                                                                                                             рондық пошта арқылы растау жібердік.',
        'form-error': 'Сіз конференцияға сәтті тіркелдіңіз!',
        'form-missing-fields': '⚠ Барлық міндетті өрістерді толтырыңыз.',
        'form-network-error': '❌ Желі қатесі. Интернет байланысын тексеріңіз.'
    },

    en: {
        // Header
        'register-btn': 'Register',

        // Hero section
        'hero-title': 'Digitalization of Education in the Era of AI',
        'hero-desc': 'International Scientific and Practical Conference',
        'hero-meta': '📅 Almaty, Kazakhstan March 17-18, 2026',
        'hero-cta': 'View Program',

        // Navigation
        'nav-about': 'About',
        'nav-program': 'Topics',
        'nav-speakers': 'Speakers',
        'nav-contacts': 'Contacts',

        // Contacts section
        'contacts-title': 'Contacts',
        'contacts-text1': '📍 Address: Almaty, Rozybakiev str., 227, office 253'                                                                                                                                                             ,
        'contacts-text2': '📱 Phone: +7 701 761 9108',
        'contacts-text3': '📧 E-mail: decai.almau.edu.kz',
        'contacts-text4': '🌐 Website: https://almau.edu.kz',

        // Footer
        'footer-text': '© Organizers — AlmaU',

        // Форма регистрации
        'form-success': '✅ You have successfully registered for the conference!                                                                                                                                                              We have sent a confirmation to your email.',
        'form-error': ' You have succesfully registered for the conference!',
        'form-missing-fields': '⚠ Please fill in all required fields.',
        'form-network-error': '❌ Network error. Check your internet connection.                                                                                                                                                             '
    }
};

let currentLang = 'ru';

// Функция для изменения языка
function changeLanguage(lang) {
    console.log('🔄 Пытаемся сменить язык на:', lang);

    if (!translations[lang]) {
        console.error('❌ Язык не найден:', lang);
        return;
    }

    currentLang = lang;

    // Обновляем все элементы с data-i18n атрибутом
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('📝 Найдено элементов для перевода:', elements.length);

    let translatedCount = 0;
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
            translatedCount++;
            console.log('✅ Переведен:', key, '->', translations[lang][key]);
        } else {
            console.warn('⚠ Перевод не найден для ключа:', key, 'Элемент:', elem                                                                                                                                                             ent);
        }
    });

    console.log(`📊 Переведено элементов: ${translatedCount}/${elements.length}`                                                                                                                                                             );

    // Обновляем кнопки языка
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('🎯 Найдено кнопок языка:', langButtons.length);

    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        const isActive = btnLang === lang;

        btn.setAttribute('aria-selected', isActive);

        // Визуальное выделение активной кнопки
        if (isActive) {
            btn.style.background = '#fff';
            btn.style.color = '#0b63d8';
            btn.style.fontWeight = '700';
        } else {
            btn.style.background = 'transparent';
            btn.style.color = '#fff';
            btn.style.fontWeight = '600';
        }

        console.log('🎯 Кнопка', btnLang, 'активна:', isActive);
    });

    // Сохраняем выбор языка
    localStorage.setItem('preferred-language', lang);
    console.log('💾 Язык сохранен:', lang);
}

// Функция для показа сообщений формы
function showFormMessage(message, type = 'success') {
    const formMessages = document.getElementById('form-messages');
    if (!formMessages) {
        console.error('❌ Контейнер сообщений не найден!');
        return;
    }

    const messageClass = type === 'success' ? 'message-success' : 'message-error                                                                                                                                                             ';
    formMessages.innerHTML = `<div class="${messageClass}">${message}</div>`;

    console.log('💬 Показано сообщение:', message);

    // Автоматически скрываем сообщение через 5 секунд
    if (type === 'success') {
        setTimeout(() => {
            if (formMessages.innerHTML.includes('message-success')) {
                formMessages.innerHTML = '';
            }
        }, 5000);
    }

    // Плавная прокрутка к сообщению
    formMessages.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// --------------------- ОСНОВНОЙ КОД ----------------------
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Документ загружен, начинаем инициализацию...');

    // Проверяем наличие элементов перевода
    const translationElements = document.querySelectorAll('[data-i18n]');
    console.log('🔍 Элементы с data-i18n:', translationElements.length);
    translationElements.forEach(el => {
        console.log('   -', el.getAttribute('data-i18n'), ':', el.tagName, el.te                                                                                                                                                             xtContent.substring(0, 50) + '...');
    });

    // Проверяем наличие кнопок языка
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('🔍 Кнопки языка:', langButtons.length);
    langButtons.forEach(btn => {
        console.log('   -', btn.getAttribute('data-lang'), ':', btn.textContent)                                                                                                                                                             ;
    });

    // Инициализация языка
    const savedLang = localStorage.getItem('preferred-language') || 'ru';
    console.log('🌐 Устанавливаем язык:', savedLang);
    changeLanguage(savedLang);

    // Обработчики кнопок языка
    langButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            console.log('🔄 Клик по кнопке языка:', lang);
            changeLanguage(lang);
        });
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // --------------------- ФОРМА РЕГИСТРАЦИИ ----------------------
    const form = document.getElementById('registration-form');
    const messagesContainer = document.getElementById('form-messages');
    const roleSelect = document.getElementById('role');
    const topicField = document.getElementById('topic-field');

    console.log('📝 Форма регистрации:', form ? 'найдена' : 'не найдена');
    console.log('📝 Контейнер сообщений:', messagesContainer ? 'найден' : 'не на                                                                                                                                                             йден');
    console.log('📝 Выбор роли:', roleSelect ? 'найден' : 'не найден');
    console.log('📝 Поле темы:', topicField ? 'найдено' : 'не найдено');

    // Показ/скрытие поля темы для докладчиков
    if (roleSelect && topicField) {
        roleSelect.addEventListener('change', function() {
            console.log('🎭 Изменение роли:', this.value);
            if (this.value === 'Докладчик') {
                console.log('📢 Показываем поле темы доклада');
                topicField.style.display = 'block';
                if (document.getElementById('topic')) {
                    document.getElementById('topic').required = true;
                }
            } else {
                console.log('👤 Скрываем поле темы доклада');
                topicField.style.display = 'none';
                if (document.getElementById('topic')) {
                    document.getElementById('topic').required = false;
                }
            }
        });
    }

    // Обработка отправки формы
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('📤 Отправка формы...');

            const btn = form.querySelector('button[type="submit"]');
            const btnText = btn.querySelector('.btn-text');
            const btnLoading = btn.querySelector('.btn-loading');

            // Показываем загрузку
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            btn.disabled = true;

            // Очищаем сообщения
            if (messagesContainer) {
                messagesContainer.innerHTML = '';
            }

            try {
                // Отправляем на PHP
                const formData = new FormData(form);
                console.log('📦 Данные формы:', Object.fromEntries(formData));

                const response = await fetch('register.php', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.text();
                console.log('📨 Ответ сервера:', result);

                // Обрабатываем ответ
                if (result === 'success') {
                    showFormMessage(translations[currentLang]['form-success'], '                                                                                                                                                             success');
                    form.reset();

                    if (topicField) {
                        topicField.style.display = 'none';
                    }
                } else if (result === 'error:missing_fields') {
                    showFormMessage(translations[currentLang]['form-missing-fiel                                                                                                                                                             ds'], 'error');
                } else if (result === 'error:send_failed') {
                    showFormMessage(translations[currentLang]['form-error'], 'er                                                                                                                                                             ror');
                } else {
                    showFormMessage(translations[currentLang]['form-error'] + ':                                                                                                                                                              ' + result, 'error');
                }

            } catch (error) {
                console.error('💥 Ошибка:', error);
                showFormMessage(translations[currentLang]['form-network-error'],                                                                                                                                                              'error');
            } finally {
                // Восстанавливаем кнопку
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                btn.disabled = false;
            }
        });
    }

    // --------------------- ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ----------------------

    // Показать/скрыть спикеров
    const showMoreBtn = document.getElementById('show-more-speakers');
    const addlCards = document.querySelectorAll('#speakers-list .addl');
    let expanded = false;

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            expanded = !expanded;
            addlCards.forEach(el => el.style.display = expanded ? 'block' : 'non                                                                                                                                                             e');
            showMoreBtn.textContent = expanded ? 'Показать меньше' : 'Показать б                                                                                                                                                             ольше';
        });
    }

    // Toggle блоков информации
    document.querySelectorAll('.info-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content && content.classList.contains('info-content')) {
                const isVisible = content.style.display === 'block';
                content.style.display = isVisible ? 'none' : 'block';
                this.classList.toggle('active');
            }
        });
    });

    console.log('✅ Инициализация завершена');
});
