
// State
export const state = () => ({
    comentarios:[],
    comentariosM:[],
    comentariosI:[],
    errores:[],
})

// Actions
export const actions = {
  async datosComentarios({commit}){
    let datosToken = localStorage.getItem('token');
    let accessGroup = localStorage.getItem('ag');
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/manifest/getLastCommentsLeads',{
        "access_group":accessGroup,"limit":10
    });
    commit('setComentarios',data.Data);
    commit('setComentariosM',data.Data.Manifest);
    commit('setComentariosI',data.Data.Manifest);
    commit('setError',data.Code);
  },
}

// Getters
export const getters = {
    getComentarios(state) {
      return state.comentarios
    },
    getComentariosM(state) {
      return state.comentariosM
    },
    getComentariosI(state) {
      return state.comentariosI
    },
    getErrores(state) {
        return state.errores
    },
}

// Mutaciones
export const mutations = {
  
    setComentariosM(state,comentariosM) {
      state.comentariosM = comentariosM
    },
    setComentarios(state,comentarios) {
      state.comentarios = comentarios
    },
    setComentariosI(state,comentariosI) {
      state.comentariosI = comentariosI
    },
    setError(state,errores) {
        state.errores = errores
    },
}