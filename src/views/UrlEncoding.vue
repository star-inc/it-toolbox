<template>
  <div class="container">
    <div>
      <input v-model="input" type="text"/>
    </div>
    <ul>
      <li>Encode:<br/><code>{{ results.encode }}</code></li>
      <li>Decode:<br/><code>{{ results.decode }}</code></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UrlEncoding",
  data: () => ({
    input: "",
    results: {
      encode: "",
      decode: ""
    }
  }),
  watch: {
    input() {
      this.results.encode = encodeURIComponent(this.input);
      this.results.decode = decodeURIComponent(this.input);
    }
  }
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
