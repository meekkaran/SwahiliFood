import React, { Component } from 'react'

const Showcase = () => {
    return (
        <div className="showcase">
            <h2>Taste new recipes</h2>
            <h1>Swahili Dishes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Voluptatem molestias, 
                reiciendis veniam
            </p>

            <div className="showcase__buttons">
                <button className="showcase__btn-explore">EXPLORE</button>
                <button className="showcase__btn-menu">OUR MENU</button>
            </div>

        </div>
    );
};

export default Showcase;
