import { UserDetails } from "../types/user";
import HttpService from "./HttpService";

export default class UserService extends HttpService<UserDetails> {
    constructor(baseUrl: string) {
        super(`${baseUrl}/users`);
    }

    getSingleUser(id: number, cb: (id: number) => void) {
        return this.getOne(id).then((data) => {
            console.log('Get single user data by ID:', id);
            cb(data.id);
        });
    }
}
