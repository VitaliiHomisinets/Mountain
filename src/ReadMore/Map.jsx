import React from 'react'
import Footer from '../Componets/Footer'
import "../Style/Map.css"
import Dropdown from '../Componets/Dropdown'
import Header from '../Componets/Header'
export default function Map() {
  window.scrollTo(0, 0);
  return (
    <div className='map'>
      <Header />
     <div className="mainTitle">
            <ul>
                <li style={{color: '#FBD784'}}>Where you go is the key</li>
                <li style={{  fontSize: '88px', margin: '30px 0px'}}>Understand Your Map & Timing</li>
                <li style={{fontWeight: '500'}}>scroll down <img className="arrow" src="img/arrow.svg" alt="" /></li>
            </ul>
        </div>
        <div className='mapContent'>
            <div className='titleBlock'>
              <div className='textTitleBlock'>
                <h2>Navigation Top Tips</h2>
                <p>Being a competent navigator, as well as being an essential skill for safe mountain travel, is also a joy.  It feels so empowering to be able to find your way around the hills and mountains efficient;y.  Some of the techniques required are easy enough to learn.  Others take many long days on the hill to master.  Good navigators serve a lengthy apprenticeship.  

                  An article like this can’t cover even a fraction of the skills needed, but there are some key tips to aid your nav journey.  How do we know? Because all of them have been hard won on our own nav apprenticeship.  We could have added far more, but we’ve just selected ten favourites.  </p>
              </div>
              <div className='imgTitleBlock'>
                <img src="https://i.pinimg.com/564x/52/b9/72/52b9723ab6649b27e557b6e7301b9a0c.jpg" alt="" />
              </div>
            </div>
             </div>
              <div className='drop'>
                 <Dropdown />
              </div>
               
            <Footer />
           
       
    </div>
  )
}
