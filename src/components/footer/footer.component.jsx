import React from "react";
import './footer.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = ( props ) => (
    <div class="social-container">
          <h5>Copyright © 2021 Bulgáriatelepi Református Gyülekezet</h5>
          <div>
            <a href="https://www.youtube.com/channel/UCtnAa5sBmRm5nru4IxrBqpg" target="_blank" rel="noopener noreferrer"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          <a href="https://www.facebook.com/BulgariaTelep/" target="_blank" rel="noopener noreferrer"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          </div>
    </div>  
)

export default Footer;