import {defineStore} from "pinia";
import axios from "axios";

export const useAdreslerState = defineStore('adresler', {
    state: () => ({
        adresler: []
    }),
    actions: {
        ekle(adres) {
            axios.post('adresler/', adres)
                .then((response) => {
                    const adres = response.data;
                    this.adresler.push(adres);
                })
        }
    }
});