export const state = () => ({
    _counter:0
});

export const getters={
    getCounter(state){
        return state._counter
    }
}

export const actions ={
    
   
    false({commit}){
        commit(false)
    }
    
}

export const mutations={
    increment(state){
        state._counter++;
    }
}