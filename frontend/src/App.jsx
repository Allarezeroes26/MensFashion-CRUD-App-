import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        
      ]
    }
  ])

  return (
    <>
    </>
  )
}

export default App
