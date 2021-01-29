import Head from 'next/head'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import Welcome from '../components/index/Welcome'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Welcome to Kapangan, Benguet</title>
      </Head>

      {/* navigation menu */}
      <Navbar />

      <hr />

      {/* welcome message */}
      <Welcome />
    </Layout>
  )
}
