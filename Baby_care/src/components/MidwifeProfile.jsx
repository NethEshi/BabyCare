import React from 'react';
import { useSelector } from 'react-redux';

function MidwifeProfile() {
    const selectedMidwife = useSelector((state) => state.midwife.selectedMidwife);
    console.log(selectedMidwife)
  return (
    <>
        test
    </>
  );
}

export default MidwifeProfile;