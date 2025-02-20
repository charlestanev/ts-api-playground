import { CONFIG } from './constants';
import HttpService from './services/HttpService';
import PostService from './services/PostsService';
import UserService from './services/UsersService';
import './style.css'

const root = document.querySelector<HTMLDivElement>('#app');

const postService = new PostService(`${CONFIG.baseUrl}/posts`);
const userService = new UserService(`${CONFIG.baseUrl}/users`);
const httpService = new HttpService(`${CONFIG.baseUrl}/users`);
// httpService.getAll();
// userService.usersGetAll();
// postService.postsGetAll();

root!.innerHTML = `
  <div>
    <h1>${httpService.getAll()}</h1>
    <hr>
    <h1>${userService.usersGetAll()}</h1>
    <hr>
    <h1>${postService.postsGetAll()}</h1>
  </div>
`