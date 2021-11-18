
// State
export const state = () => ({
    sesion:null,
    email:null,
    password:null,
    token:null,
   
})

// Actions
export const actions = {
    async inicioSesion({ commit },{email,password}) {
      // Obtener los posts
      let { data } = await this.$axios.post('/user/login',{
        "email":email,"password":password
      });

      
      switch (data.Code) {
        case 200:
            console.log(data.Message);
              localStorage.setItem('token',data.Data.Token);
              localStorage.setItem('user_role',data.Data.Role);
              this.$router.push("/admin/lead")
           
          
          break;
        case 500:
          console.log(data.Message);
          break;
        default:
          console.log(data.Message);
      }
      
      console.log(data);
      // Realizar un commit
      commit('setSesion', data);
  },

  async cerrarSesion({commit}){
    let sesion = true
    localStorage.removeItem('token');
    localStorage.removeItem('contact_id');
    localStorage.removeItem('ag');
    localStorage.removeItem('user_role');
    localStorage.removeItem('real_estate_group_logo');
    localStorage.removeItem('user_image');
    this.$router.push("/login")
    console.log("Sesion cerrada")
    commit('setCerrarSesion', sesion)
  
  },
  async tokenP({ commit }){
      let datosToken = localStorage.getItem('token');      
      this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
      let { data } = await this.$axios.post('/user/getUserById');
      localStorage.setItem('ag',data.Data.contact.real_estate_group_id);
      localStorage.setItem('contact_id',data.Data.User.contact_id);
      localStorage.setItem('contact_id',data.Data.User.contact_id);
      localStorage.setItem('user_image',data.Data.contact.media.featured_image.src);
      localStorage.setItem('real_estate_group_logo',data.Data.User.real_estate_group.media);

      console.log(data);
      commit('SET_TOKEN',data.Data);
  },
  
}

// Getters
export const getters = {
    getSesion(state) {
      return state.sesion
    },
    getToken(state) {
      return state.token
    },
    
}

// Mutaciones
export const mutations = {
    setEmail(state,email) {
      state.email = email
    },
    setPassword(state, password) {
      state.posts = posts
    },
    setSesion(state, sesion) {
      state.sesion = sesion
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    setCerrarSesion(state){
      state.sesion = null
      state.token=null
    },
    
    
}