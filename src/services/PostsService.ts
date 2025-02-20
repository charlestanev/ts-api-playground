import { fetchUtil } from "../utils/http";

export default class PostService<T> {
    protected apiUrl: string;
    data = {} as T;
    dataCollection = [] as T[];

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    postsGetAll() {
        fetchUtil<T[]>(this.apiUrl)
    }

    getSingleUser() { }
};
