<template>
  <ul>
    <li>IP Address: {{ ip_addr }}</li>
    <li>User-Agent: {{ userAgent }}</li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "Index",
  data: () => ({
    ip_addr: null,
  }),
  methods: {
    async getIP() {
      const response = await axios.get("https://restapi.starinc.xyz/basic/ip");
      return response.data.data.ip_addr;
    },
  },
  computed: {
    userAgent() {
      if (!window.navigator) {
        return "Unsupported";
      }
      return navigator.userAgent;
    }
  },
  async created() {
    this.ip_addr = await this.getIP();
  },
};
</script>

<style>
ul {
  padding: 0 20px;
}
</style>
