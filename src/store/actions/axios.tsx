import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {'Content-Type': 'application/json'}
})

instance.interceptors.request.use(config => {
    let token = localStorage.getItem("accessToken")
    if (token != null) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    return config
})

export default instance