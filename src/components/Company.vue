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
  data: () => ({
    company: {}
  }),
  methods: {
    toHtml (str) {
      return str.replace(/\;/g, ',<br />')
    }
  },
  created () {
    this.company = {
      name: 'Monitora',
      match: 90 + Math.floor(Math.random() * 10),
      logo: 'https://scontent.faqa4-1.fna.fbcdn.net/v/t1.0-9/28168049_1209425969193725_1882268841986197687_n.jpg?_nc_cat=104&_nc_ht=scontent.faqa4-1.fna&oh=1e735b549ae025102c5e53ee54b8fa83&oe=5CED02F5',
      description: 'Somos apaixonados por desenvolvimento de software, e dessa maneira, valorizamos profissionais eficazes para implementar soluções digitais inovadoras e personalizadas, de forma participativa. Agilidade e inovação estão no nosso DNA. Não temos medo de mudanças. Acreditamos no potencial de crescimento do nosso time e investimos nisso. Proporcionamos aos nossos colaboradores a possibilidade de se desenvolverem cada vez mais na empresa, para que nunca deixem de evoluir na vida profissional e pessoal',
      jobs: [
        {
          title: 'Full Stack Developer',
          skills: 'Bachelor\'s degree in Computer Sciences, Computer Engineering, System Analysis or any other similar degree; Availability to work 40 hours weekly in our office in Sao Carlos;At least 1 year of experience in software development through Java or JavaScript (internship and/or research grants recipients also count as experience); Proficiency in English; Willingness to learn and grow with us.'
        },
        {
          title: 'Quality Assurance Analist/QA',
          skills: 'Is very willing to learn and apply your knowledge in a challenging and international entrepreneurial environment; Likes to ensure the quality of a software product; Appreciates ensuring great user experiences and effective problem solving approaches; And who is not scared by a constantly mutating environments; Or who is a quick learner, embracing team player willing to be part of something grand.'
        },
        {
          title: 'Estágio',
          skills: 'Possuir vínculo formal com uma Instituição de Ensino Superior; Disponibilidade de pelo menos 30 horas semanais para estágio; Inglês a partir do intermediário; Muita vontade de aprender e crescer com a gente.'
        }]
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
