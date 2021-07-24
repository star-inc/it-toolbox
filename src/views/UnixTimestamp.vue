<template>
  <ul>
    <li>Local: {{ localTimestamp }}</li>
    <li>Remote: {{ remoteTimestamp }}</li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "UnixTimestamp",
  data: () => ({
    remoteTimestamp: null,
  }),
  computed: {
    localTimestamp() {
      return Math.round((new Date()).getTime() / 1000);
    }
  },
  async created() {
    try {
      const response = await axios.get("https://restapi.starinc.xyz/basic/now");
      this.remoteTimestamp = response.data.data.posix;
    } catch (e) {
      this.remoteTimestamp = 'Unavailable';
      console.error(e);
    }
  },
};
</script>

<style scoped>
ul {
  padding: 0 20px;
}
</style>
