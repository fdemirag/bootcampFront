const app= Vue.createApp({
    data (){
          return {
        //     fruitList : ["Elma","Armut","Kiraz"],
                counter :0,
                fruitList: [{id:1,text:"Elma"},{id:2,text:"çay"},{id:3,text:"Karpuz"}]
            ,todoValue:null
        }
    },
    methods
    :{
        addNewTodo(){
            this.fruitList.push({
                text : this.todoValue,
                id: new Date().getTime()}
            );
            this.todoValue = null;
        },
        deleteTodo(index){

              this.fruitList.splice(index,1)
        },
        itemCount()
        {
            return this.fruitList.length
        
        }
        
    }

})

app.mount("#app")