
import React,{ Component } from 'react';
import './App.css';
import Display from './components/display';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name: '',
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
        <section className='form_section'>
          <form>
          <h4>Personal Info</h4>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' onChange={this.handleInputChange}/>
            <label htmlFor='title'>Professional Title</label>
            <input id='title' type='text' name='title' onChange={this.handleInputChange}/>
            <br></br>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' onChange={this.handleInputChange}/>
            <br></br>
            <label htmlFor='phone'>Phone number</label>
            <input id='phone' type='tel' name='phone' onChange={this.handleInputChange}/>
          <h4>Educational Background</h4>
            <label htmlFor='school'>Scool</label>
            <input id='school' type='text' name='school' onChange={this.handleInputChange}/>
            <br></br>
            <label htmlFor='study'>Study</label>
            <input id='study' type='text' name='study' onChange={this.handleInputChange}/>
            <br></br>
            <label htmlFor='form'>From</label>
            <input id='from' type='date' name='school_from' onChange={this.handleInputChange}/>
            <label htmlFor='to'>To</label>
            <input id='to' type='date' name='school_to' onChange={this.handleInputChange}/>
          <h4>Work Expirience</h4>
            <label htmlFor='company'>Company</label>
            <input id='compaby' type='text' name='company' onChange={this.handleInputChange}/>
            <br></br>
            <label htmlFor='role'>Role</label>
            <input id='role' type='text' name='role' onChange={this.handleInputChange}/>
            <br></br>
            <label htmlFor='form'>From</label>
            <input id='from' type='date' name='work_from' onChange={this.handleInputChange}/>
            <label htmlFor='to'>To</label>
            <input id='to' type='date' name='work_to' onChange={this.handleInputChange}/>
            <br></br>
            <button type='submit'>Preview CV</button>
            <br></br>
            <button>Reset</button>
            <br></br>
          </form>
          </section>
          <section className='preview_section'>
            <Display name={this.state.name}/>
          </section>
      </div>
    )
  }
}

export default App;
