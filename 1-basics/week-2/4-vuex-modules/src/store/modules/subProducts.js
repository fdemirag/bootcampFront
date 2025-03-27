

const subProducts = {
    namespaced : true,
    state : {
        productList : ["Sub1","Sub2","Sub3","Sub4"]
    },
    mutations : {
        setProduct(state,productName){
            state.productList.push(productName)
        }
    },
    
    getters:{
        _itemList:state => state.productList
    }
}
export default subProducts;