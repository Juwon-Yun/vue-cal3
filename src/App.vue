<template>
<vue-cal small
  :time="false"
  hide-view-selector
  active-view="week"
  :disable-views="['years', 'year', 'month', 'day']"
  :selected-date="selectedDate"
  @cell-dblclick="alertMsg()"

  class="vuecal--dark-theme"
  style="max-width: 100vh;height: 500px">
</vue-cal>

<vue-cal xsmall
  :time="false"
  hide-view-selector
  active-view="month"
  :disable-views="['week', 'day']"
  @cell-focus="selectedDate = $event"
  class="vuecal--blue-theme vuecal--rounded-theme "
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
    },
    alertMsg(){
      alert("모달창눌렀니")
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


/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {background-color: rgba(195, 255, 225, 0.5);}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);}

</style>
