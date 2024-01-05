<template>
  <v-container>
    <v-card>
      <v-card-title>
        IP Geolocation
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="input" type="text" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="submit">Submit</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mt-5" v-if="result">
      <v-card-title>
        Raw Data
      </v-card-title>
      <v-card-text>
        {{ result }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useClient } from "../clients/metaapi";

const apiClient = useClient();

const input = ref("");
const result = ref(null);

async function handleSubmit() {
  if (!input) return;
  latch = true;
  try {
    const result = await apiClient.get("network/whois", {
      params: { domain: input },
    });
    result = result.data.data;
    error = false;
  } catch (e) {
    error = true;
    if (e.response.status === 500) {
      result = "failed";
    } else {
      result = "unavailable";
    }
    console.error(e);
  }
  latch = false;
}
</script>
