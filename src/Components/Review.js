import React from 'react';

const Review = () => {
    return (
        <section className="review" id="review">
            <h1 className="heading">reviews <span>what people says</span></h1>

            <div className="swiper review-slider">
                <div className="swiper-wrapper">
                    {/* Review Items */}
                    <div className="swiper-slide box">
                        <i className="fas fa-quote-left"></i>
                        <i className="fas fa-quote-right"></i>
                        <img src="Assets/pic-1.png" alt="" />
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur
                            illum.</p>
                        <h3>john deo</h3>
                        <span>satisfied client</span>
                    </div>
                    {/* Repeat this pattern for other review items */}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
}

export default Review;
