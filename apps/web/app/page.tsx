'use client'
import { useMutation, useQuery,Authenticated, Unauthenticated } from "convex/react"
import { SignInButton, UserButton } from "@clerk/nextjs";

import {api} from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <>
    <Authenticated>

    <div className="flex items-center justify-center min-h-svh">
      <p>apps/web</p>
      <UserButton/>
      {
        JSON.stringify(users)
      }
    </div>
      </Authenticated>
      <Unauthenticated>
        <p>must be sign in...</p>
        <SignInButton/>
      </Unauthenticated>
      </>
  )
}
