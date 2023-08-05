import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layouts/Layout"
import Home from "./Pages/Home/Home"
import Watch from "./Pages/Watch/Watch"
import Clients from "./Pages/Clients/Clients"
import Info from "./Pages/Info/Info"
import Preloader from "./Pages/Preloader/Preloader"


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="watch" element={<Watch/>}/>
        <Route path="clients" element={<Clients/>}/>
        <Route path="info" element={<Info/>}/>
      </Route>
    )
    )
    
  return (
    <>
       <RouterProvider router={router}/>
        <Preloader/>
    </>
  )
}

export default App