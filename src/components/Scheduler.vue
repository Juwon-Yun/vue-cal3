<template >
  <div class="black-bg" v-if="this.$store.state.isModal" @click="closeModal">
  <div class="white-bg">
      <div class="white-bg-left">
        <vue-cal 
          xsmall
          locale="ko"
          :time="false"
          hide-view-selector
          active-view="month"
          @cell-click="this.getStartDate"
          :disable-views="['years','year','week', 'day']"
          class="vuecal--blue-theme vuecal--rounded-theme startDatePicker"
          style="width: 100% ;height: 100%">
        </vue-cal>
        <!-- <vue-cal
          xsmall
          locale="ko"
          :time="false"
          hide-view-selector
          active-view="month"
          @cell-click="this.getEndDate"
          :disable-views="['years','year','week', 'day']"
          class="vuecal--blue-theme vuecal--rounded-theme startDatePicker"
          style="width: 300px ;height: 280px">
        </vue-cal> -->
      </div>

      <div class="white-bg-right">

        <input type="text" style="width: 100%" placeholder="Enter the Title..." v-model="this.$store.state.eventTitle">
        <input type="text" style="width: 100%; height : 90px;" placeholder="Enter the Detail..." v-model="this.$store.state.eventContent">
        
        <input style="width: 48%" type="text" placeholder="Start Date..." @click="this.$store.state.flagStartDate = true" v-model="this.$store.state.startDate" readonly>
        <input style="width: 49%" type="text" placeholder="End Date..." @click="this.$store.state.flagEndDate = true" v-model="this.$store.state.endDate" readonly>
        
        <div style="display: flex;" class="timePicker">
          <vue-timepicker auto-scroll v-model="this.$store.state.autoScrollData1"></vue-timepicker>
          <vue-timepicker auto-scroll v-model="this.$store.state.autoScrollData2"></vue-timepicker>
        </div>

        <div class="rightInput">
          <select v-model="this.$store.state.selectedClass">
            <option>야구</option>
            <option>골프</option>
            <option>헬스</option>
          </select>

          <input type="checkbox" name="" id="">
          <input type="checkbox" name="" id="">
          <input type="checkbox" name="" id="">

          <button>공통</button>
          <button>개인</button>
          <button>공지</button>
          <button>긴급</button>
          <button>휴가</button>
          <button>기타</button>

          <input type="button" value="CANCEL" class="closeModalBtn" id="cancelBtn">
          <input type="button" value="CREATE" @click="this.createEventUseModal" id="createBtn" class="closeModalBtn">
        </div>
      
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
    width: 40%;
    height: 40%;
    background: #414556;
    border-radius: 13px;
    padding: 20px;
    display: flex;
}
.white-bg > *{
  height: 100%;
}

.startDatePicker{
  position: relative;
}
.vuecal__weekdays-headings,
.vuecal__all-day {
  padding-right : 0px;
}
.white-bg-right{
  padding: 10px;
}
.white-bg-left{
  padding: 10px;
}
.white-bg-right > input,
.rightInput > input{
  background-color : #2C2F3B;
  border : none;
  margin :3px;
  padding: 8px;
  border-radius: 8px;
  color : #999999;
}
.rightInput {
  display: flex;
}
.rightInput > button {
  width: 40%;
  color : #eee;
}
.vue__time-picker{
  width : 49%;
}

.vue__time-picker input.vue__time-picker-input {
  width : 98%;
  background-color : #2C2F3B;
  border: none;
  border-radius: 8px;
  margin: 3px;
}

#cancelBtn{
  background-color: #FF5C5C;  
  color : #eee;
}

#createBtn{
  background-color: #FF8906;
  color : #eee;
}
</style>
