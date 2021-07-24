<template>
  <ul>
    <li>IP Address: {{ ip_addr }}</li>
    <li>User-Agent: {{ userAgent }}</li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "Browser",
  data: () => ({
    ip_addr: null,
  }),
  computed: {
    userAgent() {
      if (!window.navigator) {
        return "Unsupported";
      }
      return navigator.userAgent;
    }
  },
  async created() {
    const response = await axios.get("https://restapi.starinc.xyz/basic/ip");
    this.ip_addr = response.data.data.ip_addr;
  },
};
</script>

<style>
ul {
  padding: 0 20px;
}
</style>
