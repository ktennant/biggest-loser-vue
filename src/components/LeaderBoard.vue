<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Summary</h1>
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
                        {{ props.row.name }}
                    </b-table-column>
                    <b-table-column label="Starting Weight" centered>
                        <span v-if="props.row.week0==''">--</span>
                        <span v-else>{{ props.row.week0 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 1" centered>
                        <span v-if="props.row.week1==''">--</span>
                        <span v-else>{{ props.row.week1 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 2" centered>
                        <span v-if="props.row.week2==''">--</span>
                        <span v-else>{{ props.row.week2 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 3" centered>
                        <span v-if="props.row.week3==''">--</span>
                        <span v-else>{{ props.row.week3 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 4" centered>
                        <span v-if="props.row.week4==''">--</span>
                        <span v-else>{{ props.row.week4 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 5" centered>
                        <span v-if="props.row.week5==''">--</span>
                        <span v-else>{{ props.row.week5 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 6" centered>
                        <span v-if="props.row.week6==''">--</span>
                        <span v-else>{{ props.row.week6 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 7" centered>
                        <span v-if="props.row.week7==''">--</span>
                        <span v-else>{{ props.row.week7 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 8" centered>
                        <span v-if="props.row.week8==''">--</span>
                        <span v-else>{{ props.row.week8 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 9" centered>
                        <span v-if="props.row.week9==''">--</span>
                        <span v-else>{{ props.row.week9 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 10" centered>
                        <span v-if="props.row.week10==''">--</span>
                        <span v-else>{{ props.row.week10 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 11" centered>
                        <span v-if="props.row.week11==''">--</span>
                        <span v-else>{{ props.row.week11 }}</span>
                    </b-table-column>
                    <b-table-column label="Week 12" centered>
                        <span v-if="props.row.week12==''">--</span>
                        <span v-else>{{ props.row.week12 }}</span>
                    </b-table-column>
                </template>
            </b-table>
        </div>
    </section>
</template>

<script>
    import weight from '../assets/weight.json'
    export default {
        data() {
            const tableData = weight

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