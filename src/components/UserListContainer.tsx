import { gql, useQuery } from '@apollo/client';

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

const UserListContainer = () => {
  const { loading, error, data } = useQuery<any>(USERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error?.message}</div>;
  }

  return (
    <div className="UserListContainer">
      <UserList users={data.users} />
    </div>
  );
};

export default UserListContainer;
