<template>
  <v-dialog v-model="showDialog" @click.outside="hideDialog" max-width="600">
    <v-btn @click="hideDialog">save</v-btn>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showDialog : Boolean ,
    hideDialog: Function,
  },
};
</script>