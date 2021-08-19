import React from 'react'
import Dashboard from '../Dashboard'
import "./Mounting.css"
export default function  Unmount (){

    return(
        <>
        <Dashboard/>
        <div className="div2">
       <h2 style={{color:"black"}}> Unmounting</h2>
<p >This is the last phase in the component lifecycle and in this phase, a component is detached from the DOM container.</p>
<h4 style={{color:"red"}}> The following method falls under this phase.</h4>

<h3 style={{color:"green"}}>componentWillUnmount(): </h3><p>This function is invoked before a component is finally detached from the DOM container that is this </p>
<p style={{color:"black"}}>method is called when a component is fully removed from the page and this shows the end of its lifecycle.</p>
            </div>
        </>   
 )
}