
import React,{ Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <section className='section_1'>
          <h4>Personal Info</h4>
          <form>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text'/>
            <br></br>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email'/>
            <br></br>
            <label htmlFor='phone'>Phone number</label>
            <input id='phone' type='tel'/>
          </form>
        </section>
        <section className='section_2'>
          <h4>Educational Background</h4>
          <form>
            <label htmlFor='school'>Scool</label>
            <input id='school' type='text'/>
            <br></br>
            <label htmlFor='study'>Study</label>
            <input id='study' type='text'/>
            <br></br>
            <label htmlFor='form'>From</label>
            <input id='from' type='date'/>
            <label htmlFor='to'>To</label>
            <input id='to' type='date'/>
          </form>
        </section>
        <section className='section_3'>
          <h4>Work Expirience</h4>
          <form>
            <label htmlFor='company'>Company</label>
            <input id='compaby' type='text'/>
            <br></br>
            <label htmlFor='role'>Role</label>
            <input id='role' type='text'/>
            <br></br>
            <label htmlFor='form'>From</label>
            <input id='from' type='date'/>
            <label htmlFor='to'>To</label>
            <input id='to' type='date'/>
          </form>
        </section>
      </div>
    )
  }
}

export default App;
