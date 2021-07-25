<template>
  <div class="container">
    <form :disabled="latch" action="#" method="post">
      <label>
        Name:
        <input v-model="input.name" type="text"/>
      </label>
      <label>
        Type:
        <select v-model="input.type">
          <option v-for="(_, key) in dnsTypes.resource" :key="key" :value="key">
            {{ key }}
          </option>
        </select>
      </label>
      <label>
        DNS Server:
        <input v-model="input.server" type="text"/>
      </label>
      <input type="submit" @click.prevent="submit"/>
    </form>
    <div>
      <span>
        Special thanks:
        <a href="https://allorigins.win">allOrigins</a>
        provides the fast CORS Proxy, and
        <a href="https://github.com/ninoseki/digging">ninoseki/digging</a>
        provides the public API of digging
      </span>
    </div>
    <div v-if="result">
      Raw Answer:
      <div>
        {{ result }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dnsTypes from "../asserts/dns_types.json";

const CORS_PROXY = "https://api.allorigins.win/post?url=";
const DIG_API_HOST = "https://dns-digging.herokuapp.com"

export default {
  name: "Dig",
  data: () => ({
    input: {
      name: "",
      type: "A",
      server: "1.1.1.1",
    },
    result: null,
    latch: false,
    dnsTypes
  }),
  methods: {
    async submit() {
      if (!this.input.name) return;
      this.latch = true;
      try {
        const query = new URLSearchParams(this.input);
        const result = await axios.post(CORS_PROXY + DIG_API_HOST, query);
        this.result = result.status === 200 ? result.data : "failed";
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

ul {
  padding: 0 20px;
}
</style>
