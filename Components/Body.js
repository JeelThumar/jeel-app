"use client"
import React from 'react'
import CountUp from 'react-countup';


const Body = () => {
  return (
    <>
    <div class="body">

        <div id="text">
            <div class="maintext">
                <h1>Let's  Take your</h1>
                <div class='bus'><h1 class='bus1'>Business </h1><h1> to the Next</h1></div>
                <div id='fLillu'>
                    <div><h1>Level </h1></div>
                    <div><img class='imgd' src="./images/de-1.png" alt='illu'/></div>
                </div>
            </div>
            <div>
                <h5 class="secondtext">Gorem ipsumsem  ipsfd sit a ipsumeltor sit ait amet, <br/>cons sit ame tectetur adipiscing elit.....</h5> 
            </div>
            <div id='btn'>
                <button  class='btn2'>Get Start </button>
                <button class='btn3'>Learn More</button>
            </div>
        </div>  

        <div id='img'>
          <img class='imgr' src="./images/rocket.png" alt='rocketimg'/>
        </div>  
    </div>

    
    <footer class='last'>
                <div class="number">
                    <div class="num"><CountUp start={0} end={5489}></CountUp>+</div>
                    <div class="num"><CountUp start={0} end={2437}></CountUp>+</div>
                    <div class="num"><CountUp start={0} end={4673}></CountUp>+</div>
                    <div class="num"><CountUp start={0} end={1437}></CountUp>+</div>
                </div>
                <div class="info">
                    <p>Links Optimized</p>
                    <p>Happy Customers</p>
                    <p>Websites Improved</p>
                    <p>Active Accounts</p>
                </div>
    </footer>
    </>
  )
}

export default Body