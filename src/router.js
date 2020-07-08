import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias:'/pacientes',
            name:'pacientes',
            component: () => import('./components/ListaPacientes')
        },
        {
            path: '/pacientes/:id',
            name: 'detalhesPaciente',
            component: () => import('./components/Paciente')
        },
        {
            path: '/adicionar',
            name: '/adicionarPaciente',
            component: () => import('./components/AdicionarPaciente')
        }
    ]
})