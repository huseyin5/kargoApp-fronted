import {createApp} from 'vue'
import {createPinia} from 'pinia';
import App from './App.vue'
import './assets/main.css'
import axios from "axios";

const pinia = createPinia();

axios.defaults.baseURL="http://127.0.0.1:5000/api/v1/"

createApp(App).use(pinia).mount('#app')
