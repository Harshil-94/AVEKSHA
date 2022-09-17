import React from "react";
import HomeLayout from "../Layouts/Home.layout";
import {Route} from "react-router-dom"

const HomeHOC = ({ component: Component, ...rest }) => {
    return (
            <Route {...rest} component={(props)=>(
                <HomeLayout>
                    <Component {...props} />
                </HomeLayout>
            )} >
            </Route>
    )
}

export default HomeHOC;