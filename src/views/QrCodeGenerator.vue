<template>
  <div class="container">
    <div>
      <input v-model="input" type="text"/>
    </div>
    <div>
      <img v-show="image" :src="image" alt="instance.value"/>
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
