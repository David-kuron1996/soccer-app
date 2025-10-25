


# Premier League Soccer App

A comprehensive React application for tracking and managing English Premier League soccer data, including team standings, player statistics, and match fixtures.

## Features

- **Team Standings View**
  - Display all 20 Premier League teams with their statistics
  - Edit team points directly through the interface
  - Real-time updates to standings table

- **Player Statistics**
  - View player goals and assists data
  - Edit player goals and assists
  - Delete players from the database
  - Real-time updates to player statistics

- **Match Fixtures**
  - View upcoming and past match fixtures
  - Match results and status indicators

- **Responsive Design**
  - Mobile-friendly interface
  - Built with Tailwind CSS for consistent styling

- **Data Management**
  - Context API for state management
  - Async data fetching from JSON database
  - Local state management for CRUD operations

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **React Router** - Declarative routing for React
- **Context API** - React state management
- **Tailwind CSS** - Utility-first CSS framework
- **JSON** - Data storage format for fixtures, players, and standings

## Installation

1. Clone the repository:
```bash
git clone git@github.com:David-kuron1996/soccer-app.git
```

2. Navigate to the project directory:
```bash
cd Epl-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Run this in your terminal ` npm run dev ` you will get this
 [http://localhost:5173/](http://localhost:5173/) to view the application in your browser.

6. To run the API or get API
    - make sure you are in the right folder ` cd src `
    - run this in the terminal ` json-server --watch db.json ` you will get this 
    Endpoints:
`http://localhost:3000/standings`
`http://localhost:3000/fixtures`
`http://localhost:3000/players`

## Project Structure


src/
|── components/
│   ── Navbar.jsx         # Navigation component
│   ── Home.jsx            # Home page with league overview
│   ── Standings.jsx       # Standings table with edit functionality
│   ── StandingsEdit.jsx   # Modal for editing team points
│   ── Fixtures.jsx        # Fixtures display
│   ── Players.jsx         # Players table with CRUD operations
│   ── PlayersEdit.jsx     # Modal for editing player stats
│   ── PlayersDelete.jsx   # Modal for deleting players
|── context/
│   |── AppContext.js      # Context provider and state management
|── App.jsx                 # Main app component with routes
|── index.html               # Entry point for the React app
|── db.json               # JSON database with league data


## Usage

1. **Navigation**
   - Use the navbar to navigate between different sections:
     - Home: Overview of the league
     - Standings: View and edit team standings
     - Fixtures: View match fixtures
     - Players: View and manage player statistics

2. **Editing Team Points**
   - In the Standings section, click "Edit Points" next to any team
   - Enter the new points value and click "Save"
   - The standings table will update automatically

3. **Managing Player Statistics**
   - In the Players section, use the "Edit" button to modify player goals and assists
   - Use the "Delete" button to remove a player from the database
   - Changes are reflected immediately in the table

## Data Structure

### db.json Structure

```json
{
  "standings": [
    {
      "id": 1,
      "team": "Manchester City",
      "played": 38,
      "won": 28,
      "drawn": 5,
      "lost": 5,
      "gf": 99,
      "ga": 26,
      "gd": 73,
      "points": 89
    },
    // ... more teams
  ],
  "fixtures": [
    {
      "id": 1,
      "homeTeam": "Man City",
      "awayTeam": "Arsenal",
      "date": "2023-08-12",
      "result": "2-1",
      "status": "Played"
    },
    // ... more fixtures
  ],
  "players": [
    {
      "id": 1,
      "name": "Erling Haaland",
      "team": "Man City",
      "goals": 36,
      "assists": 8
    },
    // ... more players
  ]
}
```

## Contributors

1 - **Joseph Kimuhu** # Navbar , #Home
2 - **Peter Nduru**   # Fixtures 



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data for this app is based on the English Premier League
- Built with React and Tailwind CSS
- Inspired by various soccer statistics applications
