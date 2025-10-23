import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const PlayersDelete = ({ player, onCancel }) => {
  const { deletePlayer } = useAppContext();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    deletePlayer(player.id);
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Delete Player</h2>
        <div className="mb-6">
          <p className="text-gray-700 mb-2">Are you sure you want to delete this player?</p>
          <p className="font-medium">{player.name} ({player.team})</p>
        </div>
        <div className="flex justify-end space-x-3">
          <button 
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button 
            onClick={handleDelete}
            disabled={isDeleting}
            className={`px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayersDelete;