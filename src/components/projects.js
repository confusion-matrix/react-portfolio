import React, { Component } from 'react';
export default class Porfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01">
                                        <img src="src/images/movie.PNG" alt="movie" className="item-img" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Movie Finder</h5>
                                                <p>
                                                    This application lets you search for movies and returns a list of
                                                    streaming services they're available on.
                                                </p>
                                                <a href="https://github.com/israelmrios/Movie-Finder">Github link</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01">
                                        <img src="src/images/weather.png" alt="weather" className="item-img" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Weather Tracker</h5>
                                                <p>
                                                    This project lets users enter a city and returns a set of weather
                                                    data and information.
                                                </p>
                                                <a href="https://github.com/confusion-matrix/weather-webapp">Github link</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01">
                                        <img src="src/images/planner.png" className="item-img" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Day Planner</h5>
                                                <p>
                                                    This app lets users write down notes and saves them to be
                                                    edited. Tracks multiple days.
                                                </p>
                                                <a href="https://github.com/confusion-matrix/work-day-scheduler">Github Link</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01">
                                        <img src="src/images/employee.PNG" alt="employee" className="item-img" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Employee Profile Generator</h5>
                                                <p>
                                                    An application that generates an HTML page with information entered
                                                    by the user. This is a command line application.
                                                </p>
                                                <a href="https://github.com/confusion-matrix/employee-tracker">Github Link</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01">
                                        <img src="src/images/notes.PNG" alt="notes" className="item-img" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Note Taker</h5>
                                                <p>
                                                    This app acts as a note pad application that lets users save multiple
                                                    notes and is stored in a database.
                                                </p>
                                                <a href="https://github.com/confusion-matrix/note-taker">Github Link</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01">
                                        <img src="src/images/social.PNG" alt="notes" className="item-img" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Social Media API</h5>
                                                <p>
                                                    A program used to showcase multiple data retrieval functions for
                                                    apps that involve user to user interactions.
                                                </p>
                                                <a href="https://github.com/confusion-matrix/social-network-api">Github Link</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}