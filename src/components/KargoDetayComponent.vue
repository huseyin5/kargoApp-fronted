<script setup>

//Veri Tanımları
import {useYukleniyorState} from "@/states/yukleniyor_state";
import {useKargolarState} from "@/states/kargolar_state";
import {ref} from "vue";
import ModalComponent from "@/components/modals/ModalComponent.vue"

const yukleme = useYukleniyorState();
const kargoStore = useKargolarState();

kargoStore.yukle();

let duzenleme_acik = ref(false);

function extracted(kargo_bilgileri) {
  kargoStore.seciliKargo = kargo_bilgileri
}
function kargo_kaydet() {
  kargo_iptal();
}
function kargo_iptal() {
  duzenleme_acik.value = false;
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
        a(@click="duzenleme_acik=true") Düzenle
button(@click="kargoStore.yukle()" :disabled="yukleme.yukleniyor") Yenile
ModalComponent(:acik="duzenleme_acik")
  template(#model_baslik)
    div.ekleme_baslik
      h1 Yeni Kargo Ekle
      button.kapat(@click="duzenleme_acik=false") ➕
  template(#kargo_icerik)
    div.form
      h3 Kargo Bilgileri
      label(for="kargo_tarihi") Kargo Tarihi
      input(type="date", name="kargo_tarihi", id="kargo_tarihi", v-model="kargoStore.seciliKargo.kargo_tarihi" )
      label(for="sube") Şube Bilgileri
      select(name="sube", id="sube", v-model="kargoStore.seciliKargo.kargo_sube_id" )
        option(value="sube-1") KTÜ
        option(value="sube-2") Değirmendere
        option(value="sube-3") Aksaray
      label(for="odemeTuru") Ödeme Türü
      input(type="text", name="odemeTuru", id="odemeTuru", v-model="kargoStore.seciliKargo.kargo_odemeTuru" )
  template(#gonderici_icerik)
    div.form
      h3 Gönderici Bilgileri
      label(for="gonderici_bilgileri") Gönderici Bilgileri
      select(name="gonderici_bilgileri", id="gonderici_bilgileri", v-model="kargoStore.seciliKargo.kargo_gonderici_id" )
        option(value="gonderici-1") Hüseyin Mutlu
        option(value="gonderici-2") Ali Eren Ekinci
        option(value="gonderici-3") Gülnur Ögür
  template(#alici_icerik)
    div.form
      h3 Alıcı Bilgileri
      label(for="alici_bilgileri") Alıcı Bilgileri
      select(name="alici_bilgileri", id="alici_bilgileri", v-model="kargoStore.seciliKargo.kargo_alici_id" )
        option(value="alici-1") Osman Mutlu
        option(value="alici-2") Enes Gençcan
        option(value="alici-3") Berkant Kubat
  template(#altbilgi)
    div.buttonlar
      button.kaydet(@click="kargo_kaydet")
        span.simge ➕
        span.metin Kaydet
      button.iptal(@click="kargo_iptal")
        span.simge &times
        span.metin İptal
</template>

<style scoped>
span.hata {
  color: red;
  font-size: 9pt;
}

button.kaydet {
  background-color: #00A36C;
  font-weight: bold;
  color: white;
  padding: 10px;
  border: black solid 1px;
}

button.iptal {
  background-color: #FF4433;
  color: white;
  font-weight: bold;
  padding: 10px;
  border: black solid 1px;
}

div.buttonlar {
  display: flex;
  flex-direction: row-reverse;
  width: 90%;
}

div.buttonlar button {
  margin-left: 5px;
  cursor: pointer;
}

button.iptal span.simge {
  transform: rotate(45deg);
}

div.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

div.ekleme_baslik {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

button.kapat {
  margin-right: 15px;
  margin-top: 15px;
  cursor: pointer;
  background-color: white;
  border: none;
  transform: rotate(45deg);
}

div.buttons {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

button.main {
  margin: 20px;
  cursor: pointer;
}

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