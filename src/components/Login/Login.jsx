import { Button, Card, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLink from "../../Shared/SocialLink";


const Login = () => {
    const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  console.log(login)

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password })
    // navigate(from ,{replace: true})
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        const validUser = {
          email: loggedUser.email,
        };
        fetch('http://localhost:8080/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(validUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            // warning: LocalStorage is not best policy
            localStorage.setItem('doctor-access-token', data.token)
          });
        console.log({validUser})
        setError('');
        setSuccess('Login successful');
        form.reset();

      })
      .catch((error) => {
        console.log(error.message);
        setSuccess('');
        setError(error.message);
      });
  }

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <img
          src='https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?size=626&ext=jpg&ga=GA1.1.1626292175.1681061547&semt=sph'
          alt=''
        />
        <h1></h1>
      </div>
      <div className='w-full md:w-1/2'>
        <div className=''>
          <Card>
            <h3 className='text-3xl text-center font-bold'>Login</h3>
            <form onSubmit={handleLogin} className='flex flex-col gap-4'>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='email1' value='Your email' />
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

              <Button type='submit'>Login</Button>
            </form>
            <div>
              <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
              <p className="text-center">or</p>
            <SocialLink/>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;