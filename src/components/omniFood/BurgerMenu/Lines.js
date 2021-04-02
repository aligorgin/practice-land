import React, {useState, useEffect} from "react";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";

const Lines = (props) => {
    console.log(props.for)

    const [click, setClick] = useState(false);

    useEffect(() => {
        window.addEventListener(('scroll'), () => {
            setClick(false)
        });

        return () => {
            window.removeEventListener('scroll', () => {
                setClick(false)
            })
        }
    }, [])

    return (
        <div>
            <SideDrawer click={click}/>
            <Backdrop click={click}/>
            <div
                className={`absolute top-${props.for === 'sticky' ? 6 : 12} right-${props.for === 'sticky' ? 9 : 10} z-50 lg:hidden `}>
                <div className={`relative w-10 h-8 border-0 bg-transparent outline-none cursor-pointer`}
                     onClick={() => {
                         setClick(!click)
                     }}>
                <span
                    className={`${click ? 'translate-x-2 rotate-45' : ''} absolute h-1 rounded-full bg-orange transition duration-700 transform w-5 top-0 left-0 origin-top-left`}/>
                    <span
                        className={`${click ? '- translate-y-1/2 -rotate-45' : ''} absolute h-1 rounded-full bg-orange transition duration-700 transform top-1/2 left-0 w-10 -translate-y-1/2`}/>
                    <span
                        className={`${click ? '-translate-x-2 rotate-45' : ''} absolute h-1 rounded-full bg-orange transition duration-700 transform w-5 bottom-0 right-0 origin-bottom-right`}/>
                </div>
            </div>
        </div>


    )
}

export default Lines;