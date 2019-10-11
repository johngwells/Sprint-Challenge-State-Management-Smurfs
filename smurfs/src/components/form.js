import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../redux/actions/index';

const SmurfForm = ({ postSmurf }) => {
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: ''
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setSmurf({...smurf, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSmurf = {
      ...smurf,
      id: Date.now()
    }
    postSmurf(newSmurf);
    // clear after submit
    setSmurf({
      name: '',
      age: '',
      height: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={smurf.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='age'
          placeholder='Age'
          value={smurf.age}
          onChange={handleChange}
        />
        <input
          type='text'
          name='height'
          placeholder='Height'
          value={smurf.height}
          onChange={handleChange}
          />
          <button type='submit'>Join Village</button>
        </form>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('form', state);
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
  }
}

export default connect(null, { postSmurf })(SmurfForm);