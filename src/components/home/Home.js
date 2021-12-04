import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className="home text-white d-flex align-items-center justify-content-around">

            <div className="home_div_left">
                <div className="home_left_top">
                    <h1 style={{ overflow: 'hidden' }}>We have perfect plants for your house</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ipsum, nobis aperiam esse, repudiandae provident aspernatur soluta inventore ipsam tempore. Sit, harum. Fugiat, libero.</p>

                </div>
                <div className="home_left_bottom">

                    <button className="left_btn">
                        Buy now
                    </button>

                    <button className="right_btn">
                        View collections
                    </button>
                </div>

            </div>
            <div className="home_div_right">
                <img src="https://www.mammachia.com/wp-content/uploads/2020/02/Best-Fertilizer-for-Indoor-Plants.jpg" alt="" />
            </div>

        </div>
    )
}

export default Home
