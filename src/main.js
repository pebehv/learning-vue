import { createApp } from 'vue'
import App from './App.vue'
//import Bootstrap from 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'; // Importa el router
/*import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
*/
/*import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"*/
//createApp(App).mount('#app')
const app = createApp(App);
app.use(router); // Usa el router
//app.use(BootstrapVue3);
app.mount('#app');
