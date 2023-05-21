import React from 'react';
import '../src/index.css';
import logo1 from "./images/icsLogoNewMark2.png";
import tit from "./images/jigsaw-sideimage.jpg";
import m from "./images/download (5).png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { GrPlayFill } from "react-icons/gr";
import { FaRegEnvelope} from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <ul>
        <li>
          <img className="img" src={logo1} alt="logo" />
        </li>
        <li className="a ">
          <a href="#contact ">LOGIN</a>
        </li>
        <li className="a">
          <a class="active" href="#about">
            ABOUT US
          </a>
        </li>
        <li className="a">
          <a href="#contact">CONTACT</a>
        </li>
        <li className="a">
          <a href="#home">NEW SLETTERS</a>
        </li>
        <li className="a">
          <a href="#news">BLOG</a>
        </li>
        <li className="a">
          <a href="#news">PORTFOLIO</a>
        </li>
        <li className="a">
          <a href="#news">HOME</a>
        </li>
      </ul>
      
        <div id="grad1">
        
        <center>
          <div className="ou1">
          <h1>About Us</h1>
          </div>
          <div className="ou">
        <p>Chameleon aims to utilise the Internet of Things (IoT), which is an ecosystem consisting of web-enabled smart devices such as phones, suburban traffic systems and domestic appliances, that all use embedded systems, such as processors, sensors, and communication hardware, to colect, send and act on data they acquire from their environments.</p>
        
          </div>
          <button className="but">JOIN</button></center>
          
      </div>
   
      








       

      <div className="wrapper12">
        <div className=" columns">
          <div class="container horizontal flat column21 ">
            <img className="img111" src={tit} alt="logo" />
          </div>

          <div className="ou2">
          <div class="column21 flat ">
            <div className="ou3"> Our Mission</div>
            <div className="ou4">
        <p>Chameleon aims to utilise the Internet of Things (IoT), which is an ecosystem consisting of web-enabled smart devices such as phones, suburban traffic systems and domestic appliances, that all use embedded systems, such as processors, sensors, and communication hardware, to colect, send and act on data they acquire from their environments.</p>
        
          </div>
           
            
          </div>
</div>
          {/* <div className="c2">
aaa
</div> */}
          
        </div>
      </div>

     
      <center>
      <section class="main-section">
          <div class="cardn1"><div className="divsno">
          
                <BsBuilding size={47} color="black" />
              

  </div><div class="cardn"></div></div>
          <div class="cardn1"><div className="divsno">
          <FaGlobeAmericas size={47} color="black" />
  </div><div class="cardn"></div></div>
          <div class="cardn1"><div className="divsno">
          <BsFillBoxSeamFill size={47} color="black" />
  </div><div class="cardn"></div></div>
          <div class="cardn1"><div className="divsno">
          <BsFillPeopleFill size={47} color="black" />
  </div><div class="cardn"></div></div>
  
  
</section> 
</center>

      
<div class="card14 toggleable">
	
        <center><div className="divss">
          
          <GrPlayFill size={37} color="white"/>
      </div></center>
		
</div>

  
       
         

      <div className="wrapper1">
        <div className="m columns">
          <div class="container horizontal flat column2">
            <img className="img123" src={m} alt="logo" />
          </div>

          <div class="container1 horizontal flat column2">
            <center>
              <h2 >Contact us</h2>
              
              <div className="w">
                <BsFillTelephoneFill /> 03 5975 6586
              </div>
              
              <div className="w">
              <FaRegEnvelope /> customer.service@chameieon.com.au
              
              </div>
              <br />
              <div className=" w">
                <p><AiOutlineCopyrightCircle />CHAMELEON 2022</p>
                
              </div>
             </center>
          </div>
          
          <div class="container1 horizontal flat column2">
          <div className=" w">
                <p>JOIN OUR NEW SELLERS</p>
                
            </div>
            <br />
          <div className='lopi'><div className='kol w '>Email adress</div>
          <div className='tiik w'>SUBMIT</div>
 </div>
 
    </div>

          {/* <div className="c2">
aaa
</div> */}
          
        </div>
      </div>
         
    
      </div>
  );
}

export default App;
