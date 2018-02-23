import Vue from 'vue'
import Router from 'vue-router'
import LeaderBoard from '@/components/LeaderBoard'
import Weekly from '@/components/Weekly'
import CompetitionStats from '@/components/CompetitionStats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BurnItToEarnIt',
      components: {
        default: LeaderBoard, 
        weekly: Weekly, 
        competitionStats: CompetitionStats
      }
    }
  ]
})
