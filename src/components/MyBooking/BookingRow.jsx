import { Button, Table } from 'flowbite-react';
import { AiFillCloseCircle } from 'react-icons/ai';


const BookingRow = ({ booking, handleRemove, handleBookingConfirm }) => {
  console.log(booking);
  const { name, _id, price, img, date, status } = booking;
  console.log(status)


  return (
    <Table.Body className='divide-y'>
      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
        <Table.Cell className=''>
          <AiFillCloseCircle
            onClick={() => handleRemove(_id)}
            className='w-6 h-6 cursor-pointer'
          />
        </Table.Cell>
        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
          <img src={img} alt='' className='w-24 h-16 rounded-lg' />
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{date}</Table.Cell>
        <Table.Cell>$: {price}</Table.Cell>
        <Table.Cell>
          {status === 'confirm' ? (
            <Button>Confirm</Button>
          ) : (
            <Button onClick={() => handleBookingConfirm(_id)}>Please Confirm</Button>
          )}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

export default BookingRow;