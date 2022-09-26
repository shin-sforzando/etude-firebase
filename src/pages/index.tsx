import type { NextPage } from 'next'
import { log } from 'next-axiom'

const Home: NextPage = () => {
  log.debug('Home')
  return (
    <>
      <h1 className='text-3xl font-bold'>next-boilerplate</h1>
    </>
  )
}

export default Home
