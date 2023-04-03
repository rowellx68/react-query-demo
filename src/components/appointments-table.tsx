import { Table, ButtonLink } from 'nhsuk-react-components'
import { Link } from 'react-router-dom'
import { AppointmentPreview } from '@/api/appointments'

type AppointmentRowProps = { appointment: AppointmentPreview }
type AppointmentsTableProps = { appointments: AppointmentPreview[] }

const AppointmentRow = ({ appointment }: AppointmentRowProps): JSX.Element => {
  return <tr>
    <td>{`${appointment.date}`}</td>
    <td>{appointment.type}</td>
    <td>{appointment.specialty}</td>
    <td>{appointment.status}</td>
    <td>
      <Link to={`/appointments/${appointment.id}`}>Detail</Link>
    </td>
  </tr>
}

const AppointmentsTable = ({ appointments }: AppointmentsTableProps): JSX.Element => {
  return <Table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Specialty</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      { appointments && appointments.map((a) => (<AppointmentRow appointment={a} key={a.id} />)) }
    </tbody>
  </Table>
}

export default AppointmentsTable
