import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
}

const SignUpForm = () => {
  const auth = getAuth()
  const { handleSubmit, register } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
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
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default SignUpForm
