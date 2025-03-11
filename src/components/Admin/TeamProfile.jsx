import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TeamProfile = () => {
  // Load team members from localStorage or set empty array
  const [teamMembers, setTeamMembers] = useState(
    JSON.parse(localStorage.getItem("teamMembers")) || []
  );
  const [newMember, setNewMember] = useState({ name: "", role: "Mentor" });

  // Update localStorage whenever teamMembers change
  useEffect(() => {
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const addMember = (e) => {
    e.preventDefault();
    if (newMember.name) {
      const updatedMembers = [...teamMembers, newMember];
      setTeamMembers(updatedMembers);
      localStorage.setItem("teamMembers", JSON.stringify(updatedMembers)); // Save to localStorage
      setNewMember({ name: "", role: "Mentor" });
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Profile Management</h2>

        {/* Form to Add New Member */}
        <form onSubmit={addMember} className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newMember.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-2"
            required
          />

          {/* Dropdown for Role Selection */}
          <select
            name="role"
            value={newMember.role}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-2"
          >
            <option value="Mentor">Mentor</option>
            <option value="Student">Student</option>
          </select>

          <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
            Add Member
          </button>
        </form>

        {/* Team Members List */}
        <h2 className="text-xl font-semibold">Team Members</h2>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index} className="bg-gray-200 p-3 my-2 rounded-lg flex justify-between">
              <div>
                <p><strong>Name:</strong> {member.name}</p>
                <p><strong>Role:</strong> {member.role}</p>
              </div>
              {/* Navigation Button */}
              <Link
                to={`/portfolio/${member.name}`}
                className="text-blue-500 hover:underline"
              >
                View Portfolio
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 text-center">
          <Link to="/mentorships" className="bg-blue-500 text-white px-4 py-2 rounded">
              View Mentorship Program
          </Link>
      </div>
      <div className="mt-6 text-center">
          <Link to="/assign-mentees" className="bg-blue-500 text-white px-4 py-2 rounded">
            Assign Mentors
          </Link>
      </div>

    </div>
  );
};

export default TeamProfile;








