<template>
  <div class="container">
    <div>
      <input v-model="input" type="text"/>
    </div>
    <span>
      Special thanks:
      <a href="https://github.com/neocotic/qrious">neocotic/QRious</a>
      provides the fast QR Code generator library.
    </span>
    <div>
      <img v-show="image" :alt="instance.value" :src="image"/>
    </div>
  </div>
</template>

<script>
import QRious from "qrious";

export default {
  name: "QrCodeGenerator",
  data: () => ({
    instance: new QRious(),
    image: null,
    input: ""
  }),
  watch: {
    input() {
      this.instance.value = this.input;
      this.image = this.instance.toDataURL();
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
</style>
