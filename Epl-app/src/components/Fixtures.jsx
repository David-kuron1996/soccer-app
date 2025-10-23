import { useAppContext } from '../context/AppContext';

const Fixtures = () => {
  const { fixtures, loading, error } = useAppContext();

  if (loading) return <div className="text-center py-10">Loading data...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Premier League Fixtures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fixtures.map(fixture => (
          <div key={fixture.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500">{fixture.date}</span>
              <span className={`px-2 py-1 rounded text-xs ${
                fixture.status === 'Played' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {fixture.status}
              </span>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">{fixture.homeTeam}</div>
              <div className="my-2 font-mono">{fixture.result}</div>
              <div className="font-bold text-lg">{fixture.awayTeam}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fixtures;