<template>
  <div class="card" style="width: 18rem;">
    <img :src="image" class="card-img-top" alt="...">
    <appCardDetails
      :title="item.title"
      :description="item.description"
      :link="item.link"
    />
  </div>
</template>

<script> 

export default {
 
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
