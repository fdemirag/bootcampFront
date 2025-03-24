const app = Vue.createApp({
    data(){
        return{
              counter:0,
              counter2:0
        }
       },
       methods:{
          
       },
       computed:{
        oddOrEven()
        {
         return this.counter % 2 ===0 ? 'çift ' : 'tek'
        },
        oddOrEven2()
        {
         return this.counter2 % 2 ===0 ? 'çift ' : 'tek'
        }
       }

       
  
}).mount("#app")