import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: [
      {
        id: 1,
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
          }
        ]
      },
      {
        id: 2,
        name: 'Amazon',
        match: 80 + Math.floor(Math.random() * 10),
        logo: 'https://www.fineprintart.com/images/blog/amazon-logo/amazon_logo_history_5.jpg',
        description: 'We\'re a company of pioneers. It\'s our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.',
        jobs: [
          {
            title: 'Front End Engineer',
            skills: 'Bachelor’s degree or higher in Computer Science, Engineering or related field; 2+ years professional software engineering experience'
          }
        ]
      },
      {
        id: 3,
        name: 'Google',
        match: 70 + Math.floor(Math.random() * 10),
        logo: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png',
        description: 'Our mission is to organize the world’s information and make it universally accessible and useful.',
        jobs: [
          {
            title: 'Software Engineer',
            skills: 'BS degree in Computer Science, similar technical field of study or equivalent practical experience; 1 year of experience in Software Engineering and coding, working with two or more of the following languages: Java, C/C++, C#, Objective-C, Python, JavaScript, PHP, Ruby and/or Go; Experience working with two or more from the following: web application development, Unix/Linux environments, mobile application development, distributed and parallel systems, machine learning, information retrieval, natural language processing, networking, developing large software systems, and/or security software development; Ability to speak and write in English fluently and idiomatically.'
          },
          {
            title: 'Software Engineer, University Graduate',
            skills: 'BA/BS degree in Computer Science or related technical field, or equivalent practical experience; Experience in writing code fixes and tools to solve problems in C, C++, C#, Java, JavaScript, Go or Python (e.g., removing duplicate elements from a list) and experience in optimizing code for stability, functionality and scalability (e.g., crawling, search, troubleshooting); Experience with data structures, branching, function-calls, and conditionals as well as debugging code and submitting the appropriate fix; Experience or previous project assignments with Data Structures and Algorithms (i.e. selecting and implementing an algorithm, using data structures to solve a problem.); Ability to speak and write in English fluently and idiomatically.'
          }
        ]
      }
    ],
    isUserLogged: false,
    user: {}
  },
  mutations: {
    registerUser (state, user) {
      state.user = Object.assign({ ...user })
      state.isUserLogged = true
    }
  },
  actions: {
    registerUser ({ commit }, user) {
      commit('registerUser', user)
    }
  },
  getters: {
    getCompanies: state => state.companies,
    getCompaniesById: state => id => state.companies.find(c => c.id === id),
    getUser: state => state.user,
    isUserLogged: state => state.isUserLogged
  }
})
