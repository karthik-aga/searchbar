import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IntegrationDownshift from './components/search'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0b46db',
      main: '#171616',
      dark: '#0b46db',
      contrastText: '#fff',
    },
    secondary: {
      light: '#0b46db',
      main: '#f44336',
      dark: '#0d0d0d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme = { theme }>
      {/* <Navbar /> */}
      <IntegrationDownshift />
      {/* <Example />
      <DownshiftTwo />
      <Test></Test> */}
   </MuiThemeProvider>
  );
}

export default App;
