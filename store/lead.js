
// State
export const state = () => ({
    lead:null,
   
})

// Actions
export const actions = {
    
  async datosLead({commit}){
    let datosToken = localStorage.getItem('token');      
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/lead/getLead');
    commit('setLead',data.Data.Lead);
  }
  
}

// Getters
export const getters = {
    getLead(state) {
      return state.lead
    },
    
}

// Mutaciones
export const mutations = {
    setLead(state,lead) {
      state.lead = lead
    },
    
    
    
}