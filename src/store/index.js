import Vue from 'vue'
import Vuex from 'vuex'
import contador from '@/resources/contador/_store/index'
import tarefas from '@/resources/tarefas/_store/index'

Vue.use(Vuex)

const state = {
    usuario: "Samuel Vieira"
}

const modules = {
    contador,
    tarefas
}

const mutations = {
    logar: (state, usuario) => {
        state.usuario = usuario
    }
}

const actions = {
    logar: ({commit}, usuario) => {
        commit('logar', usuario)
    }
}

export default new Vuex.Store({
    strict: true,
    state,
    modules ,
    mutations,
    actions
})
