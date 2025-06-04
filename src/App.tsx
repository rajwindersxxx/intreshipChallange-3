import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";

export default function App() {
  return (
    <div className="bg-gray  h-[calc(100vh-16px)] w-[400px]  m-2 mx-auto text-base overflow-y-auto">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
