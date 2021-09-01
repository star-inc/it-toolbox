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
import pako from "pako";

export default {
  name: "Base64Gzip",
  data: () => ({
    input: "",
    results: {
      encode: "",
      decode: ""
    }
  }),
  watch: {
    async input() {
      try {
        this.results.encode = new Buffer(pako.deflate(this.input, { to: 'string' })).toString("base64");
      } catch (e) {
        this.results.encode = "";
        void (e);
      }
      try {
        this.results.decode = pako.inflate(new Buffer(this.input, "base64"), { to: 'string' });
      } catch (e) {
        this.results.decode = "";
        void (e);
      }
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
