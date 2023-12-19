import React from "react";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";
import imgsrc from "../assets/sayali1.jpg";

function Footer(){
    return (
    <footer>
    <div>

        <img src={imgsrc} alt="User"></img>
        <h2>Sayali Shelake</h2>
        <p>Motivation is temporary , but discipline is last forever</p>
    </div>
    <aside>
    <h2>Social media</h2>
    <article>
        <a href="https://www.youtube.com/" ><AiFillYoutube></AiFillYoutube></a>
        <a href="https://www.instagram.com/" ><AiFillInstagram></AiFillInstagram></a>
        <a href="https://www.youtube.com/" ><AiFillYoutube></AiFillYoutube></a>
    </article>
    </aside>
    <a href=" #home" ><AiOutlineArrowUp></AiOutlineArrowUp></a>
    </footer>)
}

export default Footer;
