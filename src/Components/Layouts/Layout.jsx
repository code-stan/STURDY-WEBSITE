import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
  return (
    <>
        <Header/>
        <main className="main-section">
            <Outlet/>
        </main>
    </>
  )
}

export default Layout