import {gsap} from "gsap";
import { useEffect } from "react";
const Clients = () => {
  useEffect(()=>{
    const tl = gsap.timeline();
    tl.to(".clientpage", {
      opacity: 1,
    })
    .from(".hr", {
      width: 0,
      duration: .5
    }, "+.3").from(".client", {
      y: 100,
      opacity: 0,
      stagger:{
        amount: 0.3,
        ease: "power4.inOut"
      },
    })
  }, [])
  return (
    <section className="clientpage">
      <div className="c-container row">
        <p className="client c1">YOU<span>TUBE</span></p>
      </div>

        <div className="hr"></div>

      <div className="pair row">
        <p className="client">PG <span>LANG</span></p>
        <p className="client">G<span>OO</span>GLE</p>
        <p className="client">LEMONADE</p>
      </div>

      <div className="hr"></div>

      <div className="pair row">
        <p className="client">DREAM<span>VILLE</span></p>
        <p className="client">BRIT</p>
        <p className="client">ROLLING LOUD</p>
      </div>
      <div className="hr"></div>
    </section>
  )
}

export default Clients