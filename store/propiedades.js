
// State
export const state = () => ({
    infoPropiedades:[],
    searchWord: '',
    filteredCourses: null,
    estado:true
})

// Actions
export const actions = {
    
  async datosPropiedades({commit}){
    let datosToken = localStorage.getItem('token');
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/property/list');
    commit('setPropiedades',data.Data.Property);
  },
  async FILTERED_COURSES ({ commit }, serchWord) {
    commit('FILTERED_COURSES', serchWord)
  },
  
  
}

// Getters
export const getters = {
    getPropiedades(state) {
      return state.infoPropiedades
    },
    allCourses (state)  {
      return  state.infoPropiedades
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
  
    setPropiedades(state,infoPropiedades) {
      state.infoPropiedades = infoPropiedades
    },
    setEstado(state) {
      state.estado = !state.estado
    },
    FILTERED_COURSES (state, word) {
      if (!(word) || word === '{}') {
          state.searchWord = null
          state.filteredCourses = null
      } else {
        state.searchWord = word
        word = word.trim().toLowerCase()
        state.filteredCourses = state.infoPropiedades.filter((course) => {
          return course.desarrollo.name.toLowerCase().includes(word)
        })
      }
    },
    
}