import Vue from 'vue'
import Router from 'vue-router'
import LeaderBoard from '@/components/LeaderBoard'
import Weekly from '@/components/Weekly'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BurnItToEarnIt',
      components: {
        default: LeaderBoard, 
        weekly: Weekly
      }
    }
  ]
})
