import React, {useState, useRef, useEffect} from 'react';

const CantClickMe = () => {
    const button = useRef(null);
    const [left, setLeft] = useState(`50%`);
    const [top, setTop] = useState('50%');
    const [width,setWidth]=useState(window.innerWidth);

    useEffect(() => {
        if (width>1024){
            setLeft(`${window.innerWidth / 2 - button.current.clientWidth / 2}px`);
            setTop(`${window.innerHeight / 2 - button.current.clientHeight / 2}px`);
        }
        window.addEventListener('resize',moveButton);

        return()=>{
            window.removeEventListener('resize',moveButton);
        }
    }, []);

    const moveButton = () => {
        setWidth(window.innerWidth)
        if (width>1024){
            setLeft(`${Math.floor(Math.random() * (window.innerWidth - button.current.clientWidth))}px`);
            setTop(`${Math.floor(Math.random() * (window.innerHeight - button.current.clientHeight))}px`);
        }
    }

    const padding = 20;

    const handleOnMouseMove = (e) => {
        const rect = button.current.getBoundingClientRect();
        if (e.clientX >=rect.x -padding
            && e.clientX <=rect.right +padding
            && e.clientY >=rect.y -padding
            && e.clientY <= rect.bottom +padding){
            moveButton();
        }
    }

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        width >1024 ?
        <button
            ref={button}
            tabIndex='-1'
            style={{top: top, left: left, fontSize: '3vmin'}}
            className='fixed text-red-500 border-2 border-red-600 transition-all duration-700 ease-out '
            onClick={handleClick}
            onMouseMove={handleOnMouseMove}
        >
            CLICK ME & and get 100M$
        </button> : <div> </div>
    )
}

export default CantClickMe;