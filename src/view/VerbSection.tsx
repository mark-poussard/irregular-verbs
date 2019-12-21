import React, { useState, useEffect } from 'react';
import VerbSectionModel from '../model/verb/VerbSection';
import './VerbSection.scss';
import VerbSections from '../model/verb/VerbSections';
import Test from './Test';
import FileSaver from 'file-saver';

interface IVerbSectionProps{
    seed : number;
    verbSections : VerbSections;
    verbSection : VerbSectionModel;
    idx : number;
}

const VerbSection : React.FunctionComponent<IVerbSectionProps> = props => {
    const getTest = () => props.verbSections.createTestForSection(props.idx, props.seed);
    const [test, setTest] = useState(getTest());
    useEffect(() => {
        setTest(getTest());
    }, [props]);
    const doSectionDownload = () => {
        const blob = new Blob([props.verbSection.toCsv()], {type: "text/csv;charset=utf-8"});
        FileSaver.saveAs(blob, `section.${props.verbSection.getNbr()}.csv`);
    }
    return (
        <div className={`VerbSection`}>
            <h4>Verb section {props.verbSection.getNbr()} (verbs count : {props.verbSection.getVerbs().length})</h4>
            <p>{props.verbSection.getVerbs().map(v => `[${v.getGroup()}]` + v.getVerbalBase()).join(", ")}</p>
            <button onClick={doSectionDownload}>Download section</button>
            <Test verbSection={props.verbSection} test={test}/>
        </div>
    )
}
export default VerbSection;