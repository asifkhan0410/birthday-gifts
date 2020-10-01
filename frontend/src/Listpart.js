import React from 'react'
import './Listpart.css'

function Listpart({imgDesc,imgURL,imgreason, imglink}) {
    return (
        <div className="listpart">
             <h2 className="listpart_description">{imgDesc}</h2>
            <div className="listpart_image">
                <img src={imgURL} alt=""/>
            </div>
            <h2 className="listpart_whyheader">why I need/want this?            </h2>
            <h4 className="listpart_whyreason">{imgreason}</h4>
            <div className="listpart_info">
                <a href={imglink}>Buy ME!</a>
            </div>
            
        </div>
    )
}

export default Listpart
