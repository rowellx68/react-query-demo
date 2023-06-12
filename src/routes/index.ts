import App from '@/App'
import AppointmentPage from '@/pages/AppointmentDetail'
import DashboardPage from '@/pages/Dashboard'
import UserDetailsPage from '@/pages/UserDetails'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: DashboardPage,
      },
      {
        path: '/appointments/:appointmentId',
        Component: AppointmentPage,
      },
      {
        path: '/my-details',
        Component: UserDetailsPage,
      }
    ],
  }
])

export default router
