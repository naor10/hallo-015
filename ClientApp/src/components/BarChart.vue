<template>
  <div>
    <h2>{{ title }}</h2>

    <br />
    <table class="barchart" cellpadding="1" cellspacing="0">
      <span v-for="[key, value] in Object.entries(data)" :key="key">
        <tr>
          <td>
            <span class="label">{{ value }}</span>
            <div
              class="bar"
              v-bind:style="{ height: (value / scale) * 100 + '%' }"
            ></div>
          </td>
        </tr>
        <tr>
          <td>{{ key }}</td>
        </tr>
      </span>
    </table>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  props: {
    title: String,
    data: Object,
    scale: Number,
  },
};
</script>

<style>
* {
  font-size: 18px;
}
/* Bar Chart */
.barchart {
  font-size: 9px;
  line-height: 15px;
  table-layout: fixed;
  text-align: center;
  width: 100%;
  height: 226px;
}
.barchart tr:nth-child(1) td {
  vertical-align: bottom;
  height: 200px;
}

.barchart .bar {
  background: #0da58e;
  padding: 10px 2px 0;
}

.barchart .label {
  margin-top: -30px;
  padding: 0 3px;
}
</style>
