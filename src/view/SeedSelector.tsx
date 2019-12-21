import React, { useState } from 'react';

interface ISeedSelectorProps{
    onSelect : (seed : number) => void;
}

const SeedSelector : React.FunctionComponent<ISeedSelectorProps> = props => {
    const [seedValue, setSeedValue] = useState("");
    const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const seed = parseInt(event.target.value);
        if(!isNaN(seed)){
            setSeedValue(seed.toString());
        }
    }
    const onClick = () => {
        const seed = parseInt(seedValue);
        if(!isNaN(seed)){
            props.onSelect(seed);
        }
    }
    return (
        <div>
            <input onChange={onChange} value={seedValue}/>
            <button onClick={onClick}>Select seed</button>
        </div>
    );
}
export default SeedSelector;