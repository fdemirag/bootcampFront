import { createApp } from 'vue'
import App from './App.vue'

import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import HomePage from './components/HomePage.vue'



const app = createApp(App)  
app.component("ContactPage",ContactPage)
app.component("AboutPage",AboutPage)
app.component("HomePage",HomePage)



app.mount('#app')
