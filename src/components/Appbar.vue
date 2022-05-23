<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

function onProfileClick(arg){

}

async function onLogoutClick(){
    await store.dispatch('signOut')
    router.replace('/signin')
}
</script>

<template>
  <div class="appbar">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />

    <div class="nav">
      <div v-if="!store.state.user">
        <RouterLink to="/signup">Sign Up</RouterLink>
        <RouterLink to="/signin">Sign In</RouterLink>
      </div>
      <div v-else>
        <v-avatar  style="cursor: pointer;" color="purple" fab dark>
          <v-icon>mdi-account-circle</v-icon>

          <v-menu  activator="parent" anchor="bottom end" >
            <v-list>
              <v-list-item @click="onProfileClick" >
                <v-list-item-title   >profile</v-list-item-title>
              </v-list-item>
              <v-list-item  @click="onLogoutClick" >
                <v-list-item-title  >logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-avatar>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  /* padding-right: 5%; */
}
.nav a {
  margin-left: 20px;
}
.appbar {
  position: relative;
  background-color: cornflowerblue;
  display: flex;
  height: 4rem;
  align-items: center;
  padding: 0 20px 0 20px;
  box-sizing: content-box;
}
</style>
