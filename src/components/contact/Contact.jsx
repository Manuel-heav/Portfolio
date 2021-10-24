import './contact.scss'
import {useState} from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Contact() {

  const [message, setMessage] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP</span>}
        </form>
        <div className="iconContainer" >
           <a href="https://github.com/manuel-heav"><GitHubIcon /></a>
           <a href="https://t.me/blogrammer"><TelegramIcon style={{color: "#17779d"}}/></a>
            <a href="https://www.instagram.com/amanuel_kb/"><InstagramIcon  style={{color: "red"}} /></a>
           <a href="https://www.facebook.com/ManuelHeav/"><FacebookIcon  style={{color: "#17779d"}}/></a> 
        </div>

      </div>
      
    </div>
  )
}

export default Contact
