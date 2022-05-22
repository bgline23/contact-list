import { createRouter, createWebHistory } from "vue-router";
import Contacts from "@/views/Contacts.vue";
import SignUp from "@/views/SignUp.vue";
import SignIn from "@/views/SignIn.vue";
import ContactDetail from "@/views/ContactDetail.vue";

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
  },
  {
    path: "/contacts/:id",
    name: "contactdetail",
    component: ContactDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
