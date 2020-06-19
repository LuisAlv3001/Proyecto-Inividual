import React from 'react';
import AficheTipografico from "../img/AficheTipografico.jpg";
import Animal from "../img/Animal.gif";
import Juego from "../img/Juego.gif";
import Video from "../img/Video.gif";
import SistemaOperativo from "../img/SistemaOperativo.jpg";
import Web from "../img/Web.png";
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

const Works = () => {
    return (
        <div className="bg-white rounded col pl-4">
            <div className="ml-3 my-3 about-me"><b>My <span>Works</span></b></div>
            <div className="row works">
                <div className="content">
                    <div className="content-item">
                        <img className="card-img" src={Video}></img>
                        <div className="img-desc">
                            <h1>Video</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-item">
                        <img className="card-img" src={Web}></img>
                        <div className="img-desc">
                            <h1>Web Page</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-item">
                        <img className="card-img" src={Juego}></img>
                        <div className="img-desc">
                            <h1>Game</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
                
                <div className="content">
                    <div className="content-item">
                        <img className="card-img" src={Animal}></img>
                        <div className="img-desc">
                            <h1>Animation</h1>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="content-item">
                        <img className="card-img" src={AficheTipografico}></img>
                        <div className="img-desc">
                            <h1>Design</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            
                <div className="content">
                    <div className="content-item">
                        <img className="card-img" src={SistemaOperativo}></img>
                        <div className="img-desc">
                            <h1>Design</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;

