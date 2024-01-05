<template>
  <v-container>
    <v-card>
      <v-card-title>
        Browser
      </v-card-title>
      <v-card-text>
        <p>
          IP Address:
          <code>{{ ip_addr }}</code>
        </p>
        <p>User-Agent:
          <code>{{ userAgent }}</code>
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {useClient} from "../clients/metaapi";

const apiClient = useClient();

const ipAddress = ref("");
const userAgent = computed(() => {
      if (!window.navigator) {
        return "Unsupported";
      }
      return navigator.userAgent;
});

onMounted(async () => {
  try {
      const result = await apiClient.get("network/ip").json();
      ipAddress.value = result.data.ip_addr;
    } catch (e) {
      ipAddress.value = 'Unavailable';
      console.error(e);
    }
})
</script>
