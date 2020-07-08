<template>
    <div v-if="currentPaciente" class="edit-form">
        <h4>Paciente</h4>
        <form>
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" v-model="currentPaciente.nome">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="currentPaciente.email">
            </div>
            <div class="form-group">
                <label for="telefone">Telefone</label>
                <input type="tel" class="form-control" id="telefone" v-model="currentPaciente.telefone">
            </div>
            <div class="form-group">
                <label for="altura">Altura</label>
                <input type="number" class="form-control" id="altura" v-model="currentPaciente.altura">
            </div>
            <div class="form-group">
                <label for="peso">Peso</label>
                <input type="number" class="form-control" id="peso" v-model="currentPaciente.peso">
            </div>
            <div class="form-group">
                <label for="saude">Saúde</label>
                <input type="text" class="form-control" id="saude" v-model="currentPaciente.saude">
            </div>
        </form>
        <button class="badge badge-danger mr-2" @click="deletarPaciente">Deletar Paciente</button>
        <button type="submit" class="badge badge-success mr-2" @click="atualizarPaciente">Atualizar Paciente</button>
        <p>
            {{ message }}   
        </p>
    </div>
    <div v-else>
        <p>
            Por favor, selecione um paciente!!!
        </p>
    </div>
</template>

<script>
import PacientesWebService from '../services/PacientesWebService';
    export default {
        name: "paciente",
        data(){
            return {
                currentPaciente: null,
                message: ''
            }
        }, 
        methods: {
            getPaciente(id){
                PacientesWebService.getPacienteID(id)
                    .then(paciente => {
                        this.currentPaciente = paciente.data;
                        let data = this.currentPaciente.data_internacao;
                        data = this.currentPaciente.data_internacao.split('T')[0];
                        console.log(data);
                        this.currentPaciente.data_internacao = data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            deletarPaciente(){
                PacientesWebService.deletarPacienteID(this.currentPaciente.id)
                    .then(response => {
                        console.log(response.data);
                        this.message = 'O paciente foi deletado com sucesso!'
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            },
            atualizarPaciente(){
                PacientesWebService.atualizarPaciente(this.currentPaciente.id, this.currentPaciente)
                    .then(response => {
                        console.log(response.data);
                        this.message = "Paciente atualizado com sucesso!"
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
        },
        beforeMount(){
            this.message = '',
            this.getPaciente(this.$route.params.id);
        }
    }
</script>

<style>
</style>