import { artistData } from "./data"
import ChildEl from "./ChildEl"
import { gsap } from "gsap"
import { useEffect } from "react"

const Watch = () => {
  useEffect(()=>{
    const tl = gsap.timeline();
     tl.to(".watchpage", {
      opacity: 1,
    }).to(".artist__name",  {
      opacity: 1,
      y: 0,
      stagger:{
        amount: 0.5,
        ease: "power4.inOut"
      }
    }, "<")
  },[])
  return (
    <section className="watchpage">
      {
        artistData.map((data, i)=>{
          return(
            <ChildEl {...data} key={i}/>

          )
        })
      }
    </section>
  )
}

export default Watch
