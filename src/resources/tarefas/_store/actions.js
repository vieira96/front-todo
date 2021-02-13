import TarefasService from '../_services/TarefasService'

export default {
    concluirTarefa: async( {dispatch}, payload ) => {
        const tarefa = Object.assign({}, payload)
        tarefa.done = !tarefa.done
        dispatch('editarTarefa', {tarefa})
    },

    criarTarefa: async ({commit}, {tarefa}) => {
        await TarefasService.postTarefa(tarefa)
        commit('criarTarefa', {tarefa})
    },

    editarTarefa: async ({commit},  {tarefa}) => {
        await TarefasService.putTarefa(tarefa)
        commit('editarTarefa', {tarefa})
    },

    deletarTarefa: async ({commit}, {tarefa}) => {
        await TarefasService.deleteTarefa(tarefa.id)
        commit('deletarTarefa', {tarefa})
    },

    listarTarefas: async ({commit}) => {
        const response = await TarefasService.getTarefas()
        commit('listarTarefas', { tarefas: response.data.results })
    }
}