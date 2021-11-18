
// State
export const state = () => ({
  datosHeaderUser:[],
  datosHeaderContact:[],
  datosHeaderContactRealEstateGroup:null,
})

// Actions
export const actions = {
  async datosHeaderUser({ commit }){
    let datosToken = localStorage.getItem('token');      
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/user/getUserById');
    commit('setDatosHeaderUser',data.Data.User);
    commit('setDatosHeaderContact',data.Data.contact);
    commit('setDatosHeaderContactRealEstateGroup',data.Data.User);
  },
}

// Getters
export const getters = {
  getDatosHeaderUser(state) {
    return state.datosHeaderUser
  },
  getDatosHeaderContact(state) {
    return state.datosHeaderContact
  },
  getDatosHeaderContactRealEstateGroup(state) {
    return state.datosHeaderContactRealEstateGroup
  }   
}

// Mutaciones
export const mutations = {
    setDatosHeaderUser(state,datosHeaderUser){
      return state.datosHeaderUser = datosHeaderUser
    },
    setDatosHeaderContact(state,datosHeaderContact){
      return state.datosHeaderContact= datosHeaderContact
    },
    setDatosHeaderContactRealEstateGroup(state,datosHeaderContactRealEstateGroup){
      return state.datosHeaderContactRealEstateGroup= datosHeaderContactRealEstateGroup
    },
}