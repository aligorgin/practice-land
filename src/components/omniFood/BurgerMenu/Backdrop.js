import React from "react";

const Backdrop = ({click}) => {

        // todo :
        // add click true when user click to backdrop fir closing menu

    console.log(click)
    return (
        <div
            className={`${click ? 'fixed lg:hidden' : 'hidden'} w-full h-full bg-black opacity-20 z-30 top-0 left-0`}
        />
    )
}

export default Backdrop;