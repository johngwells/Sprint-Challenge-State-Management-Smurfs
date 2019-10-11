import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../redux/actions/index';

import Smurf from './smurf';
import Form from './form';

const Smurfs = ({ fetchSmurfs, smurfs, error, isFetching }) => {
  useEffect(() => {
    fetchSmurfs()
    
  }, [fetchSmurfs]);

  if (isFetching) {
    return <h2>Loading Smurfs</h2>
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
      <Form />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
