import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './router/router'

function App() {

  return (
    <>
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
