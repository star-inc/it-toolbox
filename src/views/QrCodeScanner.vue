<template>
  <div class="container">
    <div>
      <video id="qr-scanner"></video>
    </div>
    <span>
      Special thanks:
      <a href="https://github.com/nimiq/qr-scanner">nimiq/qr-scanner</a>
      provides the fast QR Code scanner library.
    </span>
    <div v-if="result">
      <code>
        {{ result }}
      </code>
      <div>
        <button @click="resume">
          Resume
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import QrScanner from 'qr-scanner';
import QrScannerWorkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';

export default {
  name: "QrCodeScanner",
  data: () => ({
    instance: null,
    result: "",
    latch: false
  }),
  methods: {
    onScan(result) {
      this.latch = true;
      this.result = result
      this.instance.stop();
    },
    resume() {
      this.latch = false;
      this.instance.start();
    }
  },
  mounted() {
    const videoElement = document.getElementById("qr-scanner");
    QrScanner.WORKER_PATH = QrScannerWorkerPath
    this.instance = new QrScanner(videoElement, this.onScan);
    this.instance.start();
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
