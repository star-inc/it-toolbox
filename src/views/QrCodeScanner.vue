<template>
  <div class="container">
    <div v-show="systemMessage">
      Status: {{ systemMessage }}
    </div>
    <div v-if="!unavailable" v-show="!result">
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
    unavailable: false,
    instance: null,
    result: "",
    latch: false,
    systemMessage: ""
  }),
  methods: {
    onScan(result) {
      this.latch = true;
      this.result = result
      this.instance.stop();
    },
    resume() {
      this.latch = false;
      this.result = "";
      this.instance.start();
    }
  },
  async mounted() {
    const camaraExists = await QrScanner.hasCamera();
    if (!camaraExists) {
      this.unavailable = true;
      this.systemMessage = "Camara is unavailable.";
      return;
    }
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

#qr-scanner {
  max-width: 300px;
  max-height: 300px;
}
</style>
