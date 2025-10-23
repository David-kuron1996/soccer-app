import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const PlayersEdit = ({ player, onCancel }) => {
  const { updatePlayer } = useAppContext();
  const [goals, setGoals] = useState(player.goals);
  const [assists, setAssists] = useState(player.assists);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer(player.id, { goals: parseInt(goals), assists: parseInt(assists) });
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Player Stats</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="player">
              Player
            </label>
            <input 
              id="player" 
              type="text" 
              value={player.name} 
              readOnly 
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="team">
              Team
            </label>
            <input 
              id="team" 
              type="text" 
              value={player.team} 
              readOnly 
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goals">
              Goals
            </label>
            <input 
              id="goals" 
              type="number" 
              value={goals} 
              onChange={(e) => setGoals(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              min="0"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assists">
              Assists
            </label>
            <input 
              id="assists" 
              type="number" 
              value={assists} 
              onChange={(e) => setAssists(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              min="0"
              required
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button 
              type="button" 
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayersEdit;