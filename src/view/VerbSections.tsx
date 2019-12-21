import React, { useState, useEffect } from 'react';
import Verb from '../model/verb/Verb';
import VerbSectionModel from '../model/verb/VerbSection';
import VerbSection from './VerbSection';

interface IVerbSectionsProps{
    verbs : Verb[]
    seed : number;
}

const VerbSections : React.FunctionComponent<IVerbSectionsProps> = props => {
    const getVerbSections = () => VerbSectionModel.generate(props.verbs, props.seed);
    const [verbSections, setVerbSections] = useState(getVerbSections());
    useEffect(() => {
        setVerbSections(getVerbSections());
    }, [props]);
    return (
        <div>
            {verbSections.map((verbSection, idx) => 
                <VerbSection key={idx} verbSection={verbSection} idx={idx}/>
            )}
        </div>
    );
}
export default VerbSections;