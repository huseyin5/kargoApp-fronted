<script setup>

const props = defineProps({
  acik: Boolean
})

</script>

<template lang="pug">
Teleport(to="body")
  Transition(name="modal")
    div.arka_plan(v-if="props.acik")
      div.modal_kapsayici
        div.modal_pencere
          div.modal_baslik
            slot(name="model_baslik")
              h1 Başlık
          div.modal_icerik
            div.modal_icerik_detay
              div.kargo
                slot(name="kargo_icerik")
                  p Kargo İçerik
              div.gonderici
                slot(name="gonderici_icerik")
                  p Gönderici İçerik
              div.alici
                slot(name="alici_icerik")
                  p Alıcı İçerik
          div.modal_altbilgi
            slot(name="altbilgi")
              footer Alt Bilgi
</template>

<style scoped>

div.arka_plan {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  display: table;
}

div.modal_kapsayici {
  display: table-cell;
  vertical-align: middle;
  horiz-align: center;
}

div.modal_pencere {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 50%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);

}

div.modal_icerik_detay {
  display: flex;
  flex-direction: row;
  padding-left: 15px;
}

div.modal_baslik{
  padding-left: 15px;
}

div.alici{
  padding-left: 15px;
}
div.gonderici{
  padding-left: 15px;
}

div.modal_altbilgi {
  padding-left: 15px;
  padding-bottom: 15px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal_kapsayici,
.modal-leave-to .modal_kapsayici {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>