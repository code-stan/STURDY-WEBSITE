import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const countContainer = useRef(null)
  function startCounter(){
    let count = 0;
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
        }).from("body", {
          opacity: 1,
        })
        return;
      }
      count += countRange;
      if(count >100){
        count = 100;
      }
      countContainer.current.textContent = `${count}%`
      
    }
    setInterval(preloaderCounter, delay)
  }
  useEffect(()=>{
    window.addEventListener("load", startCounter)
    return ()=>{
      window.removeEventListener("load", startCounter)
    }
  })
  return (
    <section className="preloader">
        <div className="brand">
          <div className="brand-container">
            <div className="brand-name">
              STURDY
            </div>
          </div>
        </div>
        <div className="counter-container">
          <div className="counter" ref={countContainer}>0%</div>
        </div>
    </section>
  )
}

export default Preloader