<template>
  <div class="page-container">
    <md-app md-waterfall>
      <md-app-toolbar class="md-large md-primary">
        <Index />
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<script>
import Index from "./views/Index.vue";

export default {
  name: "App",
  components: { Index },
};
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

.md-app-toolbar {
  height: 196px;
}
</style>
