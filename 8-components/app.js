const app = Vue.createApp()

app.component("counter",{
    data(){
        return{
         counter :0 
    }},
    updated(){
        console.log("updated")
    },
    template : `
     <div class="container">
            <h3>{{counter}}</h3>
            <div> 
                <button @click="counter++"> 1 artır</button> 
                <button @click="counter--"> 1 azalt</button> 
            </div>`
     
     
})

app.mount("#app")



//setTimeout(()=>app.unmount(), 3000)