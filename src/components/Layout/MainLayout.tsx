import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { PATHS } from "@/constants/routes";
import UnderConstruction from "@/pages/UnderConstruction/UnderConstruction";
import { useEffect } from "react";

const MainLayout = () => {
    const location = useLocation();
    const showUnderConstruction = location.pathname == PATHS.UNDER_CONSTRUCTION;
    const isUnderConstruction = false;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <div className="crt-overlay" aria-hidden="true" />
            {
                !isUnderConstruction
                    ?
                    (
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
                    )
                    :
                    <UnderConstruction />

            }
            <Analytics />
        </>
    );
}

export default MainLayout;