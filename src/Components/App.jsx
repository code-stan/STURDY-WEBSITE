/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layouts/Layout"
import Home from "./Pages/Home/Home"
import Watch from "./Pages/Watch/Watch"
import Clients from "./Pages/Clients/Clients"
import Info from "./Pages/Info/Info"
import Preloader from "./Pages/Preloader/Preloader"
import { useContext, createContext, useEffect } from "react";
import {gsap} from "gsap";


const appContext = createContext();
export const useAppContext = ()=> useContext(appContext)
const App = () => {


  useEffect(()=>{
    let count = 0;
    function startCounter(){
      const counter = document.querySelector(".counter");
      const delay = Math.floor(Math.random() * 165) + 50
      function preloaderCounter(){
        let countRange = Math.floor(Math.random() * 10) + 1;
        if(count === 100){
          const tl = gsap.timeline();
          tl.to(".brand-name", {
            y: 100,
            duration: 2
          }, .4).to(".counter", {
            y: -100,
            duration: 2
          }, "<").to(".preloader", {
            opacity: 0,
            pointerEvents: "none"
          }).from(".app-container", {
            opacity: 1,
          }).set(".app-container", {
            autoAlpha: 1
          })
          return;
        }
        count += countRange;
        if(count >100){
          count = 100;
        }
        counter.textContent = `${count}%`
        
      }
      setInterval(preloaderCounter, delay)
    }
    startCounter()
  }, [])



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
        <main className="app-container">
          <RouterProvider router={router}/>
        </main>
        <Preloader/>

    </>
  )
}

export default App