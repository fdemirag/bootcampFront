import { createApp } from 'vue'
import App from './App.vue'
import CmpA from './components/CmpA.vue'
import CmpB from './components/CmpB.vue'
import CmpC from './components/CmpC.vue'
import CmpD from './components/CmpD.vue'


const app = createApp(App)  
app.component("CmpA",CmpA)
app.component("CmpB",CmpB)
app.component("CmpC",CmpC)
app.component("CmpD",CmpD)

app.mount('#app')