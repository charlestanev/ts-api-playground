import { fetchUtil } from "../utils/http";

export default class HttpService<T> {
    protected apiUrl: string;
    data = {} as T;
    dataCollection = [] as T[];

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    create(body: T) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }
        return fetchUtil<T>(this.apiUrl, config) as Promise<T>;
    }

    getAll(): Promise<T[]> {
        return fetchUtil<T[]>(this.apiUrl) as Promise<T[]>;
    }

    getOne(id: number): Promise<T> {
        return fetchUtil<T>(`${this.apiUrl}/${id}`) as Promise<T>;
    }

    update(id: number, body: T) {
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }
        return fetchUtil<T>(`${this.apiUrl}/${id}`, config) as Promise<T>;
    }

    detele(id: number) {
        const config = {
            method: "DELETE",
        }
        return fetchUtil<T>(`${this.apiUrl}/${id}`, config) as Promise<T>;
    }
}