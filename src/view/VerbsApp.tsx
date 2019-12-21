import React, { useState } from 'react';
import Verb from '../model/verb/Verb';
import SeedSelector from './SeedSelector';
import VerbSections from './VerbSections';

interface IVerbsAppProps{
    verbs : Verb[];
}

const VerbsApp : React.FunctionComponent<IVerbsAppProps> = props => {
    const [seed, setSeed] = useState<number | null>(null);
    return (
        <div>
            <SeedSelector onSelect={setSeed} />
            {seed != null &&
                <VerbSections verbs={props.verbs} seed={seed} />
            }
        </div>
    )
}
export default VerbsApp;