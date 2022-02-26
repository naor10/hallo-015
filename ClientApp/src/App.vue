<template>
  <div id="app">
    <div v-if="message">{{ message }}</div>
    <Table />
    <BarChart
      v-if="salaryData"
      title="Jobs Average Salaries"
      :data="salaryData"
      :scale="50000"
    />
    <BarChart
      v-if="popularityData"
      title="Jobs Popuplarity"
      :data="popularityData"
      :scale="100"
    />
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import BarChart from "./components/BarChart.vue";

export default {
  name: "App",
  components: {
    Table,
    BarChart,
  },
  data: function () {
    return {
      loaded: false,
      message: null,
      salaryData: null,
      popularityData: null,
    };
  },
  created() {
    fetch("http://localhost:3000/hallo/average-salaries").then((resp) => {
      resp.json().then((resp) => {
        if (resp.result) {
          this.salaryData = resp.result;
        } else if (resp.message) {
          this.message = resp.message;
        }
      });
    });

    fetch("http://localhost:3000/hallo/job-popularity").then((resp) => {
      resp.json().then((resp) => {
        if (resp.result) {
          this.popularityData = resp.result;
        } else if (resp.message) {
          this.message = resp.message;
        }
      });
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
