<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const form = ref(null);
const isValidated = ref(false);
const usernameRules = [
  u => u !== "" || "Required",
  u => /^\w+(\d+)?$/.test(u) || "Invalid",
];
const passwordRules = [p => p !== "" || "Required"];
const username = ref("");
const password = ref("");

const snackbar = ref(false);
const message = ref("");
const router = useRouter();

const onSignInClick = () => {
  form.value.validate();

  if (!isValidated.value) return;

  if (username.value == "zzz") {
    snackbar.value = true;
    message.value = "Please enter a name";
  } else {
    router.push("/contacts");
  }
};
</script>

<template>
  <div class="page">
    <v-form ref="form" class="form" lazy-validation>
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
      <v-btn @click="onSignInClick">Sign In</v-btn>
    </v-form>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
