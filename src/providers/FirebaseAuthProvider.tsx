import type { User } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type UserType = User | null

type AuthContextProps = {
  user: UserType
}

const AuthContext = createContext<Partial<AuthContextProps>>({})
export const useAuthContext = () => {
  return useContext(AuthContext)
}

const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = getAuth()
  const router = useRouter()

  const [user, setUser] = useState<UserType>(null)
  const isAvailableForViewing = router.pathname === '/signin' || router.pathname === '/signup'
  const value = { user }
  useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in.
        console.log(user)
        setUser(user)
      } else {
        // User is signed out.
        console.log('No user')
        if (!isAvailableForViewing) {
          await router.push('/signin')
        }
      }
    })
    return () => {
      authStateChanged()
    }
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default FirebaseAuthProvider
