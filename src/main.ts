import { HtmlUtil } from './utils/html';
import './style.css';

// Selecting the root element
const root = document.querySelector<HTMLDivElement>('#root');
if (!root) throw new Error('Root element not found');

// Render initial content
HtmlUtil.render(root);

// Navigation Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("users")?.addEventListener("click", () => {
    HtmlUtil.navigate(root, '/users');
  });

  document.getElementById("posts")?.addEventListener("click", () => {
    HtmlUtil.navigate(root, '/posts');
  });
});

// Handle browser navigation
window.addEventListener("popstate", () => {
  HtmlUtil.render(root);
});

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector<HTMLDivElement>('#root');
  if (!root) throw new Error('Root element not found');

  // Initialize Theme
  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Toggle Theme Function
  themeToggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });

  // Navigation
  document.getElementById("users")?.addEventListener("click", () => {
    HtmlUtil.navigate(root, '/users');
  });

  document.getElementById("posts")?.addEventListener("click", () => {
    HtmlUtil.navigate(root, '/posts');
  });

  window.addEventListener("popstate", () => {
    HtmlUtil.render(root);
  });
});