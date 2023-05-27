import { Button, Card, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const { signInWithEmail } = useContext(AuthContext);
  console.log(signInWithEmail);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password })
    signInWithEmail(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        setSuccess('Registration successful')
        form.reset();
      })
      .then(error => {
        console.log(error.message)
        setSuccess('');
        setError(error.message);
    })
  }

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <img src='' alt='' />
        <h1></h1>
      </div>
      <div className='w-full md:w-1/2'>
        <div className=''>
          <Card>
            <h3 className='text-3xl text-center font-bold'>Register</h3>
            <form onSubmit={handleRegister} className='flex flex-col gap-4'>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='name' value='Your name' />
                </div>

                <TextInput
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Customer Name'
                  required={true}
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='name' value='Your email' />
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
                <div className='mb-2 block'>
                  <Label htmlFor='password1' value='Your password' />
                </div>
                <TextInput
                  id='password1'
                  name='password'
                  type='password'
                  required={true}
                />
              </div>
              <div>
                <p className='text-orange-500'>{error && error}</p>
                <p className='text-green-400'>{success && success}</p>
              </div>

              <Button type='submit'>Register</Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;