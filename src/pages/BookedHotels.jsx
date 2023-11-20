import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Hotelreceipts.css'
import { BASE_URL } from '../utils/config'

const BookedHotels = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/hotelbooking`);
        const { data } = response;
        setBookingData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ticket-container">
      <h1>Your Hotel Bookings</h1>
      <ul>
        {bookingData.map((booking) => (
          <li key={booking._id} className="ticket">
            <p>User: {booking.fullName}</p>
            <p>Hotel: {booking.HotelName}</p>
            <p>Guest Size: {booking.guestSize}</p>
            <p>Booking Date: {new Date(booking.bookAt).toLocaleDateString()}</p>
            <p>Phone: {booking.phone}</p>
            <p>Bill: ${booking.bill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookedHotels;
