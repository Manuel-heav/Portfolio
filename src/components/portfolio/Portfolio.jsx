import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import {useState, useEffect} from 'react'
import { clonePortfolio, webPortfolio, mobileAppPortfolio, designPortfolio} from '../../data'
function Portfolio() {

  const [selected, setSelected] = useState("clone")
  const [data, setData] = useState([])

  const list = [
    {
      id: "clone",
      title: "Clones",
    },
    {
      id: "web",
      title: "Web",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Designing",
    },
   
  ];

  useEffect(()=> {

    switch(selected){
      case "clone":
        setData(clonePortfolio);
        break;
        case "web":
        setData(webPortfolio);
        break;
        case "mobile":
        setData(mobileAppPortfolio);
        break;
        case "design":
        setData(designPortfolio);
        break;
              default:
          setData(clonePortfolio)
    }

  }, [selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>

      <div className="container">
        {data.map(d => (
              <div className="item">
              <img src={d.img} alt="" />
              <h3><a href={d.link}>{d.title}</a></h3>
            </div>
        ))}       
      </div>
    </div>
  )
}

export default Portfolio
