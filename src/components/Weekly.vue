<template>
    <section class="section">
        <div class="container">
            <h1 class="title">This Week</h1>
            <b-table
                :tableData="isEmpty ? [] : tableData"
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
                </template>
            </b-table>
        </div>
    </section>
</template>

<script>
    import data from '../assets/data.json'

    // var persons = [];
    // data.forEach(element => {
    //     persons.push({
    //         "name": element.name,

    //     });
    // });
    
    // var tableData = { persons };

    export default {
        data() {
            return { 
                tableData: data,
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