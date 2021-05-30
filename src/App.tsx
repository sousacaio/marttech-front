import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';


const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
