import React, { Component } from 'react';
export default class ContactUs extends Component {
    render() {
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Feel free to contact.
                            I will reply as soon as I can.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eigth columns footer-widgets">
                        <div className="widget">
                            <h4>Phone Number:
                                619-838-8936
                                Email:
                                carlosghernandez95@gmail.com
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}