import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import appText from './components/appText.vue' 
import ListItem from './components/ListItem.vue'

const app = createApp(App)

app.component("appText", appText) 
app.component("ListItem",ListItem)

app.use(store)

app.mount('#app')
