<template>
<!-- <button @click="showAllDayEvents = (showAllDayEvents + 1) % 3">
  :show-all-day-events="{{ ["'short'", 'true', 'false'][showAllDayEvents] }}"
</button> -->
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
  style="max-width: 100vh;height: 600px">
</vue-cal>
<button @click="customEventCreation">
    button
</button>

<vue-cal 
  xsmall
  locale='ko'
  :time="false"
  hide-view-selector
  active-view="month"
  :disable-views="['week', 'day']"
  @cell-focus="selectedDate = $event"
  :events=$store.state.data
  class="vuecal--blue-theme vuecal--rounded-theme "
  style="max-width: 270px;height: 290px">
</vue-cal>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/drag-and-drop.js'
import '../node_modules/vue-cal/dist/i18n/ko.js'


export default {
  name: 'App',
  components: {
    VueCal
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
  },
  data() {
    return {
       selectedDate : null,
       showAllDayEvents: 0,
       shortEventsOnMonthView: false,
    }
  },
  // watch랑 updated랑 store 이름
  watch: {

  }

}
</script>

<style>
*{
  font-size: 15px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Dark-theme. */
.vuecal__menu,
.vuecal__cell-events-count {
  background-color: rgba(44, 47, 59, 0.4);
  color: #fff;
}

/* body color */
.vuecal__flex .vuecal__body{
  background-color: #2C2F3B;
}
/* 날짜 표기 Text*/
.vuecal__flex .weekday-label{
  color: #fff;
}
/* 달력 타이틀 바 */  
.vuecal__title-bar,
.vuecal--blue-theme .vuecal__title-bar{
  background-color:rgba(44, 47, 59, 1);
  color: #fff;
}
/* DatePicker의 타이틀 Text */
.vuecal__flex .vuecal__title > button{
  color: #fff;
}


/* 오늘 날짜   */
.vuecal__cell--today, .vuecal__cell--current {background-color: rgba(153, 153, 153, 0.2);}
/* 선택된 날짜   */
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(153, 153, 153, 0.3);}
/* 선택된 날짜 테두리 */
.vuecal__cell--selected:before {border-color: rgba(153, 153, 153, 0.3);}



/* 날짜 눌렀을 때 색깔 */
.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content{
  background-color: rgb(255, 255, 255, 0.2);
}

/* 날짜들 색깔 */
.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell-content {
    background-color: #fff;
}

/* 선택한 날짜 테두리 */
.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content {
    border-color: rgb(255, 255, 255, 0.2);
}

/* 오늘날짜 색깔 */
.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content {
    background-color: rgb(255, 255, 255, 0.2);
    color: #fff;
    
}

.weekday-label {
  flex-direction: column-reverse;
}


/* event가 있는 datePicker의 count css */
.vuecal--blue-theme .vuecal__cell-events-count{
  margin-top: 1px;
  background-color: #ddd;
  color : #000;
  /* count 위치 */
  left: 95%;
}
/* DatePicker와 Scheduler 화살표 색상 */
.vuecal__title-bar > button{
  color: #fff;
}

/* DatePircker의 주간 날짜 바  */
.vuecal__weekdays-headings{
  background-color:rgba(44, 47, 59, 0.7);
}

.vuecal__event.leisure {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}
.vuecal__event.sport {background-color: rgba(105, 102, 255, 0.9);border: 1px solid rgb(105, 102, 255);color: #fff;}
.vuecal__event.golf {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}
/* Cells and buttons get highlighted when an event is dragged over it.
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {background-color: rgba(195, 255, 225, 0.5);}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);} */

</style>
