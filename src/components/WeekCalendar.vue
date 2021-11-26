<template>
  <vue-cal 
      small
      locale='ko'
      hide-view-selector
      :time-from="7 * 60"
      :time-to="23 * 60"
      active-view="week"
      :disable-views="['years', 'year', 'month', 'day']"
      :selected-date="selectedDate"
      @cell-dblclick="alertMsg()"
      resize-x
      :events=$store.state.data
      :editable-events="{ title: true, drag: true, resize: true, delete: true, create: false }"
      :drag-to-create-threshold="0"
      ref="vuecal"
      :show-all-day-events="['short', true, false][showAllDayEvents]"
      class="vuecal--dark-theme"
      style="width: 100% ;height: 100%"
      >
    </vue-cal>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/drag-and-drop.js'
import '../../node_modules/vue-cal/dist/i18n/ko.js'
import '../assets/css/blackTheme.css';

export default {
    components:{
        VueCal,
    },
    data() {
        return {
            selectedDate : null,
            showAllDayEvents: 0,
            shortEventsOnMonthView: false,
            eventsCssClasses: ['leisure', 'sport', 'health'],
            showEventCreationDialog: false,
            changeTheme : false,
            changeLang : false,
             // modal https://kr.vuejs.org/v2/examples/modal.html
        }
    },
}
</script>

<style>

</style>