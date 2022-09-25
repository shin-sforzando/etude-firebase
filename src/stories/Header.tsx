import './header.css'

import Image from 'next/image'
import React from 'react'

import { Button } from './Button'

type User = {
  name: string
}

interface HeaderProps {
  user?: User
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className='wrapper'>
      <div>
        <Image src={'vercel.svg'} alt='Vercel Logo' width={142} height={32} />
        <h1 className='text-3xl font-bold'>next-boilerplate</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className='welcome'>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size='small' onClick={onLogout} label='Log out' />
          </>
        ) : (
          <>
            <Button size='small' onClick={onLogin} label='Log in' />
            <Button primary size='small' onClick={onCreateAccount} label='Sign up' />
          </>
        )}
      </div>
    </div>
  </header>
)
