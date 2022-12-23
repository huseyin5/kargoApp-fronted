import axios from "axios";
import {defineStore} from "pinia";

export const useAliciState = defineStore('alicilar',
    {
        state: () => ({
            alicilar: []
        }),
        actions: {
            ekle(alici) {
                axios.post('alici/', alici)
                    .then((response) => {
                        const alici = response.data;
                        this.alicilar.push(alici);
                    })
            }
        }
    });