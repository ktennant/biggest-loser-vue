import Vue from 'vue'
import Router from 'vue-router'
import Summary from '@/components/Summary'
import CurrentWeek from '@/components/CurrentWeek'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BurnItToEarnIt',
      components: {
        default: Summary, 
        currentWeek: CurrentWeek
      }
    }
  ]
})
