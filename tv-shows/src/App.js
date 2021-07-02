import React from 'react';
import { Container, Divider, Header, Input } from 'semantic-ui-react';
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
      <Container style={{ paddingTop: '20px' }}>
        <Header as="h1">TV Shows</Header>
        <Input
          value={this.state.searchFieldValue}
          onChange={this.handleSearchFieldChange.bind(this)}
          placeholder="Search by name..."
        />
        <Divider />
        <TvShowList>
          {this.filterShows(popularShows).map(
            ({ id, name, vote_average, poster_path, first_air_date }) => (
              <TvShowItem
                key={id}
                id={id}
                name={name}
                rating={vote_average}
                posterSrc={poster_path}
                favorited={favorites.some((favoriteId) => favoriteId === id)}
                releaseDate={first_air_date}
                onClick={this.handleShowClick.bind(this, id)}
              />
            )
          )}
        </TvShowList>
      </Container>
    );
  }
}

export default App;
