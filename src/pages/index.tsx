import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Testando 123</title>
      </Head>

      <main>
        <RocketseatLogo />
        <h1>Maick Souza</h1>
      </main>
    </div>
  )
}

export default Home
