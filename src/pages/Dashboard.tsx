import { getUserAppointmentSummaries } from '@/api/appointments'
import { UserDetails, getUserDetails } from '@/api/user-details'
import AppointmentsTable from '@/components/appointments-table'
import { QueryFunction, QueryFunctionContext, useQueries } from '@tanstack/react-query'

const DashboardPage = (): JSX.Element => {
  const id = '0e091c01-3889-40e6-b43b-617d7770ffa0'

  const [
    { isLoading: isLoadingUser, isError: isErrorUser, isSuccess: isSuccessUser, data: user },
    { isLoading: isLoadingAppts, isError: isErrorAppts, isSuccess: isSuccessAppts, data: appointments },
  ] = useQueries({
    queries: [
      {
        queryKey: ['userDetail', id],
        queryFn: ({ queryKey }: QueryFunctionContext<string[]>) => {
          const [_key, userId] = queryKey

          return getUserDetails(userId)
        },
      },
      {
        queryKey: ['appointmentSummaries', id],
        queryFn: ({ queryKey }: QueryFunctionContext<string[]>) => {
          const [_key, userId] = queryKey

          return getUserAppointmentSummaries(userId)
        },
      }
    ]
  })

  return <>
    { isSuccessUser && user && <h1>Welcome, { user.firstName }</h1>}
    { isLoadingUser && <h1>Loading...</h1> }
    { isErrorUser && <h1>Errored</h1> }

    <h2>Appointments</h2>
    { isSuccessAppts && appointments && <AppointmentsTable appointments={appointments} /> }
  </>
}

export default DashboardPage
