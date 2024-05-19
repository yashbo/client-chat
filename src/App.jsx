import axios from "axios"
import {UserContextProvider } from "./UserContext";
import Routes from "./Routes";
function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL='https://chat-api-a.onrender.com/';
  return (
    <>
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
    </>
  )
}

export default App
