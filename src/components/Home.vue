<template>
  <div >
    <v-content>
      <section>
        <v-parallax :src="getImage('blue-sky.jpg')" height="700">
          <v-layout column align-center justify-center class="white--text">
            <img src="../assets/logoJ.png" class="logo" height="200">
            <p />
            <h1 class="mb-2 display-1 text-xs-center blue-background">
              Em busca do emprego ideal?
            </h1>
            <div class="subheading mb-3 text-xs-center blue-background">
              Faça o quiz e encontre
            </div>
            <v-btn class="mt-5" large dark outline @click="pushRoute('quizz')">
              Iniciar o Quizz
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">
                A melhor forma de encontrar a empresa certa
              </h2>
              <span class="subheading">

              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Feito para você</div>
                    </v-card-title>
                    <v-card-text>
                    <justify>
                      O Jobizz é uma plataforma que conecta você com as empresas ideais para o seu perfil, com uma vasta
                      quantidade de vagas para a sua área.
                      </justify>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Testes rápidos</div>
                    </v-card-title>
                    <v-card-text>
                      Com alguns testes descubra qual a melhor vaga para você. Sejam eles de interesse, de área ou de uma
                      vaga específica.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Configurável</div>
                    </v-card-title>
                    <v-card-text>
                      As empresas poderão configurar testes para encontrar colaboradores que mais se ajustam com seus
                      interesses.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="getImage('blue-sky.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center blue-background">
              Encontrar o emprego ideal nunca foi tão fácil
            </div>
            <em class="white--text blue-background">Faça o quizz agora</em>
            <v-btn
              class="mt-5"
              dark
              large
              outline
               @click="pushRoute('quizz')"
            >
              Iniciar o Quizz
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Sobre nós </div>
                </v-card-title>
                <v-card-text>
                  Somos uma plataforma facilitadora e provedora de conexão entre empresas e colaboradores. Nossa idéia surgiu
                  no Monitora Summer 2019.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contato</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>(16) 3333-3333</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>São Carlos, SP</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>contato@jobizz.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  methods: {
    getImage (path) {
      return require(`../assets/${path}`)
    },
    pushRoute (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
.blue-background {
  background-color: #64b5f6;
  padding: 3px;
}

.logo {
  border-radius: 100px;
  background-color: #ffffff;
}
</style>
