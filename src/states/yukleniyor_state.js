import {defineStore} from "pinia";


export const useYukleniyorState = defineStore('yukleniyor', {
    state: () => ({yukleniyor: false}),
    actions: {
        yuklemeBasla() {
            this.yukleniyor = true;
        },
        yuklemeBitir() {
            this.yukleniyor = false;
        }
    }
});