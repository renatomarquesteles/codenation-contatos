import React from 'react';

import Contacts from './components/Contacts';
import Topbar from './components/Topbar';
import Filters from './components/Filters';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts />
      </React.Fragment>
    );
  }
}

export default App;
