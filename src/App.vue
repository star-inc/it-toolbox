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
          <UUIDv4 v-if="active===1"/>
          <unix-timestamp v-if="active===2"/>
        </td>
      </tr>
      <tr v-for="(name, key) in functions" :key="key">
        <td>
          <a href="javascript:void(0)" @click="active = key">{{ name }}</a>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          Source Code: <a href="https://github.com/star-inc/tools">Github Repository</a>
          Maintainer: <a href="https://security.starinc.xyz/">Star Inc. Security Department</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Browser from "./views/Browser.vue";
import UUIDv4 from "./views/UUIDv4.vue";
import UnixTimestamp from "./views/UnixTimestamp.vue";

export default {
  name: "App",
  components: {Browser, UUIDv4, UnixTimestamp},
  data: () => ({
    active: 0,
    functions: [
      "Browser",
      "UUID v4",
      "Unix Timestamp"
    ]
  })
};
</script>

<style scoped>
table, th, td {
  font-family: "Roboto", sans-serif;
  border: 1px solid #000;
  border-collapse: collapse;
}

thead {
  font-weight: bold;
}
</style>
