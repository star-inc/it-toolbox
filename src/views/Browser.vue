<template>
  <ul>
    <li>IP Address: <code>{{ ip_addr }}</code></li>
    <li>User-Agent: <code>{{ userAgent }}</code></li>
  </ul>
</template>

<script>
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
    try {
      const response = await this.$axios.get("network/ip");
      this.ip_addr = response.data.data.ip_addr;
    } catch (e) {
      this.ip_addr = 'Unavailable';
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
