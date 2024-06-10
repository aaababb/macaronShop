import { BrowserRouter } from 'react-router-dom'
import './App.css'
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
