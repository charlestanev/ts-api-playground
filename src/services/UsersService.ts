export default class UserService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    userGetAll() {
        return this.baseUrl;
    }

    getSingleUser() { }
};
