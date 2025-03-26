
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      fullName: "Defne",
      itemList : ["Masa","Kürek","Karton","Peçete"]
    };
  }
});

export default store;
