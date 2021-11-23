<template>
<vue-cal small
  :time="false"
  hide-view-selector
  active-view="week"
  :disable-views="['years', 'year', 'month', 'day']"
  :selected-date="selectedDate"
  class="vuecal--dark-theme"
  style="max-width: 800px;height: 500px">
</vue-cal>

<vue-cal xsmall
  :time="false"
  hide-view-selector
  active-view="month"
  :disable-views="['years', 'year', 'week', 'day']"
  @cell-focus="selectedDate = $event"
  class="vuecal--blue-theme vuecal--rounded-theme"
  style="max-width: 270px;height: 290px">
</vue-cal>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: 'App',
  components: {
    VueCal
  },
  methods: {
    clickDate(e){
      console.log(e)
    }
  },
  data() {
    return {
       selectedDate : null,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
