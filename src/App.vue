<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import firebase from "@/configFirebase.js";
const { messaging } = firebase;
export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),

  mounted() {
    messaging
      .requestPermission()
      .then(() => {
        console.log("Notification permission granted.");

        // Get Token
        messaging.getToken().then(token => {
          console.log(token);
        });
      })
      .catch(err => {
        console.log("Unable to get permission to notify.", err);
      });
  }
};
</script>
