// export const fetchUtil = async <T>(url: string, httpConfig?: RequestInit) => {
export async function fetchUtil<T>(url: string, httpConfig?: RequestInit): Promise<T> {
    return fetch(url, httpConfig)
        .then(res => res.json())
        .then((data: T) => data)
        .catch(err => {
            console.error(`Error: ${err}`);
            throw err;
        });
}