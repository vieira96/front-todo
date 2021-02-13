<template>
    <div class="mt-4">
        <hr>
        <h2 class="font-weight-light">Salvar Tarefa</h2>
        <form @submit.prevent="salvar">
            <div class="row">
                <div :class="classeColuna">
                    <div class="form-group">
                        <label>Título</label>
                        <input
                            type="text"
                            class="form-control" 
                            placeholder="Título da tarefa"
                            v-model="tarefa.title"
                        >
                    </div>
                </div>
                <div class="col-sm-2" v-if="tarefaSelecionada">
                    <div class="form-group">
                        <label>Tarefa concluída?</label>
                        <button 
                            type="button"
                            class="btn btn-sm d-block" 
                            :class="classeBotao"
                            @click="tarefa.done = !tarefa.done">
                            <i class="fa fa-check"></i>
                        </button>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary mr-2 mb-2">Salvar</button>
            <button type="submit" class="btn btn-danger mb-2" @click="resetar">Cancelar</button>
        </form>
    </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('tarefas')

export default {
    data() {
        return {
            tarefa : {}
        }
    },
    computed: {
        classeColuna() {
            return this.tarefaSelecionada 
                ? 'col-sm-10'
                : 'col-sm-12'
        },
        classeBotao() {
            return this.tarefa && this.tarefa.done
                ? 'btn-success'
                : 'btn-secondary'
        },
        ...mapState([
            'tarefaSelecionada'
        ]),
        ...mapGetters([
            'buscarTarefaPorId'
        ]),
        
    },

    methods: {
        salvar() {
            const operacao = !this.tarefaSelecionada ? 'criar' : 'editar'
            this.$emit('salvar', {operacao, tarefa: this.tarefa})
        },
        ...mapMutations([
            'resetar'
        ]),

        sincronizar(tarefa) {
            if(tarefa){
                this.tarefa = Object.assign(
                    {},
                    tarefa
                )
            } else {
                this.tarefa = {}
            }
        }
    },
    watch: {
        tarefaSelecionada(tarefaNova, tarefaAntiga) {
            if(tarefaNova != tarefaAntiga) {
                this.sincronizar(tarefaNova)
            }
        }
    },
    created() {
        this.sincronizar(this.tarefaSelecionada)
    }
}
</script>
