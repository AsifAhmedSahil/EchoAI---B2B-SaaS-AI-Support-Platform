import { SignUp } from '@clerk/nextjs'
import React from 'react'

export const SignUpView = () => {
  return (
    <div>
        <SignUp routing='hash' />
    </div>
  )
}

