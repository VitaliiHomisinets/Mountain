import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/Dropdown.css"
import { Accordion } from 'react-bootstrap';
export default function Dropdown() {
  return (
    <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Keep Concentrating</Accordion.Header>
      <Accordion.Body>
        Often it is when you are tired at the end of the day or when you think you know the rest of the journey and stick your map in your pocket.  Suddenly, you’ve headed along the wrong path or are descending the wrong side of the mountain.  It could be that an error leads you onto dangerous ground or simply leads to a time consuming backtrack.  Either way it won’t make the ideal end to your day.  Staying focussed at all times is key.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Orientate The Map</Accordion.Header>
      <Accordion.Body>
        The top of the map points to north but you aren’t always heading north.  The trick then, is to keep your map orientated to the ground by turning it in your hands.  This ensures that, when you look at the map and then look up to the ground ahead, what you see matches.  If you can’t see the ground due to poor visibility or darkness then you can orientate your map using your compass.  Just line the north arrow (the floaty one rather than the one marked on the housing) of your compass with the top of the map and you’ll be    
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Learn How To Estimate Distance Travelled</Accordion.Header>
      <Accordion.Body>
        Timing or pacing are key navigational methods for estimating distance travelled.  They both have situations where one would be preferable over the other and so both should be in your nav toolbox.  It isn’t also the case that you need to be pacing or timing all through your journey.  It is a tool you pull out when it is appropriate.       
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>Contours Rule</Accordion.Header>
      <Accordion.Body>
        A key principle of our navigation courses is to focus learners on contour interpretation. This is one of the most important navigation top tips we can share.  We know that navigators who can visualise the map as a 3D picture will find their way with more accuracy and confidence.  That’s because contours show so much.  Of course they show the ups and downs, but also the steepness and they give clues about the nature of the terrain.  They show where the gullies lie and where ridges soar.  They are the key to effective navigation.      
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
      <Accordion.Header>Understand Map Scales</Accordion.Header>
      <Accordion.Body>
        If you can measure the distance travelled on the ground, you also need to be able to measure distance on a map.  This skill is easy enough if you understand map scales.  Having said that, there are lots of other reasons why understanding scales is key to good navigation.  Basically, learn about scales!        
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5">
      <Accordion.Header>Trust Your Compass</Accordion.Header>
      <Accordion.Body>
        If you can make the calculations reliably and your compass is working correctly, then you should trust your compass.  When I say working correctly, be aware that compasses can occasionally become depolarised (sometimes called reverse polarity).  This is caused by subjecting the compass to a strong magnetic field.  They can also be temporarily affected by the magnetic nature of  electronics like mobile phones.  Similarly, magnetic rock types like Gabbro on Skye will cause problems.  If none of these factors is causing an issue though, trust it.      
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="6">
      <Accordion.Header>Learn To Relocate</Accordion.Header>
      <Accordion.Body>
        There’s that saying that navigators never become lost.  Just misplaced!  I’m happy to own up that I’ve been lost more than a few times, but luckily developing some relocation skills should get you back on track.  The first key tip is to try and not panic.  You are somewhere and so it’s just a case of narrowing it down.  Once you are composed, try to think through the last part of your journey.  When was the last point you definitely knew where you were?  What have you done since? Did you make an error with a bearing or miss a path junction?  Orientate your map if it isn’t already.  Have a really good look around you to get a clear picture of the terrain and features.  Then study the map to see if you can match what you are seeing on the ground.  If none of that works, start to make an onward plan.  Is there a linear feature like a road or fence line (although sometimes fences can be unreliable features) you can aim towards.  Where will you end up if you deliberately travel, for example, due south? Maybe this will get you to a feature you can use to get you back on track.   
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  
  )
}
