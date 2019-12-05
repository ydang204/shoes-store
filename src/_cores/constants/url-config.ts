const urls = {
  development: "http://localhost:9000/",
  production: "https://localhost:9000/"
} as any;

const API_URL = urls[process.env.NODE_ENV];
export default API_URL;
