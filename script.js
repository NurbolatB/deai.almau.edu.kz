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
// function handleDummySubmit(event) {
   // event.preventDefault();
  //  const feedback = document.getElementById('form-feedback');
 //   feedback.hidden = false;
 //   feedback.textContent = translations[currentLang]['form-success'];
    
    // Очищаем форму
//    event.target.reset();
    
    // Скрываем сообщение через 5 секунд
//    setTimeout(() => {
//        feedback.hidden = true;
//    }, 5000);
//}

// === GOOGLE SHEETS FORM SUBMISSION ===
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('conference-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    status.textContent = 'Отправка...';
    status.style.color = '#555';

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz66PWXogEpyQEmTO4_NzptJogptrhyB5CsQYphaVYOws-zta6yAKitQpPIvbf7BIOVQQ/exec', { 
        // ⬆️ вставь сюда свой URL из Google Apps Script https://script.google.com/macros/s/AKfycbz66PWXogEpyQEmTO4_NzptJogptrhyB5CsQYphaVYOws-zta6yAKitQpPIvbf7BIOVQQ/exec
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await response.json();

      if (result.result === 'success') {
        status.textContent = '✅ Регистрация успешно отправлена!';
        status.style.color = 'green';
        form.reset();
      } else {
        status.textContent = '⚠️ Ошибка при отправке. Попробуйте позже.';
        status.style.color = 'orange';
      }
    } catch (err) {
      console.error('Ошибка:', err);
      status.textContent = '❌ Ошибка соединения. Проверьте интернет или попробуйте позже.';
      status.style.color = 'red';
    }
  });
});


// === Formspree: обработка регистрации ===
const form = document.getElementById('registration-form');
const successMsg = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        successMsg.textContent = translations[currentLang]['form-success'];
        successMsg.style.display = 'block';
        successMsg.style.opacity = 0;
        successMsg.style.transition = 'opacity 0.6s';
        setTimeout(() => successMsg.style.opacity = 1, 50);
        setTimeout(() => {
          successMsg.style.opacity = 0;
          setTimeout(() => successMsg.style.display = 'none', 600);
        }, 5000);
      } else {
        alert('Ошибка при отправке. Попробуйте позже.');
      }
    } catch (err) {
      alert('Сетевая ошибка. Проверьте интернет.');
    }
  });
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




// Speakers show more/less
const showMoreBtn = document.getElementById('show-more-speakers');
const addlCards = document.querySelectorAll('#speakers-list .addl');
let expanded = false;

showMoreBtn.addEventListener('click', () => {
  expanded = !expanded;
  addlCards.forEach(el => el.style.display = expanded ? 'block' : 'none');
  showMoreBtn.textContent = expanded ? 'Показать меньше' : 'Показать больше';
});

document.querySelectorAll('.info-toggle').forEach(btn => {
  btn.addEventListener('click', function() {
    const block = btn.closest('.info-block');
    block.classList.toggle('open');
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.info-toggle').forEach(btn => {
  btn.addEventListener('click', function() {
    // Найти ближайший соседний .info-content после кнопки
    const content = btn.nextElementSibling;
    if (content && content.classList.contains('info-content')) {
      content.style.display = (content.style.display === 'block') ? 'none' : 'block';
      btn.classList.toggle('active');
    }
  });
});

