
// State
export const state = () => ({
   asesores:null,
   desarrollos:[],
   agregarDato:null,
   nombreDesarrollo:[],
   searchWord: '',
   filteredCourses: null,
   eliminarAsesores:null,
   restaurarAsesores:null,
   cambiarEstado:null,
   v:true,
   f:false
})

// Actions
export const actions = {
    
  async datosAsesores({commit}){
    let datosToken = localStorage.getItem('token');      
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/Contacts/List');
    commit('setAsesores',data.Data.ContactsList);
  },
  async eliminarAsesores({commit},){
    let datosToken = localStorage.getItem('token');  
    let role = localStorage.getItem('user_role');  
    let id = localStorage.getItem('idD'); 
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/contactAdmins/updateContactAdminsById',{
      "role":role,"status":0,"table":"broker","_id":id
    });
    localStorage.removeItem('idD');  
    commit('setEliminarAsesores',data);
  },
  async restaurarAsesores({commit},){
    let datosToken = localStorage.getItem('token');  
    let role = localStorage.getItem('user_role');  
    let id = localStorage.getItem('idD'); 
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/contactAdmins/updateContactAdminsById',{
      "role":role,"status":1,"table":"broker","_id":id
    });
    localStorage.removeItem('idD');  
    commit('setRestaurarAsesor',data);
  },
  async datosDessarrollos({commit}){
    let datosToken = localStorage.getItem('token');    
    let role = localStorage.getItem('role');      
    let contactId = localStorage.getItem('contact_id');    
    let userId = localStorage.getItem('user_id');        
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/user/RealEstateDevelopmentsAssigned',{
      "contactId":contactId,"role":role,"userId":userId
    });
    commit('setDesarrollos',data.Data.RealEstateDevelopment);
  },
  async agregarDatos({commit},{dato}){
    commit('setAgregarDato',dato);
  },
  async FILTERED_COURSES ({ commit }, serchWord) {
    commit('FILTERED_COURSES', serchWord)
  },
  async nombreDesarrollo ({ commit }) {
    let id = localStorage.getItem('idD'); 
    commit('setNombreD', id)
  },
  async cambiarEstado ({ commit },{status}) {
    commit('setCambiarE', status)
  },
  async cambiarEstadoF ({ commit }) {
    let datosToken = localStorage.getItem('token');    
    let id = localStorage.getItem('idD'); 
    let rol = localStorage.getItem('rolU'); 
    let estado = localStorage.getItem('estado');
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/contactAdmins/updateContactAdminsById',{
      "role":rol,"status":estado,"table":"broker","_id":id
    });
    localStorage.removeItem('idD'); 
    localStorage.removeItem('rolU'); 
    commit('setCambiarE', estado)
  },
  async cambiarEstadoFF ({ commit }) {
    let datosToken = localStorage.getItem('token');    
    let id = localStorage.getItem('idD'); 
    let rol = localStorage.getItem('rolU'); 
    let estado = localStorage.getItem('estado');
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/contactAdmins/updateContactAdminsById',{
      "role":rol,"status":estado,"table":"broker","_id":id
    });
    localStorage.removeItem('idD'); 
    localStorage.removeItem('rolU'); 
    commit('setCambiarE', estado)
  },
}

// Getters
export const getters = {
    getAsesores(state) {
      return state.asesores
    },
    getDesarrollos(state) {
      return state.desarrollos
    },
    getAgregarDato(state) {
      return state.agregarDato
    },
    getSearchWord (state)  {
      return state.searchWord
    },
    allCourses (state)  {
      return  state.asesores
    },
    getFilteredCourse (state) {
        return state.filteredCourses
    },
    getNombreD (state) {
      return state.nombreDesarrollo
    },
    getEstado (state) {
      return state.cambiarEstado
    },
}

// Mutaciones
export const mutations = {
    setAsesores(state,asesores) {
      state.asesores= asesores
    },
    setDesarrollos(state,desarrollos) {
      state.desarrollos= desarrollos
    },
    setAgregarDato(state,agregarDato) {
      state.agregarDato= agregarDato
    },
    setNombreD(state,nombreDesarrollo) {     
        
       const de=  state.desarrollos.filter((course) => {
          return course._id.toLowerCase().includes(nombreDesarrollo)
        })
        state.nombreDesarrollo.push(nombreDesarrollo) 

    },
    setEliminarAsesor(state,eliminarAsesores) {
      state.eliminarAsesores=eliminarAsesores
    },
    setRestaurarAsesor(state,restaurarAsesores) {
      state.restaurarAsesores=restaurarAsesores
    },
    setCambiarE(state,cambiarEstado) {
      state.cambiarEstado=cambiarEstado
    },
    FILTERED_COURSES (state, word) {
      if (!(word) || word === '{}') {
          state.searchWord = null
          state.filteredCourses = null
      } else {
        state.searchWord = word
        word = word.trim().toLowerCase()
        state.filteredCourses = state.asesores.filter((course) => {
          return course.name.toLowerCase().includes(word)
        })
      }
    },
}