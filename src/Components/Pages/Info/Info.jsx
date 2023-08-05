import { gsap } from "gsap";
import { useEffect } from "react";
const Info = () => {
    useEffect(()=>{
        gsap.to(".infopage", {
            opacity: 1,
            ease: "power3.inOut",
            delay: .2
        })
    }, [])
return (
    <section className="infopage">
        <div className="info-page">
            <p className="main-desc">
                We are <strong>strudy</strong>, a creative studio that specializes in <i>producing</i> and <i>directing</i> the best, indulging, captivating and creative music videos, events and shows. 
            </p>
            <p className="other-desc" >
                Over the years, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus quisquam nemo voluptatum, officiis repellat, blanditiis eos corporis ipsum, deserunt impedit. Cum quos, repudiandae ut blanditiis ipsum cumque illo, dolorem architecto harum deserunt vel dolores? Saepe dignissimos obcaecati eos et odio iste doloremque.
            </p>
        </div>
        <div className="contact-section">
            <p className="reach-out">REACH OUT</p>
            <div className="social-links">
                <a href="#" className="i-social-link">TW</a>
                <a href="#" className="i-social-link">IG</a>
                <a href="mailto:hello@sturdy.com" className="i-social-link">GM</a>
            </div>
            <div className="credits">
                <div className="designer">
                    Inspiration from <a href="https://dribbble.com/benmingo">Ben Mingo</a>
                </div>
                <div className="developer">
                    Developed by <a href="https://www.twitter.com/codestanley">Stan</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info