import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Index'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Testando 123</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + NextJS Structure made by Rocketseat.</p>
    </Container>
  )
}

export default Home
