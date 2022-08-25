import React from "react";
import Card from "./Card";
import "./index.css"
import Sdata from './Sdata';

function nfun(val){
return(
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.links}
  />
)
}

function App() {
  
  return (
    <>
    <h3 className="headstyle">This are top 6 Netflix Series</h3>

      <div className="container">
       
   { Sdata.map(nfun)}
      </div>
    </>
  );
}
export default App;
