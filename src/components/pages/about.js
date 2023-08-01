import React from 'react';
import profilePicture from "../../../static/assets/images/bio/project_headshot.jpg";

export default function() {
    return (
            <div className="content-page-wrapper">

                <div className="left-column"
                    style={{
                        background: "url(" + profilePicture + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }} 
                />

                <div className="right-column">
                I am a highly motivated and experienced professional with a proven track record of success in a variety of roles. 
                I have over a decade of experience in both the military and civilian sectors, and I am skilled in system potential evaluation, testing of new programs, and systems integration. 
                I am also an excellent communicator and team player, and I am passionate about using my skills and experience to make a positive impact on the world. 
                I am confident that I can make a significant contribution to your company. 
                I look forward to discussing my qualifications with you in more detail.
                </div>
            </div>
        );
    }
