
import  { FC } from 'react';
import { User } from '../models/User';

import { IconButton, Card, Avatar, CardHeader } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

interface Props {
  user: User;
  handleDelete: (id: string) => void;
}

const UserRow: FC<Props> = ({ user, handleDelete }) => {
  
  const date = new Date(user.timestamp);
  const month = date.getMonth()+1;
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
        subheader={`${month}/${year}`}
        action={
          <>
          <IconButton aria-label="edit" >
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => handleDelete(user.id)}>
            <DeleteIcon />
          </IconButton>
          </>
        }
      />
  </Card>
  );
};

export default UserRow;
