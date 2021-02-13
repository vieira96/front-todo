<template>
    <div>

        <div class="row mb-2">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right" 
                    @click="exibirFormularioCriarTarefa">
                    <i class="fa fa-plus mr-2"></i>
                    <span>Criar</span>
                </button>
            </div>
        </div>
        
        <div v-if="tarefas.length > 0">
            <ul class="list-group mb-3" v-if="tarefasAFazerLength > 0">
                <h5>Tarefas a fazer ({{tarefasAFazerLength}})</h5>
                <TarefasListaIten
                    v-for="tarefa in tarefasAFazer"
                    :key="tarefa.id"
                    :tarefa="tarefa"
                    @editar="selecionarTarefaParaEdicao($event), abrirFormulario()"
                    @concluirTarefa="concluirTarefa($event)"
                    @deletarTarefa="deletarTarefa($event)"
                />
            </ul>

            <ul class="list-group mb-3" v-if="tarefasConcluidasLength > 0">
                <h5>Tarefas concluídas ({{tarefasConcluidasLength}})</h5>
                <TarefasListaIten
                    v-for="tarefa in tarefasConcluidas"
                    :key="tarefa.id"
                    :tarefa="tarefa"
                    @editar="selecionarTarefaParaEdicao($event), abrirFormulario()" 
                    @concluirTarefa="concluirTarefa($event)"
                    @deletarTarefa="deletarTarefa($event)"
                />
            </ul>


        </div>
        <p v-else>Nenhuma tarefa criada.</p>
        <TarefaSalvar
            v-if="exibirFormulario"
            @salvar="salvar($event)"
        />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers('tarefas')

export default {
    data() {
        return {
            tarefa: {}
        }
    },

    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    methods: {
        ...mapActions([
            'concluirTarefa',
            'listarTarefas',
            'editarTarefa',
            'deletarTarefa',
            'criarTarefa'
        ]),
        ...mapMutations([
            'selecionarTarefaParaEdicao',
            'abrirFormulario',
            'resetar',
            'exibirFormularioCriarTarefa'
        ]),

        salvar(event) {
            const tarefa = event.tarefa
            
            if(event.operacao === 'editar') {
                this.editarTarefa({tarefa})
            } else if(event.operacao === 'criar') {
                this.criarTarefa({tarefa})
            }
            this.resetar()
        }
        
    },
    computed: {
        ...mapState({
            tarefas: state => state.tarefas,
            tarefaSelecionada: state => state.tarefaSelecionada,
            exibirFormulario: state => state.exibirFormulario
        }),
        ...mapGetters([
            'tarefasConcluidas',
            'tarefasConcluidasLength',
            'tarefasAFazer',
            'tarefasAFazerLength'
        ]),
        
    },
    created() {
        this.listarTarefas()
    }
}
</script>
