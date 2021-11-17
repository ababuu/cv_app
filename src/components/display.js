import React, {Component} from "react";
import './display.css'
class Display extends Component{
    
    render(){
        return(
            <div>
                <div className='header_container'>
                    <h1 className='name'>{this.props.name}</h1>
                    <h4 className='title'>{this.props.title}</h4>
                </div>
                <div className='body_container'>
                <div className='education_container'>
                    <h3 className='edu_title'>Education</h3>
                    <h4>{this.props.degree}</h4>
                    <h5>{this.props.study}</h5>
                    <h5>{this.props.school}</h5>
                    <h5>{this.props.school_form} - {this.props.school_to}</h5>
                </div>
                <div className='about_container'>
                    <h3 className='about_title'>About me</h3>
                    <h5 className='about_detail'>{this.props.about_me}</h5>
                </div>
                <div className='work_container'>
                    <h3 className='expi_title'>Experience</h3>
                    <h4>{this.props.role}</h4>
                    <h5>{this.props.company}</h5>
                    <h5>{this.props.work_from} - {this.props.work_to} </h5>
                    <h5>{this.props.work_description}</h5>
                </div>
                <div className='skills_container'>
                    <h3 className='skills_title'>Skills</h3>
                    <h5>{this.props.skill_1}</h5>
                    <h5>{this.props.skill_2}</h5>
                    <h5>{this.props.skill_3}</h5>
                    <h5>{this.props.skill_4}</h5>
                </div>
                <div className='contact_container'>
                    <h3 className='contact_title'>Contact</h3>
                    <h5>Email: {this.props.email}</h5>
                    <h5>Phone Number: {this.props.phone}</h5>
                    <h5>Address: {this.props.address}</h5>
                </div>
                </div>
            </div>
        )
    }
}
export default Display;