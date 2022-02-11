import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li>
                                GitHub: https://github.com/confusion-matrix
                            </li>
                            <li>
                                LinkedIn: https://www.linkedin.com/in/carlos-hernandez-3361701a2/
                            </li>
                            <li>
                                Stack Exchange: https://stackoverflow.com/users/16540977/confusion-matrix
                            </li>
                        </ul>

                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        );
    }
}