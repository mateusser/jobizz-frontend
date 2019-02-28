<template>
  <v-container fluid grid-list-lg justify-center>
    <v-layout row wrap>
      <v-flex xs12 align-center class="text-xs-center">
        <span class="headline primary--text">
          Veja as empresas que mais combinam com você:
        </span>
      </v-flex>
      <v-flex lg2 hidden-md-and-down></v-flex>
      <v-flex xs2 hidden-sm-and-up></v-flex>
      <v-flex xs8 sm4 lg2>
        <v-card class="primary--text">
          <v-img
            :src="companies[0].logo"
            :aspect-ratio="1"
          ></v-img>

          <v-card-title primary-title>
            <h3 class="headline mb-0"> {{ companies[0].name }} </h3>
            <v-spacer></v-spacer>
            <v-progress-circular
              :rotate="360"
              :size="50"
              :width="5"
              :value="companies[0].match"
              color="primary lighten-1"
            >
              {{ companies[0].match }}
            </v-progress-circular>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex lg1 hidden-md-and-down></v-flex>
      <v-flex xs2 hidden-sm-and-up></v-flex>
      <v-flex xs2 hidden-sm-and-up></v-flex>
      <v-flex xs8 sm4 lg2>
        <v-card class="primary--text">
          <v-img
            :src="companies[1].logo"
            :aspect-ratio="1"
          ></v-img>

          <v-card-title primary-title>
            <h3 class="headline mb-0"> {{ companies[1].name }} </h3>
            <v-spacer></v-spacer>
            <v-progress-circular
              :rotate="360"
              :size="50"
              :width="5"
              :value="companies[1].match"
              color="primary lighten-1"
            >
              {{ companies[1].match }}
            </v-progress-circular>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex lg1 hidden-md-and-down></v-flex>
      <v-flex xs2 hidden-sm-and-up></v-flex>
      <v-flex xs2 hidden-sm-and-up></v-flex>
      <v-flex xs8 sm4 lg2>
        <v-card class="primary--text">
          <v-img
            :src="companies[2].logo"
            :aspect-ratio="1"
          ></v-img>

          <v-card-title primary-title>
            <h3 class="headline mb-0"> {{ companies[2].name }} </h3>
            <v-spacer></v-spacer>
            <v-progress-circular
              :rotate="360"
              :size="50"
              :width="5"
              :value="companies[2].match"
              color="primary lighten-1"
            >
              {{ companies[2].match }}
            </v-progress-circular>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 class="text-xs-center">
        <span class="subheading primary--text">
          Quer se candidatar as vagas abertas?
        </span>
      </v-flex>
      <v-flex xs12 class="text-xs-center">
        <v-btn color="primary" dark @click="pushRoute('/signup')">
          Cadastre-se
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    companies: []
  }),
  methods: {
    pushRoute (path) {
      this.$router.push(path)
    }
  },
  created () {
    this.companies = [
      {
        name: 'Monitora',
        match: 90 + Math.floor(Math.random() * 10),
        logo: 'https://scontent.faqa4-1.fna.fbcdn.net/v/t1.0-9/28168049_1209425969193725_1882268841986197687_n.jpg?_nc_cat=104&_nc_ht=scontent.faqa4-1.fna&oh=1e735b549ae025102c5e53ee54b8fa83&oe=5CED02F5'
      },
      {
        name: 'Amazon',
        match: 80 + Math.floor(Math.random() * 10),
        logo: 'https://www.fineprintart.com/images/blog/amazon-logo/amazon_logo_history_5.jpg'
      },
      {
        name: 'Google',
        match: 70 + Math.floor(Math.random() * 10),
        logo: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'
      }
    ]
  }
}
</script>

<style>

</style>
