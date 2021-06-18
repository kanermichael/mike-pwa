import React, { FC } from 'react';
import {
  ApolloProvider,
  ApolloClient
} from "@apollo/client";
import MissionsList from './pages/MissionsList';
import header from './assets/mike.svg';
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#111B42',
  }
}));

interface Props {
  client: ApolloClient<any>;
}
const App: FC<Props>= ({ client })=> {

  const classes = useStyles();
  return (
    <div className="App">
     <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={header} alt="logo" />
          </IconButton>
        </Toolbar>
      </AppBar>
    
      <ApolloProvider client={client}>
        <MissionsList />
     </ApolloProvider>
    </div>
   
  );
}

export default App;
