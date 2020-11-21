import {Api} from "./index";

export const countriesApi = {
   get() {
       return Api.get('https://restcountries.eu/rest/v2/all?fields=name;latlng')
   },
    getGeoInfo() {
       return Api.get('https://ipapi.co/json/')
    }
};
