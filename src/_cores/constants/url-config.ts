const urls = {
  development: "https://67e9151b.ngrok.io/",
  production: "https://localhost:9000/"
} as any;

const API_URL = urls[process.env.NODE_ENV];
export default API_URL;
