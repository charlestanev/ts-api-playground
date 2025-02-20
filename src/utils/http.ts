export const fetchUtil = (url: string, httpConfig?: RequestInit) => {
    return fetch(url, httpConfig)
        .then(res => res.json())
        .then((data: T) => {
            console.log(data);
        })
        .catch()
}