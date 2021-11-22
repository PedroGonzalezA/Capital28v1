
// State
export const state = () => ({
    infoDessarrollo:null,
    code:null,
    nombreDesarrollo:null,
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
 
  
}

// Getters
export const getters = {
    getDessarrollo(state) {
      return state.infoDessarrollo
    },
    getNuevoDessarrollo(state) {
      return state.nombreDesarrollo
    },
  
}

// Mutaciones
export const mutations = {
    setDessarrollo(state,infoDessarrollo) {
      state.infoDessarrollo = infoDessarrollo
    },
    setNuevoDessarrollo(state,nombreDesarrollo) {
      state.nombreDesarrollo = nombreDesarrollo
    },
    
}