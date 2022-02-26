<template>
  <div class="hello">
    <table id="table" v-if="row">
      <tr>
        <th>Job</th>
        <th>Avg Salary</th>
        <th>Person name with the highest salary in this job</th>
      </tr>
      <tr>
        <td>{{ row.job }}</td>
        <td>{{ row.salary }}</td>
        <td>{{ row.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    msg: String,
  },
  data: function () {
    return {
      loaded: false,
      row: null,
    };
  },
  created() {
    fetch("http://localhost:3000/hallo/highest-salary?job=Web developer").then(
      (resp) => {
        resp.json().then((resp) => {
          this.row = resp.data[0];
        });
      }
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#table td,
#table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#table tr:hover {
  background-color: #ddd;
}

#table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
