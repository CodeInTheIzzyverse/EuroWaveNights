import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { PATHS } from "@/constants/routes";
import UnderConstruction from "@/pages/UnderConstruction/UnderConstruction";

const MainLayout = () => {
    const location = useLocation();
    const showUnderConstruction = location.pathname == PATHS.UNDER_CONSTRUCTION;

    return (
        <>
            {
                showUnderConstruction
                    ?
                    (
                        <UnderConstruction />
                    )
                    :
                    (
                        <>
                            <Header />
                            <Outlet />
                            <Footer />
                        </>
                    )
            }
            <Analytics />
        </>
    );
}

export default MainLayout;