<template>

<div>
  <vue-cal 
      small
      locale='ko'
      hide-view-selector
      :time-from="7 * 60"
      :time-to="23 * 60"
      active-view="week"
      :disable-views="['years', 'year', 'month', 'day']"
      :selected-date=this.$store.state.selectedDate
      @cell-dblclick="alertMsg()"
      resize-x
      :events=this.$store.state.data
      :editable-events="{ title: true, drag: true, resize: true, delete: true, create: false }"
      :drag-to-create-threshold="0"
      ref="vuecal"
      :show-all-day-events="['short', true, false][showAllDayEvents]"
      class="vuecal--dark-theme"
      style="width: 100% ;height: 100%"
      >
    </vue-cal>
    <button @click="customEventCreation" style="color : #eee;">
        button
    </button>
</div>

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
    methods: {
        clickDate(e){
            console.log(e)
        },

        alertMsg(){
            alert("모달창눌렀니")
        },
        customEventCreation () {
            const dateTime = prompt('Create event on (YYYY-MM-DD HH:mm)', '2021-11-27 11:15')

            // Check if date format is correct before creating event.
            if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(dateTime)) {
                this.$refs.vuecal.createEvent(
                    // Formatted start date and time or JavaScript Date object.
                    dateTime,
                    // Event duration in minutes (Integer). 일정 기간
                    360,
                    // Custom event props (optional).
                    { title: 'New Event', content: 'yay! 🎉', class: 'blue-event' }
                )
            } else if (dateTime) alert('Wrong date format.')
      },
    },
    data() {
        return {
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