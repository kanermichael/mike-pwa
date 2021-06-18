import { FC } from 'react';
import {
  ApolloProvider,
  ApolloClient
} from "@apollo/client";
import MissionsList from './pages/MissionsList';

interface Props {
  client: ApolloClient<any>;
}
const App: FC<Props>= ({ client })=> {

  return (
    
    <div className="App">
      <ApolloProvider client={client}>
        <MissionsList />
     </ApolloProvider>
    </div>
   
  );
}

export default App;
