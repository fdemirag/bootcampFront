<template>

<div class="container">
    <div class="row mt-3">
        <div class="col-6 offset-3"> 

                <h3>homePage</h3>
                <button @click="goToContact" class="btn btn-success btn-sm">contact with email</button>

        </div>
    </div>
</div>

</template>

<script>
export default {
    methods:{
        goToContact(){
          //  this.$router.push("/contact?email=fatih@fatih.io")
          this.$router.push({name: "ContactPage",query:{email:"gokhan@puresol.io"}})
}
    }
 
}

</script>