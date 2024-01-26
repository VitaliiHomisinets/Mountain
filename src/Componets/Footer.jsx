import React from 'react'
import "../Style/Footer.css"
export default function Footer() {
  return (
    <div>
            <footer>
        <ul style={{marginRight: '380px'}}>
            <li style={{marginBottom: '24px'}}>MNTN</li>
            <li style={{maxWidth: '270px'}}>Get out there & discover your next slope, mountain & destination!</li>
            <li style={{marginTop: '110px', color: '#FFFFFF', opacity: '.5'}}>Copyright 2019 MNTN, Inc. Terms & Privacy</li>
        </ul>
        <ul style={{marginRight: '140px'}}>
            <li style={{marginBottom: '24px', color:' #FBD784'}}>More on The Blog</li>
            <li style={{marginBottom: '16px'}}>About MNTN</li>
            <li style={{marginBottom: '16px'}}>Contributors & Writers</li>
            <li style={{marginBottom: '16px'}}>Write For Us</li>
            <li style={{marginBottom: '16px'}}>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
        <ul>
            <li style={{marginBottom: '24px', color:' #FBD784'}}>More on MNTN</li>
            <li style={{marginBottom: '16px'}}>The Team</li>
            <li style={{marginBottom: '16px'}}>Jobs</li>
            <li >Press</li>
        </ul>
    </footer>
    </div>
  )
}
