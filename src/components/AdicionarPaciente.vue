<template>
    <div class="submit-form">
        <div class="form-group">
            <label for="nome">Nome</label>
                <input 
                type = "text"
                class = "form-control"
                id = "nome"
                required
                v-model = "paciente.nome"
                name = "nome"
            />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
               <input 
                type = "email"
                class = "form-control"
                id = "email"
                required
                v-model = "paciente.email"
                name = "email"
            />
        </div>
        <div class="form-group">
            <label for="telefone">Telefone</label>
               <input 
                type = "tel"
                class = "form-control"
                id = "telefone"
                required
                v-model = "paciente.telefone"
                name = "telefone"
            />
        </div>
        <div class="form-group">
            <label for="altura">Altura</label>
                <input 
                type = "number"
                class = "form-control"
                id = "altura"
                required
                v-model = "paciente.altura"
                name = "altura"
            />
        </div>
        <div class="form-group">
            <label for="peso">Peso</label>
               <input 
                type = "number"
                class = "form-control"
                id = "peso"
                required
                v-model = "paciente.peso"
                name = "peso"
            />
        </div>
        <div class="form-group">
            <label for="saude">Saúde</label>
               <input 
                type = "text"
                class = "form-control"
                id = "saude"
                required
                v-model = "paciente.saude"
                name = "saude"
            />
        </div>
        <button @click="inserirPaciente" class="btn btn-success">Inserir paciente</button>
    </div>
</template> 

<script>
import PacientesWebService from '../services/PacientesWebService';

export default {
    name: "adicionarPaciente",
    data(){
        return{
            paciente:{
                id:"",
                nome:"",
                email:"",
                telefone:"",
                altura:"",
                peso:"",
                saude:""
            }
        }
    },
    methods: {
        inserirPaciente(){
            let dadosPaciente = {
                nome: this.paciente.nome,
                email: this.paciente.email,
                telefone: this.paciente.telefone,
                altura: this.paciente.altura,
                peso: this.paciente.peso,
                saude: this.paciente.saude
            }

            PacientesWebService.criarPaciente(dadosPaciente)
                .then(response => {
                    this.paciente.id = response.data.id;
                }).catch(error =>{
                        console.log(error.message);
                })                
        }
    }
}
</script>