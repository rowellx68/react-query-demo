import AppointmentPage from '@/pages/AppointmentDetail'
import DashboardPage from '@/pages/Dashboard'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardPage,
  },
  {
    path: '/appointments/:appointmentId',
    Component: AppointmentPage,
  }
])

export default router
