import  { FC } from 'react';
import { User } from '../models/User';

import { IconButton, Card, Avatar, CardHeader } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


export interface UserRowProps {
  user: User;
}

const UserRow: FC<UserRowProps> = ({ user }) => {
  
  const date = new Date(user.timestamp);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {user.name?.charAt(0)}
          </Avatar>
        }
        title={user.name || 'Max Musterman' }
        subheader={`${day}/${month}/${year}`}
        action={
          <>
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          </>
        }
      />
  </Card>
  );
};

export default UserRow;
