<template>

    <div class="container">
        <div class="row mt-3">
            <div class="col-6 offset-3"> 
    
                    <h3>ContactPage</h3>
                    <input v-model="userEmail" type="text" class="form-control mb-2" placeholder="email adresinizi yazın">

                    <div class="d-flex justify-content-between align-items-center">

                        <button class="btn btn-sm btn-primary">Kaydet</button>


                        <button @click="goToHome" class="btn btn-sm btn-light">Geri Dön</button>

                    </div> 
                                {{ $route.query.email }}
                    
                    <button @click="$router.push({name:'ContactList'})" class="btn btn-sm btn-success">Liste</button>
                    <button @click="$router.push({name:'ContactUpdate'})" class="btn btn-sm btn-warning">Düzenle</button>
                    <button @click="$router.push({name:'ContactNew'})" class="btn btn-sm btn-primary">Yeni</button>
                        <router-view></router-view>
                </div>
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        data(){
            return{
                userEmail: null
        }
            
        },
    methods:{
        goToHome(){
            //this.$router.push("/")
            this.$router.push({name:"HomePage"})
        }
    },
    beforeRouteEnter(to,from){
        console.log(`beforeRouteEnter ${from.name} => ${to.name}`)
    },    
    beforeRouteUpdate(){
        console.log("beforeRouteUpdate")
    },    
    beforeRouteLeave(to,from,next){
        // if(!this.userEmail){ 
        //     const leaveCondition = confirm("emaili doldur devam etmek istiyormusun");
        // next(leaveCondition);
            
             
        // } 
        next(true)
    }
    

    }
    
    </script>