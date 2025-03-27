import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import appText from './components/appText.vue' 
import appList from './components/appList.vue'

const app = createApp(App)

app.component("appText", appText) 
app.component("appList",appList)

app.use(store)

app.mount('#app')
