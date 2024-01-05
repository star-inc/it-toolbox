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
        Result
      </v-card-title>
      <v-card-text>
        <ul>
          <li>Continent: {{ result.continent.names.en }}</li>
          <li>Country: {{ result.country.names.en }}</li>
          <li>Registered Country: {{ result.registered_country.names.en }}</li>
          <li>City: {{ result.city.names.en }}</li>
        </ul>
      </v-card-text>
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

const result = ref(null);
</script>
