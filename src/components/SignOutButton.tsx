import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

const SignOutButton = () => {
  const auth = getAuth()
  const router = useRouter()
  const handleSignOut = async () => {
    console.log('Sign out')
    await signOut(auth)
    await router.push('/')
  }
  return (
    <>
      <button className='outline' onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  )
}

export default SignOutButton
