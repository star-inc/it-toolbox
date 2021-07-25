<template>
  <div class="container">
    <div>
      <video id="qr-scanner"></video>
    </div>
  </div>
</template>

<script>
import QrScanner from 'qr-scanner';
import QrScannerWorkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';

export default {
  name: "QrCodeScanner",
  data: () => ({
    instance: null
  }),
  mounted() {
    const videoElement = document.getElementById("qr-scanner");
    QrScanner.WORKER_PATH = QrScannerWorkerPath
    this.instance = new QrScanner(videoElement, (result) => console.log('decoded qr code:', result));
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
