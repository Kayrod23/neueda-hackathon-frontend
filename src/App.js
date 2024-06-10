import NavBar from "./component/NavBar.jsx"
import Main from "./component/Main.jsx"
import Account from "./component/Account.jsx"
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/account/:id" element={<Account/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
