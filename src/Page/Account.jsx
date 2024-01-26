import React from 'react'
import Header from '../Componets/Header'
import "../Style/Account.css"
export default function Account() {
    window.scrollTo(0, 0);
  return (
   <>

        <Header />
    <div className='account'>
        <div className='profile'>
            <img src="./img/01.png" alt="" />
            <div className='profileText'>
                <div className='name'>
                    <span style={{fontSize:'15px'}}>Your name now:</span>
                    <h1 style={{margin:'0', }}>Vitallik</h1>
                    <input className='name' type="text" />
                </div>
                <div className='about'>
                    <input className='about' type="text" />
                </div>
                
            </div>
            
        </div>
    </div> 
</>
  )
}
