import React from 'react';

const Resume = () => {
    return (
        <div className="row col">
            <div className="full-card skills bg-white rounded col px-3 pb-4 ml-0">
                <div className="col-6">
                    <div className="my-3 about-me"><b><span>My</span> Qualifications</b></div>
                    <ul className="row mb-4">
                        <li className="col-6">Good teamwork skills.</li>
                        <li className="col-6">I'm a person with values.</li>
                        <li className="col-6">I'm good at relating with people.</li>
                        <li className="col-6">Responsible in my assigned tasks.</li>
                        <li className="col-6">Quick at solving problems.</li>
                    </ul>
                    <div className="my-3 about-me"><b><span>Some</span> Skills</b></div>
                    <div className="row">
                        <div className="col skills-cards text-center">
                            <i className="fas fa-code icon"></i>
                            <br></br>
                            <h5><b>Web Development</b></h5>
                            <p>Functionally Modern and Mobile websites for marketing</p>
                        </div>
                        <div className="col skills-cards text-center">
                            <i class="fas fa-object-ungroup icon"></i>
                            <br></br>
                            <h5><b>Graphic Designer</b></h5>
                            <p>Capable to use adobe programs to make marketing designs</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col skills-cards text-center">
                            <i class="fas fa-photo-video icon"></i>
                            <br></br>
                            <h5><b>Video Editor</b></h5>
                            <p>Able to edit any type of film</p>
                        </div>
                        <div className="col skills-cards text-center">
                            <i className="fas fa-camera icon"></i>
                            <br></br>
                            <h5><b>Picture Capturing</b></h5>
                            <p>Knowledge about framing and photo editing</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="my-3 about-me"><b><span>Work</span> Experience</b></div>
                    <div className="work-experience p-3">
                        <h5><i class="fas fa-map-marked-alt mr-2"></i>San Ramon, Alajuela, Costa Rica.</h5>
                        <h5><i class="fas fa-calendar-week mr-2"></i>2014 - 2018</h5>
                        <ul>
                            <li>
                                <b>Type of business or sector:</b> Book store, ironmongery and copy center.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Occupation or position held:</b> photocopy assistant and cashier 
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div className="work-experience p-3">
                        <h5><i class="fas fa-map-marked-alt mr-2"></i>Beaver Creek, Colorado, USA.</h5>
                        <h5><i class="fas fa-calendar-week mr-2"></i>2019 - 2020</h5>
                        <ul>
                            <li>
                                <b>Type of business or sector:</b> Clothing store, souvenir shop.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Occupation or position held:</b> Customer service and cashier 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="my-3 text-center about-me col-12"><b><span>Academic</span> Education</b></div>
                <div className="col">
                    <ul className="progressbar">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;