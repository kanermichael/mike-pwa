// @ts-ignore
import { gql, useMutation, useQuery } from '@apollo/client';

import UserList from './UserList';

const USERS_QUERY = gql`
    query users {
        users(limit: 10) {
            id
            name
            rocket
            timestamp
        }
    }
`;
const DELETE_USERS = gql`
 mutation deleteUsers($id: uuid) {
  delete_users(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
`;

// const UPDATE_USERS = gql`
// mutation updateUsers($id: uuid, $name: String!) {
//   update_users(where: {id: {_eq: $id}}, _set: {name: $name}) {
//     affected_rows
//     returning {
//       id
//       name
//     }
//   }
// }
// `;

const UserListContainer = () => {
  const { loading, error, data } = useQuery<any>(USERS_QUERY);
  const [deleteUsers] = useMutation(DELETE_USERS, {  refetchQueries: [
    { query: USERS_QUERY }
  ]
});

  const handleDelete = (id: string) => {
    console.log(id)
    deleteUsers({
      variables: { id },
    });
  }
  // const handleEdit = () => {
  //   console.log(user.id)
  //   updateUsers({
  //     variables: { id: user.id, name: 'test'},
  //   });
  // }



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error?.message}</div>;
  }

  return (
    <div className="UserListContainer">
      <UserList users={data.users} handleDelete={handleDelete}/>
    </div>
  );
};

export default UserListContainer;
