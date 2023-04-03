import { AppointmentPreview } from '@/api/appointments'
import { rest } from 'msw'

const summaries: AppointmentPreview[] = [
  {
    id: '6c78b9ad-a4be-44d9-85a0-6256ae415058',
    type: 'virtual',
    date: new Date(2023, 12, 12, 10, 0, 0),
    status: 'upcoming',
    specialty: 'Cardiology'
  }
]

const appointmentsHandlers = [
  rest.get('/users/:userId/appointment-summaries', (req, res, ctx) => {
    return res(ctx.json(summaries))
  }),
  rest.get('/appointments/:id', (req, res, ctx) => {
    const id = req.params.id

    const summary = summaries.find((s) => s.id === id)

    if (!summary) {
      return res(ctx.status(404))
    }

    return res(ctx.json(summary))
  })
]

export default appointmentsHandlers
