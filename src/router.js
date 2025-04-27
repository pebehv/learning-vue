// src/router.js
import { createRouter, createWebHashHistory  } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue'; // Asegúrate de crear este componente
import MyComponent from './components/my-component.vue'; // Asegúrate de crear este componente

const routes = [
  /*{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },*/
  {
    path: '/index.html#/welcome' ,
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/index.html#/myComponent',
    name: 'MyComponent',
    component: MyComponent
  },
  // Agrega más rutas aquí
];

const router = createRouter({
  history: createWebHashHistory (),
  routes
});

export default router;