<template>
  <div class="container">
    <form :disabled="latch" action="#" method="post">
      <label>
        Name:
        <input v-model="input.name" type="text" />
      </label>
      <label>
        Type:
        <select v-model="input.type">
          <option value="domain">Domain</option>
          <option value="ip_addr">IP Address</option>
        </select>
      </label>
      <input type="submit" @click.prevent="submit" />
    </form>
    <ul v-show="result">
      <li>
        <code>{{ result }}</code>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LegacyDnsQuery",
  data: () => ({
    input: {
      name: "",
      type: "domain",
    },
    result: null,
    latch: false,
  }),
  methods: {
    async submit() {
      if (!this.input.name) return;
      this.latch = true;
      try {
        const result = await this.$axios.get(
          `/nslookup?${this.input.type}=${this.input.name}`
        );
        this.result = result.data.data;
      } catch (e) {
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
