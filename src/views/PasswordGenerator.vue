<template>
  <div>
    <ul>
      <li>Password: <code>{{ secret }}</code></li>
    </ul>
    <a href="javascript:void(0)" @click="refresh">refresh</a>
    <div>
      <span>
        Special thanks:
        <a href="https://stackoverflow.com/questions/1497481/javascript-password-generator">Gumbo</a>
        answered the code snippet.
      </span>
    </div>
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
