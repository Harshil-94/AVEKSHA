import React from "react";
import { Route } from "react-router-dom";
import RequestLayout from "../Layouts/Request.Layout";

const RequestHOC = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            <RequestLayout>
                <Component {...props} />
            </RequestLayout>
        )}>
        </Route>
    )
}

export default RequestHOC;