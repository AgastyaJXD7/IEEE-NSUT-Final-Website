import React from 'react'
import './Gallery.css'

function Gallery() {
    return (               
                <div className="container">
                    <navbar>
                        <a>Show all<sup>15</sup></a>
                        <a>Design<sup>9</sup></a>
                        <a>Branding<sup>23</sup></a>
                        <a>Illustration<sup>4</sup></a>
                        <a>Motion<sup>11</sup></a>
                    </navbar>

                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="image"><img src="Images/Black Adam.jpg" alt="" /></div>
                        </div>
                        <div className="grid-item w-2">
                            <div className="image"><img src="Images/Black Adam.jpg" alt="" /></div>
                        </div>
                        <div className="grid-item w-2">
                            <div className="image"><img src="Images/Black Adam.jpg" alt="" /></div>
                        </div>
                        <div className="grid-item">
                            <div className="image"><img src="Images/Black Adam.jpg" alt="" /></div>
                        </div>
                    </div>

                    <button className="explore">Explore More</button>

                    <div className="advertisement"></div>

                </div>

            

        
    )
}

export default Gallery