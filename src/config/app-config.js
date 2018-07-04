const isProd = process.env.NODE_ENV == "production";

// server --> "http://192.168.0.240:8080" 
// aidy --> "http://192.168.0.141:8080" 
export const WASPUrl = isProd ? "10.23.196.65:9080" : "localhost:8081";
export const SoapUrl = "http://localhost:8080/axis/services/SoapWebService";

export const Domain = isProd ? location.origin : "http://localhost:8081"
export const AppRoot = isProd ? `${Domain}/jpn-transformasi` : Domain;
export const WebServiceRoot = isProd ? `${Domain}/home-webservice` : "http://localhost:8080/home-webservice";

export const AppPath = {
    Asset: AppRoot + "/asset",
    Dataset: AppRoot + "/dataset"
};

export const STORE_AUTH = "JPN-LOCAL-STORAGE-AUTH";
export const STORE_FINGERPRINT = "JPN-LOCAL-STORAGE-FINGERPRINT";
export const STORE_NAVI = "JPN-LOCAL-STORAGE-NAVI";
export const STORE_ADMIN = "JPN-LOCAL-STORAGE-ADMIN";