import React  from "react";
import { AiOutlineMenu } from "react-icons/ai";


function Header({ setmenuOpen,menuOpen}){
    return(
<>
       <nav>
        <NavContent  setmenuOpen={setmenuOpen}></NavContent>
        </nav>


        <button className="navBtn" onClick={()=> setmenuOpen(!menuOpen)}>

           <AiOutlineMenu></AiOutlineMenu> 
        </button>
        </>
  );
}



 export const Mininav=({menuOpen,setmenuOpen})=>{

    return(
    <div className={`navPhone ${menuOpen? "navPhoneComes":""}`} >
        
<NavContent setmenuOpen={setmenuOpen}> </NavContent>

    </div>)

}




  const NavContent=({setmenuOpen})=>(
    <>
    <h2>Sayali </h2>
    <div>
          <a  onClick={()=> setmenuOpen(false)} href="#">Home</a>
          <a  onClick={()=> setmenuOpen(false)} href="#work">Work</a> 
          <a onClick={()=> setmenuOpen(false)}  href="#timeline">Experince</a>
          <a onClick={()=> setmenuOpen(false)}  href="#services">Services</a>
          <a  onClick={()=> setmenuOpen(false)} href="#testimonial">Testimonial</a>
          <a  onClick={()=> setmenuOpen(false)} href="#contact">Contact</a>
        
    </div>
    <a href="https://www.instagram.com/">
        <button>Email</button>
    </a>
    </>
)



export default Header;