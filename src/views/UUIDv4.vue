<template>
  <div>
    <ul>
      <li>UUID v4: {{ uuid }}</li>
    </ul>
    <a href="javascript:void(0)" @click="refresh">refresh</a>
  </div>
</template>

<script>
import { uuid as generate } from 'uuidv4';

export default {
  name: "UUIDv4",
  data: () => ({
    uuid: null,
  }),
  methods: {
    async refresh() {
      this.uuid = generate();
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
