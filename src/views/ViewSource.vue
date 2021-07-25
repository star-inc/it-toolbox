<template>
  <div class="container">
    <form :disabled="latch" action="#" method="post">
      <input v-model="input" type="text"/>
      <input type="submit" @click.prevent="submit"/>
    </form>
    <span>
      Special thanks:
      <a href="https://allorigins.win">allOrigins</a>
      provides the fast CORS Proxy
    </span>
    <div v-show="result">
      {{ result }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

const CORS_PROXY = "https://api.allorigins.win/get?url=";

export default {
  name: "ViewSource",
  data: () => ({
    input: "",
    result: null,
    latch: false
  }),
  methods: {
    async submit() {
      if (!this.input.name) return;
      this.latch = true;
      try {
        const result = await axios.get(CORS_PROXY + this.input);
        this.result = result.status === 200 ? result.data.contents : "failed";
        if (result.data.contents === null) {
          this.result = "(Empty result, may the host you requested is not found.)";
        }
      } catch (e) {
        this.result = "unavailable";
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
