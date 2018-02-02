<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Weekly Results</h1>
            <b-tabs v-model="activeTab">
                <b-tab-item v-for="(week, index) in weeklyData" :key="index" :label="'Week ' + (index+1)">
                    <b-table striped mobile-cards default-sort="percent_change" default-sort-direction="desc" :data="week">
                        <template slot-scope="props">
                            <b-table-column label="Name">
                                {{ props.row.name }}
                            </b-table-column>
                            <b-table-column label="Starting Weight" style="min-width:120px;" numeric>
                                {{ props.row.start_weight }}
                            </b-table-column>
                            <b-table-column label="End Weight" style="min-width:120px;" numeric>
                                {{ props.row.end_weight }}
                            </b-table-column>
                            <b-table-column label="Total Loss" style="min-width:120px;" numeric>
                                <span v-if="props.row.total_change < 0" class="success">
                                    {{ props.row.total_change }} lbs
                                </span>
                                <span v-else>
                                    +{{ props.row.total_change }} lbs
                                </span>                        
                            </b-table-column>
                            <b-table-column label="Percent Change" field="percent_change" style="min-width:180px;" numeric sortable>
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
                </b-tab-item>
            </b-tabs>
        </div>
    </section>
</template>

<script>
    import data from '../assets/data.json'

    var weeklyData = []; 
    var currentWeek;

    for (var i=1; i<=12; i++){
        var contestants = [];
        data.forEach(p => {
            var contestant = {};
            contestant.name = p.name;
            contestant.start_weight = p.weighins[i-1];
            contestant.end_weight = p.weighins[i];
            contestant.total_change = Math.round((p.weighins[i] - p.weighins[i-1]) * 10) / 10;
            contestant.percent_change = Math.abs(Math.round((((p.weighins[i] / p.weighins[i-1]) * 100) - 100) * 100) / 100);;
            contestants.push(contestant);
            currentWeek = (p.weighins[i] != undefined) ? i : currentWeek;
        });
        weeklyData.push(contestants);
    }   
    console.log(weeklyData)
    export default {
        data() {
            return {
                activeTab: currentWeek-1, 
                weeklyData
            }
        }
    }
</script>