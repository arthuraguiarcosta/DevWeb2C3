import http from '../http-common';

class PacientesWebService{

    getPacientes(){
        return http.get('./pacientes');
    }

    getPacienteID(){
        return http.get(`/pacientes/${id}`);
    }

    criarPaciente(paciente){
        return http.post("/pacientes", paciente)
    }

    atualizarPaciente(id, paciente){
        return http.put(`/pacientes/${id}`, paciente);
    }

    deletarPaciente(id){
        return http.delete(`/pacientes/${id}`);
    }

    deletarTodosPacientes(){
        return http.delete(`/pacientes`);
    }
}

export default new PacientesWebService();