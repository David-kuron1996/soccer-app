import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [standings, setStandings] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [standingsRes, fixturesRes, playersRes] = await Promise.all([
          fetch('/standings.json'),
          fetch('/fixtures.json'),
          fetch('/players.json')
        ]);

        if (!standingsRes.ok || !fixturesRes.ok || !playersRes.ok) {
          throw new Error('Network response was not ok');
        }

        const standingsData = await standingsRes.json();
        const fixturesData = await fixturesRes.json();
        const playersData = await playersRes.json();

        setStandings(standingsData);
        setFixtures(fixturesData);
        setPlayers(playersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updatePlayer = (playerId, updates) => {
    setPlayers(prevPlayers => 
      prevPlayers.map(player => 
        player.id === playerId ? { ...player, ...updates } : player
      )
    );
  };

  const deletePlayer = (playerId) => {
    setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
  };

  const updateTeamPoints = (teamId, newPoints) => {
    setStandings(prevStandings => 
      prevStandings.map(team => 
        team.id === teamId ? { ...team, points: newPoints } : team
      )
    );
  };

  return (
    <AppContext.Provider value={{ 
      standings, 
      fixtures, 
      players, 
      loading, 
      error,
      updatePlayer,
      deletePlayer,
      updateTeamPoints
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);