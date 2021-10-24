import './testimonials.scss'

function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Henos Tesfaye",
      title: "CEO of Fit-Ethiopiawi",
      img: "assets/henos.jpg",
      icon: "assets/twitter.png",
      desc: "A passionate brilliant young man with great dedication and incredible mindset."
    },
    {
      id: 1,
      name: "Tyler Durden",
      title: "Senior Develoer",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fgpXvJS14DdFvBONwGFJXAHaHa%26pid%3DApi&f=1",
      icon: "assets/twitter.png",
      desc: "Lorem sadkjfasdkf asdfkjasdfkal asdkjlfalskdjfaklsdjf aklsjdflkasdf asdfkjasdfna asdlfjkasdfj"
    },    {
      id: 1,
      name: "John Durden",
      title: "Senior Develoer",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fgpXvJS14DdFvBONwGFJXAHaHa%26pid%3DApi&f=1",
      icon: "assets/twitter.png",
      desc: "Lorem sadkjfasdkf asdfkjasdfkal asdkjlfalskdjfaklsdjf aklsjdflkasdf asdfkjasdfna asdlfjkasdfj",
      featured: true
    },    {
      id: 1,
      name: "Mia Durden",
      title: "Senior Develoer",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fgpXvJS14DdFvBONwGFJXAHaHa%26pid%3DApi&f=1",
      icon: "assets/twitter.png",
      desc: "Lorem sadkjfasdkf asdfkjasdfkal asdkjlfalskdjfaklsdjf aklsjdflkasdf asdfkjasdfna asdlfjkasdfj"
    },
  ]
  return (
    <div className="testimonials" id ="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d)=> (
             <div className={d.featured ? "card featured" : "card"}>
             <div className="top">
               <img src="assets/right-arrow.png" alt="" className="left"/>
               <img src={d.img} className="user" alt="" />
               <img src={d.icon} className='right' alt="" />
             </div>
             <div className="center">{d.desc}</div>
             <div className="bottom">
               <h3>{d.name}</h3>
               <h4>{d.title}</h4>
             </div>
           </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials