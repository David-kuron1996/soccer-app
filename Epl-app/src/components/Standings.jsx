import { useAppContext } from '../context/AppContext';
import StandingsEdit from './StandingsEdit';

const Standings = () => {
  const { standings, loading, error, updateTeamPoints } = useAppContext();
  const [editingTeam, setEditingTeam] = useState(null);

  const handleEditPoints = (team) => {
    setEditingTeam(team);
  };

  const handleSavePoints = (teamId, newPoints) => {
    updateTeamPoints(teamId, newPoints);
    setEditingTeam(null);
  };

  if (loading) return <div className="text-center py-10">Loading data...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Premier League Standings</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4">Pos</th>
              <th className="py-2 px-4 text-left">Team</th>
              <th className="py-2 px-4">P</th>
              <th className="py-2 px-4">W</th>
              <th className="py-2 px-4">D</th>
              <th className="py-2 px-4">L</th>
              <th className="py-2 px-4">GF</th>
              <th className="py-2 px-4">GA</th>
              <th className="py-2 px-4">GD</th>
              <th className="py-2 px-4 font-bold">Pts</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {standings.map(team => (
              <tr key={team.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-center">{team.position}</td>
                <td className="py-2 px-4 font-medium">{team.team}</td>
                <td className="py-2 px-4 text-center">{team.played}</td>
                <td className="py-2 px-4 text-center">{team.won}</td>
                <td className="py-2 px-4 text-center">{team.drawn}</td>
                <td className="py-2 px-4 text-center">{team.lost}</td>
                <td className="py-2 px-4 text-center">{team.gf}</td>
                <td className="py-2 px-4 text-center">{team.ga}</td>
                <td className="py-2 px-4 text-center">{team.gd}</td>
                <td className="py-2 px-4 font-bold text-center">{team.points}</td>
                <td className="py-2 px-4 text-center">
                  <button 
                    onClick={() => handleEditPoints(team)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
                  >
                    Edit Points
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingTeam && (
        <StandingsEdit 
          team={editingTeam} 
          onSave={handleSavePoints} 
          onCancel={() => setEditingTeam(null)} 
        />
      )}
    </div>
  );
};

export default Standings;