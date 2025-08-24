import { Authenticated, AuthLoading, Unauthenticated } from 'convex/react'
import React from 'react'
import { AuthLayout } from '../layouts/auth-layout'
import { SignInView } from '../views/sign-in-view'

const AuthGuard = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <AuthLoading>
      <AuthLayout>
        <p>Loading...</p>
      </AuthLayout>
    </AuthLoading>
    <Authenticated>
      {children}
    </Authenticated>
    <Unauthenticated>
      <AuthLayout>
        <SignInView/>
      </AuthLayout>
    </Unauthenticated>
    </>
  )
}

export default AuthGuard

// update