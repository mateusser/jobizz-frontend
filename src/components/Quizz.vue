<template>
  <v-container justify-center align-content-center grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm10 md8 lg6 xl4 offset-sm1 offset-md2 offset-lg3 offset-xl4>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step
              v-for="(q, idx) in questions"
              :key="idx"
              :complete="step > (idx + 1)"
              :step="idx + 1"
            ></v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content
              v-for="(q, idxQ) in questions"
              :key="idxQ"
              :step="idxQ + 1"
            >
              <v-card>
                <v-card-title>
                  <h3 class="headline mb-0">
                    {{ q.question.text }}
                  </h3>
                </v-card-title>
                <v-card-text>
                  <v-layout wrap>
                    <v-flex xs12 md6
                      v-for="(a, idxA) in q.options"
                      :key="idxA"
                    >
                      <v-hover>
                        <v-card
                          slot-scope="{ hover }"
                          class="mx-auto"
                          :class="`elevation-${hover ? 12 : 2}`"
                          :color="`${getColor(answers[idxQ], a.value)}`"
                          @click="selectAnwer(idxQ, a.value)"
                        >
                          <v-card-text>
                            {{ a.text }}
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-card-actions>
                  <v-btn v-show="idxQ > 0" flat @click="step--">Voltar</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    @click="step++"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    questions: [],
    answers: [],
    step: 1
  }),
  watch: {
    step (newVal) {
      if (newVal > this.questions.length) this.$router.push('/endquizz')
    }
  },
  methods: {
    getColor (answer, value) {
      return answer === value ? 'grey lighten-1' : 'white'
    },
    selectAnwer (idx, value) {
      this.answers[idx] = value
      this.$forceUpdate()
    },
    shuffle (array) {
      // Fisher–Yates Shuffle [https://bost.ocks.org/mike/shuffle/]
      let m = array.length
      let t
      let i

      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--)

        // And swap it with the current element.
        t = array[m]
        array[m] = array[i]
        array[i] = t
      }

      return array
    }
  },
  created () {
    const questions = [
      {
        question: {
          text: 'pergunta 1?',
          value: 1
        },
        options: [
          {
            text: 'resposta 1',
            value: 1
          },
          {
            text: 'resposta 2',
            value: 2
          },
          {
            text: 'resposta 3',
            value: 3
          },
          {
            text: 'resposta 4',
            value: 4
          }]
      },
      {
        question: {
          text: 'pergunta 2?',
          value: 2
        },
        options: [
          {
            text: 'resposta 1',
            value: 1
          },
          {
            text: 'resposta 2',
            value: 2
          },
          {
            text: 'resposta 3',
            value: 3
          },
          {
            text: 'resposta 4',
            value: 4
          }]
      },
      {
        question: {
          text: 'pergunta 3?',
          value: 3
        },
        options: [
          {
            text: 'resposta 1',
            value: 1
          },
          {
            text: 'resposta 2',
            value: 2
          },
          {
            text: 'resposta 3',
            value: 3
          },
          {
            text: 'resposta 4',
            value: 4
          }]
      },
      {
        question: {
          text: 'pergunta 4?',
          value: 4
        },
        options: [
          {
            text: 'resposta 1',
            value: 1
          },
          {
            text: 'resposta 2',
            value: 2
          },
          {
            text: 'resposta 3',
            value: 3
          },
          {
            text: 'resposta 4',
            value: 4
          }]
      },
      {
        question: {
          text: 'pergunta 5?',
          value: 5
        },
        options: [
          {
            text: 'resposta 1',
            value: 1
          },
          {
            text: 'resposta 2',
            value: 2
          },
          {
            text: 'resposta 3',
            value: 3
          },
          {
            text: 'resposta 4',
            value: 4
          }]
      }
    ]

    this.questions = this.shuffle(questions.map(q => ({
      ...q,
      options: this.shuffle(q.options)
    })))
    this.answers = Array(this.questions.length)
  }
}
</script>

<style>

</style>
