import React from 'react';
import {
  Container,
  Dimmer,
  Divider,
  Header,
  Input,
  Loader,
  Message,
} from 'semantic-ui-react';
import { xor } from 'lodash';
import TvShowList from './components/TvShowList';
import TvShowItem from './components/TvShowItem';

class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    popularShows: null,
    searchFieldValue: '',
    favorites: [69050, 97513],
  };

  componentDidMount() {
    const params = new URLSearchParams({
      api_key: process.env.REACT_APP_API_KEY,
      language: 'en-US',
      page: 1,
    });

    fetch(`https://api.themoviedb.org/3/tv/popular?${params}`)
      .then((result) => result.json())
      .then(
        (result) => {
          this.setState({ popularShows: result, isLoaded: true });
        },
        (error) => {
          this.setState({ error, isLoaded: true });
        }
      );
  }

  handleShowClick(id) {
    const favorites = xor(this.state.favorites, [id]);
    this.setState({ favorites });
  }

  handleSearchFieldChange(element) {
    this.setState({ searchFieldValue: element.target.value });
  }

  filterShows() {
    const { popularShows, searchFieldValue } = this.state;
    const { results } = popularShows;

    if (!results) {
      return [];
    }

    return results.filter((show) =>
      show.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
  }

  render() {
    const { favorites, isLoaded, error } = this.state;

    if (!isLoaded) {
      return (
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }

    if (error) {
      return (
        <Message negative>
          <Message.Header>
            We're sorry we can't display the tv shows at the moment
          </Message.Header>
          <p>Please try to call the support</p>
        </Message>
      );
    }

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
          {this.filterShows().map(
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
