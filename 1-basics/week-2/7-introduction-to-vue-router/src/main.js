import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // router'ı doğru şekilde import ettiğinizden emin olun

const app = createApp(App);

app.use(router);  // router'ı uygulamanıza dahil edin 
 
app.mount('#app');