import subProducts from "./subProducts";

const products = {
    namespaced : true,
    state : {
        productList : ["Bardak","Defter","Lamba","Çaydanlık"]
    },
    mutations : {
        setProduct(state,productName){
            state.productList.push(productName)
        }
    },
    
    getters:{
        _itemList:state => state.productList
    },
    modules: {
        subProducts
    }
}
export default products;