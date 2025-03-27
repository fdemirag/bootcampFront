import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      fullName: "Defne",
      itemList: [
        { id: 1, text: "masa" },
        { id: 2, text: "kürek" },
        { id: 3, text: "lavabo" },
        { id: 4, text: "tencere" },
      ],
      currentUser: {
        username: "gkandermir",
        password: "123123123",
        permission: [],
      },
    };
  },
  getters: {
    _currentUser: (state) => state.currentUser,
    _itemList: (state) => state.itemList,
  },
  mutations: {
    setNewItem(state, itemValue) {
      state.itemList.push({
        id: new Date().getTime(),
        text: itemValue,
      });
    },
  },
  actions: {
    addNewItem(context, itemValue) { 
      setTimeout(() => {
        
        context.commit("setNewItem",itemValue) 
    }, 1000);
    },
  },
});

export default store;
