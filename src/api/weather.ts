import {Api} from './index';


export const weatherApi = {
    get(params: {[key:string]: string}) {
        return Api.get('forecast', params)
    },
};
