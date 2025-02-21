import { UserDetails } from "../types/user";
import HttpService from "./HttpService";

export default class UserService extends HttpService<UserDetails> {
    constructor(baseUrl: string) {
        super(`${baseUrl}/users`);
    }

    getSingleUser() { }
    userGetAll() { }

};