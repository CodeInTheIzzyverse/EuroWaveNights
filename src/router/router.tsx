import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { PATHS } from '@/constants/routes';
import MainLayout from '@/components/Layout/MainLayout';
import Contact from '@/pages/Contact/Contact';
import Home from '@/pages/Home/Home';
import LatePassenger from '@/pages/LatePassenger/LatePassenger';
import NotFound from '@/pages/NotFound/NotFound';
import UnderConstruction from '@/pages/UnderConstruction/UnderConstruction';
import Links from '@/pages/Links/Links';
import LinearLoader from '@/components/UI/LinearLoader/LinearLoader';

export const router = createBrowserRouter([{
    path: PATHS.HOME,
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
        {
            index: true, element: (
                <Suspense fallback={<LinearLoader title="TUNING MAIN FREQUENCY" subtitle="SYNCHRONIZING HOME STREAM" />}>
                    <Home />
                </Suspense>
            )
        },
        {
            path: PATHS.LATE_PASSENGER, element: (
                <Suspense fallback={<LinearLoader title="DECRYPTING PRODUCER ARCHIVE" subtitle="RETRIEVING LATEPASSENGER DISCOGRAPHY" />}><LatePassenger /></Suspense>
            )
        },
        {
            path: PATHS.CONTACT, element: (
                <Suspense fallback={<LinearLoader title="CONNECTING CONTACT TERMINAL" subtitle="INITIALIZING DISPATCH PROTOCOLS" />}><Contact /></Suspense>
            )
        },
        {
            path: PATHS.LINKS, element: (
                <Suspense fallback={<LinearLoader title="SCANNING FREQUENCIES" subtitle="RETRIEVING BROADCAST CHANNELS" />}><Links /></Suspense>
            )
        },
        {
            path: PATHS.UNDER_CONSTRUCTION, element: (
                <Suspense fallback={<LinearLoader title="CALIBRATING OSCILLATORS" subtitle="CONFIGURING SUB-STATION" />}><UnderConstruction /></Suspense>
            )
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
}])