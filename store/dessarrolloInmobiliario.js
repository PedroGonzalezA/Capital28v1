
// State
export const state = () => ({
    infoDessarrollo:null,
    code:null,
    nombreDesarrollo:null,
    searchWord: '',
    filteredCourses: null,
    reveal:true
})

// Actions
export const actions = {
    
  async datosDessarrollo({commit}){
    let datosToken = localStorage.getItem('token');
    let access_group = localStorage.getItem('ag');            
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;
    let { data } = await this.$axios.post('/RealEstateDevelopment/List',{
      "access_group":access_group
    });
    commit('setDessarrollo',data.Data.RealEstateDevelopment);
  },
  async crearDesarrollo({commit},{code,nombreDesarrollo}){
    let datosToken = localStorage.getItem('token');
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/realEstateDevelopment/create',{
        "code":code,"name":nombreDesarrollo,"status":"1"
    });
    commit('setNuevoDessarrollo',data);
  },
  async FILTERED_COURSES ({ commit }, serchWord) {
    commit('FILTERED_COURSES', serchWord)
  }
 
  
}

// Getters
export const getters = {
    getDessarrollo(state) {
      return state.infoDessarrollo
    },
    getNuevoDessarrollo(state) {
      return state.nombreDesarrollo
    },
    
    getSearchWord (state)  {
       return state.searchWord
    },
    allCourses (state)  {
      return  state.infoDessarrollo
    },
    getFilteredCourse (state) {
       return state.filteredCourses
    }
  
}

// Mutaciones
export const mutations = {
    setDessarrollo(state,infoDessarrollo) {
      state.infoDessarrollo = infoDessarrollo
    },
    setNuevoDessarrollo(state,nombreDesarrollo) {
      state.nombreDesarrollo = nombreDesarrollo
    },
    FILTERED_COURSES (state, word) {
      if (!(word) || word === '{}') {
          state.searchWord = null
          state.filteredCourses = null
      } else {
        state.searchWord = word
        word = word.trim().toLowerCase()
        state.filteredCourses = state.infoDessarrollo.filter((course) => {
          return course.name.toLowerCase().includes(word)
        })
      }
    },
    
}