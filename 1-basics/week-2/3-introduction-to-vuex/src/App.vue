
<template>

  <div class="container mt-5"> 
    <div class="row">
      <div class="col-6 offset-3 card p-2">
        
        <appText></appText>

      
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 card p-2 mb-2">
        <input type="text" class="form-control" placeholder="Item Name" v-model="itemValue">
        
        <button class="btn btn-sm btn-primary" @click ="addNewItem" >Ekle</button>
        
        
      <div class="col-6 offset-3 card p-2 mb-2">
        
        <appList></appList>
      </div>


      
      </div>
    </div>
  </div>

    {{$store.state.currentUser}}
</template>

<script> 
import { mapGetters,mapMutations } from 'vuex';

export default {
  data()
  {
    return {
      itemValue:null
    }
  },
  methods:{
    ...mapMutations({
      setNewItem:"setNewItem"
    }),
    addNewItem(){
      this.$store.dispatch("addNewItem",this.itemValue)
      
      this.itemValue=null
    },
    computed: mapGetters(["_itemList"])

  }
}

</script>