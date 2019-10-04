import React from 'react';
import './App.css';
import {lazy} from 'react';
import {Suspense} from 'react';



const MyComp=lazy(()=>import('./components/myComp'))


class App extends React.Component{

  
render(){
  return(
    <div className="App">


    <Suspense fallback={<div>Loading........</div>}>
      <MyComp />
    
      </Suspense>
    
    </div>
  )
}
}
export default App;
