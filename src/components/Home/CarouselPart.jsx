import {Carousel} from "flowbite-react";

const imgCollection = [
  {
    src: 'https://img.freepik.com/premium-photo/long-hospital-corridor_117023-1761.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=ais',
  },
  {
    src: 'https://img.freepik.com/free-vector/surgery-room-with-operating-table-with-illustration_1262-16619.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=ais',
  },
  {
    src: 'https://img.freepik.com/premium-vector/hospital-room-interior-intensive-therapy-patient-ward-banner-with-copy-space_48369-11899.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=ais',
  },
  {
    src: 'https://img.freepik.com/premium-photo/interior-hospital-consulting-room-with-medical-eye-test-chart-wheelchair-service-office-ophthalmologic-clinic-visual-examination-equipment-devices-treatment-vision_35148-258.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=ais',
  },
  {
    src: 'https://img.freepik.com/premium-vector/intensive-therapy-room-with-bed-window-medical-equipment_313242-210.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=ais',
  },
  {
    src: 'https://img.freepik.com/premium-photo/interior-reanimation-room-modern-clinic_179755-5284.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=ais',
  },
  {
    src: 'https://img.freepik.com/premium-vector/hospital-hallway-room-illustration_178025-9.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=ais',
  },
  {
    src: 'https://img.freepik.com/premium-vector/counter-patients-use-service-hospital_353206-557.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=ais',
  },
  {
    src: 'https://img.freepik.com/premium-vector/empty-doctors-office-room-with-furniture_43633-7040.jpg?size=626&ext=jpg&ga=GA1.2.1626292175.1681061547&semt=ais',
  },
];


const CarouselPart = () => {
  return (
    <div>
      <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
        <Carousel>
          {imgCollection.map((img, index) => (
            <div
              key={index}
              className='flex relative h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'
            >
              <img src={img.src} alt='' className='w-full' />
              <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                <div className='text-center md:text-left  md:mx-5 w-full md:w-1/3 '>
                  <h3 className='text-4xl font-bold my-4 mx-auto text-white'>
                    Most Popular Hospiter
                  </h3>
                  <p className='text-green-400 text-2xl mt-2 md:mt-4'>
                    Your first choice in this HOSPITAL
                  </p>
                  <p className='text-sky-500'>
                    <span>
                      Because we are patients support 24hours/7days.
                      <br />
                      You can book an online doctor appointment at Apollo
                      Hospitals. Click the button below to submit the doctor
                      appointment form.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        {/* // <Carousel>
        gradient(90deg, # 0%,  100%)
          // <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
          //   Slide 1
          // </div>
          linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0) 100%)
          </Carousel> */}
      </div>
    </div>
  );
};

export default CarouselPart;