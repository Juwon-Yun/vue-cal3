<template >

<div class="schedulerContainer">
<div class="leftDiv">
  <div class="scheduler">
    <DatePicker/>
    <br>
    <br>
    <br>
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
import { mapMutations } from 'vuex'

export default {
  name: 'Scheduler',
  components: {
    DatePicker,
    WeekCalendar,
    Filter,
  },

  methods: {
    ...mapMutations({
      showData : 'showData',
      closeModal : 'closeModal',
      setCallAddFunction : 'setCallAddFunction',
    }),


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
       
      // modal https://kr.vuejs.org/v2/examples/modal.html

    }
  },
  // watch랑 updated랑 store 이름
  watch: {

  },

}
</script>

<style scope>
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
  /* justify-content: space-between; */
}

.filter{
  color : #eee;
  font-size: 20px;
  margin-top: 250px;
}

.filter > ul{
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

.rightDiv{
  padding-top: 70px;
  width: 70vw;
}

.black-bg,
.white-bg{
    box-sizing: border-box;

}
.black-bg{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
}
.white-bg{
    width: 50%;
    height: 50vh;
    background: white;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
}


</style>
