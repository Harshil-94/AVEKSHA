import React from "react";

const BgShape = () => {
    return (
        <>
            <div>
                <div className="fixed -z-10 opacity-20 md:-right-96 lg:-bottom-48 md:top-4 top-72 rotate-90 lg:w-full -right-80" style={{ width: "700px" }}>
                    <img src="https://www.norderbergs.com/storage/2020/09/background-shapes-png-1-Images-PNG-Transparent.png" className="md:w-full md:h-full w-96 h-80" />
                </div>
                <div className="fixed -z-10 opacity-20 md:-left-96 right-56 lg:-top-12 lg:bottom-64 md:bottom-12 bottom-10 -rotate-180 lg-w-full " style={{ width: "700px" }}>
                    <img src="https://www.norderbergs.com/storage/2020/09/background-shapes-png-1-Images-PNG-Transparent.png" className="md:w-full md:h-full w-96 h-80" />
                </div>
            </div>
        </>
    )
}

export default BgShape