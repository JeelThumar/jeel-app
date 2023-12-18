"use client"
import React from 'react'


const Header = () => {
  return (
    <>
        <div class='hed'>
            <div class="main">
                <div>
                    <h2 class='logo'>MARCHY</h2>
                </div>
                <div class='menubar'>
                    <h4 class="hnev">Home</h4>
                    <h4 class="nev">Pages</h4>
                    <h4 class="nev">Services</h4>
                    <h4 class="nev">About us</h4>
                    <h4 class="nev">Blog</h4>
                </div>
                <div>
                    <button id='hedbtn' class='btn'>Contact Us</button>
                </div>
            </div>   
        </div>
            <hr/>
    </>
  )
}

export default Header