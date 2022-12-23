import {defineStore} from "pinia";
import {useYukleniyorState} from "@/states/yukleniyor_state";
import axios from "axios";


export const useKargolarState = defineStore('kargolar', {
    state: () => ({
        kargolar: [],
        seciliKargo: null
    }),
    actions: {
        yukle() {
            const yukleme = useYukleniyorState();
            yukleme.yuklemeBasla();
            this.seciliKisi = null;
            axios.get("kargo/")
                .then((response) => {
                    this.kargolar = response.data;
                    yukleme.yuklemeBitir();
                    console.log(response);
                });
        },
        ekle(kargo) {
            axios.post('kargo/', kargo)
                .then((response) => {
                    const kargo = response.data;
                    this.kargolar.push(kargo);
                })
        }
    }
});