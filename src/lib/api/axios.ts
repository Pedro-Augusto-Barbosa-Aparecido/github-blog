import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: "Bearer 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",
  },
});
