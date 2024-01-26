import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Componets/Header';
import Footer from '../Componets/Footer';
export default function Home() {
    window.scrollTo(0, 0);
  return (
    <>
    <div className='Home'>

          <Header />

        
          <div className="mainTitle">
            <ul>
                <li style={{color: '#FBD784'}}>A Hiking guide</li>
                <li style={{maxWidth: '930px',  fontSize: '88px'}}>Be prepared for the Mountains and beyond!</li>
                <li style={{fontWeight: '500'}}>scroll down <img className="arrow" src="img/arrow.svg" alt="" /></li>
            </ul>
        </div>
            
       
    
        <div className="content">

            <div className="levelBlock" style={{marginBottom: '200px'}}>
                <div className="text_block" style={{marginRight: '115px'}}>
                    <div className='title'>
                        <span className='number'>01</span>
                        <h2>GET STARTED</h2>
                    </div>
                    <ul>
                        
                        <li><h1 style={{fontSize: '40px'}}>What level of  hiker are you?</h1> </li>
                        <li>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </li>
                        <Link style={{textDecoration: 'none'}} to="/Level"><li className='readMore' style={{color:' #FBD784'}} >Read more<img src="img/arrow2.svg" alt="" /></li></Link>
                    </ul>
                </div>
                
                <div className='levelBlockImg'>
                    <img className="img_block" src="img/01.png" alt="" />
                </div> 
            </div>

            <div className="equipmentBlock" style={{marginBottom: '200px'}}>
                <div className='equipmentBlockImg'>
                    <img className="img_block" src="img/02.png" alt="" />
                </div>  
                
                <div className="text_block" style={{marginLeft: '115px'}}>
                <div className='title'>
                        <span className='number'>02</span>
                        <h2>Hiking Essentials</h2>
                    </div>
                <div>
                
                </div>
                    <ul>
                        
                        <li><h1 style={{fontSize: '40px'}}>Picking the right Hiking Gear!</h1> </li>
                        <li>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                                    Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</li>
                        <Link style={{textDecoration: 'none'}} to="/Equipment"><li className='readMore' style={{color:' #FBD784'}} >Read more<img src="img/arrow2.svg" alt="" /></li></Link>
                    </ul>
                </div>
            </div>

            <div className="mapBlock">
                <div className="text_block" style={{marginRight: '115px'}}>
                    <div className='title'>
                        <span className='number'>03</span>
                        <h2>Where you go is the key</h2>
                    </div>
                    <ul>
                       
                        <li><h1 style={{fontSize: '40px'}}>Understand Your Map & Timing</h1> </li>
                        <li>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</li>
                        <Link style={{textDecoration: 'none'}} to="/Map"><li className='readMore' style={{color:' #FBD784'}} >Read more<img src="img/arrow2.svg" alt="" /></li></Link>
                    </ul>
                </div>
                <div className='mapBlockiImg'>
                    <img className="img_block" src="img/01.png" alt="" />
                </div> 
            </div>
        </div>   

        <Footer />

    
    </div>
    </>

  )
}
