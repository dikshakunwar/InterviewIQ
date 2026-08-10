import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Resume from "./pages/Resume";
import Interview from "./pages/Interview";
import LiveInterview from "./pages/LiveInterview";
import Results from "./pages/Results";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/features" element={<Features />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/interview" element={<Interview />} />

        <Route path="/live-interview" element={<LiveInterview />} />

        <Route path="/results" element={<Results />} />

        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
