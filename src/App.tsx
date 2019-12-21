import React from 'react';
import LoadData from './view/components/async/LoadData';
import './App.scss';
import DataStore from './business/verbs/DataStore';
import VerbsApp from './view/VerbsApp';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <LoadData promise={DataStore.getVerbs()}>
        {verbs => (
          <VerbsApp verbs={verbs}/>
        )}
      </LoadData>
    </div>
  )
}
export default App;
