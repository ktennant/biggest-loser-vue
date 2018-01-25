<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Weekly Results</h1>
            <b-tabs v-model="activeTab">
                <b-tab-item label="Week 1">
                    <template>
                        <section>
                            <b-table
                                :data="isEmpty ? [] : weekOneData"
                                :bordered="isBordered"
                                :striped="isStriped"
                                :narrowed="isNarrowed"
                                :hoverable="isHoverable"
                                :loading="isLoading"
                                :mobile-cards="hasMobileCards">

                                <template slot-scope="row">
                                    <b-table-column label="Name">
                                        {{ row.name }}
                                    </b-table-column>

                                    <b-table-column label="Starting Weight">
                                        {{ row.start_weight }}
                                    </b-table-column>

                                    <b-table-column label="End Weight">
                                        {{ row.end_weight }}
                                    </b-table-column>

                                    <b-table-column label="Weight Change">
                                        {{ row.actual_change }}
                                    </b-table-column>

                                    <b-table-column label="Percent Change">
                                        {{ row.percent_change }}
                                    </b-table-column>
                                </template>
                            </b-table>
                        </section>
                    </template>
                </b-tab-item>
                
                <b-tab-item label="Week 2">
                </b-tab-item>
                <b-tab-item label="Week 3">
                </b-tab-item>
                <b-tab-item label="Week 4">
                </b-tab-item>
                <b-tab-item label="Week 5">
                </b-tab-item>
                <b-tab-item label="Week 6">
                </b-tab-item>
                <b-tab-item label="Week 7">
                </b-tab-item>
                <b-tab-item label="Week 8">
                </b-tab-item>
                <b-tab-item label="Week 9">
                </b-tab-item>
                <b-tab-item label="Week 10">
                </b-tab-item>
                <b-tab-item label="Week 11">
                </b-tab-item>
                <b-tab-item label="Week 12">
                </b-tab-item>
            </b-tabs>
        </div>
    </section>
</template>

<script>
    import data from '../assets/data.json'
    
//todo: weekly should be array of objects that support tables
//weeklydata[week1:[contestant, contestant], week2:[contestant, contestant]]
    var weeklyData = [];  
    data.forEach(p => {
        var weeks = []; 
        var contestants = [];  
        for (var i=1; i<=12; i++){
            var contestant = {};
            contestant.name = p.name;
            contestant.starting_weight = p.weighins[i-1];
            contestant.end_weight = p.weighins[i];
            contestant.actual_change = p.weighins[0] - p.weighins[i];
            contestant.percent_change = Math.round((p.weighins[i] / p.weighins[0]) * 100) / 100;
            contestants.push(contestant);
        };      
        weeks.push(contestants);
        console.log(weeks)
    });   

    export default {
        data() {
            return {
                activeTab: 0, 
                weekOneData: weeklyData[0],
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isLoading: false,
                hasMobileCards: true
            }
        }
    }
</script>