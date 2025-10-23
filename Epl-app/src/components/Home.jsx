import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { standings, fixtures, loading, error } = useAppContext();

  if (loading) return <div className="text-center py-10">Loading data...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  const topTeams = standings.slice(0, 3);
  const nextFixtures = fixtures.slice(0, 3);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Premier League Overview</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Top 3 Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topTeams.map(team => (
            <div key={team.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg">{team.team}</h3>
              <p>Points: {team.points}</p>
              <p>GD: {team.gd}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Fixtures</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Match</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              {nextFixtures.map(fixture => (
                <tr key={fixture.id} className="border-b">
                  <td className="py-2 px-4">{fixture.homeTeam} vs {fixture.awayTeam}</td>
                  <td className="py-2 px-4">{fixture.date}</td>
                  <td className="py-2 px-4">{fixture.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/fixtures" className="mt-4 inline-block text-blue-600 hover:underline">
          View All Fixtures →
        </Link>
      </div>
    </div>
  );
};

export default Home;