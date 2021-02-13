export default {
    tarefasConcluidas: (state) => {
        return state.tarefas.filter(t => t.done)
    },
    tarefasAFazer: (state) => {
        return state.tarefas.filter(t => !t.done)
    },
    tarefasConcluidasLength: (state, getters) => {
        return getters.tarefasConcluidas.length
    },
    tarefasAFazerLength: (state, getters) => {
        return getters.tarefasAFazer.length
    },
    buscarTarefaPorId: (state) => {
        return (id) => {
            return state.tarefas.find(t => t.id === id)
        }
    }
}