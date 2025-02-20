import { fetchUtil } from "../utils/http";

export default class UserService<T> {
    protected apiUrl: string;
    data = {} as T;
    dataCollection = [] as T[];

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    usersGetAll() {
        fetchUtil<T[]>(this.apiUrl)
    }

    getSingleUser() { }
};
