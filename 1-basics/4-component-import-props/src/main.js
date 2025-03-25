import { createApp } from 'vue'
import App from './App.vue'
import appHeader from './components/shared/appHeader.vue'
import appFooter from './components/shared/appFooter.vue'
import appSlider from './components/HomePage/appSlider.vue'
import AppCard from './components/HomePage/appCard.vue'





const app = createApp(App) 
app.component("appHeader", appHeader);
app.component("appFooter",appFooter);
app.component("appSlider",appSlider);
app.component("appCard",AppCard)
app.mount('#app')

