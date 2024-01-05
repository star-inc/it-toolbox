<template>
  <v-container>
    <v-card>
      <v-card-title>Base64</v-card-title>
      <v-card-subtitle>Base64</v-card-subtitle>
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
import { decode, encode } from 'js-base64';

const input = ref("");
const resultEncoded = ref("");
const resultDecoded = ref("");

watch(input, (i) => {
  try {
    resultEncoded.value = encode(i);
  } catch (e) {
    resultEncoded.value = "";
    void (e);
  }
})

watch(input, (i) => {
  try {
    resultDecoded.value = decode(i);
  } catch (e) {
    resultEncoded.value = "";
    void (e);
  }
})
</script>
