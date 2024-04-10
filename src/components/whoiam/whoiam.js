import React from 'react';
import './whoiam.css'
import myPicture from '../../images/IMG_2233.JPG'

export default function Whoiam() {
    return (
        <section className="about-me" id="bio">
            <section className="image">
                <img src={myPicture} alt="Jesse Shaw in a suit" className="my-picture"></img>
            </section>
            <section className="description">
                <span className="aboutme-description">Hey there! My name is Jesse Shaw. I am a Full Stack Developer currently working on a Learning Management System application at Jacob's Engineering. I enjoy coding because I love to create things. I enjoy building things from scratch and seeing them come to life. I am always interested in meeting and learning from fellow developers and creatives who have similar mindsets. I love working with people who are not afraid to challenge each other and make the world a better place.</span>
            </section>
        </section>
    );
}
