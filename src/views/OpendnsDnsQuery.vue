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
      <input type="submit" @click.prevent="submit"/>
    </form>
    <span>
        Special thanks:
        <a href="https://opendns.com">OpenDNS</a>
        provides the JSON API of DoH service for querying.
    </span>
    <div v-show="error">
      {{ result }}
    </div>
    <div v-if="!error && result">
      <ul v-if="showList && Array.isArray(result.Answer)">
        Answers List:
        <li v-for="(item, index) in result.Answer" :key="index">
          {{ item.data }}
        </li>
      </ul>
      <div v-else>
        Raw Answers:
        <code>
          {{ result }}
        </code>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dnsTypes from "../asserts/dns_types.json";

const OPENDNS_DNS = "https://cloudflare-dns.com/dns-query?"

export default {
  name: "OpendnsDnsQuery",
  data: () => ({
    input: {
      name: "",
      type: "A",
    },
    result: null,
    latch: false,
    listTypes: ['A', "AAAA"],
    showList: true,
    dnsTypes,
    error: false
  }),
  methods: {
    async submit() {
      if (!this.input.name) return;
      this.latch = true;
      try {
        const query = new URLSearchParams(this.input);
        const result = await axios.get(
            OPENDNS_DNS + query.toString(),
            {headers: {accept: "application/dns-json"}}
        );
        this.result = result.status === 200 ? result.data : "failed";
        this.showList = this.listTypes.includes(this.input.type);
        this.error = false;
      } catch (e) {
        this.error = true;
        this.result = "unavailable";
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
