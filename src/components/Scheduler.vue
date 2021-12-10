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
        <vue-cal
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
      </div>

      <div class="white-bg-right">

        <input class="titleInput" type="text"  placeholder="Enter the Title..." v-model="this.$store.state.eventTitle">
        <textarea class="contentInput" rows="100" cols="100"  placeholder="Enter the Detail..." v-model="this.$store.state.eventContent"></textarea>
        
        <div class="timePicker">
          <span>
            <input class="startDate" type="text" placeholder="Start Date..." @click="this.$store.state.flagStartDate = true" v-model="this.$store.state.startDate" readonly>
          </span>
          <span>
            <input class="endDate" type="text" placeholder="End Date..." @click="this.$store.state.flagEndDate = true" v-model="this.$store.state.endDate" readonly>
          </span>
        
          <vue-timepicker auto-scroll v-model="this.$store.state.autoScrollData1"></vue-timepicker>
          <vue-timepicker auto-scroll v-model="this.$store.state.autoScrollData2"></vue-timepicker>
        </div>

        <div class="rightInput">

          <input  type="checkbox" id="isAllDay" v-model="this.$store.state.isAllDay" >
          <label for="isAllDay" >IsAllDay...?</label>
          <input  type="checkbox" id="delete" v-model="this.$store.state.deleteflag" >
          <label for="delete" >Don't Delete...!</label>
          <input  type="checkbox" id="resize" v-model="this.$store.state.resizeflag" >
          <label for="resize" >Don't Resize...!</label>

          <button v-for="(a, i) in this.$store.state.buttonText" :key="i" @click="filterClick" class="filter">{{a}}</button>

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
    
    cancelEventCreation() {
      this.closeCreationDialog()
      this.deleteEventFunction()
    },
    
    closeCreationDialog() {
      this.showEventCreationDialog = false
      this.selectedEvent = {}
    },

    // 필터 클릭시 색 변경
    filterClick(e){
      if(e.type === 'click'){
        let buttons = document.querySelectorAll('button.filter')
        for(let i = 0; i< buttons.length; i++){
          buttons[i].style.color = '#fff';
        }
        e.path[0].style.color = "#FF8906"
        this.$store.state.clickedValue = e.target.innerHTML
      }
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
    width: 50%;
    height: 40%;
    background: #414556;
    border-radius: 13px;
    padding: 20px;
    display: flex;
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
  width: 100%;
  /* display: flex; */
  /* flex-direction: column; */
}
.white-bg-left{
  width : 50%;
  padding: 10px;
}
.titleInput{
  width: 100%;
}
.contentInput{
  width : 100%;
  background-color : #2C2F3B;
  border : none;
  resize: none;
  height: 100px;
  border-radius: 8px;
  padding: 8px;
  margin: 3px;
}
.white-bg-right > input,
.timePicker > input{
  background-color : #2C2F3B;
  border : none;
  margin :3px;
  padding: 8px;
  border-radius: 8px;
  color : #999999;
}
.startDate{
  background-color : #2C2F3B;
  border : none;
  margin :3px;
  padding: 8px;
  border-radius: 8px;
  color : #999999;
  width: 45%;
}
.endDate{
  background-color : #2C2F3B;
  border : none;
  margin :3px;
  padding: 8px;
  border-radius: 8px;
  color : #999999;
  width: 45%
}

.rightInput > label{
  color : #999999;
}
.rightInput > input:checked{
  background-color: #2C2F3B ;
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
