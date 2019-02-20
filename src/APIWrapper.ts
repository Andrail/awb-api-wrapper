import {Config} from "./Config";
import fetch from 'node-fetch'
import {TrashdatesResponse} from "./TrashdatesResponseInterface";

export class APIWrapper {
    constructor(
        private config: Config
    ){}

    public get(): Promise<TrashdatesResponse> {
        let url = this.getUrl();

        return fetch(url).then(
            (response) => {
                return response.json()
            });
    }

    public setConfig(config: Config) {
        this.config = config;
    }

    private getUrl(): string {
        let url: string = this.config.url + '?';

        for (let key in this.config) {
            if (key === 'url') {
                continue;
            }

            if (typeof this.config[key] != 'function') {
                url += key + '=' + this.config[key] + '&';
            }
        }

        return url;
    }
}
