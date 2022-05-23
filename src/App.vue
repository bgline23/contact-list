<script setup>
import Appbar from "./components/Appbar.vue";
import { useStore } from 'vuex';

    const store = useStore();
     store.dispatch('loadUser')
</script>

<template>
  <v-app class="app">
    <v-main>
      <Appbar />

      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.app {
  width: 100%;
  margin: 0;
  background-color: #fbfbfb;
}
</style>
