
// State
export const state = () => ({
    courses: [{
        "name": "Administração",
        "slug": "administracao",
        "type": "bacharel",
        "time": 8,
        "priceFull": "387,00",
        "priceOff": "205,00",
        "id":"1"
      },
      {
        "name": "Ciências Contabéis",
        "slug": "ciencias-contabeis",
        "type": "bacharel",
        "time": 8,
        "priceFull": "387,00",
        "priceOff": "205,00",
        "id":"2"

      },
      {
        "name": "Ciências Econômicas",
        "slug": "ciencias-economicas",
        "type": "bacharel",
        "time": 8,
        "priceFull": "387,00",
        "priceOff": "205,00",
        "id":"3"

      },
      {
        "name": "Engenharia Ambiental",
        "slug": "engenharia-ambiental",
        "type": "bacharel",
        "time": 10,
        "priceFull": "554,00",
        "priceOff": "293,00",
        "id":"4"
      }],
      searchWord: '',
      filteredCourses: null,
})

// Actions
export const actions = {
   async FILTERED_COURSES ({ commit }, serchWord) {
        console.log('MY WORD', serchWord)
        commit('FILTERED_COURSES', serchWord)
    }
}

// Getters
export const getters = {
    allCourses (state)  {
      return  state.courses
    },
    getSearchWord (state)  {
       return state.searchWord
    },
    getFilteredCourse (state) {
       return state.filteredCourses
    }
}

// Mutaciones
export const mutations = {
    FILTERED_COURSES (state, word) {
        console.log('FILTERED_COURSE :', word)
        if (!(word) || word === '{}') {
            state.searchWord = null
            state.filteredCourses = null
        } else {
          state.searchWord = word
          word = word.trim().toLowerCase()
          state.filteredCourses = state.courses.filter((course) => {
            return course.name.toLowerCase().includes(word)
          })
        }
    },
    
}