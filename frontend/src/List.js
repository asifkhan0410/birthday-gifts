import React from 'react'
import './List.css'
import Listpart from './Listpart';
import Header from './Header';
import Footer from './Footer';
import { Avatar } from '@material-ui/core';

function List({profilepic, username}) {
    return (
        <div className="list">
            <Header/>
            <div className="list_body">
            <div className="list_info">
                <Avatar square src={profilepic}/>
                <h1>@{username}</h1>
                <div className="list_infoinfo">
                    <p>Hey Buddy ! it mee your friend. i know you have been of my good buddies with whom I like to share my secrets with. You know my birthday is coming and i also know you will gift me something. Wouldn't You? </p>
                    <p>But anyways <strong>" a gift is a gift ".</strong> But what if I tell you the gift I dream of? But wait how will you know what I like? </p>
                    <p>Would you mind gifting me ?</p>
                    <p>You Said Yes ! I knew you are my true friend. <strong>YES</strong> you !! </p>
                    <p>I have a list of gift I dream of I know everything can't be gifted but with what you can surpise me is what I am waiting for !</p>
                    <p>Surprise me with your gifts! I am waiting! The list is downstairs</p>
                </div>
            </div>
            <div className="list_parts">
                <Listpart imgDesc={"Samsung 23.5 inch (59.8 cm) LED Backlit Computer Monitor"} imgURL={"https://images-na.ssl-images-amazon.com/images/I/51SX%2BIL41YL.jpg"} imgreason={"Because it will help me in my coding journey !!!"} imglink={"https://www.amazon.in/Samsung-23-5-inch-59-8-Monitor/dp/B01H6S8D7A?pf_rd_r=XZZ3AB2PV3ARWJPRJ70T&pf_rd_p=3d2ae0df-d986-4d1d-8c95-aa25d2ade606&pd_rd_r=35bb04f4-97a7-4b77-b741-398691bdcc29&pd_rd_w=NDEai&pd_rd_wg=r4jW1&ref_=pd_gw_cr_cartx"}/>
                <Listpart imgDesc={"Samsung 23.5 inch (59.8 cm) LED Backlit Computer Monitor"} imgURL={"https://images-na.ssl-images-amazon.com/images/I/51SX%2BIL41YL.jpg"} imgreason={"Because it will help me in my coding journey !!!"} imglink={"https://www.amazon.in/Samsung-23-5-inch-59-8-Monitor/dp/B01H6S8D7A?pf_rd_r=XZZ3AB2PV3ARWJPRJ70T&pf_rd_p=3d2ae0df-d986-4d1d-8c95-aa25d2ade606&pd_rd_r=35bb04f4-97a7-4b77-b741-398691bdcc29&pd_rd_w=NDEai&pd_rd_wg=r4jW1&ref_=pd_gw_cr_cartx"}/>
                <Listpart imgDesc={"Samsung 23.5 inch (59.8 cm) LED Backlit Computer Monitor"} imgURL={"https://images-na.ssl-images-amazon.com/images/I/51SX%2BIL41YL.jpg"} imgreason={"Because it will help me in my coding journey !!!"} imglink={"https://www.amazon.in/Samsung-23-5-inch-59-8-Monitor/dp/B01H6S8D7A?pf_rd_r=XZZ3AB2PV3ARWJPRJ70T&pf_rd_p=3d2ae0df-d986-4d1d-8c95-aa25d2ade606&pd_rd_r=35bb04f4-97a7-4b77-b741-398691bdcc29&pd_rd_w=NDEai&pd_rd_wg=r4jW1&ref_=pd_gw_cr_cartx"}/>
                <Listpart imgDesc={"Samsung 23.5 inch (59.8 cm) LED Backlit Computer Monitor"} imgURL={"https://images-na.ssl-images-amazon.com/images/I/51SX%2BIL41YL.jpg"} imgreason={"Because it will help me in my coding journey !!!"} imglink={"https://www.amazon.in/Samsung-23-5-inch-59-8-Monitor/dp/B01H6S8D7A?pf_rd_r=XZZ3AB2PV3ARWJPRJ70T&pf_rd_p=3d2ae0df-d986-4d1d-8c95-aa25d2ade606&pd_rd_r=35bb04f4-97a7-4b77-b741-398691bdcc29&pd_rd_w=NDEai&pd_rd_wg=r4jW1&ref_=pd_gw_cr_cartx"}/>
            </div>
            </div>  
            <Footer/>       
        </div>
    )
}

export default List
