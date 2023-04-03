import { Header, Footer } from 'nhsuk-react-components'
import { RouterProvider, Link } from 'react-router-dom'
import router from '@/routes'

const App = (): JSX.Element => {
  return <>
    <Header>
      <Header.Container>
        <Header.Logo as={Link.name} to="/" />
      </Header.Container>
    </Header>

    <div className="nhsuk-width-container">
      <main className="nhsuk-main-wrapper">
        <RouterProvider router={router} />
      </main>
    </div>

    <Footer>
      <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
    </Footer>
  </>
}

export default App
