import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MentorshipList = () => {
  // Load mentorship data from localStorage or set default data
  const [mentorships, setMentorships] = useState(
    JSON.parse(localStorage.getItem("mentorships")) || [
      { student: "Alice", mentor: "John Doe" },
      { student: "Bob", mentor: "Jane Smith" },
    ]
  );

  useEffect(() => {
    localStorage.setItem("mentorships", JSON.stringify(mentorships));
  }, [mentorships]);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Mentorship Program</h2>

      <ul>
        {mentorships.map((pair, index) => (
          <li key={index} className="bg-gray-200 p-3 my-2 rounded-lg flex justify-between">
            <p><strong>Student:</strong> {pair.student}</p>
            <p><strong>Mentor:</strong> {pair.mentor}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <Link to="/" className="text-blue-500 hover:underline">← Back to Team Profile</Link>
      </div>
    </div>
  );
};

export default MentorshipList;
