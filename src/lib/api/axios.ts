import axios from "axios";

console.log(import.meta);

export const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});
