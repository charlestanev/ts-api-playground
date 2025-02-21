import { userPage } from './views/users';
import { postPage } from './views/posts';

export const router: Record<string, () => string> = {
    '/': () => '<h1>Welcome to the App</h1>',
    '/users': userPage,
    '/posts': postPage,
};
