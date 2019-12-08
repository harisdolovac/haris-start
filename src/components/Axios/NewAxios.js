import axios from "axios";

export const newAxios = axios.create({
  baseURL: "https://api-staging.kitabuli.de/api/v1/"
});

export const setAuthToken = token => {
  if (token) {
    console.log(token);

    newAxios.defaults.headers.common["Authorization"] = `JWT ${token}`;
  } else {
    delete newAxios.defaults.headers.common["Authorization"];
  }
};
