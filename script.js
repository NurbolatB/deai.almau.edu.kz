// DEFAULT LANGUAGE (по умолчанию русский)
const DEFAULT_LANG = 'ru';

// Переводы (заполните реальными строками из ваших текстов)
const translations = {
  ru: {
    siteTitle: "Digitalization of Education in the Era of AI",
    siteSubtitle: "Международная научно-практическая конференция",
    heroTitle: "Digitalization of Education in the Era of AI",
    heroDesc: "Конференция посвящена цифровизации образования в эпоху ИИ.",
    heroMeta: "20 декабря 2025 • Алматы",
    heroCta: "Узнать программу",
    aboutTitle: "О конференции",
    aboutText: "Цель конференции — объединить исследователей и практиков для обсуждения...",
    programTitle: "Программа",
    speakersTitle: "Спикеры",
    registrationTitle: "Регистрация",
    registrationDesc: "Заполните форму, чтобы зарегистрироваться.",
    labelName: "Имя",
    labelEmail: "Email",
    labelAffiliation: "Организация",
    submitBtn: "Отправить",
    contactsTitle: "Контакты",
    contactsText: "Email: conf@example.edu • Адрес: г. Алматы",
    footerText: "© Организаторы — AlmaU"
  },
  kz: {
    siteTitle: "Digitalization of Education in the Era of AI",
    siteSubtitle: "Халықаралық ғылыми-практикалық конференция",
    heroTitle: "Білімдегі цифрландыру және ЖИ дәуірі",
    heroDesc: "Конференция білімдегі цифрландыру мәселелерін талқылайды.",
    heroMeta: "20 желтоқсан 2025 • Алматы",
    heroCta: "Бағдарламаны көру",
    aboutTitle: "Конференция туралы",
    aboutText: "Мақсаты — зерттеушілер мен практиктерді біріктіру...",
    programTitle: "Бағдарлама",
    speakersTitle: "Спикерлер",
    registrationTitle: "Тіркелу",
    registrationDesc: "Тіркеу формасын толтырыңыз.",
    labelName: "Аты-жөні",
    labelEmail: "Электрондық пошта",
    labelAffiliation: "Ұйымы",
    submitBtn: "Жіберу",
    contactsTitle: "Байланыс",
    contactsText: "Email: conf@example.edu • Мекен-жайы: Алматы",
    footerText: "© Ұйымдастырушылар — AlmaU"
  },
  en: {
    siteTitle: "Digitalization of Education in the Era of AI",
    siteSubtitle: "International Scientific and Practical Conference",
    heroTitle: "Digitalization of Education in the Era of AI",
    heroDesc: "The conference explores digitalization in education in the era of AI.",
    heroMeta: "20 December 2025 • Almaty",
    heroCta: "View program",
    aboutTitle: "About the conference",
    aboutText: "The aim is to bring researchers and practitioners together to discuss...",
    programTitle: "Program",
    speakersTitle: "Speakers",
    registrationTitle: "Registration",
    registrationDesc: "Fill the form to register.",
    labelName: "Name",
    labelEmail: "Email",
    labelAffiliation: "Affiliation",
    submitBtn: "Submit",
    contactsTitle: "Contacts",
    contactsText: "Email: conf@example.edu • Address: Almaty",
    footerText: "© Organizers — AlmaU"
  }
};


// Apply translations to DOM
function applyLanguage(lang) {
  const t = translations[lang] || translations[DEFAULT_LANG];

  document.documentElement.lang = lang;
  document.getElementById('site-title').textContent = t.siteTitle;
  document.getElementById('site-subtitle').textContent = t.siteSubtitle;
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.getElementById('hero-desc').textContent = t.heroDesc;
  document.getElementById('hero-meta').textContent = t.heroMeta;
  document.getElementById('hero-cta').textContent = t.heroCta;
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-text').textContent = t.aboutText;
  document.getElementById('program-title').textContent = t.programTitle;
  document.getElementById('speakers-title').textContent = t.speakersTitle;
  document.getElementById('registration-title').textContent = t.registrationTitle;
  document.getElementById('registration-desc').textContent = t.registrationDesc;
  document.getElementById('label-name').textContent = t.labelName;
  document.getElementById('label-email').textContent = t.labelEmail;
  document.getElementById('label-affiliation').textContent = t.labelAffiliation;
  document.getElementById('submit-btn').textContent = t.submitBtn;
  document.getElementById('contacts-title').textContent = t.contactsTitle;
  document.getElementById('contacts-text').textContent = t.contactsText;
  document.getElementById('footer-text').textContent = t.footerText;

  // Update lang buttons aria-selected
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    const is = btn.dataset.lang === lang;
    btn.setAttribute('aria-selected', is ? 'true' : 'false');
  });
}

// Init language switcher
function initLangSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn=>{
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      applyLanguage(lang);
      // Optionally persist preference:
      try { localStorage.setItem('conf_lang', lang); } catch(e){}
    });
  });

  // Load saved or default
  const saved = (() => { try { return localStorage.getItem('conf_lang'); } catch(e){return null} })();
  const startLang = saved || DEFAULT_LANG;
  applyLanguage(startLang);
}

// Dummy submit handler for temporary form
function handleDummySubmit(e) {
  e.preventDefault();
  const feedback = document.getElementById('form-feedback');
  feedback.hidden = false;
  feedback.textContent = translations[document.documentElement.lang || DEFAULT_LANG].submitBtn + ' — временная форма: данные не сохраняются.';
  // Optionally clear form
  e.target.reset();
}

// Run init on DOM ready
document.addEventListener('DOMContentLoaded', ()=>{
  initLangSwitcher();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
