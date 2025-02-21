import { Post } from "../types/post";
import { fetchUtil } from "../utils/http";
import HttpService from "./HttpService";

export default class PostService extends HttpService<Post> {
    constructor(baseUrl: string) {
        super(`${baseUrl}/posts`);
    }

    getUserPosts(userId: number) {
        return fetchUtil<Post[]>(`${this.apiUrl}?userId=${userId}`) as Promise<Post[]>;
    }
};
