<template> 

  <div class="container">
    <div class="row mt-5">
      <div class="col-6 offset-3 text-center">

        <button @click="activePage='HomePage'" class="btn btn-sm btn-light">HomePage </button>

        <button @click="activePage='AboutPage'" class="btn btn-sm btn-light">AboutPage </button>

        <button @click="activePage='ContactPage'" class="btn btn-sm btn-light">ContactPage </button>

      </div>
      {{ activePage }}
    </div>

    <div class="row mt-5">
      <div class="col-6 offset-3 card">


        <KeepAlive>
          
        <component :is="activePage" title="Bu Bir Başlık..." @go-home="activePage='HomePage'"/>


      </KeepAlive>
      </div>
    </div>
  </div>

</template>

<script>




 



export default {
 data(){
  return {

    activePage:'HomePage'
  }
 },
 
 
}
</script>


