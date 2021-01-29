import React from 'react'
import './style.css';
import Showcase from '../components/Showcase';
import Photos from '../components/Photos';

function Home() {
    return (
        <div className="space">
            <Showcase/>
            <Photos />
        </div>
    )
}

export default Home
