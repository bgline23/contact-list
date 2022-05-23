<script setup>
import { useRouter } from "vue-router";

const props = defineProps({ data: Object });
const router = useRouter();

function getAvatarLetters() {
  return (props.data?.name.charAt(0) + props.data?.surname.charAt(0)).toUpperCase();
}

function onContactClick() {
  const id = (props.data.id);
  router.push("/contacts/" + id);
}
</script>

<template>
  <div class="card-wrapper">
    <div class="avatar">
      {{ getAvatarLetters() }}
    </div>
    <div @click="onContactClick" class="contact-name">
      <p>{{ props.data?.name }}</p>
      <p>{{ props.data?.surname }}</p>
    </div>
  </div>
</template>

<style>
.card-wrapper {
  height: fit-content;
  display: flex;
  border-radius: 6px;
  width: 90%;
  background-color: #e7e7e7;
  margin: 10px 0px 10px 0;
  padding: 6px;
  cursor: pointer;
  box-shadow: 4px 4px 10px lightgrey;
}
.card-wrapper:hover {
  background-color: lightblue;
  box-shadow: 4px 4px 10px lightskyblue;
}
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 50px;
  background-color: cornflowerblue;
  border-radius: 6px;
}
.contact-name {
  /* background-color: yellow; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.contact-name p {
  margin: 0 4px 0 4px;
}
</style>
