// Локализация контента
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
        
        // Registration section
        'registration-title': 'Регистрация',
        'registration-desc': 'Заполните форму ниже для участия в конференции',
        'label-name': 'ФИО',
        'label-email': 'Email',
        'label-phone': 'Телефон',
        'label-country': 'Страна',
        'label-organization': 'Организация / Университет',
        'label-role': 'Роль',
        'label-format': 'Формат участия',
        'label-topic': 'Тема доклада',
        'label-comments': 'Дополнительные комментарии',
        'role-participant': 'Участник',
        'role-speaker': 'Докладчик',
        'role-student': 'Студент',
        'role-teacher': 'Преподаватель',
        'format-online': 'Онлайн',
        'format-offline': 'Офлайн',
        'submit-btn': 'Зарегистрироваться',
        'submit-loading': 'Отправка...',
        'form-success': '✅ Регистрация прошла успешно! Мы отправили подтверждение на вашу почту.',
        'form-error': '❌ Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.',
        'form-validation-name': 'Пожалуйста, введите ФИО',
        'form-validation-email': 'Пожалуйста, введите корректный email',
        'form-validation-organization': 'Пожалуйста, введите организацию',
        'form-validation-role': 'Пожалуйста, выберите роль',
        'form-validation-format': 'Пожалуйста, выберите формат участия',
        'form-validation-topic': 'Пожалуйста, укажите тему доклада',

        // Contacts section
        'contacts-title': 'Контакты',
        'contacts-text1': '📍 Адрес: г. Алматы, ул. Розыбакиева, 227, кабинет 253',
        'contacts-text2': '📱 Телефон: +7 701 761 9108',
        'contacts-text3': '📧 E-mail: deai.almau.edu.kz',
        'contacts-text4': '🌐 Сайт: https://almau.edu.kz',
        
        // Footer
        'footer-text': '© Организаторы — AlmaU',
        
        // Speakers button
        'show-more-speakers': 'Показать больше',
        'show-less-speakers': 'Показать меньше'
    },
    
    kz: {
        // Header
        'register-btn': 'Тіркелу',
        
        // Hero section
        'hero-title': 'Digitalization of Education in the Era of AI',
        'hero-desc': 'Халықаралық ғылыми-тәжірибелік конференция',
        'hero-meta': '📅 Алматы, Казахстан 17-18 наурыз 2026',
        'hero-cta': 'Бағдарламаны білу',
        
        // Navigation
        'nav-about': 'Конференция туралы',
        'nav-program': 'Тақырыптар',
        'nav-speakers': 'Спикерлер',
        'nav-faq': 'Сұрақтар',
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
        
        // Registration section
        'registration-title': 'Тіркелу',
        'registration-desc': 'Конференцияға қатысу үшін төмендегі форманы толтырыңыз',
        'label-name': 'Аты-жөні',
        'label-email': 'Электрондық пошта',
        'label-phone': 'Телефон',
        'label-country': 'Ел',
        'label-organization': 'Ұйым / Университет',
        'label-role': 'Рөл',
        'label-format': 'Қатысу форматы',
        'label-topic': 'Доклад тақырыбы',
        'label-comments': 'Қосымша түсініктемелер',
        'role-participant': 'Қатысушы',
        'role-speaker': 'Докладшы',
        'role-student': 'Студент',
        'role-teacher': 'Оқытушы',
        'format-online': 'Онлайн',
        'format-offline': 'Офлайн',
        'submit-btn': 'Тіркелу',
        'submit-loading': 'Жіберілуде...',
        'form-success': '✅ Тіркелу сәтті аяқталды! Біз сіздің поштаңызға растау жібердік.',
        'form-error': '❌ Форманы жіберу кезінде қате орын алды. Қайталап көріңіз немесе бізбен тікелей байланысыңыз.',
        'form-validation-name': 'Аты-жөніңізді енгізіңіз',
        'form-validation-email': 'Дұрыс электрондық поштаны енгізіңіз',
        'form-validation-organization': 'Ұйымыңызды енгізіңіз',
        'form-validation-role': 'Рөліңізді таңдаңыз',
        'form-validation-format': 'Қатысу форматын таңдаңыз',
        'form-validation-topic': 'Доклад тақырыбын көрсетіңіз',
        
        // Contacts section
        'contacts-title': 'Байланыс',
        'contacts-text1': '📍 Мекенжай: Алматы к., Розыбакиева көш., 227, 253-кабинет',
        'contacts-text2': '📱 Телефон: +7 701 761 9108',
        'contacts-text3': '📧 E-mail: deai.almau.edu.kz',
        'contacts-text4': '🌐 Сайт: https://almau.edu.kz',
        
        // Footer
        'footer-text': '© Ұйымдастырушылар — AlmaU',
        
        // Speakers button
        'show-more-speakers': 'Көбірек көрсету',
        'show-less-speakers': 'Азырақ көрсету'
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
        
        // Registration section
        'registration-title': 'Registration',
        'registration-desc': 'Fill out the form below to participate in the conference',
        'label-name': 'Full Name',
        'label-email': 'Email',
        'label-phone': 'Phone',
        'label-country': 'Country',
        'label-organization': 'Organization / University',
        'label-role': 'Role',
        'label-format': 'Participation Format',
        'label-topic': 'Presentation Topic',
        'label-comments': 'Additional Comments',
        'role-participant': 'Participant',
        'role-speaker': 'Speaker',
        'role-student': 'Student',
        'role-teacher': 'Teacher',
        'format-online': 'Online',
        'format-offline': 'Offline',
        'submit-btn': 'Register',
        'submit-loading': 'Submitting...',
        'form-success': '✅ Registration completed successfully! We sent a confirmation to your email.',
        'form-error': '❌ An error occurred while submitting the form. Please try again or contact us directly.',
        'form-validation-name': 'Please enter your full name',
        'form-validation-email': 'Please enter a valid email',
        'form-validation-organization': 'Please enter your organization',
        'form-validation-role': 'Please select your role',
        'form-validation-format': 'Please select participation format',
        'form-validation-topic': 'Please specify presentation topic',
        
        // Contacts section
        'contacts-title': 'Contacts',
        'contacts-text1': '📍 Address: Almaty, Rozybakiev st., 227, office 253',
        'contacts-text2': '📱 Phone: +7 701 761 9108',
        'contacts-text3': '📧 E-mail: deai.almau.edu.kz',
        'contacts-text4': '🌐 Website: https://almau.edu.kz',
        
        // Footer
        'footer-text': '© Organizers — AlmaU',
        
        // Speakers button
        'show-more-speakers': 'Show more',
        'show-less-speakers': 'Show less'
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

// Функция для показа сообщений формы
function showFormMessage(message, type = 'success') {
    const formMessages = document.getElementById('form-messages');
    if (!formMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    formMessages.appendChild(messageDiv);
    
    // Автоматически скрываем сообщение через 5 секунд
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Функция для очистки сообщений формы
function clearFormMessages() {
    const formMessages = document.getElementById('form-messages');
    if (formMessages) {
        formMessages.innerHTML = '';
    }
}

// Функция для валидации email
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Функция для валидации формы
function validateForm(formData) {
    console.log('🔍 Начинаем валидацию формы...', formData);
    
    if (!formData.name || !formData.name.trim()) {
        console.error('❌ Валидация failed: ФИО не заполнено');
        showFormMessage(translations[currentLang]['form-validation-name'], 'error');
        return false;
    }
    
    if (!formData.email || !formData.email.trim() || !isValidEmail(formData.email)) {
        console.error('❌ Валидация failed: Email невалидный');
        showFormMessage(translations[currentLang]['form-validation-email'], 'error');
        return false;
    }
    
    if (!formData.organization || !formData.organization.trim()) {
        console.error('❌ Валидация failed: Организация не заполнена');
        showFormMessage(translations[currentLang]['form-validation-organization'], 'error');
        return false;
    }
    
    if (!formData.role) {
        console.error('❌ Валидация failed: Роль не выбрана');
        showFormMessage(translations[currentLang]['form-validation-role'], 'error');
        return false;
    }
    
    if (!formData.format) {
        console.error('❌ Валидация failed: Формат не выбран');
        showFormMessage(translations[currentLang]['form-validation-format'], 'error');
        return false;
    }
    
    if (formData.role === 'Докладчик' && (!formData.topic || !formData.topic.trim())) {
        console.error('❌ Валидация failed: Тема доклада не указана');
        showFormMessage(translations[currentLang]['form-validation-topic'], 'error');
        return false;
    }
    
    console.log('✅ Валидация прошла успешно');
    return true;
}

// Альтернативный метод через почтовый клиент
function sendViaEmail(formData) {
    const subject = 'Регистрация на конференцию DEAI';
    const body = `
НОВАЯ РЕГИСТРАЦИЯ НА КОНФЕРЕНЦИЮ
"Digitalization of Education in the Era of AI"

👤 ДАННЫЕ УЧАСТНИКА:
• ФИО: ${formData.name}
• Email: ${formData.email}
• Телефон: ${formData.phone || 'Не указан'}
• Страна: ${formData.country || 'Не указана'}
• Организация: ${formData.organization}

🎯 ИНФОРМАЦИЯ ОБ УЧАСТИИ:
• Роль: ${formData.role}
• Формат участия: ${formData.format}
${formData.topic ? `• Тема доклада: ${formData.topic}` : ''}

💬 КОММЕНТАРИИ:
${formData.comments || 'Отсутствуют'}

---
Отправлено с сайта: ${window.location.href}
Время: ${new Date().toLocaleString()}
    `;
    
    const mailtoLink = `mailto:decai@almau.edu.kz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Открываем почтовый клиент
    window.location.href = mailtoLink;
}

// Обновляем локализацию для кнопки спикеров при смене языка
function updateSpeakersButton() {
    const showMoreBtn = document.getElementById('show-more-speakers');
    const addlCards = document.querySelectorAll('#speakers-list .addl');
    let expanded = false;
    
    if (showMoreBtn) {
        // Проверяем, открыты ли дополнительные карточки
        if (addlCards.length > 0) {
            expanded = addlCards[0].style.display === 'block';
        }
        
        showMoreBtn.textContent = expanded ? 
            translations[currentLang]['show-less-speakers'] : 
            translations[currentLang]['show-more-speakers'];
    }
}

// Переопределяем changeLanguage для обновления кнопки спикеров
const originalChangeLanguage = changeLanguage;
changeLanguage = function(lang) {
    console.log('🔄 Обновление языка и кнопки спикеров');
    originalChangeLanguage(lang);
    updateSpeakersButton();
};

// Основная функция инициализации
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Инициализация приложения...');
    
    // Восстанавливаем сохраненный язык или используем русский по умолчанию
    const savedLang = localStorage.getItem('preferred-language') || 'ru';
    console.log('🌐 Устанавливаем язык:', savedLang);
    changeLanguage(savedLang);
    
    // Добавляем обработчики для кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('🔄 Смена языка на:', lang);
            changeLanguage(lang);
        });
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                console.log('📜 Плавная прокрутка к:', this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== ОБРАБОТКА ФОРМЫ РЕГИСТРАЦИИ =====
    const registrationForm = document.getElementById('registration-form');
    const roleSelect = document.getElementById('role');
    const topicField = document.getElementById('topic-field');
    const topicInput = document.getElementById('topic');

    console.log('📝 Инициализация формы регистрации:', {
        form: registrationForm ? 'найдена' : 'не найдена',
        roleSelect: roleSelect ? 'найден' : 'не найден',
        topicField: topicField ? 'найдено' : 'не найдено'
    });

    // Показ/скрытие поля темы для докладчиков
    if (roleSelect && topicField) {
        roleSelect.addEventListener('change', function() {
            console.log('🎭 Изменение роли:', this.value);
            if (this.value === 'Докладчик') {
                console.log('📢 Показываем поле темы доклада');
                topicField.style.display = 'block';
                topicInput.required = true;
            } else {
                console.log('👤 Скрываем поле темы доклада');
                topicField.style.display = 'none';
                topicInput.required = false;
                topicInput.value = '';
            }
        });
    }

    // Обработка отправки формы регистрации
    if (registrationForm) {
        registrationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Показываем индикатор загрузки
            console.log('⏳ Показываем индикатор загрузки');
            if (btnText && btnLoading) {
                btnText.style.display = 'none';
                btnLoading.style.display = 'inline';
            }
            submitBtn.disabled = true;
            
            // Очищаем предыдущие сообщения
            clearFormMessages();
            
            try {
                // Собираем данные формы
                const formData = new FormData(this);
                const data = Object.fromEntries(formData);
                
                console.log('📦 Собранные данные формы:', data);
                
                // Валидация формы
                if (!validateForm(data)) {
                    console.log('❌ Валидация не пройдена, прерываем отправку');
                    return;
                }
                
                console.log('✅ Валидация прошла успешно');
                
                // Static Forms URL
                const STATIC_FORMS_URL = 'https://api.staticforms.xyz/submit';
                console.log('🌐 Отправка запроса на Static Forms...');
                
                // Подготавливаем данные для Static Forms
                const staticFormsData = {
                    accessKey: 'sf_j27hb35jef312k9f826af132',
                    subject: 'Регистрация на конференцию DEAI',
                    name: data.name,
                    email: data.email,
                    phone: data.phone || '',
                    country: data.country || '',
                    organization: data.organization,
                    role: data.role,
                    format: data.format,
                    topic: data.topic || '',
                    comments: data.comments || '',
                    replyTo: '@',
                    redirectTo: 'https://nurbolatb.github.io/deai.almau.edu.kz/success.html'
                };
                
                console.log('📤 Отправляемые данные:', staticFormsData);
                
                // Отправляем запрос в Static Forms
                const response = await fetch(STATIC_FORMS_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(staticFormsData)
                });
                
                console.log('📨 Статус ответа:', response.status);
                console.log('📨 Ответ OK:', response.ok);
                
                // Читаем полный ответ для отладки
                const responseText = await response.text();
                console.log('📄 Полный текст ответа:', responseText);
                
                if (!response.ok) {
                    // Пытаемся распарсить ошибку
                    try {
                        const errorResult = JSON.parse(responseText);
                        console.error('❌ Ошибка от Static Forms:', errorResult);
                        throw new Error(errorResult.message || `HTTP error! status: ${response.status}`);
                    } catch (parseError) {
                        throw new Error(`HTTP error! status: ${response.status}. Response: ${responseText}`);
                    }
                }
                
                const result = JSON.parse(responseText);
                console.log('📊 Ответ от Static Forms:', result);
                
                if (result.success) {
                    console.log('✅ Успешная отправка через Static Forms');
                    showFormMessage('✅ Регистрация прошла успешно! Перенаправляем...', 'success');
                    registrationForm.reset();
                    if (topicField) {
                        topicField.style.display = 'none';
                    }
                    
                    // Автоматический редирект через 2 секунды
                    setTimeout(() => {
                        window.location.href = 'https://nurbolatb.github.io/deai.almau.edu.kz/success.html';
                    }, 2000);
                    
                } else {
                    throw new Error(result.message || 'Ошибка отправки через Static Forms');
                }
                
            } catch (error) {
                console.error('💥 Ошибка при отправке:', error);
                
                // Резервное решение - сохраняем локально и предлагаем email
                console.log('🔄 Используем резервный метод...');
                
                // Сохраняем в localStorage
                const submissions = JSON.parse(localStorage.getItem('conferenceRegistrations') || '[]');
                const formData = new FormData(this);
                const data = Object.fromEntries(formData);
                
                submissions.push({
                    ...data,
                    timestamp: new Date().toISOString(),
                    id: Date.now()
                });
                localStorage.setItem('conferenceRegistrations', JSON.stringify(submissions));
                
                console.log('💾 Данные сохранены локально');
                
                showFormMessage('✅ Данные сохранены! Хотите отправить подтверждение на почту?', 'info');
                
                // Предлагаем отправить email
                setTimeout(() => {
                    const shouldSendEmail = confirm('Отправить подтверждение на почту организатора?');
                    if (shouldSendEmail) {
                        sendViaEmail(data);
                    } else {
                        // Перенаправляем на страницу успеха
                        window.location.href = 'https://nurbolatb.github.io/deai.almau.edu.kz/success.html';
                    }
                }, 1000);
                
            } finally {
                console.log('🔄 Восстанавливаем состояние кнопки');
                // Восстанавливаем кнопку
                if (btnText && btnLoading) {
                    btnText.style.display = 'inline';
                    btnLoading.style.display = 'none';
                }
                submitBtn.disabled = false;
            }
        });
    }

    // Валидация телефона
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            console.log('📞 Форматирование телефона:', e.target.value);
            let value = e.target.value.replace(/\D/g, '');
            if (value.startsWith('7') || value.startsWith('8')) {
                value = value.substring(1);
            }
            
            let formattedValue = '+7';
            if (value.length > 0) {
                formattedValue += ' (' + value.substring(0, 3);
            }
            if (value.length > 3) {
                formattedValue += ') ' + value.substring(3, 6);
            }
            if (value.length > 6) {
                formattedValue += '-' + value.substring(6, 8);
            }
            if (value.length > 8) {
                formattedValue += '-' + value.substring(8, 10);
            }
            
            e.target.value = formattedValue;
            console.log('📞 Отформатированный телефон:', formattedValue);
        });
    }

    // ===== SPEAKERS SHOW MORE/LESS =====
    const showMoreBtn = document.getElementById('show-more-speakers');
    const addlCards = document.querySelectorAll('#speakers-list .addl');
    let expanded = false;

    if (showMoreBtn && addlCards.length > 0) {
        console.log('🎤 Инициализация кнопки спикеров:', addlCards.length, 'скрытых карточек');
        showMoreBtn.addEventListener('click', () => {
            expanded = !expanded;
            console.log('🎤 Переключение спикеров:', expanded ? 'показать больше' : 'показать меньше');
            addlCards.forEach(el => el.style.display = expanded ? 'block' : 'none');
            showMoreBtn.textContent = expanded ? 
                translations[currentLang]['show-less-speakers'] : 
                translations[currentLang]['show-more-speakers'];
        });
    }

    // ===== INFO TOGGLE BUTTONS =====
    const infoToggles = document.querySelectorAll('.info-toggle');
    console.log('ℹ️ Найдено toggle кнопок:', infoToggles.length);
    
    infoToggles.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content && content.classList.contains('info-content')) {
                const isVisible = content.style.display === 'block';
                console.log('📖 Переключение информации:', isVisible ? 'скрыть' : 'показать');
                content.style.display = isVisible ? 'none' : 'block';
                this.classList.toggle('active');
            }
        });
    });

    console.log('✅ Инициализация завершена');
});
