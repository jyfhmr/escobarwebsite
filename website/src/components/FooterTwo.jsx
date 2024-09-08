import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";

const SocialShare = [
  /*
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
    { Social: <FaTwitter />, link: "https://twitter.com/" },
   */
  { Social: <FaInstagram />,
    link: "https://www.instagram.com/spacemarketingve/",},
];

const FooterTwo = () => {
  return (
    <div
      className="footer-style-2 ptb--30"
      data-black-overlay="6"
      style={{backgroundImage: "url(https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", backgroundSize: "cover", backgroundPosition: "center center"}}
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <a href="/">
                  <img src={logo} alt="Logo images" width={"100px"}   className="logoStyles"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text">
                <p>Copyright © 2024 Space Marketing. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
