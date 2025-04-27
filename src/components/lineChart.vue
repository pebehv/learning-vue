<template>
    <div id="lineChart">
        <Line :data="chartConfig.data" :options="chartConfig.options" />

    </div>
  </template>
 
<script>
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    )
export default{
    name: 'lineChart',
    components: {
        Line
    },
    data(){
        return{
            chartConfig
        }
    }
}
</script> 
  
<style>
#lineChart{
    width: 100%;
}
</style>