import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Cards from "./Cards"
import data from "./data"
// console.log(data)

const cards = data.map((thing) => {
    return(
        <Cards  
        image ={thing.imageUrl}
        location={thing.location.toUpperCase()}
        mapLink="kajlkj"
        mapText="View on Google Maps"
        place={thing.title}
        dateRange={thing.startDate + thing.endDate}
        description={thing.description}
         />
        
    )
})

console.log(cards)
//    <Cards/>
export default function App(){
    return(
        <div>
        <Header/>
    {cards}
        </div>
    )
}