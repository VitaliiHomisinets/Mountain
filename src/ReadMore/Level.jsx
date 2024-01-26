import React from 'react'
import "../Style/Level.css"
import Header from '../Componets/Header'
export default function Level() {
  window.scrollTo(0, 0);
  return (
    <div className='level'>
        <Header />
       
                <div className="mainTitle">
                    <ul>
                        <li style={{color: '#FBD784'}}>GET STARTED</li>
                        <li style={{maxWidth: '840px',  fontSize: '88px'}}>What level of  hiker are you?</li>
                        <li style={{fontWeight: '500'}}>scroll down <img className="arrow" src="img/arrow.svg" alt="" /></li>
                    </ul>
                </div>
         
            <div className='levelContent'>
              <div className='text'>
                <h1 style={{color:"#FBD784", marginBottom:'30px'}}>What level of hiker are you?</h1>
                <p>As a general rule of thumb, if you’re a new hiker, it’s best to stick with the ratings systems suggested by websites. After you’ve got some experience under your belt, you’ll know how much distance, elevation increase, and length of time you’ll be able to handle. Then you can use the ratings systems as more of a guide than anything else. To help even more, I compiled a guide of different hiking levels to help you asses what type of hiker you are. As for me, I’m a simple hiker at a moderate level.</p>
              </div>
              <div className='levelImg'>
                <img src="https://cdn.shopify.com/s/files/1/0085/1171/7440/articles/hikers-on-a-trek-featured-image_1024x.jpg?v=1634751803" alt="IMg" />
              </div> 
            </div>
       
              <h1 className='titliLevel'>DETERMINING YOUR HIKING LEVEL</h1>
              <ul className='typeLevel'>
                <li>
                <div class="card">
                    <span>Novice</span>
                    <div class="card_content">
                      <p class="card_title">Novice</p>
                      <p class="card_description">Someone who is new to hiking or has little experience with hiking. A pace for a beginning hiker would be slow or easy paced. This person may not exercise in other areas of their life. Or they may and just be new to hiking. Elevation gains and distances are minimal. Surfaces are generally flat with minimal difficult terrain.</p>
                    </div>
                  </div>
                </li>
                <li>
                <div class="card">
                    <span>Advanced Novice</span>
                    <div class="card_content">
                      <p class="card_title">Advanced Novice</p>
                      <p class="card_description">A person new to hiking but still unfamiliar with different types of terrain or elevation gains. They may have experienced hikes of a few hours with small levels of inclines of 500-1000 feet. An advanced novice hiker hikes at a generally easy pace but may have to take breaks more frequently as the distance or elevation of the hike increases.</p>
                    </div>
                  </div>
                </li>
                <li>
                <div class="card">
                    <span>Moderate</span>
                    <div class="card_content">
                      <p class="card_title">Novice</p>
                      <p class="card_description">This type of person hikes on a more regular basis. This type of person may also partake in more frequent types of exercise in other aspects of their life. Hikes can last for half a day and have elevation gains of a few thousand feet. A moderate hiker will be able to hike at a faster pace and be able to handle longer inclines without feeling exhausted. At this stage, a moderate hiker has also started venturing out into hikes with different weather conditions that require more planning.</p>
                    </div>
                  </div>
                </li>
                <li>
                <div class="card">
                    <span>Advanced Moderate</span>
                    <div class="card_content">
                      <p class="card_title">Advanced Moderate</p>
                      <p class="card_description">This person has experience with many hikes lasting at least half a day. This type of hiker is able to handle elevation gains of several thousand feet. Hiking takes place at a moderate place but the hiker also has enough experience of when to slow the pace to conserve energy. Hikes can last all day. An advanced moderate hiker also has experience hiking in different weather conditions and has a general idea of what to prepare for in colder and hot conditions.</p>
                    </div>
                  </div>
              </li>
                <li>
                  <div class="card">
                    <span>Expert</span>
                    <div class="card_content">
                      <p class="card_title">Expert</p>
                      <p class="card_description">This type of hiker has had much experience with day hikes and hiking in different weather conditions. At this point, the hiker is prepared to be out there throughout the night, has the knowledge of when to hike at a fast pace, at a slow pace to conserve energy, and when to rest. This type of hiker will be able to plan hikes of up to a few days and how to plan accordingly.</p>
                    </div>
                  </div>
                </li>
                <li>
                <div class="card">
                    <span>Expert Backpacker</span>
                    <div class="card_content">
                      <p class="card_title">Expert Backpacker</p>
                      <p class="card_description">Now, I’d imagine there are different levels of a backpacker just as there are a hiker. I can say that knowing that I’ve never been backpacking before. But, an expert backpacker is someone who has been hiking for multiple days at a time and has put together at least a week of hiking/camping time in. This type of hiker is prepared to take on the Pacific Crest Trail, John Muir Trial, or spend several days hiking through various types of wilderness.</p>
                    </div>
                  </div>
                </li>

              </ul>
          
    </div>
  )
}
