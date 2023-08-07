import { RouterProvider } from 'react-router-dom'
import { router } from "./routes"
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Home />
    </>
  )
}

export default App
