<template>
  <v-container>
    <v-card>
      <v-card-title>
        Unix Timestamp
      </v-card-title>
      <v-card-subtitle>
        Local
      </v-card-subtitle>
      <v-card-text>
        {{ localTimestamp }}
      </v-card-text>
      <v-card-subtitle>
        Remote
      </v-card-subtitle>
      <v-card-text>
        {{ remoteTimestamp }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useClient } from "../clients/metaapi";

const apiClient = useClient();

const localTimestamp = ref("Loading...");
const remoteTimestamp = ref("Loading...");

setInterval(() => {
  localTimestamp.value = Math.round(new Date().getTime() / 1000);
}, 1_000);

const removeClock = setInterval(async () => {
  try {
    const apiResult = await apiClient.get("clock/now").json();
    remoteTimestamp.value = apiResult.data.posix;
  } catch (e) {
    remoteTimestamp.value = "Unavailable";
    clearInterval(removeClock);
  }
}, 1_000)
</script>
