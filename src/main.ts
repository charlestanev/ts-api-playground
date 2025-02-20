import { CONFIG } from './constants';
import PostService from './services/PostsService';
import UserService from './services/UsersService';
import './style.css'

const root = document.querySelector<HTMLDivElement>('#app');

const postService = new PostService(CONFIG.baseUrl);
const userService = new UserService(CONFIG.baseUrl);

root!.innerHTML = `
  <div>
    <h1>${userService.userGetAll()}</h1>
    <hr>
    <h1>${postService.getUsersPost()}</h1>
  </div>
`