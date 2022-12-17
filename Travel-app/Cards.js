import React from "react"

export default function Cards(props){
    return(
  
        <div className = "cards" > 
        
        <div>
   
        <img className="image" src={props.image}/>
        </div>
        
        <div className="details">
        
            <div className="location-map">
                 <i class="fa-solid fa-location-dot"></i>
                  <h3 className="location" > {props.location} </h3>
                  <a className="map-link" href={props.mapLink}> {props.mapText}</a>  </div>
        
        <h1 className="place">{props.place}</h1>
        
        <p className="date-range">{props.dateRange}</p>
        
        <p className="description">{props.description}</p>
        </div>
        </div>

    )
}