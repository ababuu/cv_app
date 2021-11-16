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
                    <h5>Field of study</h5>
                    <h5>university,location</h5>
                    <h5>From-to</h5>
                </div>
                <div className='about_container'>
                    <h3 className='about_title'>About me</h3>
                    <h5 className='about_detail'>loremvgfgffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h5>
                </div>
                
                <div className='skills_container'>
                    <h3 className='skills_title'>Skills</h3>
                    <h5>sasasas</h5>
                    <h5>sasasas</h5>
                    <h5>sasasas</h5>
                    <h5>sasasas</h5>
                </div>
                <div className='work_container'>
                    <h3 className='expi_title'>Experience</h3>
                    <h4>Position</h4>
                    <h5>Company name, From-to</h5>
                    <h5>description djsdk skkaei aksd</h5>
                </div>
                <div className='contact_container'>
                    <h3 className='contact_title'>Contact</h3>
                    <h5>Email: </h5>
                    <h5>Phone Number: </h5>
                    <h5>Address :</h5>
                </div>
                </div>
            </div>
        )
    }
}
export default Display;