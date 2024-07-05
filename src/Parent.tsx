import React, { useState } from 'react';
import Child from './Child';

const Parent: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className='parent'>
            <h1>Welcome</h1>
            <p>Count: {count}</p>
            <Child onClick={incrementCount}>Click</Child>
        </div>
    );
};

export default Parent;
