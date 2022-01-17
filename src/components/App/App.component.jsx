import React, { useLayoutEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from '../../state/UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import AuthProvider from '../../providers/Auth';
import PrivateRoute from '../PrivateRoute';
import HomePage from '../../pages/Home';
import FavouritesPage from '../../pages/Favourites';
import WatchVideoPage from '../../pages/WatchVideo';
import WatchFavouritePage from '../../pages/WatchFavourite';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
//import { random } from '../../utils/fns';

function App() {
  useLayoutEffect(() => {
    /*const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };*/
  }, []);

  const userContextVal = useContext(UserContext);
  const [search, setSearch] = React.useState();

  return (
    <BrowserRouter data-testid="app">
      <AuthProvider>
        <UserContext.Provider value={{name: userContextVal.name, search: search, setSearch: setSearch}}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/watch-video/:videoId">
              <WatchVideoPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute component={FavouritesPage} path="/favourites" exact />
            <PrivateRoute component={WatchFavouritePage} path="/favourites/watch-video/:videoId" exact />
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Fortune />
        </Layout>
        </UserContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
