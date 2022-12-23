<script setup>

//Veri Tanımları
import {useYukleniyorState} from "@/states/yukleniyor_state";
import {useKargolarState} from "@/states/kargolar_state";
import {ref} from "vue";
import ModalComponent from "@/components/modals/ModalComponent.vue"

const yukleme = useYukleniyorState();
const kargoStore = useKargolarState();

kargoStore.yukle();

let ekleme_acik = ref(false);

function extracted(kargo_bilgileri) {
  kargoStore.seciliKargo = kargo_bilgileri
}
</script>

<template lang="pug">
div.tablo_main
  table.main
    tr
      th.tablo_baslik ID
      th.tablo_baslik Kargo Tarihi
      th.tablo_baslik Gönderici Bilgileri
      th.tablo_baslik Alıcı Bilgileri
      th.tablo_baslik Ödeme Türü
      th
    div.loader(v-if="yukleme.yukleniyor")
    div(v-else-if="kargoStore.kargolar.length===0") Kargo Bilgileri Bulunamadı!
    tr(v-else, v-for="kargo_bilgileri in kargoStore.kargolar" @click="extracted(kargo_bilgileri)")
      td.tablo_detay {{ kargo_bilgileri.kargo_id }}
      td.tablo_detay {{ kargo_bilgileri.kargo_tarihi }}
      td.tablo_detay {{ kargo_bilgileri.kargo_gonderici_id }}
      td.tablo_detay {{ kargo_bilgileri.kargo_alici_id }}
      td.tablo_detay {{ kargo_bilgileri.kargo_odemeTuru }}
      td
        a(@click="ekleme_acik=true") Düzenle
button(@click="kargoStore.yukle()" :disabled="yukleme.yukleniyor") Yenile
ModalComponent(:acik="ekleme_acik")
  template(#model_baslik)
    div.ekleme_baslik
      h1 Kargo Detayları
      button.kapat(@click="ekleme_acik=false") X
</template>

<style scoped>

div.ekleme_baslik {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

button.kapat{
  margin-right: 15px;
  margin-top: 15px;
  cursor: pointer;
  background-color: white;
  border: none;
}

table {
  border-collapse: collapse;
  width: 100%;
}

a {
  color: #4C32FC;
  text-decoration: none;
  cursor: pointer;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table td {
  border: 1px solid #ddd;
  padding: 8px;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

.loader {
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: black;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}

.loader::after, .loader::before {
  content: '';
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  box-sizing: border-box;
  animation: animloader 0.3s 0.45s linear infinite alternate;
}

.loader::before {
  left: -20px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 48px
  }
  100% {
    height: 4px
  }
}

</style>