<template>
  <div class="container">
    <form :disabled="latch" action="#" method="post">
      <input v-model="input" type="text" />
      <input type="submit" @click.prevent="submit" />
    </form>
    <span>
      Special thanks:
      <a href="https://allorigins.win">allOrigins</a>
      provides the fast CORS Proxy.
    </span>
    <div v-show="result">
      <code>{{ result }}</code>
    </div>
  </div>
</template>

<script>
const CORS_PROXY = "https://api.allorigins.win/get?url=";

export default {
  name: "ViewSource",
  data: () => ({
    input: "",
    result: null,
    latch: false,
  }),
  methods: {
    async submit() {
      if (!this.input) return;
      this.latch = true;
      try {
        const result = await this.$axios.get(CORS_PROXY + this.input);
        this.result = result.status === 200 ? result.data.contents : "failed";
        if (result.data.contents === null) {
          this.result =
            "(Empty result, may the host you requested is not found.)";
        }
      } catch (e) {
        this.result = "unavailable";
        console.error(e);
      }
      this.latch = false;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 20px;
}

.container > div {
  margin: 20px 0;
}
</style>
