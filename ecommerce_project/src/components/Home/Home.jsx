import React from 'react'
<<<<<<< HEAD
import Homestyle from './Home.css'
=======
import cheetah from './cheetah.png'
>>>>>>> 7729b3905164712c0ae5504c6c8063e8b4ad70c1

function Home() {
  return (
    <div className="Home">
<<<<<<< HEAD
      <link rel="stylesheet" href={Homestyle}/>
      <div class="container">
        <div class="row">
          <h1 id="Homepageh1" class="text-center">Available Foods!</h1>
        </div>
        <div class="row">
          <div class="col-md-6 secondsection">
            <span>please work</span>
            <p>it worked!</p>
=======


      <div class="container">
        <div class="row">
          <div class="col-md-6">
          <h1>Welcome Home!</h1>
          <span>please work</span>
>>>>>>> 7729b3905164712c0ae5504c6c8063e8b4ad70c1
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


