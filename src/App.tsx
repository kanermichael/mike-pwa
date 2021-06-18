import './App.css';
import {
  useQuery,
  gql,
  ApolloProvider,
  NormalizedCacheObject,
  ApolloClient
} from "@apollo/client";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import getApolloClient from './apolloClient';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

interface MissionData {
  name: String;
  description: String;
  wikipedia: String;
  id: any;
}

interface Missions {
  missions: MissionData[];
}

const GET_MISSION_DATA = gql`
  query GetRocketInventory {
    missions {
      id
      name
      description
      wikipedia
    }
  }
  
`;

export function RocketInventoryList() {

  const { loading, data } = useQuery<Missions>(GET_MISSION_DATA);
  const classes = useStyles();
  const missions =  data?.missions;
  
  return (
    <Container maxWidth="md">
    <div className={classes.root}>
      <h1>Available Missions</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Grid container spacing={3}>
            {data && missions?.map(mission => (
                <Grid item xs={12} sm={6} key={mission.id}>
                  <Paper className={classes.paper} elevation={3} >
                  <Typography variant="h5" component="h3">
                    {mission.name}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {mission.id}
                  </Typography>
                     <Button variant="contained" color="primary">
                        Ready for Debriefing
                    </Button>
                  </Paper>
                </Grid>
            ))}
      </Grid>
      )}
      </div>
      </Container>
  );
}

function App() {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | undefined>()
  useEffect(() => {
    getApolloClient().then((client) => {
      setClient(client)
    })
  }, [])
  return (
    client ? <div className="App">
      <ApolloProvider client={client as ApolloClient<any>}>
     <RocketInventoryList />
     </ApolloProvider>
    </div> : <div>Loading</div>
   
  );
}

export default App;
