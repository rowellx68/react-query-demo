import { QueryFunction } from '@tanstack/react-query'

export type UserDetails = {
  id: string
  firstName: string
  lastName: string
  userNumber: string
}

export const getUserDetails: QueryFunction<UserDetails | undefined> = async ({ queryKey }): Promise<UserDetails | undefined> => {
  const [_key, userId] = queryKey
  const response = await fetch(`/users/${userId}`)

  return response.json()
}