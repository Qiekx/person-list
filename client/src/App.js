import React, { PropTypes } from 'react';

import Header from './header';
import Footer from './footer';
import Table from './table';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <Table />
        <Footer />
      </div>
    )
  }
}

export default App;
