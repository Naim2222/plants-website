import React from 'react'
import './About.css'
function About() {
    return (
        <div className="about" id="about">
            <div className="about_div_left text-white">
                <div className="div_top text-left">
                    <p>Price</p>
                    <h3>$199.99</h3>
                </div>
                <div className="div_middle">
                    <img src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/01/10-Best-Indoor-Plants-Gear-Patrol-umbrella.jpg?resize=480:*" alt="" />
                </div>
                <div className="div_bottom">
                    <h4>01/10</h4>
                    <button>Next  Page </button>
                </div>
            </div>
            <div className="about_div_right ">
                <div className="about_div_right_container text-left">


                    <h4 className="mb-3">Lorem ipsum dolor sit amet.</h4>
                    <h3 className="mb-3">1. Plants Name</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur officiis vel quae doloremque illum, illo vitae esse mollitia praesentium eius atque modi rerum ea? Sequi reprehenderit hic quo doloribus. praesentium eius atque modi rerum ea? Sequi reprehenderit hic quo doloribus.</h5>

                    <button className="about_btn_left mt-3">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
