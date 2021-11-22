
// State
export const state = () => ({
      courses: [],
      searchWord: '',
      filteredCourses: null,
})

// Actions
export const actions = {
   async FILTERED_COURSES ({ commit }, serchWord) {
        commit('FILTERED_COURSES', serchWord)
    },
    async Array ({ commit }, datos) {
      commit('setArray', datos)
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
    },
 
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
    setArray(state,array){
      state.array=couses
    }
    
}