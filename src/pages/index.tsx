import { getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import type { NextPage } from 'next'
import { log } from 'next-axiom'

import ProjectsList from '@/components/ProjectsList'
import SignOutButton from '@/components/SignOutButton'
import { addProject } from '@/libs/Firebase/projects'

const Home: NextPage = () => {
  log.debug('Home')
  const app = getApp()
  const auth = getAuth()
  return (
    <>
      <h1 className='text-3xl font-bold'>etude-next: {app.name}</h1>
      {auth.currentUser && <p>w/ {auth.currentUser.email}</p>}
      <ProjectsList />
      <button
        className='outline'
        onClick={async () => {
          addProject({ name: 'sample04' })
        }}
      >
        Add Project
      </button>
      <SignOutButton />
    </>
  )
}

export default Home
