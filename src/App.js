
import React, { useState } from "react";
import Header, { Mininav } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {

  const [menuOpen,setmenuOpen]=useState(false);
  console.log(menuOpen)
  return (
     <>
     <Mininav menuOpen={menuOpen} setmenuOpen={setmenuOpen}></Mininav>
    <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen}>
      </Header>
      <Home></Home>
      <Work></Work>
      <Timeline></Timeline>
      <Services></Services>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Footer></Footer>
    <Toaster></Toaster>
      </>
  );
}

export default App;
