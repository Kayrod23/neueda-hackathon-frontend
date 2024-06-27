import NavBar from "./component/NavBar.jsx"
import Main from "./component/Main.jsx"
import Account from "./component/Account.jsx"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let [client, setClient] = useState();
  let API = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`${API}/bankaccounts/1234567`)
    .then((response) => response.json())
    .then((response)=>{
        setClient(response)
    })
}, [API])

  return (
    <BrowserRouter>
      <NavBar client={client}/>
      <Routes>
        <Route path="/" element={<Main client={client}/>}/>
        <Route path="/account/:id" element={<Account client={client}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
