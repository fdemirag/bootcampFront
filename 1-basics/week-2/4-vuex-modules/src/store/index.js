import {createStore} from "vuex";
import products from "./modules/product"
import contacts from "./modules/contacts";

const store = createStore({
    state : {
        appName: "KablosuzKediApp",
        theme:"Dark",
        sidebar : true
    },
    getters :{
        _getAppName : state => state.appName,
        _isSideBarEnabled : state=>state.sidebar
    },
    modules : {
        products,
        contacts
    }
})

export default store;