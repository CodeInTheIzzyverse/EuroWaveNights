import { createBrowserRouter, Links } from 'react-router-dom';
import { Suspense } from 'react';
import { PATHS } from '@/constants/routes';
import MainLayout from '@/components/Layout/MainLayout';
import Contact from '@/pages/Contact/Contact';
import Home from '@/pages/Home/Home';
import LatePassenger from '@/pages/LatePassenger/LatePassenger';
import NotFound from '@/pages/NotFound/NotFound';
import UnderConstruction from '@/pages/UnderConstruction/UnderConstruction';

export const router = createBrowserRouter([{
    path: PATHS.HOME,
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
        { index: true, element: <Suspense fallback={<div>...</div>}><Home /></Suspense> },
        { path: PATHS.LATE_PASSENGER, element: <Suspense fallback={<div>...</div>}><LatePassenger /></Suspense> },
        { path: PATHS.CONTACT, element: <Suspense fallback={<div>...</div>}><Contact /></Suspense> },
        { path: PATHS.LINKS, element: <Suspense fallback={<div>...</div>}><Links /></Suspense> },
        { path: PATHS.UNDER_CONSTRUCTION, element: <Suspense fallback={<div>...</div>}><UnderConstruction /></Suspense> },
        { path: "*", element: <NotFound /> }
    ]
}])