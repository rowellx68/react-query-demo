import { QueryFunction } from '@tanstack/react-query'

export type AppointmentPreview = {
  id: string
  type: 'inpatient' | 'outpatient' | 'virtual'
  date: Date
  status: string
  specialty: string
}

export const getUserAppointmentSummaries: QueryFunction<AppointmentPreview[]> = async ({ queryKey }) => {
  const [ _key, userId ] = queryKey

  const response = await fetch(`/users/${userId}/appointment-summaries`)

  return response.json()
}

export const getAppointmentDetails: QueryFunction<AppointmentPreview | undefined> = async ({ queryKey }) => {
  const [ _key, appointmentId ] = queryKey

  const response = await fetch(`/appointments/${appointmentId}`)

  return response.json()
}
