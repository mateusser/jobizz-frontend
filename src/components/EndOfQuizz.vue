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
        <span class="subheading primary--text" v-if="!signup">
          Quer se candidatar as vagas abertas?
        </span>
      </v-flex>
      <v-flex xs12 class="text-xs-center" v-if="!signup">
        <v-btn color="primary" dark @click="signup = true">
          Cadastre-se
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout transition="slide-y-transition" wrap v-if="signup">
      <v-flex xs8 offset-xs2>
        <v-text-field
          :rules="[rules.required]"
          name="input-10-2"
          label="Nome Completo"
          class="input-group--focused"
          v-model="user.name"
        ></v-text-field>
      </v-flex>
      <v-flex xs8 offset-xs2>
        <v-text-field
          :rules="[rules.required]"
          name="input-10-2"
          label="E-mail"
          class="input-group--focused"
          v-model="user.email"
        ></v-text-field>
      </v-flex>
      <v-flex xs8 offset-xs2>
        <v-text-field
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-2"
          label="Senha"
          hint="No mínimo 8 caracteres"
          class="input-group--focused"
          @click:append="show = !show"
          v-model="user.password"
        ></v-text-field>
      </v-flex>
      <v-flex xs4 offset-xs4>
        <v-btn
          color="primary" block
          @click="signUp()"
          :disabled="disableSignUp"
        > Cadastrar </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    companies: [],
    rules: {
      required: value => !!value || 'Obrigatório',
      min: v => (v && v.length >= 8) || 'Min 8 caracteres'
    },
    show: false,
    signup: false,
    user: {
      name: '',
      email: '',
      password: ''
    }
  }),
  computed: {
    disableSignUp () {
      return this.user.name === '' ||
        this.user.email === '' ||
        this.user.password.length < 8
    }
  },
  methods: {
    pushRoute (path) {
      this.$router.push(path)
    },
    signUp () {
      this.$store.commit('registerUser', this.user)
      this.pushRoute('/dashboard')
    }
  },
  created () {
    this.companies = this.$store.getters.getCompanies
  }
}
</script>

<style>

</style>
