import axios from "axios";

const instance = axios.create({
  baseURL: `https://react-leela-2-default-rtdb.firebaseio.com/`,
});

instance.defaults.headers.common["Authorization"] = "Auth From Instance";

instance.interceptors.request.use((request) => {
  console.log(request);
  request.headers.ChannelName = "Aashu Web Dev";
  return request;
});

instance.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

export default instance;
