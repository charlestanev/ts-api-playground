import { CONFIG } from './constants';
import PostService from './services/PostsService';
import UserService from './services/UsersService';

import './style.css'

const root = document.querySelector<HTMLDivElement>('#app');

const postService = new PostService(`${CONFIG.baseUrl}`);
postService.getAll().then((data) => {
  console.log(data);
});

const userService = new UserService(`${CONFIG.baseUrl}`);
userService.getAll().then((data) => {
  console.log(data);
});
root!.innerHTML = `
  <div>
    
  </div>
`