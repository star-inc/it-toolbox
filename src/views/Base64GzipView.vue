<template>
  <v-container>
    <v-card>
      <v-card-title>Base64 GZip</v-card-title>
      <v-card-subtitle>Base64 GZip</v-card-subtitle>
      <v-card-text>
        <v-text-field v-model="input" hide-details type="text" />
      </v-card-text>
    </v-card>
    <v-card class="mt-5" v-if="input">
      <v-card-title>
        Result
      </v-card-title>
      <div v-if="resultEncoded">
        <v-card-subtitle>
          Encoded
        </v-card-subtitle>
        <v-card-text class="mx-5">
          {{ resultEncoded }}
        </v-card-text>
      </div>
      <div v-if="resultDecoded">
        <v-card-subtitle>
          Decoded
        </v-card-subtitle>
        <v-card-text class="mx-5">
          {{ resultDecoded }}
        </v-card-text>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, watch } from "vue";

import { Buffer } from 'buffer';
import pako from "pako";

const input = ref("");
const resultEncoded = ref("");
const resultDecoded = ref("");

watch(input, (i) => {
  try {
    const dataCompressed = pako.deflate(i, { to: 'string' });
    const dataBuffer = Buffer.from(dataCompressed);
    resultEncoded.value = dataBuffer.toString("base64");
  } catch (e) {
    resultEncoded.value = "";
    void (e);
  }
});

watch(input, (i) => {
  try {
    const dataBuffer = Buffer.from(i, "base64");
    const dataDecompressed = pako.inflate(dataBuffer, { to: 'string' });
    resultDecoded.value = dataDecompressed.toString();
  } catch (e) {
    resultDecoded.value = "";
    void (e);
  }
});
</script>
