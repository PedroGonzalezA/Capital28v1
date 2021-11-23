
// State
export const state = () => ({
    infoPropiedades:[],
    searchWord: '',
    filteredCourses: null,
    estado:true,
    estados:{
      disponible:"disponible",
      vendido:"vendido",
      reservado:"reservado"
    }
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
  async ESTADO ({ commit }, estado) {
    commit('setEstado', estado)
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
    getEstado (state) {
      return state.estado
   },
   
}

// Mutaciones
export const mutations = {
  
    setPropiedades(state,infoPropiedades) {
      state.infoPropiedades = infoPropiedades
    },
    setEstado(state) {
        let estadoF
        state.estado = !state.estado
        if(state.estado==true){
          estadoF= state.infoPropiedades.filter(est=>est.contract_status===state.estados.disponible);
          console.log(estadoF);
        }else
        {
          estadoF= state.infoPropiedades.filter(est=>est.contract_status===state.estados.vendido);
          console.log(estadoF);
        }
    },
    FILTERED_COURSES (state, word) {
      if (!(word) || word === '{}') {
          state.searchWord = null
          state.filteredCourses = null
      } else {
        let estadoF
        estadoF =state.estado 
        state.searchWord = word
        word = word.trim().toLowerCase()
        if(state.searchWord.length>1){
          if(estadoF==true){
            estadoF= state.infoPropiedades.filter(est=>est.contract_status===state.estados.disponible);
            state.filteredCourses = estadoF.filter((course) => {
              return course.desarrollo.name.toLowerCase().includes(word)
            })
          }else
          {
            estadoF= state.infoPropiedades.filter(est=>est.contract_status===state.estados.vendido || est.contract_status===state.estados.disponible ||est.contract_status===state.estados.reservado);
            state.filteredCourses = estadoF.filter((course) => {
              return course.desarrollo.name.toLowerCase().includes(word)
            })
          }
        }
      }
    },
    
}