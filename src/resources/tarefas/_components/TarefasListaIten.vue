<template>
    <li class="list-group-item d-flex mb-2">
        <span>{{ tarefa.title }}</span>
        <span class="espacar"></span>
        <button 
            class="btn btn-sm mr-4" 
            :class="classeCSS" 
            :title="textoBotaoConcluido"
            @click="$emit('concluirTarefa', tarefa)">
            <i class="fa fa-check"></i>
        </button>
        <button 
            class="btn btn-primary btn-sm mr-1" 
            title="Editar"
            @click="$emit('editar', {tarefa})">
            <i class="fa fa-pencil-alt"></i>
        </button>
        <button 
            class="btn btn-danger btn-sm" 
            title="Deletar"
            @click="$emit('deletarTarefa', {tarefa})">
            <i class="fa fa-trash"></i>
        </button>
    </li>
</template>

<script>
export default {
    props: {
        tarefa: {
            type: Object,
            required: true
        }
    },
    computed: {
        classeCSS() {
            return {
                'btn-secondary': !this.tarefa.done,
                'btn-success': this.tarefa.done
            }
        },
        textoBotaoConcluido() {
            return this.tarefa.done
                ? 'Refazer Tarefa'
                : 'Concluir Tarefa'
        }
    }
}
</script>

<style scoped>

    .espacar {
        flex: 1 1 auto;
    }

</style>
