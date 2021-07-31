<template>
  <div class="container">
    <div>
      <input v-model="input" type="text"/>
      <select v-model="unit">
        <option value="s">Second</option>
        <option value="ms">MilliSeconds</option>
        <option value="us">MicroSeconds</option>
        <option value="ns">NanoSeconds</option>
      </select>
    </div>
    <ul>
      <li>General:<br/><code>{{ result.toString() }}</code></li>
      <li>Locale:<br/><code>{{ result.toLocaleString() }}</code></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UnixTimestampToLocal",
  data: () => ({
    input: `${Math.round((new Date()).getTime() / 1000)}`,
    unit: "s",
  }),
  computed: {
    result() {
      const value = parseInt(this.input);
      let fix = 1;
      switch (this.unit) {
        case "s": {
          fix = 1000;
          break;
        }
        case "us": {
          fix = 0.001;
          break;
        }
        case "ns": {
          fix = 0.000001;
          break;
        }
      }
      return (new Date(value * fix));
    }
  },
}
</script>

<style scoped>
.container {
  margin: 0 20px;
}

.container > div {
  margin: 20px 0;
}

ul {
  padding: 0 20px;
}
</style>
