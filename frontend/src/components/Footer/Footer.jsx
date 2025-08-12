import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
import { IoHome } from "react-icons/io5";
import { SlSpeech } from "react-icons/sl";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPrivacyTip } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer' id='footer'> 
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.foodie_icon} alt="" />
                <p>Enjoy delicious food from your favorite restaurants.
Fast delivery, easy to use, and always satisfying.

No more waiting in lines or cooking at home.
Order fresh, tasty meals with just a few taps.

</p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> 
                        <img src={assets.facebook_icon} alt="Facebook" />
                        </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.twitter_icon} alt="Twitter" /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkedin_icon} alt="LinkedIn" /></a>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2 className='text'>COMPANY</h2>
                <ul>
                    <li><IoHome className='icon' /><span>Home</span></li>
                    <li><SlSpeech className='icon' /><span>About Us</span></li>
                    <li><CiDeliveryTruck className='icon' /><span>Delivery</span></li>
                    <li><MdPrivacyTip className='icon' /><span>Privacy Policy</span></li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2 className='text'>Get In Touch</h2>
                <ul>
                    <li><MdAddCall className='icon' /><span>+1-214-723-889</span></li>
                    <li><IoIosMail className='icon' /><span>Contact@foodie.com</span></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright {new Date().getFullYear()} &nbsp; &copy; &nbsp; foodie.com - All Right Reserved
        </p>
    </div>
  )
}

export default Footer
