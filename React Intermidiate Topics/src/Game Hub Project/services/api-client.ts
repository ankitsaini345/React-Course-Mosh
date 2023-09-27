import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f712aebe25e846bc964b4d399fb7c4c1",
  },
});
