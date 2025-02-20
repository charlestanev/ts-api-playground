import { CONFIG } from './constants';
import PostService from './services/PostsService';
import UserService from './services/UsersService';

import './style.css'

const root = document.querySelector<HTMLDivElement>('#app');

const postService = new PostService(`${CONFIG.baseUrl}`);
postService.getAll();
const userService = new UserService(`${CONFIG.baseUrl}`);
userService.getAll();

root!.innerHTML = `
  <div>

  </div>
`