import { createStore } from 'vuex'
import {MainPageStore} from "@/store/MainPageStore";

export default createStore({
  modules: {
    main: MainPageStore
  }
})
