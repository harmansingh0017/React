import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { Addproject } from './components/Addproject';
import { Editproject } from './components/Editproject';


import { GlobalProvider } from './context/GlobalState';
//here we are using global provider so it can so all the component under it are its children component
function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Addproject} exact />
        <Route path="/edit/:id" component={Editproject} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
