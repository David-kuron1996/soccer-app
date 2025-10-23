import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { loading } = useAppContext();

  return (
    <nav className="bg-green-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Premier League</div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-green-200 transition">Home</Link>
          <Link to="/standings" className="hover:text-green-200 transition">Standings</Link>
          <Link to="/fixtures" className="hover:text-green-200 transition">Fixtures</Link>
          <Link to="/players" className="hover:text-green-200 transition">Players</Link>
        </div>
        {loading && <span className="text-yellow-300">Loading...</span>}
      </div>
    </nav>
  );
};

export default Navbar;