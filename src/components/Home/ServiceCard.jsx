import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // const { _id, facility, img, price, service_id, title, description } = service;
  const {  _id, facility, title, img} = service;
  return (
    <div className='my-2 md:my-4 lg:my-6'>
      <Card
        
      >
        <div>
          <img src={img} className="h-64 w-full rounded" alt="" />
       </div>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          {title}
          </h5>
      
        <div className='flex items-center justify-between'>
         <h5 className="text-xl text-green-500">Total Facility: {facility.length}</h5>
          <Link to={`/booking/${_id}`}
           
            className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            View More
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
