import React from "react";
import {AiFillIeCircle,AiFillAndroid,AiFillWindows} from "react-icons/ai";
import { motion } from "framer-motion";

function Services(){

    const animation ={

        whileInView:{

            x:0,
            y:0,
            opacity:1,

        },
        one:{
            x:"-100%",
            opacity:0,
        },
        twoAndThree:{
            y:"-100%",
            opacity:0,
        },

        four:{
            x:"100%",
            opacity:0,
        }
    }

    return(<div id="services">
        
        <h2>Services</h2>
        <section>

            <motion.div className="serviceBox1" whileInView={animation.whileInView}
            initial={animation.one}> 
            <h3>5+</h3>
            <p>Year Experience</p>
            </motion.div>

            <motion.div className="serviceBox2" whileInView={animation.whileInView} 
            initial={animation.twoAndThree} transition={{delay:0.2}}> 
                    <AiFillIeCircle></AiFillIeCircle>
                     <span>Web Developement</span>
         </motion.div>
 
             <motion.div className="serviceBox3" whileInView={animation.whileInView}
             initial={animation.twoAndThree }> 
                   <AiFillAndroid></AiFillAndroid>
                      <span>App Developement</span>
             </motion.div>

             
             <motion.div className="serviceBox4" whileInView={animation.whileInView} 
             initial={animation.four} >
            < AiFillWindows></AiFillWindows>
                      <span>Desktop Developement</span>
             </motion.div>

        </section>
            
            </div>)
}


export default Services;
