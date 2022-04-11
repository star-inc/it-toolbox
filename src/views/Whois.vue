<template>
  <div class="container">
    <form :disabled="latch" action="#" method="post">
      <input v-model="input" type="text" />
      <input type="submit" @click.prevent="submit" />
    </form>
    <div v-show="error">
      {{ result }}
    </div>
    <ul v-if="!error && result">
      <li>Available: {{ result.available ? "Yes" : "No" }}</li>
      <li>
        Dataset:<br /><code>{{ result.lookup }}</code>
      </li>
      <li>
        Source:<br /><code>{{ result.info }}</code>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Whois",
  data: () => ({
    input: "",
    result: null,
    latch: false,
    error: false,
  }),
  methods: {
    async submit() {
      if (!this.input) return;
      this.latch = true;
      try {
        const result = await this.$axios.get("network/whois", {
          params: { domain: this.input },
        });
        this.result = result.data.data;
        this.error = false;
      } catch (e) {
        this.error = true;
        if (e.response.status === 500) {
          this.result = "failed";
        } else {
          this.result = "unavailable";
        }
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

ul {
  padding: 0 20px;
}
</style>
