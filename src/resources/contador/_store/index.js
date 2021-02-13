const state = {
    contador: 0
}

const getters = {
    boasVindas: (state, getters, rootState) => {
        return `Bem vindo ${rootState.usuario}`
    }
}

const mutations = {
    incrementar(state) {
        state.contador++
    },
    decrementar(state) {
        state.contador--
    },
}

const actions = {
    mostrarUsuarios: ({commit}) => {
        setTimeout(1000)
        commit('logar', "Samuel Editado", { root:true })
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}