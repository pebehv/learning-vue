<template>
  <div  id= 'welcome' class="hello">
    
    <h1>{{ msg }}</h1>
    <h4>{{ text }}</h4>
    <div class="container text-center">
      <div class="row">
        <div class="col" >
          
          <BarChart />  
        </div>
        <div class="col" >
          
          <lineChart />  
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BarChart from './BarChart.vue'
import lineChart from './lineChart.vue'
export default {
  name: 'HelloWorld',
  components: { BarChart, lineChart },
  props: {
   // msg: String
  },
  data(){
    return{

      msg: 'Welcome',
      text:'Practicing  VueJS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
