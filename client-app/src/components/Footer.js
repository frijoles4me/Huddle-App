import React, { Component } from "react";
// import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainImage from "../images/huddle-logo-gray-transparent.png";
// import Image from "react-image-resizer";

var menucolor = {
  backgroundColor: "#f5f5f5",
  padding: "50px",
  height: "350px"
};

var footerpadding = {
  padding: "7px"
};

var paddingbottom = {
  paddingBottom: "30px"
};

var iconcolor = {
  color: "grey"
};

export default class Footer extends Component {
  render() {
    return (
      <footer class="page-footer" style={menucolor}>
        <div class="container">
          <div className="main, footer" />
          <div class="row">
            <div class="col s4" style={paddingbottom}>
              <img src={mainImage} width={180} />
            </div>
            <div class="row" />
            <div class="col l6 offset-l2 s12">
              {/* <h5 class="white-text">Links</h5> */}
              <ul>
                <li>
                  <a class="grey-text text-lighten-13" href="/">
                    Home
                  </a>
                </li>
                {/* <li>
                  <a class="white-text text-lighten-3" href="/ArticleView">
                    View Articles
                  </a>
                </li> */}
                <li>
                  <a class="grey-text text-lighten-13" href="/Login">
                    Sign In
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-13" href="/Register">
                    Become A Member
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="container">
            {/* © 2018 Copyright Team Huddle */}
            <a class="right">
              <a href="https://facebook.com" style={iconcolor}>
                <i class="fab fa-facebook-square fa-3x" style={footerpadding} />
              </a>

              <a
                href="https://github.com/Jeremy117/Huddle-App"
                style={iconcolor}
              >
                <i class="fab fa-github fa-3x" style={footerpadding} />
              </a>
              <a href="https://www.linkedin.com" style={iconcolor}>
                <i class="fab fa-linkedin fa-3x" style={footerpadding} />
              </a>
              <a href="https://www.google.com/" style={iconcolor}>
                <i class="fab fa-google fa-3x" style={footerpadding} />
              </a>
            </a>
          </div>
        </div>
      </footer>
      // <Navbar default fixedBottom>

      //   <Nav>
      //     {/* <!--Footer--> */}
      //     <footer className="page-footer font-small indigo pt-5">
      //       {/* <!--Footer Links--> */}
      //       <div className="container">
      //         {/* <!--First row--> */}
      //         <div className="row">
      //           {/* <!--First column--> */}
      //           <div className="col-md-12 py-5">
      //             <div className="mb-5 flex-center">
      //               <div className="col-md-2 col-xs-4">
      //                 <ul>
      //                   <div>
      //                     <b>
      //                       <i class="fa fa-headphones" />
      //                       SUPPORT
      //                     </b>
      //                   </div>
      //                   <div>
      //                     <a href="/helpdesk">Helpdesk</a>
      //                   </div>
      //                 </ul>
      //               </div>
      //               <div class="col=md-2 col-xs-4">
      //                 <ul>
      //                   <div>
      //                     <b>
      //                       <i class="fas fa-exclamation" />
      //                       ABOUT
      //                     </b>
      //                   </div>
      //                   <div>
      //                     <a href="/components/Home/index">Huddle Home</a>
      //                   </div>
      //                   <div>
      //                     <a href="/About">About us</a>
      //                   </div>
      //                   <div>
      //                     <a href="/Careers">Careers</a>
      //                   </div>
      //                   <div>
      //                     <a href="/Testimonials">Testimonials</a>
      //                   </div>
      //                 </ul>
      //               </div>
      //               <div className="col-md-3 col-md-offset-1 border-left col-xs-12">
      //                 <ul>
      //                   <b>
      //                     <div class="margin-left-large">WOZ U</div>
      //                   </b>
      //                   <small>
      //                     8444 N 90th St
      //                     <br />
      //                     Scottsdale, AZ
      //                   </small>
      //                   <div>
      //                     <span class="margin-topsmall block">
      //                       <i class="fas fa-phone-square" />
      //                       &nbsp;602-555-7070
      //                     </span>
      //                   </div>
      //                 </ul>
      //               </div>

      //               <div class="col-md-3 col-md-offset-3">

      //                 <div class="col-md-1">
      //                   <a href="https://facebook.com"><i class="fab fa-facebook-square fa-2x"></i></a>
      //                 </div>

      //                 <div class="col-md-1">
      //                   <a href="https://github.com/Jeremy117/Huddle-App"><i class="fab fa-github fa-2x"></i></a>
      //                 </div>

      //                 <div class="col-md-1">
      //                   <a href="https://www.linkedin.com"><i class="fab fa-linkedin fa-2x"></i></a>
      //                 </div>

      //                 <div class="col-md-1">
      //                   <a href="https://www.google.com/"><i class="fab fa-google fa-2x"></i></a>
      //                 </div>

      //               </div>
      //             </div>
      //           </div>
      //           {/* <!--/First column--> */}
      //         </div>
      //         {/* <!--/First row--> */}
      //       </div>
      //       {/* <!--/Footer Links--> */}

      //       {/* <!--Copyright--> */}
      //       <div class="footer-copyright py-3 text-center">
      //         © 2018 Copyright:
      //         <a href="https://github.com/Jeremy117/Huddle-App">
      //           {" "}
      //           Team Huddle{" "}
      //         </a>
      //       </div>
      //       {/* <!--/Copyright--> */}
      //     </footer>
      //     {/* <!--/Footer--> */}
      //   </Nav>
      // </Navbar>
    );
  }
}
