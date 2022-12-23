import axios from "axios";
import {defineStore} from "pinia";

export const useGondericiState = defineStore('gondericiler',
    {
        state: () => ({
            gondericiler: []
        }),
        actions: {
            ekle(gonderici) {
                axios.post('gonderici/', gonderici)
                    .then((response) => {
                        const gonderici = response.data;
                        this.gondericiler.push(gonderici);
                    })
            }
        }
    });