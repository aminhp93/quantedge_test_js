import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Tab from '../Tab/Tab';


class App extends Component {
  render() {
    return (
      <div>
      	<MuiThemeProvider>
        	<Tab/>
      	</MuiThemeProvider>
      </div>
    );
  }
}

export default App;
