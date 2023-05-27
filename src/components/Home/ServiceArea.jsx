import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ServiceArea = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/data')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div>
      <div className='text-center'>
        <h5 className='text-red-600 text-xl'>Service</h5>
        <h2 className='my-2 pt-1 text-3xl'>Our Service Area</h2>
        <p className='w-full md:w-1/3 mx-auto'>
          <span>
            We will be recognised as a force for good. We will improve
            operational efficiency and cost effectiveness so financial
            investment in hospitals is encouraged.
          </span>
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6'>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceArea;
