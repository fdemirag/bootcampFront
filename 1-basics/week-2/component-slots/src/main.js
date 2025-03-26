import { createApp } from 'vue'
import App from './App.vue'
import ListItem from './components/ListItem.vue'
import AppModal from './components/appModal.vue'



const app = createApp(App)  
app.component("ListItem",ListItem)
app.component("appModal",AppModal)


app.mount('#app')