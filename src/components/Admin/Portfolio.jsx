import { useParams, Link } from "react-router-dom";

const Portfolio = () => {
  const { memberName } = useParams();

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">{memberName}'s Portfolio</h2>
      <p className="text-center text-gray-600 mt-2">Role: Mentor</p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Projects</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Project A</li>
          <li>Project B</li>
        </ul>
      </div>

      {/* Back to Team Profile */}
      <div className="mt-6 text-center">
        <Link to="/" className="text-blue-500 hover:underline">← Back to Team Profile</Link>
      </div>
    </div>
  );
};

export default Portfolio;
