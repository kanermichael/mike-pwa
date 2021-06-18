// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { ApolloClient } from '@apollo/client'
import {  CircularProgress } from '@material-ui/core';

import getApolloClient from './apolloClient'
import App from './App'

const PWAContainer = () => {
  const [client, setClient] = useState<ApolloClient<any>>()

  useEffect(() => {

    const runApolloClient = async () => {
      const client = await getApolloClient()
      setClient(client)
    }
    runApolloClient()
  }, [])

  if(!client){
    return <CircularProgress color="secondary" />
  }

  return <App client={client} />
}

export default PWAContainer;