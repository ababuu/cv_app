
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
      school: '',
      study: '',
      school_from: '',
      school_to: '',
      company: '',
      role: '',
      work_from:'',
      work_to:'',
    }
    this.handleInputChange=this.handleInputChange.bind(this);
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
          <h4>Educational Background</h4>
            <input id='school' type='text' name='school' placeholder="School Name" onChange={this.handleInputChange}/>
            <br></br>
            <input id='study' type='text' name='study' placeholder="Field of Study" onChange={this.handleInputChange}/>
            <br></br>
            <input id='from' type='date' name='school_from' placeholder="From" onChange={this.handleInputChange}/>
            <input id='to' type='date' name='school_to' placeholder="To" onChange={this.handleInputChange}/>
          <h4>Work Expirience</h4>
            <input id='company' type='text' name='company' placeholder="Company Name" onChange={this.handleInputChange}/>
            <br></br>
            <input id='from' type='date' name='work_from' placeholder="From" onChange={this.handleInputChange}/>
            <input id='to' type='date' name='work_to' placeholder="To" onChange={this.handleInputChange}/>
            <br></br>
            <textarea placeholder="Role Description" name="Message" rows="10"/>
            <br></br>
            <button type='submit' className='submit_btn'>Preview CV</button>
            <br></br>
            <button className='reset_btn'>Reset</button>
            <br></br>
          </form>
          </section>
          <section className='preview_section'>
            <Display name={this.state.name} title={this.state.title} email={this.state.email} phone={this.state.phone} school={this.state.school} study={this.state.study}/>
          </section>
      </div>
    )
  }
}

export default App;
