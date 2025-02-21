import { RouterMap } from "./types/router";
import { postPage } from "./views/post";
import { userPage } from "./views/users";

export const router: RouterMap = {
    '/': userPage,
    '/users': userPage,
    '/posts': postPage,

}