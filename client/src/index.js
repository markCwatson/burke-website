import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Root from './routes/Root';
import ServicesPage, { loader as servicesLoader } from './routes/ServicesPage';
import ErrorPage from './routes/Error';
import ProjectsPage, { loader as projectsLoader } from './routes/ProjectsPage';

const theme = createTheme({
  palette: {
    primary: {
      light: '#bddcf2',
      main: '#3573b6',
      dark: '#224684',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f5f5f5',
      main: '#eeeeee',
      dark: '#9e9e9e',
      contrastText: '#000',
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'services/:id',
    element: <ServicesPage />,
    loader: servicesLoader,
  },
  {
    path: 'projects',
    element: <ProjectsPage />,
    loader: projectsLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
