// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'; // Asegúrate de crear este componente
import MyComponent from './components/my-component.vue'; // Asegúrate de crear este componente

const routes = [
  /*{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },*/
  {
    path: '/welcome' ||  '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/myComponent',
    name: 'MyComponent',
    component: MyComponent
  },
  // Agrega más rutas aquí
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;