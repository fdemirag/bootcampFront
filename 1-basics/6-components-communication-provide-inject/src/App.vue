<template> 
<div class="container">
  <div class="row mt-5">

   <PlaceList :items="placeList" :addItem="addNewPlace" @delete-item="deleteItem"/>


  </div>
</div>
</template>



<script> 



 

export default {
 data (){
  return {
    placeList:[
      {id:1,title:"Fethiye",description:"Çok Güzel Bir Yer1",link:"https://www.fethiye1.com"},
       {id:2,title:"muğlaa",description:"Çok Güzel Bir Yer2",link:"https://www.fethiye2.com"},
       {id:3,title:"antalya",description:"Çok Güzel Bir Yer3",link:"https://www.fethiye3.com"},
       {id:4,title:"karabük",description:"Çok Güzel Bir Yer4",link:"https://www.fethiye4.com"}
   
   
   
    ]
  }
 
 },
  methods : {
    addNewPlace(item){
      this.placeList.push({
        id:new Date().getTime(),
        ...item
      })
    },
    deleteItem(itemId){
      this.placeList = this.placeList.filter(i=>i.id !== itemId)
    }
  }
};
</script>
