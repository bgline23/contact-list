<template>
  <v-app class="app">
    <v-main>
      <header>
        <div class="appbar">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="40"
            height="40"
          />

          <div class="nav">
            <RouterLink to="/signup">Sign Up</RouterLink>
            <RouterLink to="/signin">User</RouterLink>
          </div>
        </div>
      </header>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup></script>

<style scoped>
.app {
  /* height: 100vh; */
  width: 100vw;
  margin: 0;
  background-color: #fbfbfb;
}
.nav {
  display: flex;
  width: 100vw;
  justify-content: flex-end;
}
.nav a {
  margin-left: 20px;
}
.appbar {
  position: relative;
  background-color: #fff;
  display: flex;
  height: 4rem;
  align-items: center;
  padding: 0 20px 0 20px;
  box-sizing: content-box;
}
</style>
