<template>


<div>
  <vue-cal 
      small
      locale='ko'
      hide-view-selector
      :time-from="7 * 60"
      :time-to="23 * 60"
      active-view="week"

      :disable-views="['years', 'year', 'month', 'day']"
      :selected-date=this.$store.state.selectedDate

      @cell-dblclick="customEventCreation($event)"
      @cell-click="setModal"

      resize-x
      :events=this.$store.state.data
      :editable-events="{ title: true, drag: true, resize: true, delete: true, create: false }"
      ref="vuecal"
      :drag-to-create-threshold="20"
      class="vuecal--dark-theme vuecal--full-height-delete"
      style="width: 100% ;height: 100%"
      :show-all-day-events="['short', true, false][showAllDayEvents]"
      >
    </vue-cal>
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
        }
    },

    methods: {
        ...mapMutations({
            // 단일 vuex일때는 'store명/함수명'이 아닌 '함수명'을 기재해야 작동한다. 
            setModal : 'setModal',
            setCallAddFunction : 'setCallAddFunction',
            closeModal : 'closeModal',
        }),

        showDate(e){
            console.log(e)
        },

        clickDate(e){
            console.log(e)
        },

        alertMsg(){
            alert("모달창눌렀니")
        },
        
        customEventCreation (e) {
            e = e.format('YYYY-MM-DD HH:mm')

            console.log('e_custom',e)

            const e_dateTime = prompt('Create event on (YYYY-MM-DD HH:mm)', e)
            const arr = {
                start : e_dateTime,
                end : e_dateTime,
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
        '$store.state.callAddFunction'() {
            // if(newVal){
            //         this.customEventCreation()
            // } 
        }
    }
}
</script>

<style>
</style>