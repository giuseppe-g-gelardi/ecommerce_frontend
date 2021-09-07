import React from 'react'
import cheetah from './cheetah.png'

function Home() {
  return (
    <div className="Home">


      <div class="container">
        <div class="row">
          <div class="col-md-6">
          <h1>Welcome Home!</h1>
          <span>please work</span>
          <img src={cheetah} alt='no-alt' />

          </div>
          <div class="col-md-6"></div>
          <div class="col-md-6"></div>
          <div class="col-md-6">
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


