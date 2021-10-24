import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <h2>Social</h2>
        <GitHubIcon />
        <TelegramIcon />
        <InstagramIcon />
        <FacebookIcon />
      </div>
    </div>
  )
}

export default Footer
