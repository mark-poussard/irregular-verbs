import React, { useState, useEffect } from 'react';
import Verb from '../model/verb/Verb';
import VerbSectionModel from '../model/verb/VerbSection';
import VerbSection from './VerbSection';
import VerbSectionsModel from '../model/verb/VerbSections';
import FileSaver from 'file-saver';

interface IVerbSectionsProps{
    verbs : Verb[]
    seed : number;
}

const VerbSections : React.FunctionComponent<IVerbSectionsProps> = props => {
    const getVerbSections = () => VerbSectionsModel.generate(props.verbs, props.seed);
    const [verbSections, setVerbSections] = useState(getVerbSections());
    useEffect(() => {
        setVerbSections(getVerbSections());
    }, [props]);
    const doDownloadAllSections = () => {
        const blob = new Blob([verbSections.toCsv()], {type: "text/csv;charset=utf-8"});
        FileSaver.saveAs(blob, "AllSections.csv");
    }
    return (
        <div>
            <button onClick={doDownloadAllSections}>Download all sections</button>
            {verbSections.getSections().map((verbSection, idx) => 
                <VerbSection key={idx} verbSection={verbSection} idx={idx}/>
            )}
        </div>
    );
}
export default VerbSections;