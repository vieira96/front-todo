import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
}) 

export default {
    getTarefas() {
        return apiClient.get('/todos')
    },

    getTarefa(id) {
        return apiClient.get(`/todo/${id}`)
    },

    postTarefa(tarefa) {
        return apiClient.post('/todo', tarefa)
    },

    putTarefa(tarefa) {
        return apiClient.put(`/todo/${tarefa.id}`, tarefa)
    },

    deleteTarefa(id) {
        return apiClient.delete(`/todo/${id}`)
    }
}