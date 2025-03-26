<template>

<div class="container">
  <div class="row mt-5">
    <div class="col">
      <CmpA :title="componentATitle" @change-title="componentBTitle =$event" :run="runFunction"/>
    </div>
    <div class="col">
      <CmpB :title="componentBTitle" @change-title="componentATitle =$event" @run-event="runFunction=true"/>
    </div>

    <div class="col">
      <CmpC  @change-title="setTitle('componentDTitle',$event)" @run-event="runFunction=true"/>
    </div>
    <div class="col">
      <CmpD  @change-title="setTitle ('componentDTitle',$event)" @run-event="runFunction=true"/>
    </div>
  </div>

  
</div>

</template>

<script> 

export default {
  data() {
    return {
      componentATitle : "Component A",
      componentBTitle : "Component B",
      
      runFunction : false ,
      providedData:{

        componentCTitle : "Component C",
      componentDTitle : "Component D",
      runFunction:false

      }
    }
  },
  provide(){
    return {
      componentCTitle : this.providedData.componentCTitle,
      componentDTitle : this.providedData.componentDTitle,
      runFunction : this.providedData.runFunction
    }
  },
  methods : {
    setTitle(componentRef,value){
      console.log(componentRef,value)
      this.providedData[componentRef] = value; 
      
      
    }
  },
  watch : {
        runFunction(isRun){
            if (isRun)
        {
            setTimeout(()=>{
                this.runFunction=false;
            }, 1) 
            
        }
        }
    }
}
</script>


