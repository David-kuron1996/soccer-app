import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Standings from './components/Standings';
import Fixtures from './components/Fixtures';
import Players from './components/Players';

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <main className="bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/players" element={<Players />} />
          </Routes>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;