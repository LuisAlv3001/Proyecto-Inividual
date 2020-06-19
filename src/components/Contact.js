import React from 'react';

const Contact = () => {
    return (
        <div className="bg-white rounded col ">
            <div className="my-3 ml-3 about-me"><b><span>Contact</span> Me</b></div>
            <div className="row px-5 pb-5">
                <div className="p-2 col-6">
                    <div className="card-contact text-center">
                        <a href="https://www.facebook.com/luisricardo.alvarado.1" target="_blank"><i class="fab fa-facebook-f contact-icon"></i> Luis Ricardo Alvarado</a>
                    </div>
                </div>
                <div className="p-2 col-6">
                    <div className="card-contact text-center">
                        <a href="https://www.instagram.com/luis.alvarado3001" target="_blank"><i class="fab fab fa-instagram contact-icon"></i> luis.alvarado3001</a>
                    </div>
                </div>
                <div className="p-2 col-6">
                    <div className="card-contact text-center">
                        <a href="mailto:maxwellcrx3@gmail.com"><i class="fas fa-envelope contact-icon"></i> maxwellcrx3@gmail.com</a>
                    </div>
                </div>
                <div className="p-2 col-6">
                    <div className="card-contact text-center">
                        <a href="https://www.youtube.com/channel/UCzhDUKVHOrDswnCRx5FhouA?view_as=subscriber" target="_blank"><i class="fab fa-youtube contact-icon"></i> Luisito</a>
                    </div>
                </div>
                <div className="p-2 col-6">
                    <div className="card-contact text-center">
                        <a href="https://github.com/LuisAlv3001" target="_blank"><i class="fab fa-github contact-icon"></i> LuisAlv3001</a>
                    </div>
                </div>
                <div className="p-2 col-6">
                    <div className="card-contact text-center">
                        <a href="https://web.skype.com/" target="_blank"><i class="fab fa-skype contact-icon"></i> maxwellcrx3_1</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;