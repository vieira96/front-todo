export default {

    criarTarefa:(state, payload) => {
        state.tarefas.push(payload.tarefa)
    },

    editarTarefa:(state, payload) => {
        
        const indice = state.tarefas.findIndex(t => t.id === payload.tarefa.id)
        state.tarefas.splice(indice, 1, payload.tarefa)
    },

    deletarTarefa:(state, {tarefa}) => {
        const indice = state.tarefas.findIndex(t => t.id === tarefa.id)
        state.tarefas.splice(indice, 1)
    },

    listarTarefas: (state, {tarefas}) => {
        state.tarefas = tarefas
    },

    selecionarTarefaParaEdicao(state, payload) {
        state.tarefaSelecionada = payload.tarefa
    },

    abrirFormulario(state) {
        state.exibirFormulario = true
    },

    resetar(state) {
        state.exibirFormulario = false
        state.tarefaSelecionada = undefined
    },

    exibirFormularioCriarTarefa(state) {
        if (state.tarefaSelecionada) {
            state.tarefaSelecionada = undefined
            return
        }
        state.exibirFormulario = !state.exibirFormulario
    },
    
}