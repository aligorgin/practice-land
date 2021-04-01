import React,{useState,useEffect} from "react";

const Lines = () => {

    const [click,setClick]=useState(false);

    const styleTop =()=>{
        if (click){
            return 'translate-x-2 rotate-45';
        }else {
            return ''
        }
    }

    const styleMiddle =()=>{
        if (click){
            return '-translate-y-1/2 -rotate-45';
        }else {
            return '';
        }
    }

    const styleButton =()=>{
        if (click){
            return '-translate-x-2 rotate-45';
        }else {
            return '';
        }
    }

    console.log(click);
    return (
        <div className='fixed z-50 inline-block'>
            <div className='relative w-10 h-8 border-0 bg-transparent outline-none cursor-pointer' onClick={()=>{setClick(!click)}}>
                <span className={`${styleTop()} absolute h-1 rounded-full bg-orange transition duration-700 transform w-5 top-0 left-0 origin-top-left`}/>
                <span className={`${styleMiddle()} absolute h-1 rounded-full bg-orange transition duration-700 transform top-1/2 left-0 w-10 -translate-y-1/2`}/>
                <span className={`${styleButton()} absolute h-1 rounded-full bg-orange transition duration-700 transform w-5 bottom-0 right-0 origin-bottom-right`}/>
            </div >
        </div>

    )
}

export default Lines;