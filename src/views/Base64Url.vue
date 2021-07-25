<template>
  <div class="container">
    <div>
      <input v-model="input" type="text"/>
    </div>
    <span>
      Special thanks:
      <a href="https://github.com/neocotic/qrious">neocotic/QRious</a>
      provides the fast QR Code generation library.
    </span>
    <ul>
      <li>Encode:<br/><code>{{ results.encode }}</code></li>
      <li>Decode:<br/><code>{{ results.decode }}</code></li>
    </ul>
  </div>
</template>

<script>
import {decode, encodeURI} from 'js-base64';

export default {
  name: "Base64Url",
  data: () => ({
    input: "",
    results: {
      encode: "",
      decode: ""
    }
  }),
  watch: {
    input() {
      this.results.encode = encodeURI(this.input);
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
