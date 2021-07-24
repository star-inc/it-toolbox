<template>
  <div class="container">
    <table>
      <thead>
      <tr>
        <td>
          Type
        </td>
        <td>
          Function
        </td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
        </td>
        <td :rowspan="functions.length + 1">
          <browser v-if="active===0"/>
        </td>
      </tr>
      <tr v-for="(name, key) in functions" :key="key">
        <td>
          <a href="#" @click="active = key">{{ name }}</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Browser from "./views/Browser.vue";

export default {
  name: "App",
  components: {Browser},
  data: () => ({
    active: 0,
    functions: [
      "Browser"
    ]
  })
};
</script>

<style>
table, th, td {
  font-family: "Roboto", sans-serif;
  border: 1px solid #000;
  border-collapse: collapse;
}

thead {
  font-weight: bold;
}
</style>
