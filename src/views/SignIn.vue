<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const form = ref(null);
const isValidated = ref(false);
const usernameRules = [
  u => u !== "" || "Required",
  u => /^\w+(\d+)?$/.test(u) || "Invalid",
];
const passwordRules = [p => p !== "" || "Required"];
const username = ref("");
const password = ref("");
const color = ref("");

const snackbar = ref(false);
const message = ref("");
const router = useRouter();

const onSignInClick = async () => {
  try {
    form.value.validate();

    if (!isValidated.value) return;

    const response = await axios.post("http://localhost:8081/authenticate/login", {
      username: username.value,
      password: password.value,
    });

    if (response.data.success) {
      router.push("/contacts");
    }
    return;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status == 401) {
      color.value = "warning";
      snackbar.value = true;
      message.value = error.response?.data || "Incorrect username or password.";
    } else {
      color.value = "error";
      snackbar.value = true;
      message.value = error.message;
    }
  }
};
</script>

<template>
  <div class="page">
    <v-snackbar v-model="snackbar" :color="color">
      {{ message }}
    </v-snackbar>
    <v-form ref="form" class="form" v-model="isValidated">
      <h2 class="form-title d-flex justify-center">Sign In</h2>
      <v-text-field
        v-model="username"
        placeholder="Username"
        variant="outlined"
        density="compact"
        required
        :rules="usernameRules"
      ></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        placeholder="Password"
        variant="outlined"
        density="compact"
        required
        :rules="passwordRules"
      ></v-text-field>
      <v-btn @click="onSignInClick" color="purple">Sign In</v-btn>
    </v-form>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 300px;
  /* background-color: cyan; */
}
.form-title {
  color: #444;
  padding: 6px;
}
</style>
