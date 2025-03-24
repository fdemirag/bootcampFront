const app = Vue.createApp({
    data(){
        return{
            personelName:"fatih"
        }
       },
       methods:{
        chanceName(e){this.personelName=e.target.value}
       }
       
  
}).mount("#app")