<template>


<div>
  <vue-cal 
      small
      locale='ko'
      hide-view-selector
      :time-from="0 * 60"
      :time-to="24 * 60"
      active-view="week"
      :disable-views="['years', 'year', 'month', 'day']"
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
      style="width: 100% ;height: 100%;"
      :show-all-day-events="['short', true, false][showAllDayEvents]"
      >
    </vue-cal>
    
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
            eventsCssClasses: ['common', 'individual', 'notice', 'Emergency', 'vacation', 'note'],
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
            let momentedEndTime=e.event.end.format('YYYY-MM-DD HH:mm')
            let copy = [...this.$store.state.data];

            for(let i = 0; i < copy.length; i++){
                if(e.event.id === copy[i].id){
                    copy[i].end = momentedEndTime
                }
            }
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
        '$store.state.data.length'() {
        }
    }
}
</script>

<style>
</style>