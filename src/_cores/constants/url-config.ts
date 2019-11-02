const urls = {
  // development: "http://localhost:5555",
  development: "https://eve-api-staging.futurify.io:5555",
  production: "https://eve-api-staging.futurify.io:5555"
} as any;

const API_URL = urls[process.env.NODE_ENV];
export default API_URL;
