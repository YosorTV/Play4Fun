import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home';

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <Route path={["/game/:id", "/"]}>
      <Home />
    </Route>
    </>
  );
}

export default App;
