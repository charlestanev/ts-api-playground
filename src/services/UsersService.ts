import { User } from "../types/user";
import HttpService from "./HttpService";

export default class UserService extends HttpService<User> {
    constructor(baseUrl: string) {
        super(`${baseUrl}/users`);
    }

    userGetAll() { }
    getSingleUser() { }
};