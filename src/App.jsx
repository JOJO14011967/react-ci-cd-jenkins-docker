import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Jobs from "./components/jobs";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import JobDetails from "./components/JobDetails";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute Component={Home} />} />
      <Route path="/jobs" element={<ProtectedRoute Component={Jobs} />} />
      <Route path="/jobs/:id" element={<JobDetails />} />

      <Route path="/about" element={<ProtectedRoute Component={About} />} />
      <Route path="/contact" element={<ProtectedRoute Component={Contact} />} />

      <Route path="/login" element={<Login />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

