<template>
    <div>
        <StyledBlockWithGradientBackground>
            <div class="container">
                <div class="row text-center pt-5 ">
                    <div class="col-12 logo mt-5 "><h1 class="text-pop-up-top text-center text-white display-1">Exchange</h1></div>
                    <div class="col-6 logo slide-in-fwd-right"><h1 class="display-2 text-white ">Powered By Vue</h1></div>
                    <div class="col-6 slide-in-fwd-left "><img class="img-fluid w-50 mt-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/694px-Vue.js_Logo_2.svg.png" /></div>

                </div>
            </div>

            <div class="row">
                <div class="col-4"></div>
                <div class="col-md-4 col-sm-12 bg-white rounded inputblock shadow scale-in-center">
                    <div class="input-group mt-3 mb-3 mb-lg-4 mt-lg-4 ">
                        <div class="input-group-prepend w-25">
                            <select class="custom-select border-0" @input="setCurrency" id="inputGroupSelect01">
                                <option value="USD">USD</option>
                                <option value="RUB">RUB</option>
                                <option value="GBP">GBP</option>
                                <option value="HKD">HKD</option>
                                <option value="ISK">ISK</option>
                                <option value="PHP">PHP</option>
                                <option value="DKK">DKK</option>
                                <option value="HUF">HUF</option>
                                <option value="CZK">CZK</option>
                                <option value="AUD">AUD</option>
                                <option value="RON">RON</option>
                                <option value="SEK">SEK</option>
                                <option value="IDR">IDR</option>
                                <option value="INR">INR</option>
                                <option value="BRL">BRL</option>
                                <option value="JPY">JPY</option>
                                <option value="ILS">ILS</option>
                                <option value="NZD">NZD</option>
                                <option value="HRK">HRK</option>
                                <option value="CAD">CAD</option>
                                <option value="CNY">CNY</option>
                            </select>
                        </div>
                        <input type="number" class="w-75 rounded border-0" :value="count" @input="setCount" />
                    </div>
                </div>
                <div class="col-4"></div>
            </div>


        </StyledBlockWithGradientBackground>
        <div class="container slide-in-fwd-bottom text-center ml-auto mr-auto ">
            <div class="row ">
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/canada.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.CAD * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/hong-kong.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.HKD * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/iceland.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.ISK * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/philippines.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.PHP * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/denmark.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.DKK * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/hungary.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.HUF * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/czech-republic.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.CZK * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/australia.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.AUD * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/romania.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.RON * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/sweden.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.SEK * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/indonesia.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.IDR * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/india.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.INR * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/brazil.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.BRL * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/russia.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.RUB * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/croatia.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.HRK * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/japan.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.JPY * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/united-states-of-america.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.USD * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/china.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.CNY * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/england.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.GBP * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/israel.svg"/>
                        </div>
                        <div :class="countclass">
                            <p  >{{((rates.ILS * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                    <div class="row">
                        <div class="col-5 mt-3 mb-3">
                            <img class="img-fluid" src="./svg/new-zealand.svg"/>
                        </div>
                        <div :class="countclass">
                            <p>{{((rates.NZD * 1/rates[currency])*count).toFixed(2)}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import style from 'vue-styled-components'

    let StyledBlockWithGradientBackground = style.div`
height:65%;
animation: color-change-5x 20s linear infinite alternate both;
@keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #ea2222;
  }
  75% {
    background: #f5be10;
  }
  100% {
    background: #3bd80d;
  }
}
`;
export default {
  name: 'Main',
  props: {
    rates:Object,

  },
    data(){
  return{
      count:1,
      currency:"USD",
  }
  },
    methods:{
      setCount:function($event){
          this.count = $event.target.value
      },
        setCurrency:function($event){
          this.currency = $event.target.value
        }
    },
    components:{
        "StyledBlockWithGradientBackground":StyledBlockWithGradientBackground
    },
    computed:{
        countclass(){
            return `col-6  containerpop  mt-4 ${this.count>1 ? "many" : "display-4" } `
        }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
