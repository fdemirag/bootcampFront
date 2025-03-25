const app = Vue.createApp({
    data(){return{
        counter :0 ,
        isLoaded: false ,
        countries : ["canada","costa rica","Türkiye"]
    }},
    methods : {

    },
    // Creation
    beforeCreate(){
        console.log("Before Create")
    },
    created(){
        console.log("Create")
    },
    // mount
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        console.log("mounted")
        setTimeout(()=>{
            this.countries = ["canada","costa rica","Türkiye"];
            this.isLoaded = true;
        },2000)
    },
    // update
    beforeUpdate(){
        console.log("beforeUpdate")
    },

    updated(){console.log("Updated")},
    // unmount
    beforeUnmount(){
        console.log("beforeUnmount")
    },
    unmounted(){
        console.log("unmounted")
    }
})
app.mount("#app")



//setTimeout(()=>app.unmount(), 3000)