import React from 'react';
import loadingGif from '../Assets/gif/loading-arrow.gif';

export default function Loading() {
  return (
    <div className="loading">
      <h4 style={{ fontFamily: '"Dancing Script", cursive', fontSize: 30 }}>Loading...</h4>
      <img src={loadingGif} alt="" style={{ height: '50px', width: '50px' }} />
    </div>
  );
}
