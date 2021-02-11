<template>
  <v-app-bar app>
    <v-row justify="center">
      <v-col justify="center" align="center" class="mt-1">
        <router-link class="plain-link" to="/"
          ><h2>Vue Raven Auth Demo</h2></router-link
        >
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.plain-link {
  text-decoration: none;
  color: white;
}
</style>