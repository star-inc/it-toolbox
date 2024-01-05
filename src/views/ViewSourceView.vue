<template>
  <v-container>
    <v-card>
      <v-card-title>
        View Source
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="inputUrl" type="text" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="handleSubmit">Submit</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mt-5" v-if="outputStatusCode">
      <v-card-title>
        Result
      </v-card-title>
      <v-card-subtitle>
        Metadata
      </v-card-subtitle>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                Key
              </th>
              <th class="text-left">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, j) of outputMetadata" :key="j">
              <td class="text-uppercase">{{ i[0] }}</td>
              <td class="text-lowercase">{{ i[1] }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
      <v-card-subtitle>
        Content
      </v-card-subtitle>
      <v-card-text>
        <v-textarea auto-grow rows="2" row-height="20" v-model="outputSourceCode" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, reactive } from "vue";

import ky from "ky"

const corsProxyApi = "https://api.allorigins.win/get?url=";

const inputUrl = ref("");

const outputStatusCode = ref("");
const outputSourceCode = ref("");

const outputMetadata = reactive(new Map());

async function handleSubmit() {
  try {
    const requestUrl = corsProxyApi + inputUrl.value;
    const apiResult = await ky.get(requestUrl).json();

    outputStatusCode.value = apiResult.status.http_code;
    outputSourceCode.value = apiResult.contents;

    outputMetadata.clear()
    for (const [i, j] of Object.entries(apiResult.status)) {
      outputMetadata.set(i, j);
    }
    console.log(outputMetadata);
  } catch (e) {
    console.error(e);
  }
}
</script>
