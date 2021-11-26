<template >
<div class="schedulerContainer">
<div class="leftDiv">
  <div class="scheduler">
    <DatePicker/>
  <input type="button" id="changeTheme" value="테마바꾸기">
  <input type="button" id="changeLang" value="언어바꾸기">

  </div>
  <div class="filter">
     <Filter/>
  </div>
</div>

<div class="rightDiv">
  <WeekCalendar/>
</div>

</div> 


</template>
<!-- <button @click="showAllDayEvents = (showAllDayEvents + 1) % 3">
  :show-all-day-events="{{ ["'short'", 'true', 'false'][showAllDayEvents] }}"
</button> -->
<!-- <button @click="customEventCreation">
    button
</button> -->
<!-- <vue-cal small
          :time-from="10 * 60"
          :time-to="16 * 60"
          :disable-views="['years', 'year']"
          hide-view-selector
          hide-title-bar
          hide-weekends
          editable-events
          :on-event-create="onEventCreate"
          @event-drag-create="showEventCreationDialog = true">
</vue-cal> -->
<script>

import DatePicker from './DatePicker.vue'
import WeekCalendar from './WeekCalendar.vue'
import Filter from './Filter.vue'

export default {
  name: 'Scheduler',
  components: {
    DatePicker,
    WeekCalendar,
    Filter,
  },
  methods: {
    clickDate(e){
      console.log(e)
    },
    alertMsg(){
      alert("모달창눌렀니")
    },
    newDate(){
      return new Date()
    },
    customEventCreation () {
    const dateTime = prompt('Create event on (YYYY-MM-DD HH:mm)', '2021-11-25 13:15')

    // Check if date format is correct before creating event.
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(dateTime)) {
      this.$refs.vuecal.createEvent(
        // Formatted start date and time or JavaScript Date object.
        dateTime,
        // Event duration in minutes (Integer).
        120,
        // Custom event props (optional).
        { title: 'New Event', content: 'yay! 🎉', class: 'blue-event' }
      )
      } else if (dateTime) alert('Wrong date format.')
    },

    onEventCreate (event, deleteEventFunction) {
      this.selectedEvent = event
      this.showEventCreationDialog = true
      this.deleteEventFunction = deleteEventFunction

      return event
    },
    cancelEventCreation () {
      this.closeCreationDialog()
      this.deleteEventFunction()
    },
    closeCreationDialog () {
      this.showEventCreationDialog = false
      this.selectedEvent = {}
    },
    
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
  // watch랑 updated랑 store 이름
  watch: {

  },

}
</script>

<style>
*{
  font-size: 15px;
}

/* vw로 가변넓이  */
.schedulerContainer{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding : 40px;
}
.leftDiv{
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.filter{
  color : #eee;
}

.filter > ul{
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

.rightDiv{
  width: 70vw;
}
</style>
