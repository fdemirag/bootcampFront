<template>

     <!-- <div v-for="item in placeList" :key="item.id" class="col-3 p-2"> 
      <appCard
      :title=item.title
      :description = item.description
      :link = item.link
      /> 
    </div>  -->

    <div v-for="item in items" :key="item.id" class="col-3 p-2"> 
    
    <appCard :item="item" @delete-item="$emit('delete-item',$event)"/>
  </div>
  <button @click="addItem({name:'istanbul',description:'kaos',link:'www.ibb.gov.tr'})" class="btn-primary btn-sm">Add New Place</button>
</template>

<script>
export default {
    props : {
        items:{
            type : Array,
            required: true,
            default :()=> []
        },
        addItem : Function

    } 
}
</script>