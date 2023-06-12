import { Header, Footer } from 'nhsuk-react-components'
import { Link, Outlet } from 'react-router-dom'

const App = (): JSX.Element => {
  return <>
    <Header>
      <Header.Container>
        <Header.Logo asElement={Link} to="/" />
      </Header.Container>
    </Header>

    <div className="nhsuk-width-container">
      <main className="nhsuk-main-wrapper">
        <Outlet />
      </main>
    </div>

    <Footer>
      <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
    </Footer>
  </>
}

export default App
