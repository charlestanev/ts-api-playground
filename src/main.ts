import { CONFIG } from './constants';
import PostService from './services/PostsService';
import UserService from './services/UsersService';
import { HtmlUtil } from './utils/html';
import { router } from './router';

import './style.css';

// Selecting the root element
const root = document.querySelector<HTMLDivElement>('#root');
if (!root) throw new Error('Root element not found');

// Render initial content
HtmlUtil.render(root);

// Initialize Services
const postService = new PostService(CONFIG.baseUrl);
const userService = new UserService(CONFIG.baseUrl);

// Event Listeners for Navigation
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("users")?.addEventListener("click", () => {
    HtmlUtil.navigate(root, '/users');
  });

  document.getElementById("posts")?.addEventListener("click", () => {
    HtmlUtil.navigate(root, '/posts');
  });
});
