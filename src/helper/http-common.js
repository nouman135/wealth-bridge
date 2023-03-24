import axios from "axios";

const baseURL = "http://localhost:8000/api";

export const getToken = () => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    let setToken;

    if (getUser) {
        setToken = getUser.access_token;
    }
    else {
        setToken = null
    }
    return setToken;
}

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: getAuthorizationHeader() },
});