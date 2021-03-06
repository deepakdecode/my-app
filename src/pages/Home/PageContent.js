import React, { Component } from 'react';

class PageContent extends Component {
    render() {
        return (
            <div className="container">
                <div class="row">
                    <div class="col-sm-8">
                        <h2>Welcome to JMD Software</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <br /><button class="btn btn-default btn-lg">Get in Touch</button>
                    </div>
                    <div class="col-sm-4">
                        <h2>Latest News</h2>
                        <ul class="list-news">
                            <li>
                                <a href="#">Apr 21, 2012</a>
                                <p class="text-info">Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cu</p>
                                Eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.<br />
                                <a href="#" class="link">details</a>
                            </li>
                            <li>
                                <a href="#">Apr 21, 2012</a>
                                <p class="text-info">Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cu</p>
                                Eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.<br />
                                <a href="#" class="link">details</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row bg-grey" >
                    <div class="col-sm-4">
                        <span class="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div class="col-sm-8">
                        <h2>Our Values</h2>
                        <p><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>



                <div id="services" class="text-center">
                    <h2>SERVICES</h2>
                    <h4>What we offer</h4>
                    <br />
                    <div class="row slideanim">
                        <div class="col-sm-4">
                            <span class="glyphicon glyphicon-off logo-small"></span>
                            <h4>POWER</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div class="col-sm-4">
                            <span class="glyphicon glyphicon-heart logo-small"></span>
                            <h4>LOVE</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div class="col-sm-4">
                            <span class="glyphicon glyphicon-lock logo-small"></span>
                            <h4>JOB DONE</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                    <br /><br />
                    <div class="row slideanim">
                        <div class="col-sm-4">
                            <span class="glyphicon glyphicon-leaf logo-small"></span>
                            <h4>GREEN</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div class="col-sm-4">
                            <span class="glyphicon glyphicon-certificate logo-small"></span>
                            <h4>CERTIFIED</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div class="col-sm-4">
                            <span class="glyphicon glyphicon-wrench logo-small"></span>
                            <h4>HARD WORK</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                </div>

                <div id="portfolio" class="text-center bg-grey">
                    <h2>Portfolio</h2><br />
                    <h4>What we have created</h4>
                    <div class="row text-center slideanim">
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <img src="paris.jpg" alt="Paris" width="400" height="300"></img>
                                <p><strong>Paris</strong></p>
                                <p>Yes, we built Paris</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <img src="newyork.jpg" alt="New York" width="400" height="300"></img>
                                <p><strong>New York</strong></p>
                                <p>We built New York</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <img src="sanfran.jpg" alt="San Francisco" width="400" height="300"></img>
                                <p><strong>San Francisco</strong></p>
                                <p>Yes, San Fran is ours</p>
                            </div>
                        </div>
                    </div><br />
                </div>

                <div id="pricing">
                    <div class="text-center">
                        <h2>Pricing</h2>
                        <h4>Choose a payment plan that works for you</h4>
                    </div>
                    <div class="row slideanim">
                        <div class="col-sm-4 col-xs-12">
                            <div class="panel panel-default text-center">
                                <div class="panel-heading">
                                    <h1>Basic</h1>
                                </div>
                                <div class="panel-body">
                                    <p><strong>20</strong> Lorem</p>
                                    <p><strong>15</strong> Ipsum</p>
                                    <p><strong>5</strong> Dolor</p>
                                    <p><strong>2</strong> Sit</p>
                                    <p><strong>Endless</strong> Amet</p>
                                </div>
                                <div class="panel-footer">
                                    <h3>$19</h3>
                                    <h4>per month</h4>
                                    <button class="btn btn-lg">Sign Up</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="panel panel-default text-center">
                                <div class="panel-heading">
                                    <h1>Pro</h1>
                                </div>
                                <div class="panel-body">
                                    <p><strong>50</strong> Lorem</p>
                                    <p><strong>25</strong> Ipsum</p>
                                    <p><strong>10</strong> Dolor</p>
                                    <p><strong>5</strong> Sit</p>
                                    <p><strong>Endless</strong> Amet</p>
                                </div>
                                <div class="panel-footer">
                                    <h3>$29</h3>
                                    <h4>per month</h4>
                                    <button class="btn btn-lg">Sign Up</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="panel panel-default text-center">
                                <div class="panel-heading">
                                    <h1>Premium</h1>
                                </div>
                                <div class="panel-body">
                                    <p><strong>100</strong> Lorem</p>
                                    <p><strong>50</strong> Ipsum</p>
                                    <p><strong>25</strong> Dolor</p>
                                    <p><strong>10</strong> Sit</p>
                                    <p><strong>Endless</strong> Amet</p>
                                </div>
                                <div class="panel-footer">
                                    <h3>$49</h3>
                                    <h4>per month</h4>
                                    <button class="btn btn-lg">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact" class="bg-grey">
                    <h2 class="text-center">CONTACT</h2>
                    <div class="row">
                        <div class="col-sm-5">
                            <p>Contact us and we'll get back to you within 24 hours.</p>
                            <p><span class="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
                            <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
                            <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
                        </div>
                        <div class="col-sm-7 slideanim">
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                    <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
                                </div>
                                <div class="col-sm-6 form-group">
                                    <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
                                </div>
                            </div>
                            <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                            <div class="row">
                                <div class="col-sm-12 form-group">
                                    <button class="btn btn-default pull-right" type="submit">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default PageContent;
