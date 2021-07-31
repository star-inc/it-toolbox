<template>
  <div class="container">
    <div>
      <input v-model="input" type="text"/>
      <select v-model="unit">
        <option value="s">Second</option>
        <option value="ms">Microsecond</option>
        <option value="ns">Nanosecond</option>
      </select>
    </div>
    <ul>
      <li>Result:<br/><code>{{ result }}</code></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UnixTimestampToLocal",
  data: () => ({
    input: "0",
    unit: "s",
  }),
  computed: {
    result() {
      const value = parseInt(this.input);
      let fix = 0;
      switch (this.unit) {
        case "s": {
          fix = 0.001;
          break;
        }
        case "ns": {
          fix = 1000;
          break;
        }
      }
      return (new Date(value * fix)).toString();
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
