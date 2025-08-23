'use client'
import { useMutation, useQuery } from "convex/react"

import {api} from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex items-center justify-center min-h-svh">
      <p>apps/web</p>
      {
        JSON.stringify(users)
      }
    </div>
  )
}
