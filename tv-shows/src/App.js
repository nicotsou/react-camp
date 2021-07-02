import React from 'react';
import { xor } from 'lodash';
import popularShows from './popular-shows.json';
import TvShowList from './components/TvShowList';
import TvShowItem from './components/TvShowItem';

class App extends React.Component {
  state = {
    searchFieldValue: '',
    favorites: [69050, 97513],
  };

  handleShowClick(id) {
    const favorites = xor(this.state.favorites, [id]);
    this.setState({ favorites });
  }

  handleSearchFieldChange(element) {
    this.setState({ searchFieldValue: element.target.value });
  }

  filterShows(popularShows) {
    return popularShows.results.filter((show) =>
      show.name
        .toLowerCase()
        .includes(this.state.searchFieldValue.toLowerCase())
    );
  }

  render() {
    const { favorites } = this.state;

    return (
      <div>
        <input
          value={this.state.searchFieldValue}
          onChange={this.handleSearchFieldChange.bind(this)}
          placeholder="Search by name..."
        />
        <TvShowList>
          {this.filterShows(popularShows).map(
            ({ id, name, vote_average, poster_path }) => (
              <TvShowItem
                key={id}
                id={id}
                name={name}
                rating={vote_average}
                posterSrc={poster_path}
                favorites={favorites}
                onClick={this.handleShowClick.bind(this, id)}
              />
            )
          )}
        </TvShowList>
      </div>
    );
  }
}

export default App;
