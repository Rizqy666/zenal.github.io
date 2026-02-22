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
  "a, button, .contribution-card, input, textarea, .skill",
);
document.addEventListener(
  "mousemove",
  (e) => {
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
  },
  { passive: true },
);
hoverables.forEach((item) => {
  item.addEventListener("mouseenter", () =>
    document.body.classList.add("cursor-hover"),
  );
  item.addEventListener("mouseleave", () =>
    document.body.classList.remove("cursor-hover"),
  );
});
const animateOnScrollElements = document.querySelectorAll(
  ".contribution-card, .about-content h2, .about-content p, .about-content .skills-section, .contact-form h2, .contact-form p, .contact-form .input-group, .contact-form button, #contributions h2, #about h2, #contact h2",
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
  { threshold: 0.1 },
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
    pageTitle:
      "Zaenal Nurrizqy - IT Support Specialist | Technical Support & System Administrator",
    // bagian navbar
    navHome: "HOME",
    navAbout: "ABOUT",
    navExperience: "IT SUPPORT EXPERIENCE",
    navContact: "CONTACT",
    // bagian hero
    heroGreetingPart1: "Hello, I'm ",
    heroGreetingPart2: ". Professional",
    heroTitle1: "IT Support Specialist &",
    heroTitleAccent: "Technical Problem Solver",
    heroTitle2: "You Can Trust.",
    heroDescription:
      "Dedicated IT Support Specialist with proven expertise in technical troubleshooting, system administration, network support, and maintaining critical IT infrastructure. Skilled in providing exceptional user support and ensuring optimal system performance.",
    heroButton: "View My IT Support Experience",
    heroCVButton: "Download My CV",
    // bagian about
    aboutTitle: "About Me - IT Support Professional",
    // deskripsi about
    aboutP1:
      "As a dedicated <strong>IT Support Specialist</strong>, I bring comprehensive technical expertise in application maintenance, server monitoring, network troubleshooting, and end-user support. My passion lies in solving complex technical challenges and ensuring seamless IT operations for businesses and organizations.",
    aboutP2:
      "With hands-on experience in <strong>Windows Server administration</strong>, <strong>MySQL database management</strong>, and <strong>network infrastructure support</strong>, I excel at maintaining system stability and minimizing downtime. Additionally, my backend development skills with <strong>Laravel</strong> and game development experience with <strong>FiveM</strong> provide me with a unique perspective on both user-facing and server-side technical solutions. I'm committed to continuous learning and delivering reliable IT support that drives business success.",
    // bagian skills
    skillsCat1: "IT Support & Technical Operations",
    skillsCat2: "Backend Development & Programming",
    skillsCat3: "Game Development & Scripting",
    contribTitle: "IT Support Experience & Technical Projects",
    contribTypeIT: "IT Support & System Administration",
    contribTypeBackend: "Backend Development Project",
    contribTypeGames: "Game Development & Scripting",
    // contribution 1 description
    contrib1Title: "Enterprise Web Application Support & Maintenance",
    contrib1Desc:
      "Providing comprehensive IT support for enterprise web applications, including troubleshooting technical issues, performing system health checks, coordinating with development teams for bug fixes, and ensuring 99.9% uptime through proactive monitoring and rapid incident response.",
    //  deskripsi kontribusi 2
    contrib2Title: "Server Infrastructure Monitoring & Optimization",
    contrib2Desc:
      "Implemented and managed comprehensive server monitoring solutions using industry-standard tools. Proactively identified and resolved performance bottlenecks, security vulnerabilities, and system issues before they impacted users. Reduced system downtime by 40% through preventive maintenance and optimization strategies.",
    // deskripsi kontribusi 3
    contrib3Title: "Secure RESTful API Development with Laravel Sanctum",
    contrib3Desc:
      "Developed enterprise-grade RESTful APIs using Laravel framework with Sanctum authentication. Implemented secure token-based authentication, role-based access control, and comprehensive API documentation for seamless integration with frontend applications.",
    // deskripsi kontribusi 4
    contrib4Title: "Real-time Point of Sale (POS) System",
    contrib4Desc:
      "Built a full-featured POS system using Laravel and Livewire with real-time inventory management, sales tracking, and reporting capabilities. Implemented efficient database optimization and caching strategies for high-performance transaction processing.",
    // deskripsi kontribusi 5
    contrib5Title: "Dynamic Company Profile & CMS Platform",
    contrib5Desc:
      "Developed a professional company profile website with custom CMS using Laravel. Features include dynamic content management, responsive design, SEO optimization, and admin dashboard for easy content updates without technical knowledge.",
    // btn opsional
    viewOnGithub: "View on GitHub →",
    // deskripsi kontribusi 6
    contrib6Title: "FiveM Roleplay Server Development & Scripting",
    contrib6Desc:
      "Developed custom game mechanics and server-side scripts for GTA 5 FiveM roleplay servers using Lua and JavaScript. Created complex systems including dynamic economy, job frameworks, inventory management, and interactive missions. Optimized server performance to support 100+ concurrent players with minimal lag.",
    // bagian kontak
    contactTitle: "Let's Discuss Your IT Support Needs",
    contactIntro:
      "Looking for a reliable IT Support Specialist to maintain your systems, troubleshoot technical issues, or develop backend solutions? I'm here to help ensure your IT infrastructure runs smoothly. Let's connect!",
    // form kontak
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Describe Your IT Support Needs",
    formButton: "Send Message",
    // bagian footer
    footerText:
      "© <span id='currentYearDynamicFooter'></span> Zaenal Nurrizqy - IT Support Specialist. All rights reserved.",
    // kata-kata yang ditampilkan di typing effect
    typingWords: [
      "IT Support Specialist",
      "Technical Support Expert",
      "System Administrator",
      "Network Troubleshooter",
      "Help Desk Professional",
      "Server Administrator",
      "Technical Problem Solver",
      "IT Infrastructure Support",
    ],
    // btn theme toggle dark mode
    themeToggleLight: "Switch to Light Mode",
    themeToggleDark: "Switch to Dark Mode",
  },
  id: {
    // Indonesian Language Section
    // Page & Meta
    pageTitle:
      "Zaenal Nurrizqy - Spesialis IT Support | Dukungan Teknis & Administrator Sistem",

    // Navigation
    navHome: "BERANDA",
    navAbout: "TENTANG",
    navExperience: "PENGALAMAN IT SUPPORT",
    navContact: "KONTAK",

    // Hero Section
    heroGreetingPart1: "Halo, saya ",
    heroGreetingPart2: ". Profesional",
    heroTitle1: "Spesialis IT Support &",
    heroTitleAccent: "Pemecah Masalah Teknis",
    heroTitle2: "Yang Dapat Diandalkan.",
    heroDescription:
      "Spesialis IT Support berdedikasi dengan keahlian terbukti dalam pemecahan masalah teknis, administrasi sistem, dukungan jaringan, dan pemeliharaan infrastruktur IT kritis. Terampil dalam memberikan dukungan pengguna yang luar biasa dan memastikan kinerja sistem optimal.",
    heroButton: "Lihat Pengalaman IT Support Saya",
    heroCVButton: "Unduh CV Saya",

    // About Section
    aboutTitle: "Tentang Saya - Profesional IT Support",
    aboutP1:
      "Sebagai <strong>Spesialis IT Support</strong> yang berdedikasi, saya membawa keahlian teknis komprehensif dalam pemeliharaan aplikasi, pemantauan server, pemecahan masalah jaringan, dan dukungan pengguna akhir. Passion saya terletak pada penyelesaian tantangan teknis yang kompleks dan memastikan operasi IT yang lancar untuk bisnis dan organisasi.",
    aboutP2:
      "Dengan pengalaman langsung dalam <strong>administrasi Windows Server</strong>, <strong>manajemen database MySQL</strong>, dan <strong>dukungan infrastruktur jaringan</strong>, saya unggul dalam menjaga stabilitas sistem dan meminimalkan downtime. Selain itu, keterampilan pengembangan backend saya dengan <strong>Laravel</strong> dan pengalaman pengembangan game dengan <strong>FiveM</strong> memberikan saya perspektif unik tentang solusi teknis dari sisi pengguna maupun server. Saya berkomitmen untuk terus belajar dan memberikan dukungan IT yang andal untuk mendorong kesuksesan bisnis.",

    // Skills Categories
    skillsCat1: "IT Support & Operasi Teknis",
    skillsCat2: "Pengembangan Backend & Programming",
    skillsCat3: "Pengembangan Game & Scripting",

    // Contributions Section
    contribTitle: "Pengalaman IT Support & Proyek Teknis",
    contribTypeIT: "IT Support & Administrasi Sistem",
    contribTypeBackend: "Proyek Pengembangan Backend",
    contribTypeGames: "Pengembangan Game & Scripting",

    // IT Support Contributions
    contrib1Title: "Dukungan & Pemeliharaan Aplikasi Web Enterprise",
    contrib1Desc:
      "Memberikan dukungan IT komprehensif untuk aplikasi web enterprise, termasuk pemecahan masalah teknis, pemeriksaan kesehatan sistem, koordinasi dengan tim pengembang untuk perbaikan bug, dan memastikan uptime 99.9% melalui pemantauan proaktif dan respons insiden yang cepat.",
    contrib2Title: "Pemantauan & Optimasi Infrastruktur Server",
    contrib2Desc:
      "Mengimplementasikan dan mengelola solusi pemantauan server komprehensif menggunakan tools standar industri. Secara proaktif mengidentifikasi dan menyelesaikan bottleneck performa, kerentanan keamanan, dan masalah sistem sebelum berdampak pada pengguna. Mengurangi downtime sistem hingga 40% melalui strategi pemeliharaan preventif dan optimasi.",

    // Backend Projects
    contrib3Title: "Pengembangan RESTful API Aman dengan Laravel Sanctum",
    contrib3Desc:
      "Mengembangkan RESTful API tingkat enterprise menggunakan framework Laravel dengan autentikasi Sanctum. Mengimplementasikan autentikasi berbasis token yang aman, kontrol akses berbasis peran, dan dokumentasi API komprehensif untuk integrasi seamless dengan aplikasi frontend.",
    contrib4Title: "Sistem Point of Sale (POS) Real-time",
    contrib4Desc:
      "Membangun sistem POS lengkap menggunakan Laravel dan Livewire dengan manajemen inventori real-time, pelacakan penjualan, dan kemampuan pelaporan. Mengimplementasikan optimasi database dan strategi caching yang efisien untuk pemrosesan transaksi berkinerja tinggi.",
    contrib5Title: "Platform Profil Perusahaan Dinamis & CMS",
    contrib5Desc:
      "Mengembangkan website profil perusahaan profesional dengan CMS kustom menggunakan Laravel. Fitur termasuk manajemen konten dinamis, desain responsif, optimasi SEO, dan dashboard admin untuk pembaruan konten mudah tanpa pengetahuan teknis.",
    contrib6Title: "Pengembangan Server FiveM Roleplay & Scripting",
    contrib6Desc:
      "Mengembangkan mekanik game kustom dan skrip server-side untuk server roleplay GTA 5 FiveM menggunakan Lua dan JavaScript. Membuat sistem kompleks termasuk ekonomi dinamis, framework pekerjaan, manajemen inventori, dan misi interaktif. Mengoptimalkan performa server untuk mendukung 100+ pemain bersamaan dengan lag minimal.",
    viewOnGithub: "Lihat di GitHub →",

    // Contact Section
    contactTitle: "Mari Diskusikan Kebutuhan IT Support Anda",
    contactIntro:
      "Mencari Spesialis IT Support yang andal untuk memelihara sistem Anda, memecahkan masalah teknis, atau mengembangkan solusi backend? Saya siap membantu memastikan infrastruktur IT Anda berjalan lancar. Mari terhubung!",
    formName: "Nama Anda",
    formEmail: "Email Anda",
    formMessage: "Jelaskan Kebutuhan IT Support Anda",
    formButton: "Kirim Pesan",

    // Footer
    footerText:
      "© <span id='currentYearDynamicFooter'></span> Zaenal Nurrizqy - Spesialis IT Support. Hak cipta dilindungi.",

    // Typing Effect Words
    typingWords: [
      "Spesialis IT Support",
      "Ahli Dukungan Teknis",
      "Administrator Sistem",
      "Pemecah Masalah Jaringan",
      "Profesional Help Desk",
      "Administrator Server",
      "Pemecah Masalah Teknis",
      "Dukungan Infrastruktur IT",
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
          el.getAttribute(dataTextKeyAttr) || translationText,
        );
      } else if (key === "footerText") {
        const year = new Date().getFullYear();
        el.innerHTML = translationText.replace(
          "<span id='currentYearDynamicFooter'></span>",
          year,
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

// Form validation and submission
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Error messages translation
const errorMessages = {
  en: {
    nameRequired: "Name is required",
    nameMinLength: "Name must be at least 2 characters",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    messageRequired: "Message is required",
    messageMinLength: "Message must be at least 10 characters",
    successTitle: "Message Sent Successfully!",
    successMessage: "Thank you for reaching out. I'll get back to you soon.",
    closeButton: "Close",
  },
  id: {
    nameRequired: "Nama wajib diisi",
    nameMinLength: "Nama minimal 2 karakter",
    emailRequired: "Email wajib diisi",
    emailInvalid: "Masukkan alamat email yang valid",
    messageRequired: "Pesan wajib diisi",
    messageMinLength: "Pesan minimal 10 karakter",
    successTitle: "Pesan Berhasil Terkirim!",
    successMessage:
      "Terima kasih telah menghubungi. Saya akan segera membalas.",
    closeButton: "Tutup",
  },
};

function validateName() {
  const nameError = document.getElementById("nameError");
  const value = nameInput.value.trim();
  const lang = currentLang || "id";

  if (value === "") {
    nameError.textContent = errorMessages[lang].nameRequired;
    nameError.classList.add("show");
    nameInput.classList.add("error");
    return false;
  } else if (value.length < 2) {
    nameError.textContent = errorMessages[lang].nameMinLength;
    nameError.classList.add("show");
    nameInput.classList.add("error");
    return false;
  } else {
    nameError.textContent = "";
    nameError.classList.remove("show");
    nameInput.classList.remove("error");
    return true;
  }
}

function validateEmail() {
  const emailError = document.getElementById("emailError");
  const value = emailInput.value.trim();
  const lang = currentLang || "id";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value === "") {
    emailError.textContent = errorMessages[lang].emailRequired;
    emailError.classList.add("show");
    emailInput.classList.add("error");
    return false;
  } else if (!emailRegex.test(value)) {
    emailError.textContent = errorMessages[lang].emailInvalid;
    emailError.classList.add("show");
    emailInput.classList.add("error");
    return false;
  } else {
    emailError.textContent = "";
    emailError.classList.remove("show");
    emailInput.classList.remove("error");
    return true;
  }
}

function validateMessage() {
  const messageError = document.getElementById("messageError");
  const value = messageInput.value.trim();
  const lang = currentLang || "id";

  if (value === "") {
    messageError.textContent = errorMessages[lang].messageRequired;
    messageError.classList.add("show");
    messageInput.classList.add("error");
    return false;
  } else if (value.length < 10) {
    messageError.textContent = errorMessages[lang].messageMinLength;
    messageError.classList.add("show");
    messageInput.classList.add("error");
    return false;
  } else {
    messageError.textContent = "";
    messageError.classList.remove("show");
    messageInput.classList.remove("error");
    return true;
  }
}

// Real-time validation
if (nameInput) {
  nameInput.addEventListener("blur", validateName);
  nameInput.addEventListener("input", () => {
    if (nameInput.classList.contains("error")) {
      validateName();
    }
  });
}

if (emailInput) {
  emailInput.addEventListener("blur", validateEmail);
  emailInput.addEventListener("input", () => {
    if (emailInput.classList.contains("error")) {
      validateEmail();
    }
  });
}

if (messageInput) {
  messageInput.addEventListener("blur", validateMessage);
  messageInput.addEventListener("input", () => {
    if (messageInput.classList.contains("error")) {
      validateMessage();
    }
  });
}

// Form submission
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent =
      currentLang === "en" ? "Sending..." : "Mengirim...";
    submitButton.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        showSuccessModal();
        contactForm.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      alert(
        currentLang === "en"
          ? "Failed to send message. Please try again."
          : "Gagal mengirim pesan. Silakan coba lagi.",
      );
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
}

function showSuccessModal() {
  const lang = currentLang || "id";

  // Create modal if it doesn't exist
  let modal = document.getElementById("successModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "successModal";
    modal.className = "success-modal";
    modal.innerHTML = `
      <div class="success-modal-content">
        <div class="success-icon">✓</div>
        <h3 id="successTitle">${errorMessages[lang].successTitle}</h3>
        <p id="successMessage">${errorMessages[lang].successMessage}</p>
        <button class="btn" id="closeSuccessModal">${errorMessages[lang].closeButton}</button>
      </div>
    `;
    document.body.appendChild(modal);

    // Close modal handler
    document
      .getElementById("closeSuccessModal")
      .addEventListener("click", () => {
        modal.classList.remove("show");
      });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  } else {
    // Update text based on current language
    document.getElementById("successTitle").textContent =
      errorMessages[lang].successTitle;
    document.getElementById("successMessage").textContent =
      errorMessages[lang].successMessage;
    document.getElementById("closeSuccessModal").textContent =
      errorMessages[lang].closeButton;
  }

  // Show modal
  setTimeout(() => {
    modal.classList.add("show");
  }, 100);
}

// Performance optimization - Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Active navigation link based on scroll position
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveNavLink() {
  let currentSection = "";
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = sectionId;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Use debounced version for better performance
const debouncedSetActiveNavLink = debounce(setActiveNavLink, 50);

// Set active link on scroll with passive listener
window.addEventListener("scroll", debouncedSetActiveNavLink, { passive: true });

// Set active link on page load
document.addEventListener("DOMContentLoaded", () => {
  setActiveNavLink();
});

// Smooth scroll enhancement for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navHeight = document.querySelector("nav").offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update URL without jumping
      history.pushState(null, null, targetId);
    }
  });
});
