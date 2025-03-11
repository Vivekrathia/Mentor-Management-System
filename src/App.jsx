import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamProfile from "./components/Admin/TeamProfile";
import Portfolio from "./components/Admin/Portfolio";
import MentorshipList from "./components/Admin/MentorshipList";
import MentorAssignment from "./components/Admin/MentorshipManagement";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-5">
        <h1 className="text-2xl font-bold text-center">Mentor Management System</h1>
        <Routes>
          <Route path="/" element={<TeamProfile />} />
          <Route path="/portfolio/:memberName" element={<Portfolio />} />
          <Route path="/mentorships" element={<MentorshipList />} />
          <Route path="/assign-mentees" element={<MentorAssignment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
