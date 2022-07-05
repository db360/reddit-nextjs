import type { NextPage } from 'next';
import Head from 'next/head';
import PostBox from '../components/PostBox';

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit Next.js Clone by Da.B</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostBox />
      <div>
        {/* Feed */}
      </div>
    </div>
  )
}

export default Home
