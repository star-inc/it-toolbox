<template>
  <div class="container">
    <div>
      <input v-model="input" type="text"/>
    </div>
    <span>
      Special thanks:
      <a href="https://github.com/emn178">emn178</a>
      provides the fast hash libraries.
    </span>
    <ul>
      <li v-for="(value, key) in values" :key="key">
        {{ key }}<br/><code>{{ value }}</code>
      </li>
    </ul>
  </div>
</template>

<script>
import md2 from 'js-md2';
import md4 from 'js-md4';
import md5 from 'js-md5';
import {crc16, crc32} from 'js-crc';
import sha1 from 'js-sha1';
import {sha224, sha256} from 'js-sha256';
import {sha384, sha512} from 'js-sha512';
import {keccak224, keccak256, keccak384, keccak512, sha3_224, sha3_256, sha3_384, sha3_512} from 'js-sha3';

export default {
  name: "Hash",
  data: () => ({
    input: "",
    values: {},
  }),
  watch: {
    input() {
      this.values.md2 = md2(this.input);
      this.values.crc16 = crc16(this.input);
      this.values.crc32 = crc32(this.input);
      this.values.md4 = md4(this.input);
      this.values.md5 = md5(this.input);
      this.values.sha1 = sha1(this.input);
      this.values.sha224 = sha224(this.input);
      this.values.sha256 = sha256(this.input);
      this.values.sha384 = sha384(this.input);
      this.values.sha512 = sha512(this.input);
      this.values.sha3_224 = sha3_224(this.input);
      this.values.sha3_256 = sha3_256(this.input);
      this.values.sha3_384 = sha3_384(this.input);
      this.values.sha3_512 = sha3_512(this.input);
      this.values.keccak224 = keccak224(this.input);
      this.values.keccak256 = keccak256(this.input);
      this.values.keccak384 = keccak384(this.input);
      this.values.keccak512 = keccak512(this.input)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 20px;
}

.container > div {
  margin: 20px 0;
}
</style>
