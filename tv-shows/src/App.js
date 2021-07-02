import { Route, HashRouter, Switch } from 'react-router-dom';
import PopularShowsScreen from './screens/PopularShowsScreen/PopularShowsScreen';
import FavoritesScreen from './screens/FavoritesScreen/FavoritesScreen';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/popular">
          <PopularShowsScreen />
        </Route>
        <Route path="/favorites">
          <FavoritesScreen />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
