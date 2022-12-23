<script setup lang="ts">

import NavbarComponent from "@/components/NavbarComponent.vue";
import KargoDetayComponent from "@/components/KargoDetayComponent.vue";
</script>

<template>
  <div class="navbar position-absolute">
    <NavbarComponent/>
  </div>
  <div class="main position-absolute">
    <KargoDetayComponent/>
  </div>
</template>

<style scoped>

div.position-absolute {
  position: absolute;
}

div.navbar {
  padding: 20px;
  left: 0;
  top: 0;
  height: 100vh;
  width: 25vw;
  background: #239B56;
  box-sizing: border-box;
  /*overflow-y: scroll;*/
}

div.main {
  padding: 20px;
  left: 25vw;
  top: 0;
  width: 75vw;
  height: 100vh;
  background: #ECF0F1;
  box-sizing: border-box;
}

</style>
