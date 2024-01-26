import React from 'react'
import '../Style/Equipment.css';
import Header from '../Componets/Header';
import "../Style/Equipment.css"
import Footer from '../Componets/Footer';
export default function Equipment () {
    window.scrollTo(0, 0);
  return (
    <div className='Equipment'>
     <Header />
     <div className="mainTitle">
            <ul>
                <li style={{color: '#FBD784'}}>Hiking Essentials</li>
                <li style={{  fontSize: '88px', margin: '30px 0px'}}>Picking the right Hiking Gear!</li>
                <li style={{fontWeight: '500'}}>scroll down <img className="arrow" src="img/arrow.svg" alt="" /></li>
            </ul>
        </div>
        <div className='contentGear'>
            
            <div className='cardBlock'>
                <img className='cardImg' src="https://i.pinimg.com/564x/4a/cf/3f/4acf3f7a659cc89e0575faca336bc771.jpg" alt="" />
                <div className='cardText'>
                    <h1>Backpack</h1>
                    <p>Investing in a high-quality backpack is important if you are traversing rugged terrain. You also need to pick one that can withstand any climate and provide ample protection and space for everything else. One thing’s for sure, you may need to purchase a backpack made from waterproof material such as nylon or polyester. It should also feature EVA foam. This durable padding offers optimal shock absorption and resistance to moisture and chemical damage. You may have to pay above average for a backpack that’s durable, easy to use, and long-lasting, but it’s still a worthy investment if you are planning more hikes.</p>
                </div>
            </div>

            <div className='cardBlock'>
                <div className='cardText'>
                    <h1>Water Container</h1>
                    <p>Investing in a high-quality backpack is important if you are traversing rugged terrain. You also need to pick one that can withstand any climate and provide ample protection and space for everything else. One thing’s for sure, you may need to purchase a backpack made from waterproof material such as nylon or polyester. It should also feature EVA foam. This durable padding offers optimal shock absorption and resistance to moisture and chemical damage. You may have to pay above average for a backpack that’s durable, easy to use, and long-lasting, but it’s still a worthy investment if you are planning more hikes.</p>
                </div>
                <img className='cardImg' src="https://i.pinimg.com/564x/e3/e4/03/e3e403bb600030802dc694fb043bc8b7.jpg" alt="" />
            </div>

            <div className='cardBlock'>
                <img className='cardImg' src="https://i.pinimg.com/564x/0a/0e/54/0a0e54306f807c35bbbf211022246ebb.jpg" alt="" />
                <div className='cardText'>
                    <h1>Survival Tools</h1>
                    <p>Having the right tools can help you get out of a dangerous situation, so make sure your hiking kit has them. These items may include waterproof matches, a Swiss army knife, a compass, ropes, and trekking poles in case you are climbing steep trails. You also need to throw in an emergency kit that includes gauzes, bandages, a bottle of antibiotic solution, and medication for allergies, accidental poisoning, nausea, and other conditions. If you are going to camp out overnight, be sure to bring flashlights, cooking utensils, and extra food.</p>
                </div>
             </div>    

            <div className='cardBlock'>
                <div className='cardText'>
                    <h1>Footwear</h1>
                    <p>Much like picking the right clothes to wear, you should also pick shoes or boots based on the season. In addition to that, you need to take the difficulty of the trail into account. During dry weather, it would be better to wear durable sandals with soles that provide maximum grip on slippery surfaces. You may want to wear socks if you don’t want to expose your feet to the elements. On the other hand, optimum insulation is crucial if you are planning a hike during the winter, so look for hiking boots that provide extra comfort, mobility, and protection against frostbite. Pair these with insulated socks made from a balanced mix of synthetic material and natural wool or cotton.</p>
                </div>
                <img className='cardImg' src="https://i.pinimg.com/564x/ad/04/9a/ad049a8648651997040f454426bd03d9.jpg" alt="" />
            </div>

            <div className='cardBlock'>
                <img className='cardImg' src="https://i.pinimg.com/564x/81/54/55/815455fd9b552bf3c69ed2bd825cde0c.jpg" alt="" />
                <div className='cardText'>
                    <h1>Camping Tent</h1>
                    <p>If the hike takes overnight to complete, you need to shop around for a camping kit that’s easy to carry and set up. You have options for ultra-lightweight tents made from durable waterproof material. Interior capacity is also an important factor to consider. If you are hiking alone, you can choose a single-person tent or, in case you want more space for extra comfort, a two-person tent. Whichever the case, you shouldn’t settle for budget camping kits that may not provide ample protection from heat, cold, insects, and other hazards. If you can, invest in a tent that does more than providing you with a cozy place to sleep in. Your safety will depend on the quality you pay for.</p>
                </div>
             </div> 
           
        </div>
        <Footer />
    </div>
  )
}
