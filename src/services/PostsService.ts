import { Post } from "../types/post";
import HttpService from "./HttpService";

export default class PostService extends HttpService<Post> {
    constructor(baseUrl: string) {
        super(`${baseUrl}/posts`);
    }

    getUaerPost() { }
};
