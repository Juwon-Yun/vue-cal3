import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            selectedDate : null,
            showAllDayEvents: 0,  
            shortEventsOnMonthView: false,
            showEventCreationDialog: false,
            changeTheme : false,
            changeLang : false,
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
                start: '2021-11-25 14:00',
                end: '2021-11-25 17:00',
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
        // Send Date
        sendselectDate(state, event){
          state.selectedDate = event
          return this.selectedDate;
        },
        addData(){},
        deleteData(){},
        updateData(){},
    },
})

export default store;