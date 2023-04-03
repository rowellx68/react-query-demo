import { useParams } from 'react-router-dom'

const AppointmentPage = () => {
  const { appointmentId } = useParams()

  return <>
  { appointmentId }
  </>
}

export default AppointmentPage
