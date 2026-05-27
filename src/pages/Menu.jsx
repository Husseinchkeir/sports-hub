import { useMemo, useState } from 'react';

const sports = [
  {
    name: 'Football',
    description: 'Football is one of the most popular sports. Fans can follow matches, league tables and team updates.',
    team: 'A strong team with skilled players, teamwork and a loyal fan base.'
  },
  {
    name: 'Basketball',
    description: 'Basketball is fast and exciting. This section focuses on team news, scores and upcoming games.',
    team: 'A team that depends on speed, defense and good communication.'
  },
  {
    name: 'Tennis',
    description: 'Tennis fans can follow tournaments, player performance and final results.',
    team: 'Tennis players need focus, fitness and strong mental control.'
  }
];

const matches = [
  {
    sport: 'Football',
    match: 'Team A vs Team B',
    date: '25 April 2026',
    time: '8:00 PM',
    status: 'Upcoming'
  },
  {
    sport: 'Basketball',
    match: 'Team C vs Team D',
    date: '26 April 2026',
    time: '7:30 PM',
    status: 'Upcoming'
  },
  {
    sport: 'Tennis',
    match: 'Player 1 vs Player 2',
    date: '27 April 2026',
    time: '5:00 PM',
    status: 'Upcoming'
  },
  {
    sport: 'Football',
    match: 'Team E vs Team F',
    date: '28 April 2026',
    time: '9:00 PM',
    status: 'Upcoming'
  }
];

function Menu() {
  const [sportFilter, setSportFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredMatches = useMemo(() => {
    return matches.filter((item) => {
      const matchesSport = sportFilter === 'All' || item.sport === sportFilter;
      const searchText = `${item.sport} ${item.match} ${item.date} ${item.time}`.toLowerCase();
      const matchesSearch = searchText.includes(search.toLowerCase());
      return matchesSport && matchesSearch;
    });
  }, [sportFilter, search]);

  return (
    <main className="page">
      <section className="hero-panel small-hero">
        <p className="eyebrow">Sports Menu</p>
        <h1>Sports Categories, Teams and Schedule</h1>
        <p>Choose a sport, check team information and filter upcoming matches.</p>
      </section>

      <section className="section-card">
        <h2>Our Main Sports</h2>
        <div className="grid">
          {sports.map((sport) => (
            <article className="card" key={sport.name}>
              <h3>{sport.name}</h3>
              <p>{sport.description}</p>
              <p className="muted"><strong>Team note:</strong> {sport.team}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2>Upcoming Matches</h2>
        <div className="toolbar">
          <select value={sportFilter} onChange={(event) => setSportFilter(event.target.value)}>
            <option>All</option>
            <option>Football</option>
            <option>Basketball</option>
            <option>Tennis</option>
          </select>
          <input
            type="text"
            placeholder="Search match or date"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="table-wrap">
          <table>
            <caption>Sports Hub Weekly Schedule</caption>
            <thead>
              <tr>
                <th>Sport</th>
                <th>Match</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredMatches.map((item) => (
                <tr key={`${item.sport}-${item.match}`}>
                  <td>{item.sport}</td>
                  <td>{item.match}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredMatches.length === 0 && (
          <p className="notice">No matches found. Try another sport or search word.</p>
        )}
      </section>
    </main>
  );
}

export default Menu;
