import { RequestHandler } from 'msw'

import usersHandlers from './users'
import userDetailsHandlers from './user-details'
import appointmentsHandlers from './appointments'

export const allHandlers: RequestHandler[] = [
  ...usersHandlers,
  ...userDetailsHandlers,
  ...appointmentsHandlers,
]
