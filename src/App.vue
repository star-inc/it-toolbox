<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.path" router exact>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mr-1">mdi-tools</v-icon>
      <v-toolbar-title>IT Toolbox</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue"

const drawer = ref(true);

const items = [
  {
    name: "Browser",
    path: "/browser",
  },
  {
    name: "Base64",
    path: "/base64",
  },
  {
    name: "Base64 URL",
    path: "/base64/url",
  },
  {
    name: "Base64 GZip",
    path: "/base64/gzip",
  },
  {
    name: "DNS Query Legacy (Nslookup)",
    path: "/dns-query/legacy",
  },
  {
    name: "DNS Query Cloudflare (Nslookup)",
    path: "/dns-query/cloudflare",
  },
  {
    name: "DNS Query Google (Nslookup)",
    path: "/dns-query/google",
  },
  {
    name: "DNS Query OpenDNS (Nslookup)",
    path: "/dns-query/opendns",
  },
  {
    name: "Hash",
    path: "/hash",
  },
  {
    name: "IP Geolocation",
    path: "/ip/geolocation",
  },
  {
    name: "Password Generator",
    path: "/password/generator",
  },
  //{
  //  name: "QR Code Generator",
  //  path: "/qr-code/generator",
  //},
  //{
  //  name: "QR Code Scanner",
  //  path: "/qr-code/scanner",
  //},
  {
    name: "Unix Timestamp",
    path: "/unix-timestamp",
  },
  {
    name: "Unix Timestamp To Local",
    path: "/unix-timestamp/to-local",
  },
  {
    name: "URL Encoding",
    path: "/url-encoding",
  },
  {
    name: "UUID v4",
    path: "/uuid/v4",
  },
  {
    name: "View Source",
    path: "/view-source",
  },
  {
    name: "Whois",
    path: "/whois",
  },
];
</script>
