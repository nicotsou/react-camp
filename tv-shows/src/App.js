import popularShows from './popular-shows.json';

function App() {
  return (
    <div>
      <h1>TV Shows</h1>

      <ul>
        {popularShows.results.map(({ name, vote_average }) => (
          <li>
            {name}, Rating: {vote_average}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
