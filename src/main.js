import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
const options = {

};

createApp(App).use(store).use(router).use(Toast, options).mount('#app')
