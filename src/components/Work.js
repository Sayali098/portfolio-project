

import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../assets/data.json";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Work(){
    return(<div id="work">

           <h2>Work</h2>
            <section>
            <article>
            <Carousel 
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            interval={2000}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}>
               {
                data.projects.map((i)=>(

                    <div key={i.title} className="workItem">
                        <img src={i.imgSrc} ></img>
                        <aside>
                            <h3>{i.title}</h3>
                            <p>{i.description}</p>
                            <a  href={i.url} target={"blank"}>
                                Video Demo
                            </a>

                        </aside>

                    </div>
                ))
               }

            </Carousel>
            </article>
            </section>

    </div>)
}

export default Work;