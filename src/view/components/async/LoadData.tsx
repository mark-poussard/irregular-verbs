import React, { useState } from 'react';
import Loader from './Loader';

interface ILoadComponentProps<T>{
    promise : Promise<T>;
    children : (value : T) => React.ReactNode;
}

const LoadData = <T extends unknown> (props : ILoadComponentProps<T>) => {
    const [promiseValue, setPromiseValue] = useState<T | null>(null);
    props.promise.then(value => {
        setPromiseValue(value);
    });
    if(promiseValue == null){
        return <Loader />
    }
    return (
        <>
            {props.children(promiseValue)}
        </>
    );
}
export default LoadData;