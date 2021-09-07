import React from 'react'
import Homestyle from './Home.css'
import cheetah from './cheetah.png'

function Home() {
  return (
    <div className="Home">
      <link rel="stylesheet" href={Homestyle}/>
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


