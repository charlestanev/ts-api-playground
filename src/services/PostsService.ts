export default class PostService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getUsersPost() {
        return this.baseUrl
    }
};
