// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);



// 1. Page Navigation System (SPA)
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(page => {
    page.classList.remove('active-page');
  });

  // Remove active class from nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Show selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active-page');
    window.scrollTo(0, 0); // Scroll to top
  }

  // Close mobile menu if open
  const mobileMenu = document.getElementById('navLinks');
  mobileMenu.classList.remove('active');
}

// 2. Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// 3. FAQ Accordion
function toggleAccordion(element) {
  const content = element.nextElementSibling;
  content.classList.toggle('open');
  const icon = element.querySelector('i');
  icon.classList.toggle('fa-chevron-down');
  icon.classList.toggle('fa-chevron-up');
}

// 4. Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-visible');
      // Stop observing once visible to prevent re-animating
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Apply observer to all elements with animation classes

function initAnimations() {
  const animatedElements = document.querySelectorAll('.anim-hidden');
  animatedElements.forEach(el => observer.observe(el));
}

// Run animations on load
document.addEventListener('DOMContentLoaded', initAnimations);

// Re-trigger animation check when changing pages (optional hack for SPA)
const buttons = document.querySelectorAll('a, button');
buttons.forEach(btn => btn.addEventListener('click', () => {
  setTimeout(initAnimations, 100);
}));


// about

// Function to handle scroll animations
function reveal() {
  // Select all elements with reveal classes
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150; // Distance before it appears

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Event listener for scroll
window.addEventListener("scroll", reveal);

// Trigger once on load to show elements already in view
window.addEventListener("load", reveal);


// animation_scrol
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active-scroll');
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll('.animate-on-scroll')
  .forEach(el => scrollObserver.observe(el));


//  animation_reveal

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  const elements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );

  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active-reveal");
    } else {
      el.classList.remove("active-reveal");
    }
  });
}



// faq_section

document.addEventListener("DOMContentLoaded", function () {

  /* ========== FAQ ACCORDION ========== */
  document.querySelectorAll('.faq-pg-acc-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;

      item.classList.toggle('active');
      header.classList.toggle('active');
    });
  });
});


const faqObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('faq-pg-visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.faq-pg-anim-left, .faq-pg-anim-right')
  .forEach(el => faqObserver.observe(el));


// wesite_pagess



    // --- SCROLL ANIMATION JAVASCRIPT ---
    const mnmObserverOptions = { threshold: 0.15 };
    const mnmObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mnm-visible');
            }
        });
    }, mnmObserverOptions);

    document.querySelectorAll('.mnm-reveal-left, .mnm-reveal-right').forEach(el => {
        mnmObserver.observe(el);
    });

    // --- FAQ ACCORDION JAVASCRIPT ---
    document.querySelectorAll('.mnm-faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('mnm-active');
        });
    });


// fsq searcnh page

  document.querySelectorAll('.seo-pg-faq-q').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('seo-active');
            q.querySelector('span').innerText = item.classList.contains('seo-active') ? '-' : '+';
        });
    });
