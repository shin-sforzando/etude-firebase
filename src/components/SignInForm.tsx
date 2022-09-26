import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
}

const SignInForm = () => {
  const auth = getAuth()
  const router = useRouter()
  const { handleSubmit, register } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        router.push('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='email'
        required
        placeholder='Email'
        className='block border border-gray-300 shadow-sm focus:border-gray-500'
        {...register('email')}
      />
      <input
        type='password'
        required
        placeholder='Password'
        className='block border border-gray-300 shadow-sm focus:border-gray-500'
        {...register('password')}
      />
      <button type='submit'>Sign In</button>
    </form>
  )
}

export default SignInForm
