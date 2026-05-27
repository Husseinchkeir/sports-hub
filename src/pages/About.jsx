const userInfo = [
  'Basic information about each sport',
  'Popular teams and players',
  'Upcoming matches and simple results',
  'A contact page for feedback'
];

const teamQualities = [
  'Good teamwork',
  'Strong training routine',
  'Respect between players',
  'Clear goals during the season'
];

function About() {
  return (
    <main className="page">
      <section className="hero-panel small-hero">
        <p className="eyebrow">About The Project</p>
        <h1>About Sports Hub</h1>
        <p>
          Sports Hub is a simple frontend web application created for fans who want
          sports categories, team information and match schedules in one organized place.
        </p>
      </section>

      <section className="section-card">
        <h2>Project Purpose</h2>
        <p>
          The first version was built with HTML and CSS. This React version continues
          the same idea using reusable components, organized pages and simple interactive features.
        </p>
        <div className="info-box">
          <strong>Goal:</strong> To build a clean and useful sports website that works
          on desktop, tablet and mobile screens.
        </div>
      </section>

      <section className="section-card">
        <h2>What Users Can Find</h2>
        <div className="list-columns">
          <ul className="clean-list">
            {userInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ol className="clean-list">
            {teamQualities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

export default About;
