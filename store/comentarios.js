
// State
export const state = () => ({
    comentarios:[],
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
    commit('setError',data.Code);
  },
}

// Getters
export const getters = {
    getComentarios(state) {
      return state.comentarios
    },
    getErrores(state) {
        return state.errores
      },
}

// Mutaciones
export const mutations = {
  
    setComentarios(state,comentarios) {
      state.comentarios = comentarios
    },
    setError(state,errores) {
        state.errores = errores
    },
}