<template>
  <div>
    <ul>
      <li>
        Password: <code>{{ secret }}</code>
      </li>
    </ul>
    <a href="javascript:void(0)" @click="refresh">refresh</a>
    <div>
      <span>
        Special thanks:
        <a
          href="https://stackoverflow.com/questions/1497481/javascript-password-generator"
          >Gumbo</a
        >
        answered the code snippet.
      </span>
    </div>
  </div>
</template>

<script>
import { encodeURI } from "js-base64";

export default {
  name: "PasswordGenerator",
  data: () => ({
    secret: null,
  }),
  methods: {
    generate() {
      const length = Math.round(10 + Math.random() * 10 + Math.random() * 10);
      if (window.crypto) {
        console.log("generate_v2");
        return this.generateV2(length);
      } else {
        console.log("generate_v1");
        return this.generateV1(length);
      }
    },
    generateV1(length) {
      const charset =
        "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let retVal = "";
      for (let i = 0; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    },
    generateV2(length) {
      const buf = new Uint8Array(length);
      window.crypto.getRandomValues(buf);
      return encodeURI(String.fromCharCode.apply(null, buf));
    },
    async refresh() {
      this.secret = this.generate();
    },
  },
  created() {
    this.refresh();
  },
};
</script>

<style scoped>
ul {
  padding: 0 20px;
}
</style>
