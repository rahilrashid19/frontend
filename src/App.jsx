import { Button } from "@/components/ui/button";
import { Route, Routes } from "react-router-dom";
import Signup from "./UI/Signup";
import Login from "./UI/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
