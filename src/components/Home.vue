<template>
  <v-container>
    <v-row class="mt-5 text-center">
      <v-col class="mb-4">
        <template v-if="authed">
          <h1 class="display-2 font-weight-bold mb-3">
            Hello, {{ displayName }}.
          </h1>

          <h2 class="subheading font-weight-regular mb-5">
            Your email address is {{ this.email }}.
          </h2>
          <p class="mt-5">
            You last logged in here on {{ this.lastLoginTime }}.
          </p>
          <p class="mb-3">
            You were first seen here on {{ this.creationTime }}.
          </p>
        </template>
        <v-btn v-if="authed" @click="logout" class="my-5" color="primary"
          >Log Out</v-btn
        >
        <v-btn v-else @click="authenticate" class="my-5" color="primary"
          >Log In With Raven</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Home",

  data() {
    return {
      authed: false,
      displayName: null,
      email: null,
      lastLoginTime: null,
      creationTime: null,
    };
  },

  mounted() {
    this.authProvider = new firebase.auth.GoogleAuthProvider();
    this.authProvider.setCustomParameters({
      hd: "cam.ac.uk",
    });
  },

  methods: {
    authenticate() {
      firebase
        .auth()
        .signInWithPopup(this.authProvider)
        .then((result) => {
          this.authed = true;
          this.displayName = result.user.displayName;
          this.email = result.user.email;
          this.lastLoginTime = result.user.metadata.lastSignInTime;
          this.creationTime = result.user.metadata.creationTime;
        });
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.authed = false;
          this.displayName = null;
          this.email = null;
        });
    },
  },
};
</script>

<style scoped>
</style>