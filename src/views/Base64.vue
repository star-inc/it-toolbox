<template>
  <div class="container">
    <div>
      <input v-model="input" type="text"/>
    </div>
    <span>
      Special thanks:
      <a href="https://github.com/dankogai/js-base64">dankogai/js-base64</a>
      provides the fast Base64 transcoder library.
    </span>
    <ul>
      <li>Encode:<br/><code>{{ results.encode }}</code></li>
      <li>Decode:<br/><code>{{ results.decode }}</code></li>
    </ul>
  </div>
</template>

<script>
import {decode, encode} from 'js-base64';

export default {
  name: "Base64",
  data: () => ({
    input: "",
    results: {
      encode: "",
      decode: ""
    }
  }),
  watch: {
    input() {
      this.results.encode = encode(this.input);
      this.results.decode = decode(this.input);
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
