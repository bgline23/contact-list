<script setup>
import { onMounted, computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";
import Dialog from "@/components/Dialog.vue";

const route = useRoute();
const display = useDisplay();
const breakpoint = computed(() => display.name.value);
const contactCardWidth = computed(() => (breakpoint.value === "xs" ? 300 : 400));
const isMobile = computed(() => breakpoint.value === "xs");
const gridClass = computed(() => {
  if (breakpoint.value === "sm") return "grid2";
  if (["md", "lg", "xl"].includes(breakpoint.value)) return "grid3";

  return null;
});

onMounted(() => {
  console.log(route.params);
});

watch(breakpoint, val => {
  console.log(val);
});
const dialog = ref(false);
const dialogMessaage = ref("");

const onContactDelete = () => {
  dialog.value = true;
  dialogMessaage.value = "Remove from contact list?";
};

const onNoteDelete = note => {
  dialog.value = true;
  dialogMessaage.value = "Remove note?";
};
</script>

<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title class="text-h7"> Delete </v-card-title>
      <v-card-text>{{ dialogMessaage }}</v-card-text>
      <v-card-actions style="display: flex; justify-content: center">
        <v-btn class="ma-1" color="grey" plain> Cancel </v-btn>

        <v-btn class="ma-1" color="error" plain @click="dialog = false"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <div class="page">
    <h2>Contact</h2>

    <div class="contact-detail">
      <v-card :width="contactCardWidth" elevation="4" shaped>
        <v-card-title>Name Surname</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="contact-card-text">
          <span>Cellphone: 065 6847 110</span>
          <span>Home number: 065 6847 110</span>
          <span>Email: contact@email.com</span>
        </v-card-text>
        <v-card-actions class="contact-actions">
          <v-btn
            elevation="1"
            icon="mdi-trash-can-outline"
            color="red"
            @click="onContactDelete(1)"
          ></v-btn>

          <v-btn elevation="1" color="primary" icon="mdi-pencil"> </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <h2>Notes</h2>
    <div class="notes">
      <div id="note-container" :class="gridClass">
        <!--  - - - - grid content - - -- - -->

        <v-card v-if="isMobile" color="light-blue lighten-1" :width="contactCardWidth">
          <v-card-title class="justify-center">Note Title</v-card-title>

          <v-card-text class="contact-card-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
              blanditiis neque perferendis deserunt eum magni mollitia necessitatibus
              voluptatibus officiis cumque?
            </p>
          </v-card-text>

          <v-card-actions class="contact-actions">
            <v-btn icon="mdi-trash-can-outline" @click="onNoteDelete(noteId)"></v-btn>

            <v-btn elevation="1" color="primary" icon="mdi-pencil"> </v-btn>
          </v-card-actions>
        </v-card>

        <!-- if it is a grid -->
        <v-card
          v-else
          v-for="c in [1, 2, 3, 4, 5, 6, 7]"
          color="light-blue lighten-1"
          :width="contactCardWidth"
        >
          <v-card-title class="justify-center">Note Title</v-card-title>

          <v-card-text class="contact-card-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
              blanditiis neque perferendis deserunt eum magni mollitia necessitatibus
              voluptatibus officiis cumque?
            </p>
          </v-card-text>

          <v-card-actions class="contact-actions">
            <v-btn
              color="error"
              elevation="1"
              icon="mdi-trash-can-outline"
              @click="onNoteDelete(noteId)"
            ></v-btn>

            <v-btn elevation="1" color="primary" icon="mdi-pencil"> </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1rem;
}
.grid3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem 1rem;
}

#note-container:not(.grid2, .grid3) {
}
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 2rem;
  width: 90vw;
}
.page-content {
  display: flex;
  justify-content: center;
}
.contact-card-text span {
  display: block;
  padding: 4px 0 4px 0;
}
.contact-actions {
  display: flex;
  justify-content: flex-end;
}
.contact-detail {
  display: flex;
  justify-content: center;
  margin: 1rem 0 1rem 0;
}
</style>
