import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  Layout,
  Dashboard,
  Administrators,
  Buildings,
  Supervisors,
  Contacts,
  Tenants,
  Directory,
  ServiceCategory,
  Reports,
} from './pages';
import { useAppContext } from './context/context';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'administrators',
        element: <Administrators />,
      },
      {
        path: 'buildings',
        element: <Buildings />,
      },
      {
        path: 'supervisors',
        element: <Supervisors />,
      },
      {
        path: 'contact',
        element: <Contacts />,
      },
      {
        path: 'tenants',
        element: <Tenants />,
      },
      {
        path: 'directory',
        element: <Directory />,
      },
      {
        path: 'service-category',
        element: <ServiceCategory />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
    ],
  },
]);

const App = () => {
  // const { isToggle } = useAppContext();
  // console.log(isToggle);
  return <RouterProvider router={router} />;
};

export default App;
