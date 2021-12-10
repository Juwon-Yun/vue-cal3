import { createStore } from 'vuex'
import moment from 'moment' // eslint-disable-line no-unused-vars

const scheduler = createStore({
    namespaced : true,

    state(){
        return {
            selectedDate : null,
            showAllDayEvents: 0,  
            shortEventsOnMonthView: false,
            showEventCreationDialog: false,
            changeTheme : false,
            changeLang : false,
            isModal : false,
            callAddFunction : false,
            
            // modal variables
            flagStartDate : false,
            flagEndDate : false,

            autoScrollData1 : '',
            autoScrollData2 : '',
            endDate : '',
            startDate :'',
            eventTitle : '',
            eventContent : '',
            selectedClass : '',
            clickedValue : '',

            isAllDay : '',
            deleteflag : '',
            resizeflag : '',

            buttonText : [
              '공통',
              '개인',
              '공지',
              '긴급',
              '휴가',
              '기타'
            ],

            data :[
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
                end: new Date(2021, 11 - 1, 24, 15, 30),
                title: '<h1 style="text-decoration-line: line-through;" >쇼핑하기</h1>',
                content: '쇼핑쇼핑쇼핑쇼핑ㅅㅍ<i class="fa fa-arrow-left"></i>',
                class: 'leisure'
              },
              {
                start: '2021-12-01 11:15',
                end: '2021-12-03 17:00',
                title: '존과 함께하는 골프레슨',
                content: '골프 코스있는날',
                class: 'golf',
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
                start: '2021-11-26 14:00',
                end: '2021-11-26 17:00',
                title: '아부지 생일',
                content: '케잌',
                class: 'sport',
              },
            ],
        }
    },
    mutations :{
      
      showData(state){
        console.log(state.addEventData)
      },

      sendselectDate(state, event){
        state.selectedDate = event
        return state.selectedDate;
      },

      setModal(state){
        state.isModal = true
      },
      
      closeModal(state, e){
        for(let i in e.target.classList){
          if(e.target.classList[i] === 'black-bg' || e.target.classList[i] === 'closeModalBtn'){
            state.isModal = false
          }else{
            return
          }
        }
      },

      setCallAddFunction(state, e){
        console.log(e)
        state.callAddFunction = !state.callAddFunction
        if(state.callAddFunction) {
          state.isModal = false
        }
      },
      getStartDate(state, e){
        console.log(e)
        state.flagStartDate = !state.flagStartDate
        state.startDate = e.format('YYYY-MM-DD')
      },
      getEndDate(state,e){
        console.log(e)
        state.flagEndDate = !state.flagEndDate
        state.endDate = e.format('YYYY-MM-DD')
      },

      createEventUseModal(state){
        switch (state.clickedValue) {
          case '공통':
            state.clickedValue = 'common'   
            break;
          case '개인':
            state.clickedValue = 'individual'   
            break;
          case '공지':
            state.clickedValue = 'notice'   
            break;
          case '긴급':
            state.clickedValue = 'Emergency'   
            break;
          case '휴가':
            state.clickedValue = 'vacation'   
            break;
          case '비고':
            state.clickedValue = 'note'   
            break;
        }

        if(state.isAllDay !== true){
          state.isAllDay = false
        }

        if(state.deleteflag === ''){
          state.deleteflag = true
        }else{
          state.deleteflag = false
        }

        if(state.resizeflag === ''){
          state.resizeflag = true
        }else{
          state.resizeflag = false
        }

        const arr ={
          id : 'a002',
          start : state.startDate +' '+ state.autoScrollData1,
          end : state.endDate + ' ' + state.autoScrollData2,
          title : state.eventTitle,
          content : state.eventContent,
          class : state.clickedValue,
          deletable: state.deleteflag,
          resizable: state.resizeflag,
          draggable: true,
          allDay : state.isAllDay,

        }

        console.log(arr)
        state.data.push(arr)
        console.log('data => ', state.data )
        state.isModal = false
      },

    },
})

export default scheduler;