import React from 'react';

interface Props{
    children: React.ReactNode;
    onClick?: () => void; 
};

const Child:React.FC<Props> =(props) =>{
    
    return(
        <button className='button' onClick={props.onClick}>{props.children}</button>
    );
}

export default Child;