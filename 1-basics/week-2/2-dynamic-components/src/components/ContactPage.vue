<template>
    <h3 class="text-danger">ContactPage</h3>

    
    <input type="text" class="form-control mb-2" placeholder="E-mail Adress">
    <input type="text" v-model="referenceNumber">

    <button class="btn btn-sm btn-success"> Send! </button>

    <button class="btn btn-sm btn-light" @click="$emit('go-home')">
        Ana Sayfaya Dön!
    </button>
    </template>

<script>

export default {

    props:["title"],
mounted(){
    console.log("Contact Aktifleşti...")
},
unmounted(){
    console.log("Contact Kapandı...")
},
activated(){
    console.log("activated çalıştı")
},
deactivated (){
    console.log("deactivated çalıştı")
}


}

</script>

<style scoped>  

</style>
 