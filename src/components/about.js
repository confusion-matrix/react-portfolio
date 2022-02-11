import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">

                    <div className="three columns">

                        <img className="profile-pic" src="/images/me.jpg" alt="" />

                    </div>

                    <div className="nine columns main-col">

                        <h2>About Me</h2>
                        <p>
                            My name is Carlos Hernandez I'm a graduate from Cal Poly Univeristy,
                            currentaly working as a Software Developer for ITPI, a company based
                            in San Bernardino, California.
                            I'm also part of a Web Development program at the Univeristy of California,
                            Riverside to further my web development skills.
                            I'm always looking for new and exciting projects and ready and willing to
                            learn new skills. I have a passion for all things programming and computer
                            related. I also enjoy spending time outdoors.
                        </p>

                        <div className="row">

                            <div className="columns contact-details">

                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Carlos Hernandez</span>
                                    <br></br>
                                    <span>
                                        carlosghernandez95@gmail.com
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}