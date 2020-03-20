import * as axios from 'axios'

export default {
    actions:{
        async fetchData(ctx){
            let rates = await axios.get("https://api.exchangeratesapi.io/latest?base=USD").then(response =>{return response.data.rates})
            ctx.commit('putDataInState',rates)
        }
    },
    mutations:{
    putDataInState(state,data){
        state.rates = data
    }
    },
    state:{
        rates:{}
    },
    getters:{
        getRates(state){
            return state.rates
        }
    }
}