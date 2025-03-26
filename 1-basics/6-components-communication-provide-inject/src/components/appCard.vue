<template>
  <div class="card" style="width: 18rem;">
    <img :src="image" class="card-img-top" alt="...">
    <appCardDetails
      :title="item.title"
      :description="item.description"
      :link="item.link"
      :itemId="item.id"
      @delete-item="$emit('delete-item',$event)"
    />
    
    <!-- {{ message}} -->
  </div>
</template>

<script> 

export default {
 
  props: {
    item: {
      type: Object,
      required: true
    }
   
  },
  data(){
    return {
     // message : null
    }
  },
 //  methods: {
 //  getMessage(e){
 //     console.log(e);
  //    this.$emit("delete-item",e)
  //  } 
    
  }
  
;
</script>
