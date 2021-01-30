import React from 'react';
import "./Photos.css";

function Photos() {
    return (
        <div>
            <h1>What we prepare</h1>
            <div className="imagewrap">
                <div className="image">
                   <img src="../images/fish.jpg" />
                   <img src="../images/beef.jpg" />
                   <img src="../images/chicken.jpg"/>
                </div>
                <div className="image">
                   <img src="../images/chapo.jpg" />
                   <img src="../images/bhajia.jpg"/>
                   <img src="../images/pilau.jpg" />
                </div>
                <div className="image">
                   <img src="../images/beer.jpg" />
                   <img src="../images/smoothie.jpg"/>
                   <img src="../images/milk.jpg" />
                </div>
                
            </div>
        </div>
    )
}

export default Photos
