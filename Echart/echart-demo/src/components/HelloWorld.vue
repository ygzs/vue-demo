<template>
  <div>
    <div ref="chart" style="width:100%;height:376px"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  mounted(){
    this.getEchartData()
  },
  methods:{
    getEchartData() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
        myChart.setOption(option)
        window.addEventListener("resize", function() {
          myChart.resize()
        })
      }
      this.$on('hook:destroyed',()=>{
        window.removeEventListener("resize", function() {
          //myChart.resize();
        });
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
