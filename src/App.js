
import React,{ Component } from 'react';
import './App.css';
import Display from './components/display';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name: '',
      title:'',
      email: '',
      phone: '',
      address: '',
      about_me: '',
      degree: '',
      school: '',
      study: '',
      school_from: '',
      school_to: '',
      company: '',
      role: '',
      work_description: '',
      skill_1:'',
      skill_2:'',
      skill_3:'',
      skill_4:'',
      work_from:'',
      work_to:'',
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.printDocument=this.printDocument.bind(this);
  }
  handleInputChange(e){
      const {name,value}=e.target;
      this.setState({
        ...value,
        [name]: value
      })
  }
  render(){
    return(
      <div className='main_container'>
        <nav><h1>CV MAKER</h1></nav>
        <section className='form_section'>
          <form>
          <h4>Personal Info</h4>
            <input id='name' type='text' name='name' placeholder="Name" onChange={this.handleInputChange}/>
            <input id='title' type='text' name='title' placeholder="Professional Title" onChange={this.handleInputChange}/>
            <br></br>
            <input id='email' type='email' name='email' placeholder="Email" onChange={this.handleInputChange}/>
            <br></br>
            <input id='phone' type='tel' name='phone' placeholder="Phone Number" onChange={this.handleInputChange}/>
            <input id='title' type='text' name='adress' placeholder="Adress" onChange={this.handleInputChange}/>
            <textarea type='text' name='about_me' placeholder="About me" onChange={this.handleInputChange} rows="8"/>
          <h4>Educational Background</h4>
          <input type='text' name='degree' placeholder="Degree Bsc, Masters or Phd" onChange={this.handleInputChange}/>
            <br></br>
            <input id='study' type='text' name='study' placeholder="Field of Study" onChange={this.handleInputChange}/>
            <br></br>
            <input id='school' type='text' name='school' placeholder="School Name" onChange={this.handleInputChange}/>
            <br></br>
            <input type='number' name='school_from' placeholder="From" onChange={this.handleInputChange}/>
            <input type='number' name='school_to' placeholder="To" onChange={this.handleInputChange}/>
          <h4>Work Expirience</h4>
            <input id='company' type='text' name='company' placeholder="Company Name" onChange={this.handleInputChange}/>
            <br></br>
            <input type='text' name='role' placeholder="Role" onChange={this.handleInputChange}/>
            <input type='number' name='work_from' placeholder="From (starting-year)" onChange={this.handleInputChange}/>
            <input type='number' name='work_to' placeholder="To (final-year)" onChange={this.handleInputChange}/>
            <br></br>
            <textarea placeholder="Role Description" name="Message" rows="10"/>
            <br></br>
            <h4>Skills</h4>
            <input type='text' name='skill_1' placeholder="skill 1" onChange={this.handleInputChange}/>
            <input type='text' name='skill_2' placeholder="skill 2" onChange={this.handleInputChange}/>
            <input type='text' name='skill_3' placeholder="skill 3" onChange={this.handleInputChange}/>
            <input type='text' name='skill_4' placeholder="skill 4" onChange={this.handleInputChange}/>
            <button className='submit_btn' onClick={this.printDocument}>Print CV</button>
            <br></br>
            <button className='reset_btn' >Reset</button>
            <br></br>
          </form>
          </section>
          <section className='preview_section'>
            <Display name={this.state.name} title={this.state.title} email={this.state.email} phone={this.state.phone} school={this.state.school} study={this.state.study} degree={this.state.degree} school_from={this.state.school_from} school_to={this.state.school_to} company={this.state.company} role={this.state.role} work_description={this.state.work_description} work_from={this.state.work_from} work_to={this.state.work_to} about_me={this.state.about_me} skill_1={this.state.skill_1} skill_2={this.state.skill_2} skill_3={this.state.skill_3} skill_4={this.state.skill_4} address={this.state.address}/>
          </section>
      </div>
    )
  }
}

export default App;
