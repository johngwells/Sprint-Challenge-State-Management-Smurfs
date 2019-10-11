import React from 'react';

const Smurf = ({ smurf }) => {
  return (
    <>
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
    </>
  );
}

export default Smurf;
