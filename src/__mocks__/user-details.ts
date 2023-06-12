import { rest } from 'msw'

const user = {
  id: '6d6a0bf6-ce61-4690-814b-0ea6cd461e50',
  userNumber: '000 000 0001',
  firstName: 'John',
  lastName: 'Smith',
}

const userDetailsHandlers = [
  rest.get('/users/:userId', (req, res, ctx) => {

    return res(ctx.json(user))
  }),
  rest.post('/users/:userId', (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.status(400))
  })
]

export default userDetailsHandlers
