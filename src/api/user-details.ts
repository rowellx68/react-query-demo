import { QueryFunction, MutateFunction } from '@tanstack/react-query'

export type UserDetails = {
  id: string
  firstName: string
  lastName: string
  userNumber: string
}

export type UpdateUserDetails = {
  firstName: string
  lastName: string
}

export const getUserDetails = async (userId: string): Promise<UserDetails | undefined> => {
  const response = await fetch(`/users/${userId}`)

  return response.json()
}

export const updateUserDetails = async (userId: string, details: UpdateUserDetails): Promise<any> => {
  const response = await fetch(`/users/${userId}`, {
    method: 'POST',
    body: JSON.stringify(details)
  })

  return response.json()
}