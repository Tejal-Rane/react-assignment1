import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import "./style.css"

const Test=()=> {
    return(
      <div>
         <h1>Hello Programmers!</h1>
         <h2>Welcome To World Of Programming</h2>
         <p>SELECT YOUR FAVOURITE LANGUAGE</p>
         <Button buttonText="PYTHON"/>
         <Button buttonText="JAVASCRIPT"/>
         <Button buttonText="JAVA"/>
         <Button buttonText="C"/>
         <Button buttonText="C++"/>
         <Button buttonText="PHP"/>
         </div>
        
        
    )
  }

export default Test
