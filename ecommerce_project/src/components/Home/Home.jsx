import React from 'react';
import cheetah from './cheetah2.png';
import './HomeStyle.css'

function Home() {
  return (
    <div className="Home">
      <div class="container">
        <div class="row">
          <h1 id="Homepageh1" class="text-center">Available Foods!</h1>
        </div>
        <div class="row">
          <div class="cheetahfooter">
            <img id="Cheetahimage" src={cheetah} alt='no-alt' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


