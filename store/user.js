// State
export const state = () => ({
    sesion:null,
    email:null,
    password:null,
    token:null,
    code:null,
    error:null,
    datosN:null,
    message:null
   
})

// Actions
export const actions = {
    async inicioSesion({ commit },{email,password}) {
      // Obtener los posts
      try{
        let { data } = await this.$axios.post('/user/login',{
          "email":email,"password":password
        });
          localStorage.setItem('token',data.Data.Token);
          localStorage.setItem('user_role',data.Data.Role);
          this.$router.push("/admin/lead")
          commit('setCode', data);
          commit('setSesion', data);
      }catch(e){
        commit('setError', e);
        
      }
     
      // Realizar un commit
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
    commit('setCerrarSesion', sesion)
  
  },
  async tokenP({ commit }){
      let datosToken = localStorage.getItem('token');      
      this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
      let { data } = await this.$axios.post('/user/getUserById');
      localStorage.setItem('ag',data.Data.contact.real_estate_group_id);
      localStorage.setItem('contact_id',data.Data.User.contact_id);
      localStorage.setItem('user_image',data.Data.contact.media.featured_image.src);
      localStorage.setItem('real_estate_group_logo',data.Data.User.real_estate_group.media);

      console.log(data);
      commit('SET_TOKEN',data.Data);
  },
  async actualizarDatos({ commit },{_id,user_id,table,role,name,email,phone}){
    let datosToken = localStorage.getItem('token');      
    this.$axios.defaults.headers.common['Authorization'] = "Bearer "+datosToken;  
    let { data } = await this.$axios.post('/contactAdmins/updateContactAdminsById',{
      "_id":_id,"user_id": user_id,"table": table,"role": role,"name":name,"email": email,"phone": phone
    });
    console.log(data);
    commit('setDatosN',data.Data);
    commit('setMessage',data.Message);
    commit('setCode',data.code);

  },
  async initAuth(vuexContext, req) {
    let token
    if (req) {
        if (!req.headers.cookie) {
            return;
        }
        const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='));
        if (!jwtCookie) {
            return;
        }
        token = jwtCookie.split('=')[1];
    } else {
        token = localStorage.getItem('token');
        if (!token) {
            return;
        }
    }
    vuexContext.commit('setToken', token);
}
  
}

// Getters
export const getters = {
    getSesion(state) {
      return state.sesion
    },
    getToken(state) {
      return state.token
    },
    getCode(state) {
      return state.code
    },
    getError(state) {
      return state.error
    },
    getMessage(state) {
      return state.message
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
      state.email = null
      state.password=null
      state.sesion = null
      state.token=null
      state.error=null
      state.code=null
    },
    setCode(state,code){
      state.code = code
    },
    setError(state,error){
      state.error = error
    },
    setDatosN(state,datoN){
      state.datoN = datoN
    },
    setMessage(state,message){
      state.message = message
    },
}