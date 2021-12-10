<template>

  <vue-cal 
    xsmall
    locale="ko"
    :time="false"
    hide-view-selector
    active-view="month"
    :disable-views="['week', 'day']"
    @cell-focus="this.$store.commit('sendselectDate', $event)"
    :events=this.$store.state.data
    class="vuecal--blue-theme vuecal--rounded-theme "
    style="width: 100% ;height: 280px">
  </vue-cal>
  
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/drag-and-drop.js'
import '../../node_modules/vue-cal/dist/i18n/ko.js'
import '../assets/css/blackTheme.css';

export default {
    components : {
        VueCal,
    },
    data() {
      return {
        showAllDayEvents: 0,
        shortEventsOnMonthView: false,
        showEventCreationDialog: false,
        changeTheme : false,
        changeLang : false,
        // modal https://kr.vuejs.org/v2/examples/modal.html
      }
    },
    methods: {
    },
}
</script>

<style>
.vuecal--rounded-theme .vuecal__cell-content{
    font-size: 14px;
    width : 30px;
    height: 30px;
}
</style>