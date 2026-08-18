import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { PATHS } from "@/constants/routes";
import UnderConstruction from "@/pages/UnderConstruction/UnderConstruction";

const MainLayout = () => {
    const location = useLocation();
    const showUnderConstruction = location.pathname == PATHS.UNDER_CONSTRUCTION;
    const isUnderConstruction = true;

    return (
        <>
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