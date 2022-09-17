import React from 'react'
import {Route} from "react-router-dom"
import HomeLayout from '../Layouts/Home.layout';

const SearchingHOC = ({component:Component, ...rest}) => {
  return (
    <Route {...rest} component={(props)=>(
        <HomeLayout>
            <Component {...props}/>
        </HomeLayout>
    )}>    
    </Route>
  )
}

export default SearchingHOC;