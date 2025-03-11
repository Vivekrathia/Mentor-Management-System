import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MentorAssignment = () => {
  // Load students & mentors from localStorage or set default values
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || [
      { name: "Alice", mentor: "" },
      { name: "Bob", mentor: "John Doe" },
      { name: "Charlie", mentor: "" },
      { name: "David", mentor: "Jane Smith" },
    ]
  );

  const [mentors, setMentors] = useState(
    JSON.parse(localStorage.getItem("mentors")) || ["John Doe", "Jane Smith", "Alice Brown"]
  );

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const assignMentor = (studentName, mentorName) => {
    const updatedStudents = students.map((student) =>
      student.name === studentName ? { ...student, mentor: mentorName } : student
    );
    setStudents(updatedStudents);
  };

  const unassignMentor = (studentName) => {
    const updatedStudents = students.map((student) =>
      student.name === studentName ? { ...student, mentor: "" } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Mentor Assignment</h2>

      {/* Unassigned Mentees */}
      <h3 className="text-lg font-semibold">Unassigned Mentees</h3>
      <ul>
        {students.filter(student => student.mentor === "").map((student, index) => (
          <li key={index} className="bg-gray-200 p-3 my-2 rounded-lg flex justify-between">
            <p><strong>{student.name}</strong></p>
            <select
              onChange={(e) => assignMentor(student.name, e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Assign Mentor</option>
              {mentors.map((mentor, idx) => (
                <option key={idx} value={mentor}>{mentor}</option>
              ))}
            </select>
          </li>
        ))}
      </ul>

      {/* Assigned Mentees */}
      <h3 className="text-lg font-semibold mt-4">Assigned Mentees</h3>
      <ul>
        {students.filter(student => student.mentor !== "").map((student, index) => (
          <li key={index} className="bg-gray-200 p-3 my-2 rounded-lg flex justify-between">
            <p><strong>{student.name}</strong> - Mentor: {student.mentor}</p>
            <button
              onClick={() => unassignMentor(student.name)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Unassign
            </button>
          </li>
        ))}
      </ul>

      {/* Back to Team Profile */}
      <div className="mt-6 text-center">
        <Link to="/" className="text-blue-500 hover:underline">← Back to Team Profile</Link>
      </div>
    </div>
  );
};

export default MentorAssignment;
