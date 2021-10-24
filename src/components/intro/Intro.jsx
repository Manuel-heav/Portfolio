import {useEffect, useRef} from "react";
import  './intro.scss'
import {init} from 'ityped'
function Intro() {

  const textRef  = useRef();
  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Designer", "Content Creator"]
    })
  }, [])
  return (
    <div className="intro"id="intro">
       <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Amanuel kebede</h1>
          <h3>Freelance  <span ref={textRef}></span></h3>
        </div>
      </div>
      <div className="left">
        <div className="imgContainer">
          {/* <img src="assets/man.png" alt=""/> */}
          {/* <img src="https://images.unsplash.com/photo-1572635148687-307f8ca9b737?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHdoaXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/> */}
        
        </div>
      </div>
     
    </div>
  )
}

export default Intro
