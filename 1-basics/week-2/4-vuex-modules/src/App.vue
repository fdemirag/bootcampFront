<template>
<h3 class="text-center">Vuex Modules</h3>
<div class="container">

  <div class="row mt-3">
    <div class="col-4 card">
      <h3>Global State</h3>
      <div class="card"> 
        <strong>Application Name {{ appName }}</strong>
        <br>
        <strong>Sidebar {{ hasSideBar }}</strong>
      </div>
    </div>
    <div class="col-4 card">
      <h3>Products</h3>
     <div class="card p-2">
      <ul class="list-group">
        <li v-for="item in productList" :key="item" class="list-group-item">
          {{ item }}
        </li>
      </ul>
      <button class="btn btn-sm btn-primary mt-2" @click="newProduct">Yeni Ekle</button>
     </div>
    </div>
    <div class="col-4 card">
      <h3>Module 2</h3>
      <div class="card">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam iste voluptates deserunt provident voluptate, nostrum dolor earum possimus architecto enim facilis dolorum! Minus consequuntur, amet voluptate praesentium voluptatibus modi.
      </div>
    </div>
  </div>
</div>

<div class="card p-2">
      <ul class="list-group">
        <li v-for="item in contactList" :key="item" class="list-group-item">
          {{ item }}
        </li>
      </ul>
      <button class="btn btn-sm btn-primary mt-2" @click="newContact">Yeni Contact Ekle</button>
     </div>


<div class="card p-2">
      <ul class="list-group">
        <li v-for="item in subProductList" :key="item" class="list-group-item">
          {{ item }}
        </li>
      </ul>
      <button class="btn btn-sm btn-primary mt-2" @click="newSubProduct">Yeni Contact Ekle</button>
     </div>


</template>

<script> 

  import {mapGetters} from "vuex"
export default {
  methods : {
    newProduct(){
      this.$store.commit('products/setProduct',new Date().getTime())
    },
    newContact(){
      this.$store.commit('contacts/setContact',new Date().getTime())
    },
    newSubProduct(){
      this.$store.commit('products/subProducts/setProduct',new Date().getTime())
    }
  },
  computed:{
    ...mapGetters({
       appName: "_getAppName",
       hasSideBar : "_isSideBarEnabled",
       productList:"products/_itemList",
       contactList:"contacts/_list",
       subProductList:"products/subProducts/_itemList"
    })
  }
  
  }


</script>


