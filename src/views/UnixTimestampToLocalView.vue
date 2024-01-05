<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-text-field v-model="input" type="text" />
        <select v-model="unit">
          <option value="s">Second</option>
          <option value="ms">MilliSeconds</option>
          <option value="us">MicroSeconds</option>
          <option value="ns">NanoSeconds</option>
        </select>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-text>
        <v-text-field v-model="resultGeneral" type="text" />
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-text>
        <v-text-field v-model="resultLocale" type="text" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const initTimestamp = Math.round((new Date()).getTime() / 1000);
const initSecondType = "s";

const inputTimestamp = ref(initTimestamp.toString());
const inputSecondType = ref(initSecondType);

const resultFull = ref("");
const resultLocale = ref("");

const result = computed(() => {
  const timestamp = parseInt(inputTimestamp.value);
  const numberPadding = {
    ns: 0.000001,
    us: 0.001,
    s: 1000,
  }[inputSecondType.value] || 1;
  return (new Date(timestamp * numberPadding));
})

watch(result, () => {
  resultFull.value = result.toString()
})

watch(result, () => {
  resultLocale.value = result.toLocaleString()
})
</script>
