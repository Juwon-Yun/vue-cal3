<template>
<div class="black-bg" v-if="this.$store.state.isModal" @click="closeModal">
  <div class="white-bg" >
      일정명 : <input type="text" placeholder="일정명을 입력하세요.">
      내용 : <input type="text" placeholder="내용을 입력하세요.">
      분류 : <select>
        <option>야구</option>
        <option>골프</option>
        <option></option>
      </select>
      <input type="button" @click="showData" value="show Value btn">
      <input type="button" @click="setCallAddFunction" value="대근이가 추가한 이벤트">
      <input type="button" value="모달창 닫기" class="closeModalBtn">
  </div>
</div>

<div>
  <vue-cal 
      small
      locale='ko'
      hide-view-selector
      :time-from="7 * 60"
      :time-to="23 * 60"
      active-view="week"
      :disable-views="['years', 'year', 'month', 'day']"
      @cell-dblclick="customEventCreation($event)"
      resize-x
      :editable-events="{ title: true, drag: true, resize: true, delete: true, create: false }"
      :events=this.$store.state.data
      class="vuecal--dark-theme vuecal--full-height-delete"
      
      @event-delete="deleteEventFunction"
      @event-duration-change="resizeUpdateEventFunction"
      @event-drop="dropUpdateEventFunction"

      :selected-date=this.$store.state.selectedDate
      ref="vuecal"
      :drag-to-create-threshold="20"
      style="width: 100% ;height: 100%"
      :show-all-day-events="['short', true, false][showAllDayEvents]"
      >
    </vue-cal>
      <!-- :event-delete="alertMsg()" -->
    <button @click="customEventCreation" style="color : #eee;">
        button
    </button>
    
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/drag-and-drop.js'
import '../../node_modules/vue-cal/dist/i18n/ko.js'
import '../assets/css/blackTheme.css';
import moment from 'moment' // eslint-disable-line no-unused-vars


export default {
    name: 'WeekCalendar',

    components:{
        VueCal,
    },

    data() {
        return {
            showAllDayEvents: 0,
            shortEventsOnMonthView: false,
            eventsCssClasses: ['leisure', 'sport', 'health'],
            showEventCreationDialog: false,
            changeTheme : false,
            changeLang : false,
            selectedEvent : '',
        }
    },

    methods: {
        ...mapMutations({
            // 단일 vuex일때는 'store명/함수명'이 아닌 '함수명'을 기재해야 작동한다. 
            setModal : 'setModal',
            setCallAddFunction : 'setCallAddFunction',
            closeModal : 'closeModal',
        }), 

        deleteEventFunction(e){
            console.log('deleteEvent', e)
            console.log(e.id)

            let copy = [...this.$store.state.data];

            for(let i = 0; i<copy.length; i++){

                if(e.id === copy[i].id){
                    copy.splice(i,1);
                }
            }

            this.$store.state.data = copy;
        },
        
        dropUpdateEventFunction(e){
            let copy = [...this.$store.state.data];
            
            // console.log(e)
            // console.log(e.event.start)
            // console.log(e.event.end)
            let momentedStartTime = e.event.start.format('YYYY-MM-DD HH:mm')
            let momentedEndTime = e.event.end.format('YYYY-MM-DD HH:mm')

            for(let i = 0; i<copy.length; i++){
                if(e.event.id === copy[i].id){
                    copy[i].start = momentedStartTime
                    copy[i].end = momentedEndTime
                }
            }

        },
        resizeUpdateEventFunction(e){
            // console.log(e)
            // console.log(e.event.end)
            let momentedEndTime=e.event.end.format('YYYY-MM-DD HH:mm')
            let copy = [...this.$store.state.data];
            for(let i = 0; i < copy.length; i++){
                if(e.event.id === copy[i].id){
                    copy[i].end = momentedEndTime
                }
            }
        },
        onEventCreate (event, deleteEventFunction) {
            console.log(event)
            this.selectedEvent = event
            // this.showEventCreationDialog = true
            this.deleteEventFunction = deleteEventFunction

            return event
        },

        clickDate(e){
            console.log(e)
        },

        alertMsg(){
            alert("모달창눌렀니")
        },
        
        customEventCreation (e) {
            e = e.format('YYYY-MM-DD HH:mm')
            let nowDate = moment().format('YYYY-MM-DD HH:mm')
            let e_dateTime = prompt('일정 시간을 입력(YYYY-MM-DD HH:mm)', e)
            const arr = {
                id : 'a001',
                start : e_dateTime,
                end : nowDate,
                title : '그냥제목',
                content : '그냥컨텐츠',
                class : 'golf',
            }
             
            this.$store.state.data.push(arr)
            
            if(!e_dateTime){
                alert('일정 입력이 취소되었습니다.')
            }   
      },
    },
    watch : {
        '$store.state.data'() {

        }
    }
}
</script>

<style>
</style>