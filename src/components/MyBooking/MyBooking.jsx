import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
import { Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";


const MyBooking = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user)
  const [bookings, setBookings] = useState([])
  console.log(bookings)

  const handleBookingConfirm = (_id) => {
      console.log(_id)
      fetch(`http://localhost:8080/booking/${_id} `, {
        method: 'PATCH',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({status: 'confirm'}),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0)
          {
            // update state
            const remaining = bookings.filter(booking => booking._id !== _id);
            const updated = bookings.find(booking => booking._id === _id);
            updated.status = 'confirm';
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
            alert('Updated Booking successfully');
          }
        });
    };

  const handleRemove = (id) => {
     const proceed = confirm('Are you sure you want to remove')
    if (proceed)
    {
       fetch(`http://localhost:8080/booking/${id}`, {
         method: 'DELETE',
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           console.log(id);
           const remaining = bookings.filter((book) => book._id !== id);
           setBookings(remaining);
           if (data.deletedCount > 0)
           {
             alert('remove this data successfully');
           }
         });
   }
    };
    
  // const url = 'http://localhost:8080/booking?email=kawsar1146236@gmail.com';
  const url = `http://localhost:8080/booking?email=${user.email}`;
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('doctor-access-token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (!data.error)
        {
          setBookings(data);
        }
        else
        {
          navigate('/')
        }
      });
  },[url])
  return (
    <div>
      <h1>My Booking.</h1>
      <div>
        {bookings.length > 0 ? (
          <>
            <Table hoverable={true}>
              <Table.Head>
                <Table.HeadCell className='!p-4'>Status</Table.HeadCell>
                <Table.HeadCell>Service</Table.HeadCell>
                <Table.HeadCell>name</Table.HeadCell>
                <Table.HeadCell>contact</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>
                  <span className='sr-only'>Edit</span>
                </Table.HeadCell>
              </Table.Head>
              {bookings.map((booking) => (
                <BookingRow
                  key={booking._id}
                  handleRemove={handleRemove}
                  booking={booking}
                  handleBookingConfirm={handleBookingConfirm}
                />
              ))}
            </Table>
          </>
        ) : (
          <h2 className='text-3xl text-center'>No Data Found</h2>
        )}
      </div>
    </div>
  );
};

export default MyBooking;