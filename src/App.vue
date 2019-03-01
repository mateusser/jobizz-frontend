<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-items>
        <img src="./assets/logoJ.png" class="logo" width="50px" height="50px "/>
      </v-toolbar-items>
      <v-toolbar-title>
        Jobizz
      </v-toolbar-title>
    </v-toolbar>
    <router-view transition="slide-y-transition"></router-view>
    <v-footer class="blue darken-1">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Feito com
            <v-icon class="red--text">favorite</v-icon>
            por <a class="white--text" href="https://github.com/alvpmagalhaes">Álvaro</a>,
            <a class="white--text" href="https://github.com/amanda-marinho">Amanda</a> e
            <a class="white--text" href="https://github.com/mateusser">Mateus</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.logo {
  margin-top: 7px;
  border-radius: 30px;
  background-color: #ffffff;
}
</style>
