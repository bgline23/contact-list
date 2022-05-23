<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import ContactCard from "@/components/ContactCard.vue";


const page = ref(1);

const contacts = [
  { id: 1, name: "Peter", surname: "Parker" },
  { id: 2, name: "Kyle", surname: "" },
  { id: 3, name: "Clark", surname: "Kent" },
  { id: 3, name: "Clark", surname: "Kent" },
  { id: 3, name: "Clark", surname: "Kent" },
  { id: 3, name: "Clark", surname: "Kent" },
  { id: 3, name: "Clark", surname: "Kent" },
  { id: 3, name: "Clark", surname: "Kent" },
  { id: 3, name: "Clark", surname: "Kent" },
  { id: 3, name: "Clark", surname: "Kent" },
  { id: 4, name: "Bruce", surname: "Wayne" },
];
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-wrapper">
      <div>
        <input
          type="text"
          name="search"
          id="search"
          class="text-input"
          placeholder="Search names"
        />
        <img
          alt="Vue logo"
          class="toolbar-item"
          src="@/assets/icon-book.svg"
          width="32"
          height="32"
        />
        <img
          alt="Vue logo"
          class="toolbar-item active"
          src="@/assets/icon-account.svg"
          width="32"
          height="32"
        />
      </div>
      <div>
        <v-btn class="create-button" color=" darken-2">Add contact</v-btn>
      </div>
    </div>
  </div>

  <div class="contact">
    <div class="list-wrapper">
      <div class="contact-list">
        <ContactCard v-for="person in contacts" :data="person" />
      </div>
    </div>
  </div>

  <div class="list-footer">
    <div class="footer-wrapper">
      <v-pagination
        v-model="page"
        :length="3"
        rounded="circle"
        class="paginator"
      ></v-pagination>
      <p class="row-count">{{ contacts.length }} contacts found.</p>
    </div>
  </div>
</template>

<style scoped>
.list-wrapper {
  display: flex;
  justify-content: flex-start;
  overflow-y: auto;
  width: 90vw;
}
.toolbar div{
  display: flex;
  align-items: center;
}

.toolbar {
  display: flex;
  margin: 20px 0px 10px 0px;
  justify-content: center;
}

.toolbar-wrapper {
  display: flex;
  justify-content: space-between;
  width: 80vw;
}
.toolbar-item {
  margin-left: 20px;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
}

.toolbar-item:hover {
background-color: cornflowerblue;
  box-shadow: 4px 4px 10px lightskyblue;
}

.toolbar-item ~ .active {
  border: 2px solid blueviolet;
  /* background-color: cornflowerblue; */
}
.list-wrapper::-webkit-scrollbar {
  width: 4px;
}

.create-button {
  background-color: cornflowerblue;
}
.list-wrapper::-webkit-scrollbar-thumb {
  background-color: lightskyblue;
}
.contact-list {
  display: flex;
  height: 62vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.contact {
  display: flex;
  justify-content: center;
  top: 20vh;
}

.list-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  margin-top: 20px;
}
</style>
