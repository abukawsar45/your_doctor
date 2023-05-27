import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className='flex flex-col md:flex-row my-2 md:my-6 space-x-6'>
      <div className='w-full md:w-1/2 relative'>
        <img
          className='w-11/12'
          src='https://img.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=sph'
          alt=''
        />
        <div>
          <img
            className='absolute top-1/2 right-1 w-1/3 border-8 rounded-lg border-lime-400 '
            src='https://img.freepik.com/free-vector/medical-treatment-tools-composition_1284-16379.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=sph'
            alt=''
          />
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <h5 className='my-2 text-xl text-emerald-400'>About Us</h5>
        <h2 className='my-2 md:mt-4 text-3xl text-purple-600 font-serif'>
          We are qualified & of experience in this field
        </h2>
        <p>
          Our vision is that we will be a global leader in the development and
          supply of Hospital Information Systems ( HIS ) and Clinic Information
          System to developing economies. Our software will improve patient
          outcomes and the working lives of hospital and clinic staff.
        </p>
        <br />
        <Link to='/aboutUsInfo'>
          <Button>Get more info</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;