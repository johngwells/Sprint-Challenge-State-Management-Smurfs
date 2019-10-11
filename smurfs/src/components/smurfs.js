import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../redux/actions/index';

import Smurf from './smurf';
// import Form from './form';

const Smurfs = ({ fetchSmurfs, smurfs }) => {
  useEffect(() => {
    fetchSmurfs()
    
  }, [fetchSmurfs]);

  return (
    <div>
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  console.log('smurfs', state)
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
