import Vue from 'vue'
import Vuex from 'vuex'
import exchange from "./module/exchange";
Vue.use(Vuex);

export default new Vuex.Store({
    modules :   {
        exchange
    }
})