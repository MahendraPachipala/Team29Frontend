import React from 'react'
import { Link } from 'react-router-dom'

const FlightCard = ({ flight }) => {

   const {_id,departure,destination, weekday, price, airline, duration } = flight

   return (
  <>
    <div key={flight.id} className="flight-item">
                  <div>
                    <p>
                      {departure} 🛫 to {destination} 📍
                    </p>
                  </div>
                  <div>
                    <p>Weekday: {weekday} 📅</p>
                  </div>
                  <div>
                    <p>Airline: {airline} ✈️</p>
                  </div>
                  <div>
                    <p>Duration: {duration} 🕛</p>
                  </div>
                  <div>
                  <Link to={`/flights/${_id}`}>
                     <button className=' booking__btn'>Book Now</button>
                  </Link>
                  </div>
                </div>
  </>
      
   )
}

export default FlightCard