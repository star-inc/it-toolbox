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
          <qr-code-generator v-if="active===3"/>
          <qr-code-scanner v-if="active===4"/>
          <google-dns-query v-if="active===5"/>
          <cloudflare-dns-query v-if="active===6"/>
          <opendns-dns-query v-if="active===7"/>
          <legacy-dns-query v-if="active===8"/>
          <whois v-if="active===9"/>
          <view-source v-if="active===10"/>
          <IPGeo v-if="active===11"/>
        </td>
      </tr>
      <tr v-for="(name, key) in functions" :key="key">
        <td>
          <a href="javascript:void(0)" @click="view(key)">{{ name }}</a>
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
import QrCodeGenerator from "./views/QrCodeGenerator.vue";
import QrCodeScanner from "./views/QrCodeScanner.vue";
import GoogleDnsQuery from "./views/GoogleDnsQuery.vue";
import CloudflareDnsQuery from "./views/CloudflareDnsQuery.vue";
import OpendnsDnsQuery from "./views/OpendnsDnsQuery.vue";
import LegacyDnsQuery from "./views/LegacyDnsQuery.vue";
import Whois from "./views/Whois.vue";
import ViewSource from "./views/ViewSource.vue";
import IPGeo from "./views/IPGeo";

export default {
  name: "App",
  components: {
    Browser,
    UUIDv4,
    UnixTimestamp,
    QrCodeGenerator,
    QrCodeScanner,
    GoogleDnsQuery,
    CloudflareDnsQuery,
    OpendnsDnsQuery,
    LegacyDnsQuery,
    Whois,
    ViewSource,
    IPGeo
  },
  data: () => ({
    active: 0,
    functions: [
      "Browser",
      "UUID v4",
      "Unix Timestamp",
      "QR Code Generator",
      "QR Code Scanner",
      "Google DNS Query (Nslookup)",
      "Cloudflare DNS Query (Nslookup)",
      "OpenDNS DNS Query (Nslookup)",
      "Legacy Dns Query (Nslookup)",
      "Whois",
      "View Source",
      "IP Geolocation"
    ]
  }),
  methods: {
    view(key) {
      this.active = key
      window.location.hash = `#${this.active}`
    }
  },
  created() {
    if (window.location.hash) {
      const query = parseInt(window.location.hash.substring(1));
      this.active = query && query < this.functions.length ? query : 0;
    }
    window.location.hash = `#${this.active}`
  }
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
