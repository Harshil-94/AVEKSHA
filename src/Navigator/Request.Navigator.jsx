import React from 'react'
import { useLocation, Link, useParams } from 'react-router-dom';

// Icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const RequestNavigator = (props) => {
    const { id } = useParams();
    return (
        <Link to={`/request/${id}/${props.route}`}>
            <div className={props.isActive ? "flex items-center gap-1 text-blue-700 font-bold " : "flex items-center gap-1"}>
                <p className={props.isActive?" text-xl border-b-2 border-blue-800 pb-1":" text-xl"}>{props.title}</p>
                {
                    props.isActive?<FaChevronUp />:<FaChevronDown />
                }
            </div>
        </Link>
    )
}

export const RequestContainer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const tabs = [
        {
            title: "Requests",
            route: "requests",
            isActive: currentPath.includes("requests")
        },
        {
            title: "Upcoming",
            route: "upcoming",
            isActive: currentPath.includes("upcoming")
        },
        {
            title: "Past",
            route: "past",
            isActive: currentPath.includes("past")
        },
        
        
    ]

    return (
        <>
            <div className="lg:container lg:mx-auto lg:px-72 lg:pt-6 px-4 md:px-8 bg-white sticky lg:top-20 md:top-16 lg:pb-4 md:pt-4 md:pb-4 top-16 py-2 mb-20 shadow-sm" style={{height:"fit-content"}}>
                <div className="flex justify-between">
                    {
                        tabs.map((tab) => (
                            <RequestNavigator {...tab} key={`3000${tab.route}`}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default RequestContainer;