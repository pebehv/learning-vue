<template>
  <div id="bar">

    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'January', 'February', 'March' ],
          datasets: [
          {
            label: 'Ventas 2023',
            backgroundColor: '#41b883',
            data: [40, 20, 30, 50, 70
            ],
          },
          {
            label: 'Ventas 2022',
            backgroundColor: '#35495e',
            data: [30, 50, 40, 60, 90
            ],
          }
        ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>
  <style>
  #bar{
    width: 100%;
  }
  </style>