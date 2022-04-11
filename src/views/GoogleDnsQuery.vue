<template>
  <div class="container">
    <form :disabled="latch" action="#" method="post">
      <input v-model="input" type="text"/>
      <input type="submit" @click.prevent="submit"/>
    </form>
    <div>
      <span>
        Special thanks:
        <a href="https://dns.google">Google Public DNS</a>
        provides JSON API of DoH service for querying.
      </span><br/>
      <span>
        Get more powerful tools by Google, please visit to
        <a href="https://toolbox.googleapps.com">Google Admin Toolbox</a>.
      </span>
    </div>
    <div v-show="error">
      {{ results }}
    </div>
    <ul v-if="!error && results.length">
      Answers:
      <li v-for="(result, index) in results" :key="index">
        {{ result.data }}
      </li>
    </ul>
  </div>
</template>

<script>
const GOOGLE_DNS = "https://dns.google/resolve?name="

export default {
  name: "GoogleDnsQuery",
  data: () => ({
    input: "",
    results: [],
    latch: false,
    error: false
  }),
  methods: {
    async submit() {
      if (!this.input) return;
      this.latch = true;
      try {
        const result = await this.$axios.get(GOOGLE_DNS + this.input);
        this.results = result.status === 200 ? result.data.Answer : "failed";
        this.error = false;
      } catch (e) {
        this.error = true;
        this.results = "unavailable";
        console.error(e);
      }
      this.latch = false;
    }
  }
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
