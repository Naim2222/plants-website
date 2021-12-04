import React from 'react'
import './CustomerReview.css';
import circleimage1 from '../../images/circle1.png';
import circleimage2 from '../../images/circle2.png';
import circleimage3 from '../../images/circle3.png'
function CustomerReview() {
    return (
        <div className="customerReview" id="testimonial">
            <h1 className="pt-5 pb-5 text-white">Our customer says</h1>
            <div className="customerReview_row">
                <div className="CustomerReview_left card">
                    <img src={circleimage1} alt="Customer_image" />
                    <h4>Name</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo odit distinctio porrodfcdfs alias voluptas ratione.consequuntur tenetur.</p>

                </div>
                <div className="CustomerReview_center card">
                    <img src={circleimage2} alt="Customer_image" />
                    <h4>Name</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo odit distinctio porrodfcdfs alias voluptas ratione.consequuntur tenetur.</p>
                </div>
                <div className="CustomerReview_right card">
                    <img src={circleimage3} alt="Customer_image" />
                    <h4>Name</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo odit distinctio porrodfcdfs alias voluptas ratione.consequuntur tenetur.</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview
