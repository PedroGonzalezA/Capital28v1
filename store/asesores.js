
// State
export const state = () => ({
    asesores:null,
   desarrollos:[],
   agregarDato:null,
})

// Actions
export const actions = {
    
  async datosAsesores({commit}){
    let datosToken = localStorage.getItem('token');      
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/Contacts/List');
    commit('setAsesores',data.Data.ContactsList);
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
  }
  
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
    
}