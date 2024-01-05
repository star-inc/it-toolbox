import ky from "ky";

const { VITE_METAAPI_BASE_URL: baseUrl } = import.meta.env;

const client = ky.create({
    prefixUrl: baseUrl,
    credentials: "include",
});

export const useClient = () => client;
