<template>
  <ul>
    <li>
      Local: <code>{{ localTimestamp }}</code>
    </li>
    <li>
      Remote: <code>{{ remoteTimestamp }}</code>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UnixTimestamp",
  data: () => ({
    remoteTimestamp: null,
  }),
  computed: {
    localTimestamp() {
      return Math.round(new Date().getTime() / 1000);
    },
  },
  async created() {
    try {
      const response = await this.$axios.get("/now");
      this.remoteTimestamp = response.data.data.posix;
    } catch (e) {
      this.remoteTimestamp = "Unavailable";
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
