import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <Header/>
            <div className="home_body">
                <div className="home_bodyinfo">
                    <h1>Ever thought what would you gift your best friend on his birthday ?</h1>
                    <p>Yes! We at GYF helping you to gift your best friend what he/she/it desires. Will you take a leap and bombard your friend with delivery calls? If yes then Sign UP and surprise your friend !!!</p>
                    <button type="submit">GIFT YOUR FRIEND NOW ! <strong>SIGN UP</strong></button>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/tiktok-clone-c100c.appspot.com/o/undraw_deliveries_131a.svg?alt=media&token=75f1ffbb-bf37-4ba1-a27e-6cdd2533fde5" alt=""/>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Home
