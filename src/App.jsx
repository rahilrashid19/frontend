import { Routes, Route } from "react-router-dom";
import Signup from "./UI/Signup";
import Login from "./UI/Login";
import Feed from "./UI/Feed";
import Home from "./UI/Home";
import Profile from "./UI/Profile";
import Connections from "./UI/Connections";
import Requests from "./UI/Requests";
import LandingPage from "./UI/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<Home />}>
        <Route index element={<Feed />} />
        <Route path="feed" element={<Feed />} />
        <Route path="profile" element={<Profile />} />
        <Route path="connections" element={<Connections />} />
        <Route path="requests" element={<Requests />} />
      </Route>
    </Routes>
  );
}

export default App;
