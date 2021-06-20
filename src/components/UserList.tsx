import { FC } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import { User } from '../models/User';
import './UserList.css';
import UserRow from './UserRow';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem: {
      marginBottom: theme.spacing(1) 
  }, 
  title: {
      margin: theme.spacing(3) 
  }
}));



interface UserListProps {
  users: User[];
  handleDelete: (id: string) => void
}

const UserList: FC<UserListProps> = ({ users, handleDelete }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1"  gutterBottom className={classes.title}>
        Users
      </Typography>
      <Grid container spacing={3}>
        {users.map((user, idx) => {
          return (
            <Grid item xs={12} key={user.id} className={classes.gridItem}>
              <UserRow user={user}  handleDelete={handleDelete}/>
            </Grid>
          )}
        )}
      </Grid>
    </div>
  )
};

export default UserList;
