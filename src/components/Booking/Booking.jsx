
import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import { useLoaderData } from "react-router-dom";





const Booking = () => {
  const myData = useLoaderData();
  console.log(myData)
  const { img, price } = myData;

  const handleBookingForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const date = form.date.value;
    const contact = form.contact.value;
    const description = form.description.value;
    const booking = { name, email, age, date, contact,price, img,description };
    fetch(`http://localhost:8080/booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId>0)
        {
          alert('Booking successfully')
        }
      });
  }

  return (
    <Card>
      <div>
        <h3 className='text-3xl text-center font-bold'>Booking Form</h3>
        <form onSubmit={handleBookingForm} className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
            <div>
              <div className=''>
                <Label htmlFor='name' value='Your Name' />
              </div>

              <TextInput
                id='name'
                name='name'
                type='text'
                placeholder='amar naam'
                required={true}
              />
            </div>
            <div>
              <div className=''>
                <Label htmlFor='age' value='Age' />
              </div>

              <TextInput
                id='age'
                name='age'
                type='text'
                placeholder='1-90'
                required={true}
              />
            </div>
            <div>
              <div className=''>
                <Label htmlFor='email1' value='Email' />
              </div>

              <TextInput
                id='email1'
                name='email'
                type='email'
                placeholder='amar@email.com'
                required={true}
              />
            </div>
            <div>
              <div className=''>
                <Label htmlFor='date' value='date' />
              </div>

              <TextInput
                id='date'
                name='date'
                type='date'
                placeholder='amar@email.com'
                required={true}
              />
            </div>
            <div>
              <div className=''>
                <Label htmlFor='contact' value='Contact Number' />
              </div>
              <TextInput
                id='contact'
                name='contact'
                type='text'
                required={true}
              />
            </div>
            <div>
              <div className=''>
                <Label htmlFor='description' value='Description (Optional)' />
              </div>
              <Textarea id='' name='description' type='text'  />
            </div>
          </div>

          <Button type='submit'>ADD BOOKING LIST</Button>
        </form>
      </div>
    </Card>
  );
};

export default Booking;