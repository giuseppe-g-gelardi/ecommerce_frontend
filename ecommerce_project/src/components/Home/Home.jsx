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
          <div class="col-md-6 secondsection">
            <span>please work</span>
            <p>it worked!</p>
          </div>
          <div class="col-md-6"></div>
            <img src={cheetah} alt='no-alt' />
          <div class="col-md-6"></div>
          <div class="col-md-6 secondsection">
            <h2>
              we sell food and stuff here bruh
            </h2>
          </div>
            <div class="row">
              <div class="col-md-6">
                <h2>
                  buy the food stuffs from us lmao
                </h2>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-6"></div>
              <div class="col-md-6">
                <span>
                  plz i have bills
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home


