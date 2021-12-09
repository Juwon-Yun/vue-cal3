<template >
  <div class="black-bg" v-if="this.$store.state.isModal" @click="closeModal">
  <div class="white-bg" >
      <div>
        <input type="text" placeholder="일정명을 입력하세요." v-model="this.$store.state.eventTitle">
        <input type="text" placeholder="내용을 입력하세요." v-model="this.$store.state.eventContent">
        
        <select v-model="this.$store.state.selectedClass">
          <option>야구</option>
          <option>골프</option>
          <option>헬스</option>
        </select>
        <input type="text" placeholder="시작일" @click="this.$store.state.flagStartDate = true" v-model="this.$store.state.startDate" readonly>
        
        <vue-cal v-if="this.$store.state.flagStartDate === true" 
          xsmall
          locale="ko"
          :time="false"
          hide-view-selector
          active-view="month"
          @cell-click="this.getStartDate"
          :disable-views="['years','year','week', 'day']"
          class="vuecal--blue-theme vuecal--rounded-theme startDatePicker"
          style="width: 300px ;height: 280px">
        </vue-cal>
        <vue-timepicker auto-scroll v-model="this.$store.state.autoScrollData1"></vue-timepicker>


        <input type="text" placeholder="종료일" @click="this.$store.state.flagEndDate = true" v-model="this.$store.state.endDate" readonly>
        <vue-cal v-if="this.$store.state.flagEndDate === true" 
          xsmall
          locale="ko"
          :time="false"
          hide-view-selector
          active-view="month"
          @cell-click="this.getEndDate"
          :disable-views="['years','year','week', 'day']"
          class="vuecal--blue-theme vuecal--rounded-theme startDatePicker"
          style="width: 300px ;height: 280px">
        </vue-cal>
        <vue-timepicker auto-scroll v-model="this.$store.state.autoScrollData2"></vue-timepicker>

      </div>

      <div>
        <button style="background-color: #2C2F3B;" class="closeModalBtn" @click="this.createEventUseModal">
        <i  class="fab fa-apple" style="color: #eee; font-size:50px "></i>
        </button>
        <br>
        <input type="button" value="모달창 닫기" class="closeModalBtn">
      </div>    
  </div>
</div>

<div class="schedulerContainer">
<div class="leftDiv">
  <div class="scheduler">
    <DatePicker/>
    <br>
    <br>
  <i  style="color: #eee; font-size:50px " @click="this.$store.state.isModal=true" 
  class="fab fa-apple"></i>
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

<script>
// npm install vue3-timepicker --save

import DatePicker from './DatePicker.vue'
import WeekCalendar from './WeekCalendar.vue'
import Filter from './Filter.vue'
import { mapMutations } from 'vuex'

import VueTimepicker from 'vue3-timepicker'
import 'vue3-timepicker/dist/VueTimepicker.css'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/drag-and-drop.js'
import '../../node_modules/vue-cal/dist/i18n/ko.js'
import '../assets/css/blackTheme.css';

export default {
  name: 'Scheduler',
  components: {
    DatePicker,
    WeekCalendar,
    Filter,
    VueTimepicker,
    VueCal,
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      showData : 'showData',
      closeModal : 'closeModal',
      setCallAddFunction : 'setCallAddFunction',
      createEventUseModal : 'createEventUseModal',
      getStartDate : 'getStartDate',
      getEndDate : 'getEndDate',
    }),
    checkEvent(e){
      console.log(e)
    },
   
    cancelEventCreation() {
      this.closeCreationDialog()
      this.deleteEventFunction()
    },
    closeCreationDialog() {
      this.showEventCreationDialog = false
      this.selectedEvent = {}
    },
    
  },
 
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
    width: 30%;
    height: 50vh;
    background: white;
    border-radius: 13px;
    padding: 20px;
    display: flex;
    flex-direction: column;
}
.white-bg > *{
  height: 100%;
}

.startDatePicker{
  position: absolute;
  left: 60%;
}
</style>
