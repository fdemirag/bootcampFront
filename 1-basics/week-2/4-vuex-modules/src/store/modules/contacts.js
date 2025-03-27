const contacts = {
    namespaced:true,
    state : {
        list : ["Microsoft","Zapple","Foogle","asd"]
    },
    mutations : {
        setContact(state,itemName){
            state.list.push(itemName)
        }
    },
    
    getters:{
        _list:state => state.list
    }
}
export default contacts;