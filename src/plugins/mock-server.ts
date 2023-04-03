import { setupWorker } from 'msw'
import { allHandlers } from '@/__mocks__/__all'

if (process.env.NODE_ENV === 'development') {
const server = setupWorker(...allHandlers)

await server.start({
  onUnhandledRequest: 'bypass'
})
}