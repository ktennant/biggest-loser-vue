import Vue from 'vue'
import Router from 'vue-router'
import LeaderBoard from '@/components/LeaderBoard'
import CurrentWeek from '@/components/CurrentWeek'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BurnItToEarnIt',
      components: {
        default: LeaderBoard, 
        currentWeek: CurrentWeek
      }
    }
  ]
})
