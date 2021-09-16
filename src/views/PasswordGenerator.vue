<template>
  <div>
    <ul>
      <li>Password: <code>{{ secret }}</code></li>
    </ul>
    <a href="javascript:void(0)" @click="refresh">refresh</a>
  </div>
</template>

<script>
export default {
  name: "PasswordGenerator",
  data: () => ({
    secret: null,
  }),
  methods: {
    generate() {
      let length = Math.round(10 + (Math.random() * 10) + (Math.random() * 10));
      const charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let retVal = "";
      for (let i = 0; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
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
