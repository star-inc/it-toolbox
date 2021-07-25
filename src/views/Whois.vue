<template>
  <div class="container">
    <form :disabled="latch" action="#" method="post">
      <input v-model="input" type="text"/>
      <input type="submit" @click.prevent="submit"/>
    </form>
    <ul v-show="result">
      <li>Available: {{ result.available ? "Yes" : "No" }}</li>
      <li>Dataset:<br/>{{ result.lookup }}</li>
      <li>Source:<br/>{{ result.info }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Whois",
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
        const result = await axios.get(
            `https://restapi.starinc.xyz/basic/whois?domain=${this.input}`
        );
        this.result = result.data.data;
      } catch (e) {
        if (e.response.status === 500) {
          this.result = "failed";
        } else {
          this.result = 'unavailable';
        }
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
</style>
