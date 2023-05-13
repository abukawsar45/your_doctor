import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from './../components/Contact/Contact';
import Medicine from '../components/Medicine/Medicine';
import Test from '../components/Test/Test';
import Dental from '../components/Dental/Dental';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path: '/test',
        element: <Test/>
      },
      {
        path: '/dental',
        element: <Dental/>
      },
      {
        path: '/medicine',
        element: <Medicine/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])
export default router;