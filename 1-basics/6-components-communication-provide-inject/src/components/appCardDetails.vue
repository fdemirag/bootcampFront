

<template>

<div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description}}</p>
    <div class="d-flex justify-content-betwenn align-itemscenter">
        <button @click="deleteItem()" class="btn-btn-danger">sil</button>
    </div>
    <a :href="link" class="btn btn-primary">Go Website</a>

</div>
</template>

<script>
export default {
    name : "AppCardDetails",
    props : ["title","description","link","itemId"],

    methods:{
        deleteItem(){
           this.$emit("delete-item",this.itemId)
        }
    }
}
</script>