import Head from 'next/head'
import Home from '../layout/Home'
import Objections from '../layout/Objections'

export default function Index() {
  return (
    <>
      <Head>
        <title>Virando Herói - Se torne um herói de uma vez por todas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
      <Objections/>
    </>
  )
}
