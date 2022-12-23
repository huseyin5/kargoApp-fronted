import axios from "axios";
import {defineStore} from "pinia";

export const useSubeState = defineStore('subeler',
    {
        state: () => ({
            subeler: []
        }),
        actions: {
            ekle(sube) {
                axios.post('sube/', sube)
                    .then((response) => {
                        const sube = response.data;
                        this.subeler.push(sube);
                    })
            }
        }
    });