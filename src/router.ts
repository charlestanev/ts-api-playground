import { postPage } from './views/post';
import { userPage } from './views/users';

export const router: Record<string, string> = {
    '/': '<h1>Welcome to the App</h1>',
    '/users': userPage,
    '/posts': postPage,
};
