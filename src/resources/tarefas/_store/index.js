import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const state = {
    tarefas: [],
    tarefaSelecionada: undefined,
    exibirFormulario: false
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
