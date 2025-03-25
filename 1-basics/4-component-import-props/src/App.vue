<template> 
<app-header></app-header>  

<div class="container">
  <div class="row">
      <appSlider></appSlider>
    </div>
  </div>
 
  <div class="row mt-2">
    <div v-for="i in 2" :key="i" class="col-6">

    <appCard></appCard>
    </div>
  </div>



<app-footer></app-footer>

 

  
</template>
<script> 

 

 

  export default {}
</script>