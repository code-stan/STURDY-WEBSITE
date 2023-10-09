import { useEffect, useState } from "react";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);


  // CurrentTime
  function currentTime() {
    const date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let period = "AM";
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
      hh = hh - 12;
      period = "PM";
    }
    if(hh >= 12){
      period = "PM";
        
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    
    let time = hh + ":" + mm  + " " + period;
    document.querySelector("time").innerHTML = time;
    // eslint-disable-next-line no-unused-vars
  }
  setInterval(currentTime, 1000);
  //CurrentYear
  function currentYear(){
    const date = new Date();
    const getYear = date.getFullYear()
    return getYear
  }
  useEffect(()=>{
    const reelVideo = document.querySelector(".reel");
    const contacts = document.querySelectorAll(".contact a")
    const body = document.body;
    const reelMouse = document.querySelector(".follow-through");
    function showNewCursor(e){
      const {clientY, clientX} = e;
      const {top, left} = reelVideo.getBoundingClientRect();
      const x = `${clientX - left}px`;
      const y = `${clientY - top}px`;
      reelMouse.style.left = x
      reelMouse.style.top = y
    }
    
    // There were some glitch using this dynamic function for both the mouseenter and mouseleave event

    // function toggleReel(){
    //   setIsPlaying(!isPlaying)
    // }
    function toggleReel(){
      setIsPlaying(true)
    }
    function unToggleReel(){
      setIsPlaying(false)
    }

    if(isPlaying){
      body.style.backgroundColor = "#010001";
      body.style.color = "#605F61"
      contacts.forEach(contact => {
        contact.style.color = "#605F61"
      })
      reelMouse.style.opacity = "1"
    }
    else{
      body.style.backgroundColor = "#C7C5C0";
      body.style.color = "#111011"
      contacts.forEach(contact => {
        contact.style.color = "#111011"
      })
      reelMouse.style.opacity = "0"
    }
    
    //disable right click on video element
    function handleContextMenu(e){
      e.preventDefault()
    }

    reelVideo.addEventListener("contextmenu", handleContextMenu)
    reelVideo.addEventListener("mouseenter", toggleReel)
    reelVideo.addEventListener("mouseleave", unToggleReel)    
    reelVideo.addEventListener("mousemove", showNewCursor);

    //unmount
    return ()=>{
      reelVideo.removeEventListener("contextmenu", handleContextMenu)
      reelVideo.removeEventListener("mouseenter", toggleReel)
      reelVideo.removeEventListener("mouseleave", unToggleReel)    
      reelVideo.removeEventListener("mousemove", showNewCursor)    
    }
  },[isPlaying])
return (
  <section className="homepage">

    <div className="center-video">
      <div className="cv-contents">
        <video src="./Assets/reel video.mp4"
          className="reel"
          autoPlay
          preload="auto"
          muted
          loop>
        </video>
        <aside className="follow-through">
            2023 REEL
        </aside>
      </div>
    </div>

    <div className="homepage__contents">
      <h1>STURDY.</h1>
      <div className="footerish__contents">
        <div className="info__contact">
          <span className="info">STURDY - CREATIVE HOUSE AND DIGITAL DELVE EST 2022. BASED IN LOS ANGELES.</span>
          <div className="extras">
            <div className="contact">
              [CA] CONTACT: <span><a href="/" className="social-link">INSTAGRAM</a>, <a href="/" className="social-link">EMAIL</a></span>
            </div>
            <div className="current__date">
              <time className="time"></time>
              <div className="date">{currentYear()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}

export default Home