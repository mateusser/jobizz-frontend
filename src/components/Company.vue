<template>
  <v-container grid-list-md>
    <v-layout row wrap align-content-center>
      <v-flex xs12 class="company-info">
        <div />
        <v-img
          class="company-logo"
          :src="company.logo"
          max-width="100"
        ></v-img>
        <h3 class="display-1 mb-0 name"> {{ company.name }} </h3>
        <v-progress-circular
          :rotate="360"
          :size="50"
          :width="5"
          :value="company.match"
          color="primary lighten-1"
          class="match"
        >
          {{ company.match }}
        </v-progress-circular>
      </v-flex>
      <v-flex xs10 offset-xs1>
        <span class="body-2">Sobre nós: </span>
        <span>{{ company.description }}</span>
      </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex xs12>
        <h3 class="headline text-xs-center"> Vagas abertas </h3>
      </v-flex>
      
      <v-flex xs10 offset-xs1>
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="(job, idx) in company.jobs"
            :key="idx"
          >
            <template v-slot:header>
              <div class="title"> {{ job.title }} </div>
            </template>
            <v-card>
              <v-card-text class="body-2"
              > Requisitos </v-card-text>
              <v-card-text
                v-html="job.skills.replace(/\;/g, ';<br />')"
              ></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" darken>Quero essa vaga</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    id: String
  },
  data: () => ({
  }),
  computed: {
    company () {
      return this.$store.getters.getCompanyById(Number(this.id))
    }
  },
  methods: {
    toHtml (str) {
      return str.replace(/\;/g, ',<br />')
    }
  }
}
</script>

<style>
.company-info {
  display: grid;
  grid-template: 1fr / 1fr 1fr 8fr 1fr 1fr;
  grid-column-gap: 15px;
  align-items: center;
}
</style>
