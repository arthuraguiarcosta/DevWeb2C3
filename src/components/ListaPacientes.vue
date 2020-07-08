<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Lista de Pacientes</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(paciente, index) in pacientes"
          :key="index"
          @click="selecionarPaciente(paciente, index)"
        >{{ paciente.nome }}</li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removerTodosPacientes()">Excluir Pacientes</button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPaciente">
        <h4>Paciente</h4>
        <div>
          <label>
            <strong>Nome:</strong>
          </label>
          {{ currentPaciente.nome }}
        </div>
        <div>
          <label>
            <strong>Email:</strong>
          </label>
          {{ currentPaciente.email }}
        </div>
        <div>
          <label>
            <strong>Telefone:</strong>
          </label>
          {{ currentPaciente.telefone }}
        </div>
        <div>
          <label>
            <strong>Altura:</strong>
          </label>
          {{ currentPaciente.altura }}
        </div>
        <div>
          <label>
            <strong>Peso:</strong>
          </label>
          {{ currentPaciente.peso }}
        </div>
        <div>
          <label>
            <strong>Saúde:</strong>
          </label>
          {{ currentPaciente.saude }}
        </div>
        <a class="badge badge-warning" :href="'/pacientes/' + currentPaciente.id">Editar Paciente</a>
      </div>
      <div v-else>
        <h4>Dados do Paciente</h4>
        <p>Por favor, selecione um paciente!</p>
      </div>
    </div>
  </div>
</template>

<script>
import PacienteWebService from "../services/PacientesWebService";
export default {
  name: "listarPacientes",
  data() {
    return {
      pacientes: [],
      currentIndex: -1,
      currentPaciente: null,
      nome: ""
    };
  },
  methods: {
    obterPacientes() {
      PacienteWebService.getPacientes()
        .then(pacientes => {
          this.pacientes = pacientes.data;
          console.log(this.pacientes);
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    refreshPacientes() {
      this.obterPacientes();
      this.currentPaciente = null;
      this.currentIndex = -1;
    },
    selecionarPaciente(paciente, index) {
      this.currentPaciente = paciente;
      this.currentIndex = index;
    },
    removerTodosPacientes() {
      PacienteWebService.deletarTodosPacientes()
        .then(response => {
          console.log(response.data);
          this.refreshPacientes();
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },
  mounted() {
    this.obterPacientes();
  }
};
</script>

<style>
    .list{
        text-align: left;
        max-width: 750px;
        margin: auto;
    }
</style>