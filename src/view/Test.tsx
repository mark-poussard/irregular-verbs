import React from 'react';
import TestModel from '../model/verb/Test';
import FileSaver from 'file-saver';
import VerbSection from '../model/verb/VerbSection';

interface ITestProps{
    verbSection : VerbSection;
    test : TestModel;
}

const Test : React.FunctionComponent<ITestProps> = props => {
    const doTestDownload = () => {
        const blob = new Blob([props.test.toCsv()], {type: "text/csv;charset=utf-8"});
        FileSaver.saveAs(blob, `section.${props.verbSection.getNbr()}.test.csv`);
    }
    return (
        <div>
            <button onClick={doTestDownload}>Download test</button>
        </div>
    );
}
export default Test;