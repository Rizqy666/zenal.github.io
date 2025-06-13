function setAccentRgb() {
  const accentColorValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent-color")
    .trim();
  if (accentColorValue.startsWith("#")) {
    const r = parseInt(accentColorValue.slice(1, 3), 16);
    const g = parseInt(accentColorValue.slice(3, 5), 16);
    const b = parseInt(accentColorValue.slice(5, 7), 16);
    document.documentElement.style.setProperty("--accentRgb", `${r},${g},${b}`);
  }
}
setAccentRgb();
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");
const hoverables = document.querySelectorAll(
  "a, button, .contribution-card, input, textarea, .skill"
);
document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
  setTimeout(() => {
    if (cursorFollower) {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    }
  }, 100);
});
hoverables.forEach((item) => {
  item.addEventListener("mouseenter", () =>
    document.body.classList.add("cursor-hover")
  );
  item.addEventListener("mouseleave", () =>
    document.body.classList.remove("cursor-hover")
  );
});
const animateOnScrollElements = document.querySelectorAll(
  ".contribution-card, .about-content h2, .about-content p, .about-content .skills-section, .contact-form h2, .contact-form p, .contact-form .input-group, .contact-form button, #contributions h2, #about h2, #contact h2"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
animateOnScrollElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(el);
});

const translations = {
  // bagian bahasa inggris
  en: {
    // bagian page Home
    pageTitle: "Portfolio - Zaenal Nurrizqy | IT Support & Backend Developer",
    // bagian navbar
    navHome: "HOME",
    navAbout: "ABOUT",
    navExperience: "EXPERIENCE",
    navContact: "CONTACT",
    // bagian hero
    heroGreetingPart1: "Hello, I'm ",
    heroGreetingPart2: ". I am an",
    heroTitle1: "Expert IT Support &",
    heroTitleAccent: "Reliable",
    heroTitle2: "Backend Solutions.",
    heroDescription:
      "Experienced in providing robust technical assistance, system maintenance, and developing efficient backend applications with Laravel.",
    heroButton: "View My Experience",
    heroCVButton: "Review My CV",
    // bagian about
    aboutTitle: "About Me",
    // deskripsi about
    aboutP1:
      "As an aspiring <strong>Technical Support Specialist</strong>, I have developed strong technical foundations in application maintenance, server monitoring, network troubleshooting, and user support through self-study and hands-on projects. I'm passionate about solving complex technical problems and committed to ensuring system stability and efficiency.",
    aboutP2:
      "My journey in IT focuses on backend development, particularly with <strong>Laravel</strong>, where I've built various web applications and APIs through personal and collaborative projects. I have a solid understanding of systems from both user-facing and server-side perspectives. I'm highly adaptable, eager to learn new technologies, and ready to contribute while growing within a company's technical environment and culture.",
    // bagian skills
    skillsCat1: "IT Support & Operations",
    skillsCat2: "Backend Development",
    skillsCat3: "Game Development",
    contribTitle: "Key Achievements & Projects",
    contribTypeIT: "IT Support Achievement",
    contribTypeBackend: "Backend Project (Laravel)",
    contribTypeGames: "Game Development",
    // contribution 1 description
    contrib1Title: "Web Application Maintenance",
    contrib1Desc:
      "Managing and maintaining various web applications with a focus on system stability and optimal performance. Performing routine checks, handling technical issues, and coordinating with development teams for fixes and updates.",
    //  deskripsi kontribusi 2
    contrib2Title: "Server Monitoring & Optimization",
    contrib2Desc:
      "Implemented and managed server monitoring tools to proactively identify and resolve potential issues, contributing to improved system uptime and reliability for key services.",
    // deskripsi kontribusi 3
    contrib3Title: "Laravel API with Sanctum",
    contrib3Desc:
      "Developed a secure RESTful API using Laravel Sanctum for token-based authentication, demonstrating proficiency in API development and security best practices.",
    // deskripsi kontribusi 4
    contrib4Title: "Point of Sale (POS) System",
    contrib4Desc:
      "Built a POS system using Laravel and Livewire, showcasing full-stack capabilities with a focus on real-time interactions and efficient data management.",
    // deskripsi kontribusi 5
    contrib5Title: "Company Profile Website",
    contrib5Desc:
      "Developed a dynamic company profile website using Laravel, focusing on clean code, responsive design, and content management features.",
    // btn opsional
    viewOnGithub: "View on GitHub →",
    // deskripsi kontribusi 6
    contrib6Title: "GTA 5 Roleplay Development",
    contrib6Desc:
      "Developed custom scripts and systems for GTA 5 FiveM roleplay servers using Lua and JavaScript. Created features like dynamic economy, job systems, and interactive missions to enhance player experience.",
    // bagian kontak
    contactTitle: "Let's Connect",
    contactIntro:
      "Whether you need IT support expertise, have a backend project, or just want to discuss technology, feel free to reach out!",
    // form kontak
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formButton: "Send Message",
    // bagian footer
    footerText:
      "© <span id='currentYearDynamicFooter'></span> Zaenal Nurrizqy. All rights reserved.",
    // kata-kata yang ditampilkan di typing effect
    typingWords: [
      "IT Support Specialist",
      "System Administrator",
      "Network Troubleshooter",
      "Laravel Developer",
      "PHP Programmer",
      "Technical Problem Solver",
    ],
    // btn theme toggle dark mode
    themeToggleLight: "Switch to Light Mode",
    themeToggleDark: "Switch to Dark Mode",
  },
  id: {
    // Indonesian Language Section
    // Page & Meta
    pageTitle:
      "Portofolio - Zaenal Nurrizqy | Dukungan TI & Pengembang Backend",

    // Navigation
    navHome: "BERANDA",
    navAbout: "TENTANG",
    navExperience: "PENGALAMAN",
    navContact: "KONTAK",

    // Hero Section
    heroGreetingPart1: "Halo, saya ",
    heroGreetingPart2: ". Saya seorang",
    heroTitle1: "Dukungan TI Ahli &",
    heroTitleAccent: "Andal",
    heroTitle2: "Solusi Backend.",
    heroDescription:
      "Berpengalaman dalam memberikan bantuan teknis yang kuat, pemeliharaan sistem, dan mengembangkan aplikasi backend yang efisien dengan Laravel.",
    heroButton: "Lihat Pengalaman Saya",
    heroCVButton: "Lihat CV Saya",

    // About Section
    aboutTitle: "Tentang Saya",
    aboutP1:
      "Sebagai seorang <strong>Spesialis Dukungan Teknis</strong>, saya telah mengembangkan dasar-dasar teknis yang kuat dalam pemeliharaan aplikasi, pemantauan server, pemecahan masalah jaringan, dan dukungan pengguna melalui pembelajaran mandiri dan proyek-proyek praktis. Saya bersemangat dalam memecahkan masalah teknis yang kompleks dan berkomitmen untuk memastikan stabilitas dan efisiensi sistem.",
    aboutP2:
      "Perjalanan saya di bidang IT berfokus pada pengembangan backend, khususnya dengan <strong>Laravel</strong>, di mana saya telah membangun berbagai aplikasi web dan API melalui proyek pribadi dan kolaboratif. Saya memiliki pemahaman yang kuat tentang sistem dari sisi pengguna dan sisi server. Saya sangat adaptif, bersemangat untuk mempelajari teknologi baru, dan siap berkontribusi sambil berkembang dalam lingkungan dan budaya teknis perusahaan.",

    // Skills Categories
    skillsCat1: "Dukungan TI & Operasional",
    skillsCat2: "Pengembangan Backend",
    skillsCat3: "Pengembangan Game",

    // Contributions Section
    contribTitle: "Pencapaian & Proyek Utama",
    contribTypeIT: "Pencapaian Dukungan TI",
    contribTypeBackend: "Proyek Backend (Laravel)",
    contribTypeGames: "Pengembang Game",

    // IT Support Contributions
    contrib1Title: "Pemeliharaan Aplikasi Web",
    contrib1Desc:
      "Mengelola dan memelihara berbagai aplikasi web dengan fokus pada stabilitas sistem dan kinerja optimal. Melakukan pemeriksaan rutin, menangani masalah teknis, dan berkoordinasi dengan tim pengembang untuk perbaikan dan pembaruan.",
    contrib2Title: "Pemantauan & Optimasi Server",
    contrib2Desc:
      "Mengimplementasikan dan mengelola alat pemantauan server untuk secara proaktif mengidentifikasi dan menyelesaikan potensi masalah, berkontribusi pada peningkatan waktu aktif dan keandalan sistem untuk layanan utama.",

    // Backend Projects
    contrib3Title: "Laravel API dengan Sanctum",
    contrib3Desc:
      "Mengembangkan API RESTful yang aman menggunakan Laravel Sanctum untuk otentikasi berbasis token, menunjukkan kemahiran dalam pengembangan API dan praktik terbaik keamanan.",
    contrib4Title: "Sistem Point of Sale (POS)",
    contrib4Desc:
      "Membangun sistem POS menggunakan Laravel dan Livewire, menampilkan kemampuan full-stack dengan fokus pada interaksi waktu-nyata dan manajemen data yang efisien.",
    contrib5Title: "Website Profil Perusahaan",
    contrib5Desc:
      "Mengembangkan website profil perusahaan dinamis menggunakan Laravel, berfokus pada kode yang bersih, desain responsif, dan fitur manajemen konten.",
    contrib6Title: "Pengembangan Game GTA 5",
    contrib6Desc:
      "Membuat skrip dan sistem khusus untuk server GTA 5 FiveM yang menggunakan bahasa Lua dan JavaScript. Membuat fitur seperti sistem ekonomi dinamis, sistem pekerjaan, dan misi interaktif untuk meningkatkan pengalaman pemain.",
    viewOnGithub: "Lihat di GitHub →",

    // Contact Section
    contactTitle: "Mari Terhubung",
    contactIntro:
      "Baik Anda membutuhkan keahlian dukungan TI, memiliki proyek backend, atau hanya ingin berdiskusi tentang teknologi, jangan ragu untuk menghubungi!",
    formName: "Nama Anda",
    formEmail: "Email Anda",
    formMessage: "Pesan Anda",
    formButton: "Kirim Pesan",

    // Footer
    footerText:
      "© <span id='currentYearDynamicFooter'></span> Zaenal Nurrizqy. Hak cipta dilindungi.",

    // Typing Effect Words
    typingWords: [
      "Spesialis Dukungan TI",
      "Administrator Sistem",
      "Pemecah Masalah Jaringan",
      "Pengembang Laravel",
      "Programmer PHP",
      "Pemecah Masalah Teknis",
    ],

    // Theme Toggle
    themeToggleLight: "Ganti ke Mode Terang",
    themeToggleDark: "Ganti ke Mode Gelap",
  },
};
const typingElement = document.getElementById("typing-effect");
let typeWordsArray = [];
let typeWordIndex = 0;
let typeCharIndex = 0;
let typeIsDeleting = false;
const baseTypeSpeed = 150,
  baseDeleteSpeed = 80,
  baseDelayBetweenWords = 2000;
function resetTypingEffect(lang) {
  if (!translations[lang] || !translations[lang].typingWords) return;
  typeWordsArray = translations[lang].typingWords;
  typeWordIndex = 0;
  typeCharIndex = 0;
  typeIsDeleting = false;
  if (typingElement) typingElement.textContent = "";
  typeText();
}
function typeText() {
  if (!typingElement || !typeWordsArray.length) return;
  const currentWord = typeWordsArray[typeWordIndex];
  let currentSpeed = typeIsDeleting ? baseDeleteSpeed : baseTypeSpeed;
  if (typeIsDeleting) {
    typingElement.textContent = currentWord.substring(0, typeCharIndex - 1);
    typeCharIndex--;
    if (typeCharIndex === 0) {
      typeIsDeleting = false;
      typeWordIndex = (typeWordIndex + 1) % typeWordsArray.length;
      setTimeout(typeText, 500);
    } else {
      setTimeout(typeText, currentSpeed);
    }
  } else {
    typingElement.textContent = currentWord.substring(0, typeCharIndex + 1);
    typeCharIndex++;
    if (typeCharIndex === currentWord.length) {
      typeIsDeleting = true;
      setTimeout(typeText, baseDelayBetweenWords);
    } else {
      setTimeout(typeText, currentSpeed);
    }
  }
}
let currentLang = localStorage.getItem("preferredLang") || "id";
const langEnButton = document.getElementById("lang-en");
const langIdButton = document.getElementById("lang-id");
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("preferredLang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang-key]").forEach((el) => {
    const key = el.getAttribute("data-lang-key");
    if (translations[lang][key]) {
      const translationText = translations[lang][key];
      if (el.tagName === "TITLE") {
        el.textContent = translationText;
      } else if (el.classList.contains("nav-link")) {
        const span = el.querySelector("span");
        if (span) span.textContent = translationText;
        const dataTextKeyAttr = `data-text-${lang}`;
        el.setAttribute(
          "data-text",
          el.getAttribute(dataTextKeyAttr) || translationText
        );
      } else if (key === "footerText") {
        const year = new Date().getFullYear();
        el.innerHTML = translationText.replace(
          "<span id='currentYearDynamicFooter'></span>",
          year
        );
      } else {
        el.innerHTML = translationText;
      }
    }
  });
  if (langEnButton) langEnButton.classList.toggle("active", lang === "en");
  if (langIdButton) langIdButton.classList.toggle("active", lang === "id");
  if (themeToggleButton) {
    themeToggleButton.title = document.body.classList.contains("dark-mode")
      ? translations[currentLang]?.themeToggleLight || "Switch to Light Mode"
      : translations[currentLang]?.themeToggleDark || "Switch to Dark Mode";
  }
  resetTypingEffect(lang);
}
if (langEnButton)
  langEnButton.addEventListener("click", () => setLanguage("en"));
if (langIdButton)
  langIdButton.addEventListener("click", () => setLanguage("id"));
const themeToggleButton = document.getElementById("theme-toggle");
let currentTheme = localStorage.getItem("theme") || "light";
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggleButton) themeToggleButton.textContent = "☀️";
    if (themeToggleButton)
      themeToggleButton.title =
        translations[currentLang]?.themeToggleLight || "Switch to Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    if (themeToggleButton) themeToggleButton.textContent = "🌙";
    if (themeToggleButton)
      themeToggleButton.title =
        translations[currentLang]?.themeToggleDark || "Switch to Dark Mode";
  }
  setAccentRgb();
}
if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    currentTheme = document.body.classList.contains("dark-mode")
      ? "light"
      : "dark";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
  });
}
const mobileMenuButton = document.getElementById("mobile-menu-button");
const navMenuItems = document.getElementById("nav-menu-items");
const navLinksInMenu = navMenuItems.querySelectorAll(".nav-link");
if (mobileMenuButton && navMenuItems) {
  mobileMenuButton.addEventListener("click", () => {
    const isExpanded =
      mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
    mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
    navMenuItems.classList.toggle("active");
    const icon = mobileMenuButton.querySelector("i");
    if (navMenuItems.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      document.body.style.overflow = "hidden";
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      document.body.style.overflow = "";
    }
  });
  navLinksInMenu.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenuItems.classList.contains("active")) {
        mobileMenuButton.click();
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  setLanguage(currentLang);
});
