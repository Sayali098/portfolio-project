import React from "react";


function Testimonial(){
    return(<div id="testimonial"> 
    <h2>Testimonial</h2>
    
    <section>
        <TestimonialCard name={"sayali"} feedback={"Your teaching skill are so good"}></TestimonialCard>
        <TestimonialCard name={"sanjay"} feedback={"Your teaching skill are so good"}></TestimonialCard>
        <TestimonialCard name={"sidharth"} feedback={"Your teaching skill are so good"}></TestimonialCard>
    </section>
    
    </div>);
};



 const TestimonialCard = ({name,feedback}) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User"></img>
        <h4>
            {name}
        </h4>
        <p>{feedback}</p>
    </article>



 )

 
export default Testimonial;