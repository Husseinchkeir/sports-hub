import { useState } from 'react';

const highlights = [
  {
    title: 'Football',
    text: 'Follow club matches, important results and upcoming games.'
  },
  {
    title: 'Basketball',
    text: 'Check team news and the main games of the week.'
  },
  {
    title: 'Tennis',
    text: 'Read about players, tournaments and simple match updates.'
  }
];

function Home({ setActivePage }) {
  const [favorite, setFavorite] = useState('Football');

  return (
    <main className="page">
      <section className="hero-panel">
        <p className="eyebrow">React Sports Website</p>
        <h1>Sports Hub</h1>
        <p>Your simple place for sports news, teams and match schedules.</p>
        <p>
          Sports Hub helps fans follow football, basketball and tennis in one clear
          place instead of checking many different pages.
        </p>
        <div className="hero-actions">
          <button className="btn" type="button" onClick={() => setActivePage('menu')}>
            Explore Sports
          </button>
          <button className="btn-secondary" type="button" onClick={() => setActivePage('contact')}>
            Send Feedback
          </button>
        </div>
      </section>

      <section className="section-card">
        <h2>Latest Highlights</h2>
        <div className="grid">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2>Quick Favorite Sport</h2>
        <p>
          Choose your favorite sport and the website gives a simple starting point.
          This small feature makes the project more useful than a static page.
        </p>
        <div className="control-row">
          <select value={favorite} onChange={(event) => setFavorite(event.target.value)}>
            <option>Football</option>
            <option>Basketball</option>
            <option>Tennis</option>
          </select>
          <span className="result-pill">You selected: {favorite}</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
