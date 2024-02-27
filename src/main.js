import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import timetrek from './timetrek'
import './style.css'

const app = createApp(App);

// app.use(timetrek);
app.use(router).mount('#app');
