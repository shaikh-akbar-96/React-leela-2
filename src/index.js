import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

// axios.defaults.baseURL = `https://react-leela-2-default-rtdb.firebaseio.com`;
// axios.defaults.headers.common["Authorization"] = "Auth Token";

// axios.interceptors.request.use((request) => {
//   console.log(request);
//   request.headers.ChannelName = "Aashu Web Dev";
//   return request;
// });

// axios.interceptors.response.use((response) => {
//   console.log(response);
//   return response;
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
