import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Header.css"
export default function Header() {
  return (
    <div className='fon'>
    
        <header>
          <nav>
              <h1><Link to="/" className="nav_list_item" style={{fontSize:'50px'}}>MNTN</Link></h1>
              <ul className="nav_list">
                  <li><Link to="/Equipment" className="nav_list_item">Equipment</Link></li>
                  <li><a className="nav_list_item" href="#">About us</a></li>
                  <li><a className="nav_list_item" href="#">Blog</a></li>
              </ul>
             <Link to="/Account" className="nav_list_item" >
             <div className="account">
                  <img src="img/cart.svg" alt="" />
                  <span>Account</span>
                  
              </div>
             </Link> 
          </nav>
          </header>
       
    </div>
  )
}
