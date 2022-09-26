import { getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import type { NextPage } from 'next'
import { log } from 'next-axiom'

import SignOutButton from '@/components/SignOutButton'

const Home: NextPage = () => {
  log.debug('Home')
  const app = getApp()
  const auth = getAuth()
  return (
    <>
      <h1 className='text-3xl font-bold'>etude-next: {app.name}</h1>
      {auth.currentUser && <p>w/ {auth.currentUser.email}</p>}
      <SignOutButton />
    </>
  )
}

export default Home
