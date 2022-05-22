<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const form = ref(null);
const snackbar = ref(false);
const message = ref("");
const router = useRouter();

const onformSubmit = () => {
  const displayName = form.value.name.value;
  console.log(form.value.username.value);
  console.log(form.value.email.value);
  console.log(form.value.password.value);

  if (displayName.trim() == "zzz") {
    snackbar.value = true;
    message.value = "Cant communicate with database server";
  } else {
    router.push("/contacts");
  }
};

function onSnackbarClose() {
  console.log("closed");
}
</script>

<template>
  <div class="container">
    <v-snackbar @input="onSnackbarClose" v-model="snackbar" color="error">
      {{ message }}
    </v-snackbar>
    <div class="form-wrapper">
      <h2 class="form-title">Create your account</h2>
      <br />

      <form ref="form" @submit.prevent="onformSubmit">
        <input type="text" id="name" placeholder="Name" />
        <input type="text" id="username" placeholder="Username" />
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
        <v-btn type="submit" color="purple">Create</v-btn>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.form-title {
  color: #444;
  padding: 6px;
}
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  width: fit-content;
  /* background-color: yellow; */
  width: 300px;
}

form input {
  font-weight: 600;
  color: darkslateblue;
  padding: 12px;
  background-color: #fff;
  margin-bottom: 2rem;
  border-radius: 6px;
  border: 2px solid #777;
}
input:focus {
  outline: auto;
}
button {
  /* background-color: darkslateblue; */
  padding: 12px;
  border-radius: 6px;
  border: none;
  /* color: white; */
}

button:active {
  background-color: blueviolet;
}
</style>
