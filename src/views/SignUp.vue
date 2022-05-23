<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const form = ref(null);
const snackbar = ref(false);
const message = ref("");
const snackbarColor = ref("");
const router = useRouter();

const onformSubmit = async () => {
  try {
    const response = await axios.post("http://localhost:8081/user/account", {
      name: form.value.name.value,
      username: form.value.username.value,
      email: form.value.email.value,
      password: form.value.password.value,
    });

    if(response.status == 200){
      snackbarColor.value = "success";
      snackbar.value = true;
      message.value = "Account created successfully";
    }
  } catch (error) {
    if (error.response && error.response.data) {
      snackbarColor.value = "warning";
      snackbar.value = true;
      message.value = error.response.data;
    } else {
      snackbarColor.value = "error";
      snackbar.value = true;
      message.value = error.message;
    }
  }
};
</script>

<template>
  <div class="container">
    <v-snackbar v-model="snackbar" :color="snackbarColor">
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
  height: 100%;
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
