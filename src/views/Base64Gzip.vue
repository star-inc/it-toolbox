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
import zlib from "zlib";

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
        this.results.encode = await this.compress(this.input);
      } catch (e) {
        this.results.encode = "";
        void (e);
      }
      try {
        this.results.decode = await this.decompress(this.input);
      } catch (e) {
        this.results.decode = "";
        void (e);
      }
    }
  },
  methods: {
    async compress(rawString) {
      return new Promise((resolve, reject) =>
          zlib.gzip(rawString, (error, result) => void (!error ? resolve(new Buffer(result).toString("base64")) : reject(error)))
      );
    },
    async decompress(b64String) {
      return new Promise((resolve, reject) =>
          zlib.gunzip(new Buffer(b64String, "base64"), (error, result) => void (!error ? resolve(result) : reject(error)))
      );
    },
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
