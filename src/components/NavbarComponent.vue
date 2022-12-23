<script setup>

import ModalComponent from "@/components/modals/ModalComponent.vue";
import {computed, ref} from "vue";
import {useKargolarState} from "@/states/kargolar_state";
import AdresModalComponent from "@/components/modals/AdresModalComponent.vue";
import {useAdreslerState} from "@/states/adresler_state";
import {useGondericiState} from "@/states/gonderici_state";
import {useAliciState} from "@/states/alici_state";
import {useSubeState} from "@/states/sube_state";

const kargo_ekleme_acik = ref(false);
const adres_ekleme_acik = ref(false);
const gonderici_ekleme_acik = ref(false);
const alici_ekleme_acik = ref(false);
const sube_ekleme_acik = ref(false);
const kargoStore = useKargolarState();
const adresStore = useAdreslerState();
const gondericiStore = useGondericiState();
const aliciStore = useAliciState();
const subeStore = useSubeState();

const eklenecek_gonderici = ref({
  gonderici_ad: '',
  gonderici_soyad: '',
  gonderici_tcKimlik: '',
  gonderici_telNo: '',
  gonderici_email: '',
  gonderici_adres_id: ''
});
const eklenecek_kargo = ref({
  kargo_tarihi: '',
  kargo_sube_id: '',
  kargo_odemeTuru: '',
  kargo_gonderici_id: '',
  kargo_alici_id: ''
});
const eklenecek_adres = ref({
  adres: '',
  adres_il: '',
  adres_postaKodu: '',
  adres_turu: ''
});
const eklenecek_alici = ref({
  alici_ad: '',
  alici_soyad: '',
  alici_tcKimlik: '',
  alici_telNo: '',
  alici_email: '',
  alici_adres_id: ''
});
const eklenecek_sube = ref({
  sube_ad:'',
  sube_telNo:'',
  sube_yetkilisi:'',
  sube_adres_id:''
});

function kargo_kaydet() {
  kargoStore.ekle(eklenecek_kargo.value);
  kargo_iptal();
}
function alici_kaydet() {
  aliciStore.ekle(eklenecek_alici.value);
  alici_iptal();
}
function gonderici_kaydet() {
  gondericiStore.ekle(eklenecek_gonderici.value);
  gonderici_iptal();
}
function alici_iptal() {
  eklenecek_alici.value.alici_ad = "";
  eklenecek_alici.value.alici_soyad = "";
  eklenecek_alici.value.alici_tcKimlik = "";
  eklenecek_alici.value.alici_telNo = "";
  eklenecek_alici.value.alici_email = "";
  eklenecek_alici.value.alici_adres_id = "";
}
function gonderici_iptal() {
  eklenecek_gonderici.value.gonderici_ad = "";
  eklenecek_gonderici.value.gonderici_soyad = "";
  eklenecek_gonderici.value.gonderici_tcKimlik = "";
  eklenecek_gonderici.value.gonderici_telNo = "";
  eklenecek_gonderici.value.gonderici_email = "";
  eklenecek_gonderici.value.gonderici_adres_id = "";
}
function kargo_iptal() {
  eklenecek_kargo.value.kargo_tarihi = "";
  eklenecek_kargo.value.kargo_sube_id = "";
  eklenecek_kargo.value.kargo_odemeTuru = "";
  eklenecek_kargo.value.kargo_gonderici_id = "";
  eklenecek_kargo.value.kargo_alici_id = "";
  kargo_ekleme_acik.value = false;
}
function adres_kaydet() {
  adresStore.ekle(eklenecek_adres.value);
  adres_iptal();
}
function adres_iptal() {
  eklenecek_adres.value.adres = "";
  eklenecek_adres.value.adres_il = "";
  eklenecek_adres.value.adres_postaKodu = "";
  eklenecek_adres.value.adres_turu = "";
}
function sube_kaydet() {
  subeStore.ekle(eklenecek_sube.value);
  sube_iptal();
}
function sube_iptal() {
  eklenecek_sube.value.sube_ad="";
  eklenecek_sube.value.sube_yetkilisi="";
  eklenecek_sube.value.sube_telNo="";
  eklenecek_sube.value.sube_adres_id="";
}

const sube_ad_hatali = computed(()=>{
  return eklenecek_sube.value.sube_ad==="";
});
const sube_telNo_hatali = computed(()=>{
  return eklenecek_sube.value.sube_telNo==="";
});
const sube_yetkilisi_hatali = computed(()=>{
  return eklenecek_sube.value.sube_yetkilisi==="";
});
const sube_adres_id_hatali = computed(()=>{
  return eklenecek_sube.value.sube_adres_id==="";
});
const alici_ad_hatali = computed(() => {
  return eklenecek_alici.value.alici_ad === "";
});
const alici_soyad_hatali = computed(() => {
  return eklenecek_alici.value.alici_soyad === "";
});
const alici_telNo_hatali = computed(() => {
  return eklenecek_alici.value.alici_telNo === "";
});
const alici_tcKimlik_hatali = computed(() => {
  return eklenecek_alici.value.alici_tcKimlik === "";
});
const alici_email_hatali = computed(() => {
  return eklenecek_alici.value.alici_email === "";
});
const alici_adres_id_hatali = computed(() => {
  return eklenecek_alici.value.alici_adres_id === "";
});
const gonderici_ad_hatali = computed(() => {
  return eklenecek_gonderici.value.gonderici_ad === "";
});
const gonderici_soyad_hatali = computed(() => {
  return eklenecek_gonderici.value.gonderici_soyad === "";
});
const gonderici_tcKimlik_hatali = computed(() => {
  return eklenecek_gonderici.value.gonderici_tcKimlik === "";
});
const gonderici_telNo_hatali = computed(() => {
  return eklenecek_gonderici.value.gonderici_telNo === "";
});
const gonderici_email_hatali = computed(() => {
  return eklenecek_gonderici.value.gonderici_email === "";
});
const gonderici_adres_id_hatali = computed(() => {
  return eklenecek_gonderici.value.gonderici_adres_id === "";
});
const adres_hatali = computed(() => {
  return eklenecek_adres.value.adres === "";
});
const adres_il_hatali = computed(() => {
  return eklenecek_adres.value.adres_il === "";
});
const adres_postaKodu_hatali = computed(() => {
  return eklenecek_adres.value.adres_postaKodu = "";
});
const adres_turu_hatali = computed(() => {
  return eklenecek_adres.value.adres_turu === "";
});
const kargo_tarihi_hatali = computed(() => {
  return eklenecek_kargo.value.kargo_tarihi === "";
});
const kargo_sube_hatali = computed(() => {
  return eklenecek_kargo.value.kargo_sube_id === "";
});
const kargo_odemeTuru_hatali = computed(() => {
  return eklenecek_kargo.value.kargo_odemeTuru === "";
});
const kargo_gonderici_hatali = computed(() => {
  return eklenecek_kargo.value.kargo_gonderici_id === "";
});
const kargo_alici_hatali = computed(() => {
  return eklenecek_kargo.value.kargo_alici_id === "";
});

</script>

<template lang="pug">
div.baslik
  h1 Kargo Otomasyonu
div.buttons
  button.adres_ekle.main(@click="adres_ekleme_acik=true") Adres Ekle
  button.kargo_ekle.main(@click="kargo_ekleme_acik=true") Kargo Ekle
  button.gonderici_ekle.main(@click="gonderici_ekleme_acik=true") Gönderici Ekle
  button.alici_ekle.main(@click="alici_ekleme_acik=true") Alıcı Ekle
  button.sube_ekle.main(@click="sube_ekleme_acik=true") Şube Ekle
ModalComponent(:acik="kargo_ekleme_acik")
  template(#model_baslik)
    div.ekleme_baslik
      h1 Yeni Kargo Ekle
      button.kapat(@click="kargo_ekleme_acik=false") ➕
  template(#kargo_icerik)
    div.form
      h3 Kargo Bilgileri
      label(for="kargo_tarihi") Kargo Tarihi
      input(type="date", name="kargo_tarihi", id="kargo_tarihi", v-model="eklenecek_kargo.kargo_tarihi" )
      span.hata(v-if="kargo_tarihi_hatali") Tarih Bilgisini Düzeltin
      label(for="sube") Şube Bilgileri
      select(name="sube", id="sube", v-model="eklenecek_kargo.kargo_sube_id" )
        option(value="sube-1") KTÜ
        option(value="sube-2") Değirmendere
        option(value="sube-3") Aksaray
      span.hata(v-if="kargo_sube_hatali") Şube Bilgisini Düzeltin
      label(for="odemeTuru") Ödeme Türü
      input(type="text", name="odemeTuru", id="odemeTuru", v-model="eklenecek_kargo.kargo_odemeTuru" )
      span.hata(v-if="kargo_odemeTuru_hatali") Ödeme Türü Bilgisini Düzeltin
  template(#gonderici_icerik)
    div.form
      h3 Gönderici Bilgileri
      label(for="gonderici_bilgileri") Gönderici Bilgileri
      select(name="gonderici_bilgileri", id="gonderici_bilgileri", v-model="eklenecek_kargo.kargo_gonderici_id" )
        option(value="gonderici-1") Hüseyin Mutlu
        option(value="gonderici-2") Ali Eren Ekinci
        option(value="gonderici-3") Gülnur Ögür
      span.hata(v-if="kargo_gonderici_hatali") Gönderici Bilgisini Düzeltin
  template(#alici_icerik)
    div.form
      h3 Alıcı Bilgileri
      label(for="alici_bilgileri") Alıcı Bilgileri
      select(name="alici_bilgileri", id="alici_bilgileri", v-model="eklenecek_kargo.kargo_alici_id" )
        option(value="alici-1") Osman Mutlu
        option(value="alici-2") Enes Gençcan
        option(value="alici-3") Berkant Kubat
      span.hata(v-if="kargo_alici_hatali") Alıcı Bilgisini Düzeltin
  template(#altbilgi)
    div.buttonlar
      button.kaydet(@click="kargo_kaydet")
        span.simge ➕
        span.metin Kaydet
      button.iptal(@click="kargo_iptal")
        span.simge &times
        span.metin İptal
AdresModalComponent(:acik="adres_ekleme_acik")
  template(#model_baslik)
    div.ekleme_baslik
      h1 Yeni Adres Ekle
      button.kapat(@click="adres_ekleme_acik=false") ➕
  template(#icerik)
    div.form
      label(for="adres") Adres
      input(type="text", name="adres", id="adres", v-model="eklenecek_adres.adres")
      span.hata(v-if="adres_hatali") Adres Bilgisini Düzeltin!
      label(for="adres_il") Adres İli
      input(type="text", name="adres_il", id="adres_il", v-model="eklenecek_adres.adres_il")
      span.hata(v-if="adres_il_hatali") Adres İl Bilgisini Düzeltin!
      label(for="adres_postaKodu") Adres Posta Kodu
      input(type="text", name="adres_postaKodu", id="adres_postaKodu", v-model="eklenecek_adres.adres_postaKodu")
      span.hata(v-if="adres_postaKodu_hatali") Adres Posta Kodu Bilgisini Düzeltin!
      label(for="adres_turu") Adres Türü
      input(type="text", name="adres_turu", id="adres_turu", v-model="eklenecek_adres.adres_turu")
      span.hata(v-if="adres_turu_hatali") Adres Türü Bilgisini Düzeltin!
  template(#altbilgi)
    div.buttonlar
      button.kaydet(@click="adres_kaydet")
        span.simge ➕
        span.metin Kaydet
      button.iptal(@click="adres_iptal")
        span.simge &times
        span.metin İptal
AdresModalComponent(:acik="gonderici_ekleme_acik")
  template(#model_baslik)
    div.ekleme_baslik
      h1 Yeni Gönderici Ekle
      button.kapat(@click="gonderici_ekleme_acik=false") ➕
  template(#icerik)
    div.form
      label(for="gonderici_ad") Gönderici Adı
      input(type="text", name="gonderici_adi", id="gonderici_adi", v-model="eklenecek_gonderici.gonderici_ad")
      span.hata(v-if="gonderici_ad_hatali") Gönderici Adı Bilgisini Düzeltin!
      labe(for="gonderici_soyad") Gönderici Soyad
      input(type="text", name="gonderici_soyad", id="gonderici_soyad", v-model="eklenecek_gonderici.gonderici_soyad")
      span.hata(v-if="gonderici_soyad_hatali") Gönderici Soyad Bilgisini Düzeltin!
      label(for="gonderici_tcKimlik") Gönderici T.C. Kimlik Numarası
      input(type="text", name="gonderici_tcKimlik", id="gonderici_tcKimlik", v-model="eklenecek_gonderici.gonderici_tcKimlik")
      span.hata(v-if="gonderici_tcKimlik_hatali") Gönderici T.C. Kimlik Numarası Bilgisini Düzeltin!
      label(for="gonderici_telNo") Gönderici Telefon Numarası
      input(type="text", name="gonderici_telNo", id="gonderici_telNo", v-model="eklenecek_gonderici.gonderici_telNo")
      span.hata(v-if="gonderici_telNo_hatali") Gönderici Telefon Numarası Bilgisini Düzeltin!
      label(for="gonderici_email") Gönderici E-Mail
      input(type="text", name="gonderici_email", id="gonderici_email", v-model="eklenecek_gonderici.gonderici_email")
      span.hata(v-if="gonderici_email_hatali") Gönderici E-Mail Bilgisini Düzeltin!
      label(for="gonderici_adres_id") Gönderici Adresi
      select(name="gonderici_adres_id", id="gonderici_adres_id", v-model="eklenecek_gonderici.gonderici_adres_id")
        option(value="g-adres-1") Merfa Mh. Aksaray
        option(value="g-adres-2") Üniversite Mh. Trabzon
        option(value="g-adres-3") Yomra Trabzon
      span.hata(v-if="gonderici_adres_id_hatali") Gönderici Adres Bilgisini Düzeltin!
  template(#altbilgi)
    div.buttonlar
      button.kaydet(@click="gonderici_kaydet")
        span.simge ➕
        span.metin Kaydet
      button.iptal(@click="gonderici_iptal")
        span.simge &times
        span.metin İptal
AdresModalComponent(:acik="alici_ekleme_acik")
  template(#model_baslik)
    div.ekleme_baslik
      h1 Yeni Alıcı Ekle
      button.kapat(@click="alici_ekleme_acik=false") ➕
  template(#icerik)
    div.form
      label(for="alici_ad") Alıcı Adı
      input(type="text", name="alici_adi", id="alici_adi", v-model="eklenecek_alici.alici_ad")
      span.hata(v-if="alici_ad_hatali") Alıcı Adı Bilgisini Düzeltin!
      labe(for="alici_soyad") Alıcı Soyad
      input(type="text", name="alici_soyad", id="alici_soyad", v-model="eklenecek_alici.alici_soyad")
      span.hata(v-if="alici_soyad_hatali") Alıcı Soyad Bilgisini Düzeltin!
      label(for="alici_tcKimlik") Alıcı T.C. Kimlik Numarası
      input(type="text", name="alici_tcKimlik", id="alici_tcKimlik", v-model="eklenecek_alici.alici_tcKimlik")
      span.hata(v-if="alici_tcKimlik_hatali") Alıcı T.C. Kimlik Numarası Bilgisini Düzeltin!
      label(for="alici_telNo") Alıcı Telefon Numarası
      input(type="text", name="alici_telNo", id="alici_telNo", v-model="eklenecek_alici.alici_telNo")
      span.hata(v-if="alici_telNo_hatali") Alıcı Telefon Numarası Bilgisini Düzeltin!
      label(for="alici_email") Alıcı E-Mail
      input(type="text", name="alici_email", id="alici_email", v-model="eklenecek_alici.alici_email")
      span.hata(v-if="alici_email_hatali") Alıcı E-Mail Bilgisini Düzeltin!
      label(for="alici_adres_id") Alıcı Adresi
      select(name="alici_adres_id", id="alici_adres_id", v-model="eklenecek_alici.alici_adres_id")
        option(value="g-adres-1") Merfa Mh. Aksaray
        option(value="g-adres-2") Üniversite Mh. Trabzon
        option(value="g-adres-3") Yomra Trabzon
      span.hata(v-if="alici_adres_id_hatali") Alıcı Adres Bilgisini Düzeltin!
  template(#altbilgi)
    div.buttonlar
      button.kaydet(@click="alici_kaydet")
        span.simge ➕
        span.metin Kaydet
      button.iptal(@click="alici_iptal")
        span.simge &times
        span.metin İptal
AdresModalComponent(:acik="sube_ekleme_acik")
  template(#model_baslik)
    div.ekleme_baslik
      h1 Yeni Şube Ekle
      button.kapat(@click="sube_ekleme_acik=false") ➕
  template(#icerik)
    div.form
      label(for="sube_ad") Şube Adı
      input(type="text", name="sube_adi", id="sube_adi", v-model="eklenecek_sube.sube_ad")
      span.hata(v-if="sube_ad_hatali") Şube Adı Bilgisini Düzeltin!
      label(for="sube_telNo") Şube Telefon Numarası
      input(type="text", name="sube_telNo", id="sube_telNo", v-model="eklenecek_sube.sube_telNo")
      span.hata(v-if="sube_telNo_hatali") Şube Telefon Numarası Bilgisini Düzeltin!
      label(for="sube_yetkilisi") Şube Yetkilisi
      input(type="text", name="sube_yetkilisi", id="sube_yetkilisi", v-model="eklenecek_sube.sube_yetkilisi")
      span.hata(v-if="sube_yetkilisi_hatali") Şube Yetkilisi Bilgisini Düzeltin!
      label(for="sube_adres_id") Alıcı Adresi
      select(name="sube_adres_id", id="sube_adres_id", v-model="eklenecek_sube.sube_adres_id")
        option(value="g-adres-1") Merfa Mh. Aksaray
        option(value="g-adres-2") Üniversite Mh. Trabzon
        option(value="g-adres-3") Yomra Trabzon
      span.hata(v-if="sube_adres_id_hatali") Alıcı Adres Bilgisini Düzeltin!
  template(#altbilgi)
    div.buttonlar
      button.kaydet(@click="sube_kaydet")
        span.simge ➕
        span.metin Kaydet
      button.iptal(@click="sube_iptal")
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


</style>