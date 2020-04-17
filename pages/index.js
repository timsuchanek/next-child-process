import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ls } from '../src/ls'

export const getServerSideProps = async () => {
  return { lsResult: ls() }
}

const Home = ({ lsResult }) => {
  console.log({ lsResult })
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>{lsResult}</div>
    </div>
  )
}

export default Home
