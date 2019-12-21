import React from 'react';
import VerbSectionModel from '../model/verb/VerbSection';

interface IVerbSectionProps{
    verbSection : VerbSectionModel;
    idx : number;
}

const VerbSection : React.FunctionComponent<IVerbSectionProps> = props => {
    return (
        <div>
            <p>Verb section {props.idx+1} (verbs count : {props.verbSection.getVerbs().length})</p>
            <p>{props.verbSection.getVerbs().map(v => `[${v.getGroup()}]` + v.getVerbalBase()).join(", ")}</p>
        </div>
    )
}
export default VerbSection;