<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-items>
        <img src="./assets/logoJ.png" class="logo" width="50px" height="50px "/>
      </v-toolbar-items>
      <v-toolbar-title>
        Jobizz
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-show="logged">
        <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                icon
                v-on="on"
              >
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-tile
                @click="pushRoute('/')"
              >
                <v-list-tile-avatar>
                  <v-icon>home</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>Home</v-list-tile-title>
              </v-list-tile>
              <v-list-tile
                @click="pushRoute('/dashboard')"
              >
                <v-list-tile-avatar>
                  <v-icon>dashboard</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>Dashboard</v-list-tile-title>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile
                @click="logOut()"
              >
                <v-list-tile-avatar>
                  <v-icon>meeting_room</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>Log out</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
      </v-toolbar-items>
      <v-toolbar-items v-show="!logged">
        <v-dialog v-model="dialog" max-width="400px">
        <template v-slot:activator="{ on }">
          <v-btn color="white" dark flat v-on="on">Login</v-btn>
        </template>
        <v-card>
          <v-card-title class="primary">
            <span class="headline white--text">Login</span>
          </v-card-title>
          <v-card-text>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    prepend-icon="person"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="password"
                    label="Senha"
                    type="password"
                    prepend-icon="lock"
                  ></v-text-field>
                </v-flex>
              </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat
              @click="login()"
              :disabled="disableLogin"
            > Login </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-toolbar-items>
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
      dialog: false,
      email: '',
      password: ''
    }
  },
  computed: {
    disableLogin () {
      return this.email === '' || this.password === ''
    },
    logged () {
      return this.$store.getters.isUserLogged
    }
  },
  methods: {
    login () {
      this.dialog = false
      this.$store.commit('logIn')
      this.email = ''
      this.password = ''
      this.pushRoute('/dashboard')
    },
    logOut () {
      this.$store.commit('logOut')
      this.pushRoute('/')
      this.$forceUpdate()
    },
    pushRoute (path) {
      this.$router.push(path)
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
