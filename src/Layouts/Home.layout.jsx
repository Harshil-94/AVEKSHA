import React from "react";
import DefaultNavbar from "../Components/Navbar/Default.Navbar";
import MobileNavigator from "../Navigator/MobileNavigator";

const HomeLayout = (props) => {
    return (
        <>
            <DefaultNavbar />
            {props.children}
            <MobileNavigator />
        </>
    )
}

export default HomeLayout;