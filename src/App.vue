<template><div>
<Main :rates="getRates" />

    <div class="text-center">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</div>
</template>

<script>
import Main from './components/Main.vue'
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'App',
  components: {
    Main
  },
  computed:mapGetters(['getRates']),
  methods: {
    ...mapActions(['fetchData']),

  },
    created() {
      this.fetchData()
    }
}
</script>

<style>
</style>
