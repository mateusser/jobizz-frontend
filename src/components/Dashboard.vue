<template>
  <v-container grid-list-xl>
    <v-layout row wrap align-content-center>
      <v-flex xs12 class="text-xs-center">
        <span class="display-1"> Empresas que mais combinam com você </span>
      </v-flex>

      <v-flex sm1 hidden-md-and-up hidden-xs-and-down></v-flex>
      <v-flex md2 hidden-lg-and-up hidden-sm-and-down></v-flex>
      <v-flex lg3 hidden-xl-and-up hidden-md-and-down></v-flex>
      <v-flex xl4 hidden-lg-and-down></v-flex>

      <v-flex xs12 sm10 md8 lg6 xl4>
        <v-list>
          <v-list-tile @click="pushRoute(`company/${companies[0].id}`)">
            <v-list-tile-avatar>
              <v-avatar><img :src="companies[0].logo" /></v-avatar>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ companies[0].name }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-progress-circular
                :rotate="360"
                :width="2"
                :value="companies[0].match"
                color="primary lighten-1"
                class="match"
              >
                {{ companies[0].match }}
              </v-progress-circular>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider></v-divider>
          <v-list-tile @click="pushRoute(`company/${companies[1].id}`)">
            <v-list-tile-avatar>
              <v-avatar><img :src="companies[1].logo" /></v-avatar>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ companies[1].name }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-progress-circular
                :rotate="360"
                :width="2"
                :value="companies[1].match"
                color="primary lighten-1"
                class="match"
              >
                {{ companies[1].match }}
              </v-progress-circular>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider></v-divider>
          <v-list-tile @click="pushRoute(`company/${companies[2].id}`)">
            <v-list-tile-avatar>
              <v-avatar><img :src="companies[2].logo" /></v-avatar>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ companies[2].name }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-progress-circular
                :rotate="360"
                :width="2"
                :value="companies[2].match"
                color="primary lighten-1"
                class="match"
              >
                {{ companies[2].match }}
              </v-progress-circular>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider></v-divider>
        </v-list>
      </v-flex>

      <v-flex xs12 class="text-xs-center">
        <span class="headline">
          Responda a mais quizzes, aperfeiçoe os resultados
        </span>
      </v-flex>

      <v-flex sm1 hidden-md-and-up hidden-xs></v-flex>
      <v-flex md2 hidden-lg-and-up hidden-sm-and-down></v-flex>
      <v-flex lg3 hidden-xl hidden-md-and-down></v-flex>
      <v-flex xl4 hidden-xl hidden-lg-and-down></v-flex>

      <v-flex xs12 sm10 md8 lg6 xl4>
        <v-list>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>question_answer</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ quizzes[0].title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-chip color="red" text-color="white">
                Em breve
              </v-chip>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider></v-divider>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>question_answer</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ quizzes[1].title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-chip color="red" text-color="white">
                Em breve
              </v-chip>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider></v-divider>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    quizzes: [
      {
        title: 'Quizz - Comportamento'
      },
      {
        title: 'Quizz - Habilidades'
      }
    ]
  }),
  computed: {
    companies () {
      return this.$store.getters.getCompanies
    }
  },
  methods: {
    pushRoute (path) {
      this.$router.push(path)
    }
  },
  created () {
  }
}
</script>

<style>
.company-card {
  display: grid;
  grid-template: 1fr / 1fr 2fr 1fr;
  grid-column-gap: 10px;
  align-items: center;
  border: 1px solid black;
  margin: 1px;
}
</style>
