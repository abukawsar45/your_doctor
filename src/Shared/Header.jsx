import { Avatar, Dropdown, Navbar } from "flowbite-react";

import { FaStumbleuponCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {
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
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to='/'> <Navbar.Link>
            Home
          </Navbar.Link>
          </Link>
          <Link Link to='/about'> <Navbar.Link >About</Navbar.Link></Link>
          <Link Link to='/test'> <Navbar.Link >Medical Test</Navbar.Link></Link>
          <Link Link to='/dental'> <Navbar.Link >Dental</Navbar.Link></Link>
            <Link Link to='/medicine'> <Navbar.Link >Medincine</Navbar.Link></Link>
          <Link Link to='/contact'> <Navbar.Link >Contact</Navbar.Link></Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;