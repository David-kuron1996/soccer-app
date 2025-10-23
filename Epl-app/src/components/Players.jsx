import { useAppContext } from '../context/AppContext';
import PlayersEdit from './PlayersEdit';
import PlayersDelete from './PlayersDelete';

const Players = () => {
  const { players, loading, error } = useAppContext();
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [deletingPlayer, setDeletingPlayer] = useState(null);

  const handleEditPlayer = (player) => {
    setEditingPlayer(player);
  };

  const handleDeletePlayer = (player) => {
    setDeletingPlayer(player);
  };

  if (loading) return <div className="text-center py-10">Loading data...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Premier League Players</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4">Player</th>
              <th className="py-2 px-4">Team</th>
              <th className="py-2 px-4 text-center">Goals</th>
              <th className="py-2 px-4 text-center">Assists</th>
              <th className="py-2 px-4 text-center">Total</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => {
              const total = player.goals + player.assists;
              return (
                <tr key={player.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">{player.name}</td>
                  <td className="py-2 px-4">{player.team}</td>
                  <td className="py-2 px-4 text-center font-bold">{player.goals}</td>
                  <td className="py-2 px-4 text-center font-bold">{player.assists}</td>
                  <td className="py-2 px-4 text-center font-bold text-green-600">{total}</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEditPlayer(player)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeletePlayer(player)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {editingPlayer && (
        <PlayersEdit 
          player={editingPlayer} 
          onCancel={() => setEditingPlayer(null)} 
        />
      )}

      {deletingPlayer && (
        <PlayersDelete 
          player={deletingPlayer} 
          onCancel={() => setDeletingPlayer(null)} 
        />
      )}
    </div>
  );
};

export default Players;