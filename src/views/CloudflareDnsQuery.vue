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
        DO:
        <input v-model="input.do" type="checkbox"/>
      </label>
      <label>
        CD:
        <input v-model="input.cd" type="checkbox"/>
      </label>
      <input type="submit" @click.prevent="submit"/>
    </form>
    <div>
    <span>
        More details:
        <a href="https://developers.cloudflare.com/1.1.1.1/dns-over-https/json-format">
          Cloudflare DoH JSON API documents
        </a>
    </span><br/>
      <span>
        Special thanks:
        <a href="https://cloudflare.com">Cloudflare</a>
        provides us the high-reliability CDN and the JSON API of DoH service for querying
    </span>
    </div>
    <div v-if="result">
      <ul v-if="showList && Array.isArray(result.Answer)">
        Answers List:
        <li v-for="(item, index) in result.Answer" :key="index">
          {{ item.data }}
        </li>
      </ul>
      <div v-else>
        Raw Answers:
        <div>
          {{ result }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dnsTypes from "../asserts/dns_types.json";

const CLOUDFLARE_DNS = "https://cloudflare-dns.com/dns-query?"

export default {
  name: "CloudflareDnsQuery",
  data: () => ({
    input: {
      name: "",
      type: "A",
      do: true,
      cd: false
    },
    result: null,
    latch: false,
    listTypes: ['A', "AAAA"],
    showList: true,
    dnsTypes
  }),
  methods: {
    async submit() {
      if (!this.input.name) return;
      this.latch = true;
      try {
        const inputQuery = {};
        Object.assign(inputQuery, this.input);
        inputQuery.do = inputQuery.do.toString();
        inputQuery.cd = inputQuery.cd.toString();
        const query = new URLSearchParams(inputQuery);
        const result = await axios.get(
            CLOUDFLARE_DNS + query.toString(),
            {headers: {accept: "application/dns-json"}}
        );
        this.result = result.status === 200 ? result.data : "failed";
        this.showList = this.listTypes.includes(this.input.type);
      } catch (e) {
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
