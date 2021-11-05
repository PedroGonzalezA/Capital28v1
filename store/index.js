export const state = () => ({
    _counter:0
});

export const getters={
    getCounter(state){
        return state._counter
    }
}

export const actions ={
    async nuxtServerInit({dispatch},context){
        await dispatch('posts/loadPosts');
    },

    false({commit}){
        commit(false)
    }
    
}

export const mutations={
    increment(state){
        state._counter++;
    }
}