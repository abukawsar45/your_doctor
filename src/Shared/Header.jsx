import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";

import { FaStumbleuponCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  
  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem('doctor-access-token')
      })
    .then((error) => {
      console.log(error)
    })
  }


  console.log(user)
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <FaStumbleuponCircle className='mr-2 text-4xl text-lime-500' />
          <span className='self-center whitespace-nowrap text-xl font-sans dark:text-white'>
            Nearest DOCTOR
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt='User settings'
                img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>
                name@flowbite.com
              </span>
            </Dropdown.Header>
            
       
         
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <div className="md:flex items-center gap-6">
            <Link to='/'> <Navbar.Link>
            Home
          </Navbar.Link>
          </Link>
          <Link Link to='/about'> <Navbar.Link >About</Navbar.Link></Link>
          <Link Link to='/test'> <Navbar.Link >Medical Test</Navbar.Link></Link>
          <Link Link to='/dental'> <Navbar.Link >Dental</Navbar.Link></Link>
            <Link Link to='/medicine'> <Navbar.Link >Medincine</Navbar.Link></Link>
          {
            user ? <>
              <Link Link to='/myBooking'> <Navbar.Link >My Booking</Navbar.Link></Link>
              <Button onClick={handleLogout}>Logout</Button>
            </>
              :
              <>
              <Link Link to='/register'> <Navbar.Link >Register</Navbar.Link></Link>
              <Link Link to='/login'> <Navbar.Link >Login</Navbar.Link></Link>
              
              </>
          }
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;