<template>
    <div>
        <h2 class="font-weight-light">Contador: {{contador}}</h2>
        <h4 class="font-weight-light">Contador Alias: {{contadorAlias}}</h4>
        <h5 class="font-weight-light">Contador Multiplicado: {{contadorMultiplicado}}</h5>
        <h5 class="font-weight-light">{{boasVindas}}</h5>
        <button class="btn btn-lg btn-danger mr-1" @click="this.decrementar">-</button>
        <button class="btn btn-lg btn-success" @click="this.incrementar">+</button>
    </div>
</template>

<script>

    import { createNamespacedHelpers } from 'vuex'

    const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('contador')

    export default {

        data() {
            return {
                contadorLocal: 2
            }
        },
        computed: {
            ...mapState({
                contador: state => state.contador,
                contadorAlias: (state) => {
                    return state.contador
                },
                contadorMultiplicado(state) {
                    return state.contador * this.contadorLocal
                },
                usuario: state => state.usuario
            }),
            ...mapGetters([
                'boasVindas'
            ]),
            ...mapActions([
                'mostrarUsuarios'
            ])
        },
        methods: {
            ...mapMutations([
                'incrementar',
                'decrementar'
            ])

        },
        created() {
            // setTimeout(()=>this.mostrarUsuarios, 3000)
        }   
    }
    
</script>