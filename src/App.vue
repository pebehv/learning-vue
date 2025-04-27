<template>
    <div >
    <!--nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Acerca de</router-link>
    </nav-->
    <nav aria-label="breadcrumb" class="nav ">
      <ol class="breadcrumb">    
        <li class="breadcrumb-item"><a href="index.html#/welcome">Home</a></li>
        <li class="breadcrumb-item"><a href="index.html#/myComponent">Table</a></li>
       
      </ol>
    </nav>

    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view> <!-- Aquí se renderizarán las vistas -->
    <!--HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyComponent> </MyComponent-->
  </div>
</template>

<script>
/*
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/my-component.vue'
*/
export default {
  
  name: 'App',
 /* components: {
    HelloWorld,
    MyComponent
  },
  */

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav{
  padding: 0.3% 5%;
  background: #8080803d;
}
/*@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
*/
</style>
