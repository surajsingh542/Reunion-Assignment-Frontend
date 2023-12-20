import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Forms/Login";
import HomePage from "./components/HomePage/HomePage";
// import Register from "./components/Forms/Register";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
// import AddTransaction from "./components/Forms/AddTransaction";
// import AccountDashboard from "./components/Dashboard/AccountDashboard";
// import AccountDetails from "./components/Dashboard/AccountDetails";
// import AddAccount from "./components/Forms/AddAccount";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
