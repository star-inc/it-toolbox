<template>
  <div>
    <ul>
      <li>UUID v4: <code>{{ uuid }}</code></li>
    </ul>
    <a href="javascript:void(0)" @click="refresh">refresh</a>
  </div>
</template>

<script>
import {v4 as generate} from 'uuid';

export default {
  name: "UUIDv4",
  data: () => ({
    uuid: null,
  }),
  methods: {
    async refresh() {
      this.uuid = generate.v4();
    },
  },
  created() {
    this.refresh();
  },
};
</script>

<style scoped>
ul {
  padding: 0 20px;
}
</style>
