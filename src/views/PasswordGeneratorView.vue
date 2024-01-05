<template>
  <v-container>
    <v-card>
      <v-card-title>
        Password Generator
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="result" type="text" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="refresh">Refresh</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { encodeURI } from "js-base64";

const result = ref("");

function refresh() {
  const isCrypto = !!window.crypto;

  console.info(isCrypto ? "generateV2" : "generateV1");
  const generator = isCrypto ? generateV2 : generateV1;

  const length = Math.round(10 + Math.random() * 10 + Math.random() * 10);
  result.value = generator(length);
}

function generateV1(length) {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let retVal = "";
  for (let i = 0; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
}

function generateV2(length) {
  const bufferValue = new Uint8Array(length);
  window.crypto.getRandomValues(bufferValue);
  const retVal = String.fromCharCode.apply(null, bufferValue);
  return encodeURI(retVal).substring(0, length);
}

onMounted(refresh);
</script>
