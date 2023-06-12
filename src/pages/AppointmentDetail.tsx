import { useQuery, QueryFunctionContext } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Tag, SummaryList } from 'nhsuk-react-components'
import { getAppointmentDetails } from '@/api/appointments'

const AppointmentPage = () => {
  const { appointmentId } = useParams()
  const { isLoading, isSuccess, isStale, data: appointment} = useQuery({
    queryKey: ['appointmentDetail', appointmentId!],
    queryFn: ({ queryKey }: QueryFunctionContext<string[]>) => {
      const [_key, apptId] = queryKey
      return getAppointmentDetails(apptId)
    },
    staleTime: 3000
  })

  return <>
  { !isLoading && isStale && <Tag color="yellow">STALE</Tag>}

  <p>When you see the STALE tag, open a new tab then go back to this tab. An API request will be done to refresh the data.</p>

  { 
    isSuccess && appointment &&
    <SummaryList>
      <SummaryList.Row>
        <SummaryList.Key>Appointment Date</SummaryList.Key>
        <SummaryList.Value>{`${appointment.date}`}</SummaryList.Value>
      </SummaryList.Row>

      <SummaryList.Row>
        <SummaryList.Key>Type</SummaryList.Key>
        <SummaryList.Value>{appointment.type}</SummaryList.Value>
      </SummaryList.Row>

      <SummaryList.Row>
        <SummaryList.Key>Specialty</SummaryList.Key>
        <SummaryList.Value>{appointment.specialty}</SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  }
  </>
}

export default AppointmentPage
