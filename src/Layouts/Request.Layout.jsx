import React from "react";
import DefaultNavbar from "../Components/Navbar/Default.Navbar";
import MobileNavigator from "../Navigator/MobileNavigator";
import RequestContainer from "../Navigator/Request.Navigator";


const RequestLayout = (props) => {
    return (
        <>
            <DefaultNavbar />
            <RequestContainer />
            {props.children}
            <MobileNavigator />
        </>
    )
}

export default RequestLayout;