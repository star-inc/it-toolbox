<template>
  <div class="container">
    <form action="#" method="post">
      <label>
        Registry Host:
        <input v-model="input.registry_host" placeholder="" type="text"/><br/>
      </label>
      <label>
        Username:
        <input v-model="input.username" type="text"/><br/>
      </label>
      <label>
        Password:
        <input v-model="input.password" type="text"/>
      </label>
    </form>
    <span>
      Special thanks:
      <a href="https://github.com/dankogai/js-base64">dankogai/js-base64</a>
      provides the fast Base64 transcoder library.
    </span>
    <div v-show="result">
      {{ result }}
    </div>
  </div>
</template>

<script>
import {encode} from 'js-base64';

export default {
  name: "GitLabDeployTokenToK8sSecret",
  data: () => ({
    input: {
      registry_host: "",
      username: "",
      password: ""
    },
  }),
  computed: {
    result() {
      const auth = encode(`${this.input.username}:${this.input.password}`)
      const data = {
        auths: {
          [this.input.registry_host]: {
            username: this.input.username,
            password: this.input.password,
            auth
          }
        }
      }
      return encode(JSON.stringify(data));
    }
  }
}
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
