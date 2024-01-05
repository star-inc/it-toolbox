import {
    createRouter,
    createWebHashHistory,
} from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../views/WelcomeView.vue"),
    },
    {
        path: "/browser",
        component: () => import("../views/BrowserView.vue"),
    },
    {
        path: "/base64",
        component: () => import("../views/Base64View.vue"),
    },
    {
        path: "/base64/url",
        component: () => import("../views/Base64UrlView.vue"),
    },
    {
        path: "/base64/gzip",
        component: () => import("../views/Base64GzipView.vue"),
    },
    {
        path: "/dns-query/legacy",
        component: () => import("../views/DnsQueryLegacyView.vue"),
    },
    {
        path: "/dns-query/cloudflare",
        component: () => import("../views/DnsQueryCloudflareView.vue"),
    },
    {
        path: "/dns-query/google",
        component: () => import("../views/DnsQueryGoogleView.vue"),
    },
    {
        path: "/dns-query/opendns",
        component: () => import("../views/DnsQueryOpendnsView.vue"),
    },
    {
        path: "/hash",
        component: () => import("../views/HashView.vue"),
    },
    {
        path: "/ip/geolocation",
        component: () => import("../views/IPGeolocationView.vue"),
    },
    {
        path: "/password/generator",
        component: () => import("../views/PasswordGeneratorView.vue"),
    },
    // {
    //     path: "/qr-code/generator",
    //     component: () => import("../views/QrCodeGeneratorView.vue"),
    // },
    // {
    //     path: "/qr-code/scanner",
    //     component: () => import("../views/QrCodeScannerView.vue"),
    // },
    {
        path: "/unix-timestamp/to-local",
        component: () => import("../views/UnixTimestampToLocalView.vue"),
    },
    {
        path: "/unix-timestamp",
        component: () => import("../views/UnixTimestampView.vue"),
    },
    {
        path: "/url-encoding",
        component: () => import("../views/UrlEncodingView.vue"),
    },
    {
        path: "/uuid/v4",
        component: () => import("../views/UUIDv4View.vue"),
    },
    {
        path: "/view-source",
        component: () => import("../views/ViewSourceView.vue"),
    },
    {
        path: "/whois",
        component: () => import("../views/WhoisView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: (to, _, savedPosition) => {
        if (to.hash) return { selector: to.hash };
        if (savedPosition) return savedPosition;

        return { x: 0, y: 0 };
    },
    routes,
});

export default router;
