<template>
<button @click="customEventCreation">
    button
</button>
<button @click="showAllDayEvents = (showAllDayEvents + 1) % 3">
  :show-all-day-events="{{ ["'short'", 'true', 'false'][showAllDayEvents] }}"
</button>
<vue-cal small
  hide-view-selector
  :time-from="7 * 60"
  :time-to="23 * 60"
  active-view="week"
  :disable-views="['years', 'year', 'month', 'day']"
  :selected-date="selectedDate"
  @cell-dblclick="alertMsg()"
  resize-x
  :events="events"
  :editable-events="{ title: true, drag: true, resize: true, delete: true, create: false }"
  :drag-to-create-threshold="0"
  ref="vuecal"
  :show-all-day-events="['short', true, false][showAllDayEvents]"
  class="vuecal--dark-theme"
  style="max-width: 100vh;height: 500px">
</vue-cal>

<vue-cal xsmall
  :time="false"
  hide-view-selector
  active-view="month"
  :disable-views="['week', 'day']"
  @cell-focus="selectedDate = $event"
  :events="events"
  class="vuecal--blue-theme vuecal--rounded-theme "
  style="max-width: 270px;height: 290px">
</vue-cal>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/drag-and-drop.js'

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
       events:[
      {
      start: '2021-11-22',
      end: '2021-11-23',
      title: 'Running Marathon',
      content: '2틀연속일정\n2틀연속일정\n2틀연속일정\n2틀연속일정',
      class: 'golf',
      allDay : true
    },
    {
      start: new Date(2021, 11 - 1, 24, 10, 30),
      end: new Date(2021, 11 - 1, 24, 10, 30),
      title: '<h1 style="text-decoration-line: line-through;" >쇼핑하기</h1>',
      content: '쇼핑쇼핑쇼핑쇼핑ㅅㅍ<i class="fa fa-arrow-left"></i>',
      class: 'leisure'
    },
    {
      start: this.newDate(),
      end: this.newDate(),
      title: '존과 함께하는 골프레슨',
      content: '골프 코스있는날',
      class: 'golf'
    },
    {
    start: '2021-11-26 14:00',
    end: '2021-11-26 17:30',
    title: 'Boring event',
    content: '보링보링보링보링보링보링보링보링보링보링보링보링보링보링보링',
    class: 'blue-event',
    deletable: true,
    resizable: true,
    draggable: false
  },
    {
      start: '2021-11-26 08:37',
      end: '2021-11-26 13:37',
      title: '존과 함께하는 골프레슨',
      content: '골프 코스있는날',
      class: 'golf'
    },
    {
      start: this.newDate(),
      end: this.newDate(),
      title: '아부지 생일',
      content: '케잌',
      class: 'sport',
    },
  ],
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
/* Green-theme. */

.vuecal__menu, .vuecal__cell-events-count {background-color: #808080;}

/* 제목 바 */  
.vuecal__title-bar {background-color: #808080;}
/* 오늘 날짜   */
.vuecal__cell--today, .vuecal__cell--current {background-color: rgba(128, 128, 128, 0.2);}
/* 선택된 날짜   */
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(128, 128, 128, 0.3);}
/* 선택된 날짜 테두리 */
.vuecal__cell--selected:before {border-color: rgba(128, 128, 128, 0.3);}

/* 작은 달력 타이틀 */
.vuecal--blue-theme .vuecal__title-bar{
  background-color : #808080;
}

/* 날짜 눌렀을 때 색깔 */
.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content{
  background-color: rgba(128, 128, 128, 0.2);
}

/* 날짜들 색깔 */
.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell-content {
    background-color: rgba(128,128,128,0.2);
}

/* 선택한 날짜 테두리 */
.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content {
    border-color: #808080;
}

/* 오늘날짜 색깔 */
.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content {
    background-color: #808080;
    color: #fff;
    
}

.vuecal__event.leisure {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}
.vuecal__event.sport {background-color: rgba(107, 255, 102, 0.9);border: 1px solid rgb(107, 255, 102);color: #fff;}
.vuecal__event.golf {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}

/* event가 있는 datePicker의 count css */
.vuecal--blue-theme .vuecal__cell-events-count{
  margin-top: 1px;
  background-color: rgba(128, 128, 128, 0.6);
  /* count 위치 */
  left: 95%;
}

/* Cells and buttons get highlighted when an event is dragged over it.
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {background-color: rgba(195, 255, 225, 0.5);}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);} */

</style>
