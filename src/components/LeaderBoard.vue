<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Summary</h1>
            <avatar username="Jane Doe"></avatar>
            <b-table
                :data="isEmpty ? [] : tableData"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :hoverable="isHoverable"
                :loading="isLoading"
                :mobile-cards="hasMobileCards">

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
                    <b-table-column label="Total Loss">
                        <span>{{ props.row.percentageWeightLoss }} | {{ props.row.totalWeightLoss }}</span>
                    </b-table-column>
                </template>
            </b-table>
        </div>
    </section>
</template>

<script>
    import data from '../assets/data.json'
    import Avatar from 'vue-avatar'

    var tableData = [];  
    data.forEach(p => {
        var currentWeek;
        var contestant = {}
        contestant.name = p.name;
        for (var i=0; i<=12; i++){
            contestant['week'+i] = p.weighins[i];
            currentWeek = (p.weighins[i] != undefined) ? i : currentWeek;
        };

        contestant.totalWeightLoss = p.weighins[0] - p.weighins[currentWeek];
        contestant.percentageWeightLoss = Math.round((p.weighins[currentWeek] / p.weighins[0]) * 100) / 100;

        tableData.push(contestant);
    });    

    export default {
        components: { Avatar }, 
        data() {
            return {
                tableData,
                isEmpty: false,
                isBordered: false,
                isStriped: true,
                isNarrowed: false,
                isHoverable: false,
                isLoading: false,
                hasMobileCards: true
            }
        }
    }
</script>