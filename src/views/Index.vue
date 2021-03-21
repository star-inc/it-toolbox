<template>
  <div class="index md-toolbar-row md-toolbar-offset">
    <span class="md-display-1">Your IP Address: {{ ip_addr }}</span>
  </div>
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
  async created() {
    this.ip_addr = await this.getIP();
  },
};
</script>

<style scoped>
.index {
    padding-top: 55px;
}
</style>
