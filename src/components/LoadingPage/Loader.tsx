import LoaderIndicator from 'components/Loader';
import React from 'react';
import './loader.scss';
export default function Loader(props) {
  const {isLoading, label} = props;
  return (
    <div className='loader-div'
    style={{
      opacity : isLoading ? 1 : 0,
      zIndex : isLoading ? 9991 : -1,

    }}
    >
      <p>{label || 'Please wait ...'}</p>
      <LoaderIndicator/>
    </div>    
    
  )
  
}
