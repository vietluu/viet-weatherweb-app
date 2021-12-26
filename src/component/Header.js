import 'font-awesome/css/font-awesome.min.css';
import React,{useState} from 'react';
import { browserHistory, useHistory } from 'react-router';
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./Header.css";
import logo from './image/front-end3.jpg';
import 'react-slideshow-image/dist/styles.css'
import { Fade} from 'react-slideshow-image';
import image from './image/front-end2.jpg';
import image2 from './image/front-end2.jpg';
import image3 from './image/front-end2.jpg';

const Headeritem = ()=> {

    return(  
    <Router>
 <div className='header-item'>
   
   <ul class='socient-menu'>
       <li>
           <Link to="facebook.com"><i className='fa fa-facebook'></i></Link>
       </li>
       <li>
           <Link to="hihi"><i className='fa fa-twitter'></i></Link>
       </li>
       <li>
           <Link to="hihi"><i className='fa fa-google'></i></Link>
       </li>
       <li>
           <Link to="hihi"><i className='fa fa-pinterest'></i></Link>
       </li>
       <li>
           <Link to="hihi"><i className='fa fa-youtube'></i></Link>
       </li>
   </ul>


   <ul class="contact-menu">
       <li>
           <Link to="#"><i className="fa fa-envelope"> Email Us</i></Link>
       </li>
       <li>
           <Link to="#"><i className="fa fa-user"> Suport</i></Link>
       </li>
       <li>
           <Link to="#"><i className="fa fa-phone"> +12154548324</i></Link>
       </li>
   </ul>

</div>
    </Router>
 );
}

const Menu =()=>{
    return(
    <Router> 
          <div className="menu">
        
        <div className='logo'>
            <img src={logo} alt='logo'></img>
        </div>
        
        <ul className="main-menu">
            
                <li className="categories"><Link to="#"> HOME</Link></li>

                <li className="categories"><Link to="#"> HOSTING <i className="fa fa-caret-down"></i></Link>
                    <ul class="sub-menu">
                        <li><Link to="#"> DOMAINS </Link></li>
                        <li><Link to="#"> PAGES </Link></li>
                        <li><Link to ="#"> BLOGS </Link></li>
                        <li><Link to ="#"> CONTACS US</Link></li>
                    </ul>
                </li>
                <li className="categories"><Link to ="#"> DOMAINS <i className="fa fa-caret-down"></i> </Link>
                    <ul class="sub-menu">
                        <li><Link to="#"> DOMAINS </Link></li>
                        <li><Link to="#"> PAGES </Link></li>
                        <li><Link to="#"> BLOGS </Link></li>
                        <li><Link to="#"> CONTACS US</Link></li>
                    </ul>
                </li>
                <li className="categories"><Link to="#"> PAGES <i className="fa fa-caret-down"></i> </Link>
                    <ul class="sub-menu">
                        <li><Link to="#"> DOMAINS </Link></li>
                        <li><Link to="#"> PAGES </Link></li>
                        <li><Link to="#"> BLOGS </Link></li>
                        <li><Link to="#"> CONTACS US</Link></li>
                    </ul>
                </li>
                <li className="categories"><Link to="#"> BLOGS  <i className="fa fa-caret-down"></i></Link>
                    <ul class="sub-menu">
                        <li><Link to="#"> DOMAINS </Link></li>
                        <li><Link to="#"> PAGES </Link></li>
                        <li><Link to="#"> BLOGS </Link></li>
                        <li><Link to="#"> CONTACS US</Link></li>
                    </ul>
                </li>
                <li className="categories"><Link to="#"> CONTACS US</Link></li>
               
                
            </ul>
           
            <Login/>
           
    </div>
    </Router>
    )
}
const Login =()=> {
    return(
    <div id="submit">

         <button type="submit" class="sign" >Sign up</button>
     </div>
    )
}
const fadeImages = [
    image,
    image2,
    image3
  ];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} alt ='' />
            </div>
            <h2>First Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} alt =''/>
            </div>
            <h2>Second Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} alt =''/>
            </div>
            <h2>Third Slide</h2>
          </div>
        </Fade>
      </div>
    )
  }


function Header()
{ 
   return(
    <div className='header'>
    <Headeritem/>
    <Menu />
  
    </div>
   )
   
}

export default Header;