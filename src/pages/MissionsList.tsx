import {
    useQuery,
    gql,
  } from "@apollo/client";
  import Paper from '@material-ui/core/Paper';
  import { makeStyles } from '@material-ui/core/styles';
  import { Button, CircularProgress, Container, Grid, Typography } from '@material-ui/core';

  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    gridItem: {
        marginBottom: theme.spacing(1) 
    }, 
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#111B42',
        color: 'white'
    },
    title: {
        margin: theme.spacing(3) 
    }
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
  
  const MissionsList = () => {
  
      const { loading, data } = useQuery<Missions>(GET_MISSION_DATA);
      const classes = useStyles();
      const missions =  data?.missions;
      
      return (
        <Container maxWidth="md">
        <div className={classes.root}>
        <Typography variant="h4" component="h1" align="center" gutterBottom className={classes.title}>
        Available Missions
                      </Typography>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <Grid container spacing={3}>
                {data && missions?.map(mission => (
                    <Grid item xs={12} sm={6} key={mission.id} className={classes.gridItem}>
                      <Paper className={classes.paper} elevation={3} >
                      <Typography variant="h5" component="h3" gutterBottom>
                        {mission.name}
                      </Typography>
                      <Typography variant="body1" component="p" gutterBottom>
                        {mission.id}
                      </Typography>
                         <Button variant="contained" className={classes.button}>
                            Ready for Briefing
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
  
    export default MissionsList;