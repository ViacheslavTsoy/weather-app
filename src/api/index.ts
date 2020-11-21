import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class Api {
    static instance: Api;
    axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            timeout: 15000,
            baseURL: 'https://api.openweathermap.org/data/2.5/',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
    }

    static getInstance() {
        if (!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance;
    }

    static getAxios() {
        return Api.getInstance().axiosInstance;
    }

    static get<T = any>(
        url: string,
        params: object = {},
        config: AxiosRequestConfig = {},
    ) {
        return Api.getAxios().get(url, { params, ...config });
    }
}
