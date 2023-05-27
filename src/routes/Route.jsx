import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from './../components/Contact/Contact';
import Medicine from '../components/Medicine/Medicine';
import Test from '../components/Test/Test';
import Dental from '../components/Dental/Dental';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import MyBooking from './../components/MyBooking/MyBooking';
import Booking from '../components/Booking/Booking';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/test',
        element: <Test />,
      },
      {
        path: '/dental',
        element: <Dental />,
      },
      {
        path: '/medicine',
        element: <Medicine />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '/booking/:id',
        element: <PrivateRoutes><Booking/> </PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:8080/data/${params.id}`),
      },
      {
        path: '/myBooking',
        element: (
          <PrivateRoutes>
            <MyBooking />
          </PrivateRoutes>
        ),
      },
      
    ],
  },
]);
export default router;