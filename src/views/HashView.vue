<template>
  <v-container>
    <v-card>
      <v-card-title>
        Hash
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="input" hide-details type="text" />
      </v-card-text>
    </v-card>
    <v-card class="mt-5" v-if="input">
      <v-card-title>
        Result
      </v-card-title>
      <v-card-text class="mx-5">
        <ul>
          <li v-for="(value, key) in values" :key="key">
            {{ key }}<br /><code>{{ value }}</code>
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';

import { crc16, crc32 } from 'js-crc';
import md2 from 'js-md2';
import md4 from 'js-md4';
import md5 from 'js-md5';
import sha1 from 'js-sha1';
import { sha224, sha256 } from 'js-sha256';
import { sha384, sha512 } from 'js-sha512';
import { keccak224, keccak256, keccak384, keccak512, sha3_224, sha3_256, sha3_384, sha3_512 } from 'js-sha3';

const input = ref("");
const values = reactive({});

watch(input, (i) => {
  values.crc16 = crc16(i);
  values.crc32 = crc32(i);
  values.md2 = md2(i);
  values.md4 = md4(i);
  values.md5 = md5(i);
  values.sha1 = sha1(i);
  values.sha224 = sha224(i);
  values.sha256 = sha256(i);
  values.sha384 = sha384(i);
  values.sha512 = sha512(i);
  values.sha3_224 = sha3_224(i);
  values.sha3_256 = sha3_256(i);
  values.sha3_384 = sha3_384(i);
  values.sha3_512 = sha3_512(i);
  values.keccak224 = keccak224(i);
  values.keccak256 = keccak256(i);
  values.keccak384 = keccak384(i);
  values.keccak512 = keccak512(i)
})
</script>
