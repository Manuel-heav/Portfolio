import {useState} from 'react'
import './works.scss'

function Works() {

  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      icon: "./assets/mobile.png",
      title: "App Design",
      desc: "Designing Mobile apps with react native.",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.asy6jnpKKIhQh0zNQL99_gHaEr%26pid%3DApi&f=1"
    },
    {
      id: 2,
      icon: "./assets/globe.png",
      title: "Content Creation",
      desc: "Writing Blogs and making youtube videos",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2OuLT_Uvr5EVXx9oCi0dLQHaE7%26pid%3DApi&f=1"
    },
    {
      id: 3,
      icon: "./assets/globe.png",
      title: "Web Design",
      desc: "Designing webpages with HTML, CSS, Javascript, Bootstrap, Sass, Node, Express and React",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.R635YDvVCYvOdHv78jswWAHaEc%26pid%3DApi&f=1"
    },
  ];


  const handleClick = (way) => {
    way === "left" 
    ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1: 2) 
    : setCurrentSlider(currentSlider < data.length -1 ? currentSlider + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        {data.map(d => (
            <div className="container">
            <div className="item">
                <div className="left">
                    <div className="leftContainer">
                          <div className="imgContainer">
                            <img src={d.icon} alt="" />
                          </div>
                          <h2>{d.title}</h2>
                          <p>{d.desc}</p>
                          <span>Projects</span>
                    </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
          </div>
        ))}
      </div>

      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>

    </div>
  )
}

export default Works
