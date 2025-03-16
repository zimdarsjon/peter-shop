<script setup lang="ts">
import DynamicDialog from 'primevue/dynamicdialog';
import { useMenuStore } from './stores/menu';
import { storeToRefs } from 'pinia';
import Menubar from 'primevue/menubar';

const menuStore = useMenuStore();

const { menuItems} = storeToRefs(menuStore);

</script>

<template>
  <DynamicDialog />
  <div class="card">
    <Menubar :model="menuItems"/>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
