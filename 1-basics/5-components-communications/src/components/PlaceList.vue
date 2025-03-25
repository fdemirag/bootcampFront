<template>

     <!-- <div v-for="item in placeList" :key="item.id" class="col-3 p-2"> 
      <appCard
      :title=item.title
      :description = item.description
      :link = item.link
      /> 
    </div>  -->

    <div v-for="item in items" :key="item.id" class="col-3 p-2"> 
    
    <appCard :item="item"/>
  </div>
</template>

<script>
export default {
    props : {
        items:{
            type : Array,
            required: true,
            default :()=> []
        }
    } 
}
</script>