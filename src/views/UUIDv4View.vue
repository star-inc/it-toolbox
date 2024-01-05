<template>
  <v-container>
    <v-card>
      <v-card-title>
        UUID v4
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="value" type="text" />
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
import { v4 as uuidV4 } from 'uuid';

const value = ref(null);

function refresh() {
  value.value = uuidV4();
}

onMounted(refresh);
</script>
