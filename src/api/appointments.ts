
export type AppointmentPreview = {
  id: string
  type: 'inpatient' | 'outpatient' | 'virtual'
  date: Date
  status: string
  specialty: string
}

export const getUserAppointmentSummaries = async (userId: string) => {
  const response = await fetch(`/users/${userId}/appointment-summaries`)

  return response.json()
}

export const getAppointmentDetails = async (appointmentId: string) => {

  const response = await fetch(`/appointments/${appointmentId}`)

  return response.json()
}
