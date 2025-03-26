import { createApp } from 'vue'
import App from './App.vue'
import appCard from './components/appCard.vue'
import appCardDetails from './components/appCardDetails.vue'
import PlaceList from './components/PlaceList.vue'



const app = createApp(App)  
app.component("appCard",appCard)
app.component("appCardDetails",appCardDetails)
app.component("PlaceList",PlaceList)
app.mount('#app')
