import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './components/globals/Error';
import { LandingPage } from './components/landingPage/LandingPage';
import { Programs } from './components/programPage/Programs';
import { Trainers } from './components/trainersPage/Trainers';
import { PricingPage } from './components/pricingPage/PricingPage';
import { AboutUs } from './components/aboutPage/AboutUs';
import { ContactPage } from './components/contactPage/ContactPage';
import { JoinNow } from './components/joinPage/JoinNow';
import { Program } from './components/programPage/Program';


// Define router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/programs',
        element: <Programs />
      },
      {
        path: '/programs/:programId',
        element: <Program />
      },
      {
        path: '/trainers',
        element: <Trainers />
      },
      {
        path: '/pricing',
        element: <PricingPage />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/join',
        element: <JoinNow />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
