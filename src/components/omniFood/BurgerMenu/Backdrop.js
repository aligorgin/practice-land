import React, {useState} from "react";

const Backdrop = ({click, handleClick}) => {

    // gtr : connecting child to parent with props

    const [clickedBackdrop, setClickedBackdrop] = useState(click);

    const onclick = () => {
        setClickedBackdrop(false);
        handleClick(clickedBackdrop);
    }

    return (
        <div
            onClick={onclick}
            className={`${click ? 'fixed lg:hidden' : 'hidden'} w-full h-full bg-black opacity-20 z-30 top-0 left-0`}
        />
    )
}

export default Backdrop;