import React, { useRef } from "react";

import { animate, motion } from "framer-motion";
import  Typewriter  from "typewriter-effect";

import {BsArrowUpRight, BsChevronDown}  from "react-icons/bs";
import  myPhoto from "../assets/sayali1.jpg";


 export default function Home(){


   const clientCount=useRef(null);
   const projectCount=useRef(null);
 
   function animationClientsCount(){
           animate(0,10,
           {
            duration:1,
            onUpdate:(v)=>( clientCount.current.textContent =v.toFixed())

            }
           )
           }


           
   function animationProjectsCount(){
      animate(0,5,
      {
       duration:1,
       onUpdate:(v)=>( projectCount.current.textContent =v.toFixed())

       }
      )
      }

  const animations={
    h1:{
        initial:{
            y:"-100%",
            opacity:0,
        },
        whileInView:
         {
            y:0,
            opacity:1,
           }
    }
  }

    return(<div id="home">
        
        <section>
            <div>
           <motion.h1 {...animations.h1}>
        Hi I Am <br>
        </br>
        Sayali  Shelake
           </motion.h1>
           < Typewriter 
           options={{
              strings:["A Developer"],
              autoStart:true,
              loop:true,
              cursor:"",
              wrapperClassName:"typerwriterpara",
           }}>

           </Typewriter>
           <div>
            <a href="mailto:shelakesayali9022@gmail.com"> Hire Me</a>
            <a href="#work">Projects <BsArrowUpRight/></a>
           </div>

           <article>
           <p>+<motion.span whileInView={animationClientsCount} ref={clientCount}>
            
            </motion.span></p> 
           <span>Clients Worldwide</span>
           </article>

           <aside>

           <article>
           <p>+<motion.span ref={ projectCount} whileInView={animationProjectsCount}> 500</motion.span></p> 
           <span>Projects Done</span>
           </article>

           <article data-special>
           <p>Contact</p> 
           <span>shelakesayali9022@gmail.com</span>
           </article>
           </aside>
           </div>
        </section>
        <section className="home-left">
               <img src={myPhoto} alt={"sayali"}></img>
        </section>
          {/* <BsChevronDown></BsChevronDown> */}
        </div>);
}


