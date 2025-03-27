<template>
  
<div class="container mt-5">
  <div class="row">
    <div class="col-6 offset-3 card d-flex justify-content-start  align-items-center">
      <input class="form-control mb-1" type="text" v-model="totalAmount">
      Total Amount : <span class="font-weight-bold"> 
        {{ getCurrencyFormat(totalAmount) }}
        <br> <br>
       TRY {{ getNumberFormat(totalAmount) }}
      
      </span>
      
    </div>
  </div>
</div>


<div class="container">
  <div class="row mt-4">
    <div class="card text-center">

      {{ page_size }}
      <br>
      {{ page }}
    </div>
  </div>
</div>
</template>

<script>  
export default { 
  name: 'App',
  data (){
    return {
      totalAmount: 153412341234.1234
    }
  },
  mounted(){
    console.log("App")
  }
  
  }
  

</script>

 