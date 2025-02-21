import { CONFIG } from './constants';
import PostService from './services/PostsService';
import UserService from './services/UsersService';

import './style.css'

const root = document.querySelector<HTMLDivElement>('#app');

const postService = new PostService(`${CONFIG.baseUrl}`);
postService.getAll().then((data) => {
  console.log('Posts : ', data[0]);
});

const userService = new UserService(`${CONFIG.baseUrl}`);
userService.getAll().then((data) => {
  console.log('users : ', data[0]);
});
root!.innerHTML = `
  <div>
    
  </div>
`