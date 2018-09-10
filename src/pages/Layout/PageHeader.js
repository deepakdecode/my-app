import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends Component {
    render() {
        const services = this.props.serviceMenu;
        const serviceNode = services.map((service) => {
            return (
                <li key={service.id}><Link class="dropdown-item" to={service.path + service.id}>{service.menuName}</Link></li>
            )
        });

        const trainings = this.props.trainingMenu;
        const trainingNode = trainings.map((training) => {
            return (
                <li key={training.id}><Link class="dropdown-item" to={training.path + training.id}>{training.menuName}</Link></li>
            )
        });

        const groups = this.props.courseMenu;
        const groupNode = groups.map((group) => {
            const courseNode = group.courses.map((course) => {
                return (<Link to={group.path + group.id + "/" + course.id} key={course.id}>{course.courseName}</Link>);
            });
            return (
                <div class="column">
                    <h5 key={group.id}>{group.courseGroup}</h5>
                    {courseNode}
                </div>
            )
        });



        return (

                <nav class="navbar navbar-default navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#myPage">Logo</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="/">HOME
                                    <span class="caret"></span></a>
                                <div class="dropdown">
                                    <div class="dropdown-content dropdown-content-home">
                                        {groupNode}
                                    </div>
                                </div>

                               
                            </li>
                            <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="/services">SERVICES
                                    <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        {serviceNode}
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="/Training">TRAINING
                                    <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        {trainingNode}
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="/Courses">COURSES
                                    <span class="caret"></span></a>
                                <div class="dropdown-content dropdown-content-course">
                                        {groupNode}
                                    </div>
                                </li>
                                <li><a href="/Career">CAREERS</a></li>
                                <li><a href="/Resource">RESOURCES</a></li>
                                <li><a href="/ContactUs">CONTACT US</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

        )
    }
}
export default PageHeader;