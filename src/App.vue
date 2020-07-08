<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="" class="navbar-brand">DevWebII</a>
      <div class="navbar-nav mr-auto">
        <li class="nav item">
          <a href="/pacientes" class="nav-link">Pacientes</a>
        </li>
        <li class="nav-item">
          <a href="/adicionar" class="nav-link">Adicionar Paciente</a>
        </li>
      </div>
    </nav>
    <div>
      <div class="container mt-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>
