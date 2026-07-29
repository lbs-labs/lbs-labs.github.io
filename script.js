const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("lbs-theme");

if (savedTheme) root.dataset.theme = savedTheme;

themeButton?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("lbs-theme", next);
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email copied.";
  } catch {
    copyStatus.textContent = email;
  }
  setTimeout(() => copyStatus.textContent = "", 2200);
});

document.getElementById("year").textContent = new Date().getFullYear();
