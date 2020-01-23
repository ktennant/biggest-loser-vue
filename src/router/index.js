import Vue from "vue";
import Router from "vue-router";
import LeaderBoard from "@/components/LeaderBoard";
import Weekly from "@/components/Weekly";
import CompetitionStats from "@/components/CompetitionStats";
import LeaderBoard2018 from "@/components/LeaderBoard2018";
import Weekly2018 from "@/components/Weekly2018";
import CompetitionStats2018 from "@/components/CompetitionStats2018";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "bigbuttsrus",
      components: {
        default: LeaderBoard,
        weekly: Weekly,
        competitionStats: CompetitionStats
      }
    },
    {
      path: "/2018",
      name: "burnittoearnit",
      components: {
        default: LeaderBoard2018,
        weekly: Weekly2018,
        competitionStats: CompetitionStats2018
      }
    }
  ]
});
