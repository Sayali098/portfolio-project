import React, { useState } from "react";
import imgsrc from '../assets/vg.png';
import { Toast, toast } from "react-hot-toast";
import {motion } from "framer-motion";
import { addDoc,collection } from "firebase/firestore";
import {db} from '../firebase';



function Contact(){

  const [inputs,setInputs]=useState({name: "", mail: "", message: ""});
const [disableBtn,setDisableBtn]=useState(false);

  // const changeHandler=(e)=>{
  //    setInputs({...inputs,[e.target.name]:e.target.value});
  // }

   const [name,setName]=useState("");
   const [mail,setMail]=useState("");
   const [message,setMessage]=useState("");



    const submitHandler=async(e)=>{
      e.preventDefault();
      setDisableBtn(true)
      // console.log(name,mail,message);
try{
    await   addDoc(collection(db,"contacts"),{name,mail,message})
    setName("");
    setMail("");
    setMessage("")
      toast.success("Message sent");

    setDisableBtn(false);
}catch(error){

  toast.error(error);
  console.log(error);
  setDisableBtn(false);
}
    }

    const animations={
      form:{
        initial:{
          x:"-100%",
          opacity:0,
        },
        whileInView:{
          x:0,
          opacity:1
        },
        transition:{
          delay:0.3,
        }
      },


      button:{
        initial:{
          y:"-100%",
          opacity:0,
        },
        whileInView:{
          y:0,
          opacity:1
        },
        transition:{
          delay:0.5,
        }
      },
      
    }
    return(<div id="contact"> 
    
   
    <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>  
            <h2>Contact Me</h2>
            <input type="text" placeholder="Enter your name"
            name="name" value={name}  onChange={(e)=>setName(e.target.value)} required    >
            </input>

            <input type="email" placeholder="Enter your email" 
            name="mail"  value={mail}   onChange={(e)=>setMail(e.target.value)} required
            ></input>
            
            
            <input type="text" placeholder="Enter message" 
            name="message" value={message}   onChange={(e)=>setMessage(e.target.value)}  required ></input>
         <motion.button type="submit" className={disableBtn ? "disableBtn" :" "} disabled={disableBtn} {...animations.button}>Send</motion.button>

        </motion.form>
    </section>
    <aside>
        <img src={imgsrc}></img>

    </aside>
    </div>)
}

export default  Contact;
