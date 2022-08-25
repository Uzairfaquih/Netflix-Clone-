import React from "react";
import "./index.css"

function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
            <a href={props.link} target="_blank" rel="noopener noreferrer"><img src={props.imgsrc}
                 alt="ABC" className="card_img" /></a>
                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                <h4 className="card_title">{props.sname}</h4>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>Watch Now</button>
                </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;