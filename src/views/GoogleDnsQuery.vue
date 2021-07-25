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
        provides JSON API of DoH service for querying
      </span><br/>
      <span>
        Get more powerful tools by Google, please visit to
        <a href="https://toolbox.googleapps.com">Google Admin Toolbox</a>
      </span>
    </div>
    <ul v-show="results.length">
      Answers:
      <li v-for="(result, index) in results" :key="index">
        {{ result.data }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const GOOGLE_DNS = "https://dns.google/resolve?name="

export default {
  name: "GoogleDnsQuery",
  data: () => ({
    input: "",
    results: [],
    latch: false
  }),
  methods: {
    async submit() {
      if (!this.input) return;
      this.latch = true;
      try {
        const result = await axios.get(GOOGLE_DNS + this.input);
        this.results = result.status === 200 ? result.data.Answer : "failed";
      } catch (e) {
        this.results = "unavailable";
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
