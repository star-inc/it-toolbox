<template>
  <div class="container">
    <form :disabled="latch" action="#" method="post">
      <input v-model="input" type="text"/>
      <input type="submit" @click.prevent="submit"/>
    </form>
    <div v-show="error">
      {{ result }}
    </div>
    <div v-if="!error && result">
      <ul>
        <li>Continent: {{ result.continent.names.en }}</li>
        <li>Country: {{ result.country.names.en }}</li>
        <li>Registered Country: {{ result.registered_country.names.en }}</li>
        <li>City: {{ result.city.names.en }}</li>
      </ul>
      <div>
        Raw Data:
        <div>
          {{ result }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IPGeo",
  data: () => ({
    input: "",
    result: null,
    latch: false,
    error: false
  }),
  methods: {
    async submit() {
      if (!this.input) return;
      this.latch = true;
      try {
        const result = await axios.get(
            `https://restapi.starinc.xyz/basic/ip/geo?ip_addr=${this.input}`
        );
        this.result = result.data.data;
        this.error = false;
      } catch (e) {
        this.error = true;
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

ul {
  padding: 0 20px;
}
</style>
