<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Leaderboard</h1>
            <b-table striped mobile-cards default-sort="percent_change" default-sort-direction="desc" :data="tableData">
                <template slot-scope="props">
                    <b-table-column label="Name">
                        <span>{{ props.row.name }}</span>
                    </b-table-column>
                    <b-table-column label="Starting Weight" centered>
                        <span v-if="props.row.week0==undefined">--</span>
                        <span v-else>{{ props.row.week0 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 1" centered>
                        <span v-if="props.row.week1==undefined">--</span>
                        <span v-else>{{ props.row.week1 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 2" centered>
                        <span v-if="props.row.week2==undefined">--</span>
                        <span v-else>{{ props.row.week2 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 3" centered>
                        <span v-if="props.row.week3==undefined">--</span>
                        <span v-else>{{ props.row.week3 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 4" centered>
                        <span v-if="props.row.week4==undefined">--</span>
                        <span v-else>{{ props.row.week4 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 5" centered>
                        <span v-if="props.row.week5==undefined">--</span>
                        <span v-else>{{ props.row.week5 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 6" centered>
                        <span v-if="props.row.week6==undefined">--</span>
                        <span v-else>{{ props.row.week6 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 7" centered>
                        <span v-if="props.row.week7==undefined">--</span>
                        <span v-else>{{ props.row.week7 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 8" centered>
                        <span v-if="props.row.week8==undefined">--</span>
                        <span v-else>{{ props.row.week8 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 9" centered>
                        <span v-if="props.row.week9==undefined">--</span>
                        <span v-else>{{ props.row.week9 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 10" centered>
                        <span v-if="props.row.week10==undefined">--</span>
                        <span v-else>{{ props.row.week10 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 11" centered>
                        <span v-if="props.row.week11==undefined">--</span>
                        <span v-else>{{ props.row.week11 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 12" centered>
                        <span v-if="props.row.week12==undefined">--</span>
                        <span v-else>{{ props.row.week12 }}</span>
                    </b-table-column>
                    <b-table-column label="Total Loss" field="total_change" sortable>
                        <span v-if="props.row.total_change < 0" class="success">
                            {{ props.row.total_change }} lbs
                        </span>
                        <span v-else>
                            +{{ props.row.total_change }} lbs
                        </span>                        
                    </b-table-column>
                    <b-table-column label="Percent Change" field="percent_change" sortable>
                        <span v-if="props.row.total_change < 0" class="success">
                            {{ props.row.percent_change }}%
                            <b-icon icon="arrow-down-thick" size="is-small" type="is-success"></b-icon>
                        </span>
                        <span v-else>
                            {{ props.row.percent_change }}%
                            <b-icon icon="arrow-up-thick" size="is-small" type="is-danger"></b-icon>
                        </span>                        
                    </b-table-column>
                </template>
            </b-table>
        </div>
    </section>
</template>

<script>
    import data from '../assets/data.json'

    var tableData = [];  
    data.forEach(p => {
        var currentWeek;
        var contestant = {}
        contestant.name = p.name;
        for (var i=0; i<=12; i++){
            contestant['week'+i] = p.weighins[i];
            currentWeek = (p.weighins[i] != undefined) ? i : currentWeek;
        };
        contestant.total_change = Math.round((p.weighins[currentWeek] - p.weighins[0]) * 10) / 10;
        contestant.percent_change = Math.abs(Math.round((((p.weighins[currentWeek] / p.weighins[0]) * 100) - 100) * 100) / 100);
        tableData.push(contestant);
    });    
    console.log(tableData)
    export default {
        data() {
            return {
                tableData
            }
        }
    }
</script>