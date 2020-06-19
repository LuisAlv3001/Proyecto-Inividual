import React from 'react';
import picture from '../img/picture.jpg';

const About = () => {
    return (
        <div className="row col">
            <div className="col-4 bg-white rounded px-0 card-guy">
                <img src={picture} className="card-img-top" alt="Luis"/>
                <div className="card-body">
                    <h2 className="text-center card-name">Luis Alvarado</h2>
                    <h5 className="text-center card-job">Student</h5>
                    <ul class="list-unstyled list-inline text-center">
                        <li class="list-inline-item mx-2">
                            <a href="https://www.facebook.com/luisricardo.alvarado.1" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mx-2">
                            <a href="https://www.instagram.com/luis.alvarado3001" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mx-2">
                            <a href="" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mx-2">
                            <a href="https://github.com/LuisAlv3001" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="my-3 pb-3 px-5 col bg-white rounded">
                <div className="my-3 about-me"><b><span>About</span> me</b></div>
                <div className="row">
                    <div className="col-5">
                        <p>
                            <b>Age</b>
                            <span className="float-right">20</span>
                        </p>
                        <p>
                            <b>Address</b>
                            <span className="float-right">S. Ramón, Alajuela</span>
                        </p>
                        <p>
                            <b>E-mail</b>
                            <span className="float-right">maxwellcrx3@gmai..com</span>
                        </p>
                        <p>
                            <b>Phone</b>
                            <span className="float-right">(+506) 8720 7375</span>
                        </p>
                    </div>
                    <div className="col">
                        <p>
                            Hello, I'm <b>Luis Ricardo Alvarado</b>.<br></br>A student from Costa Rica, i'm actually studyng 
                            Computing and Multimedia Technology in "Universidad de Costa Rica", one of the most prestigious 
                            universities in latin america. I have knowledge at web design, designing in different tools of 
                            the adobe programs, and programming in different language like Java, JavaScript or PHP.
                        </p>
                    </div>
                </div>
                <div className="my-3 about-me"><b>My <span>Development</span></b></div>
                <div className="skills">
                    <div className="circular-progress html"></div>
                    <div className="circular-progress css"></div>
                    <div className="circular-progress js"></div>
                </div>
                <div className="skills">
                    <div className="circular-progress photoshop"></div>
                    <div className="circular-progress php"></div>
                    <div className="circular-progress illustrator"></div>
                </div>
            </div>
        </div>
    );
};

export default About;