import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends Component {
    render() {
        const services = this.props.serviceMenu;
        const serviceNode = services.map((service) => {
            return (
                <li key={service.id}><a class="dropdown-item" href={service.path + service.id}>{service.menuName}</a></li>
            )
        });

        const trainings = this.props.trainingMenu;
        const trainingNode = trainings.map((training) => {
            return (
                <li key={training.id}><a class="dropdown-item" href={training.path + training.id}>{training.menuName}</a></li>
            )
        });

        const groups = this.props.courseMenu;
        const groupNode = groups.map((group) => {
            const courseNode = group.courses.map((course) => {
                return (<a href={group.path + group.id + "/" + course.id} key={course.id}>{course.courseName}</a>);
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
                            <li key="HOME" className="dropdown">
                                <div class="dropdown">
                                    <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
                                    </button>
                                    <div class="dropdown-content">
                                        <div class="header">
                                            <h2>Mega Menu</h2>
                                        </div>
                                        <div class="row">
                                            <div class="column">
                                                <h3>Category 1</h3>
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                            <div class="column">
                                                <h3>Category 2</h3>
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                            <div class="column">
                                                <h3>Category 3</h3>
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
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
                                    <div class="dropdown-content">
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