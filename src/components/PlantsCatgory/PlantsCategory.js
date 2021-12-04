import React from 'react'
import './PlantsCategory.css';
import image1 from '../../images/cateImg1.jpg'
import image2 from '../../images/cateImg2.jpg'
import image3 from '../../images/cateImg3.jpg'
function PlantsCategory() {
    return (
        <div className="plantsCategory" id="plants">
            <h3 className="mb-5 pt-5">Plants Category</h3>

            <div className="plantsCategory_row">
                <div className="div_left">
                    <img className="images" src={image1} alt="" />
                    <h4 className="cateName">Category Name</h4>
                    <p className="cateDetails">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima assumenda, explicabo delectus omnis ipsa!
                    </p>
                </div>
                <div className="div_center">
                    <img className="images" src={image2} alt="" />
                    <h4 className="cateName">Category Name</h4>
                    <p className="cateDetails">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima assumenda, explicabo delectus omnis ipsa!
                    </p>
                </div>
                <div className="div_right">
                    <img className="images" src={image3} alt="" />
                    <h4 className="cateName">Category Name</h4>
                    <p className="cateDetails">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima assumenda, explicabo delectus omnis ipsa!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlantsCategory
