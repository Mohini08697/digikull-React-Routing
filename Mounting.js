import React from "react"
import "./Mounting.css"
import Dashboard from "../Dashboard"

 class Mounting extends  React.Component{

    render(){
        return(
            <>
            <Dashboard/>
            <div className="div2">
            <h3> Mounting</h3>
                <p>Mounting is the phase of the react lifecycle that comes after the initialization is completed.</p>
                 <p>  Mounting occurs when the component is placed on the DOM container and the component is rendered on a webpage.</p>
                 <h4 style={{color:"red"}}> The mounting phase has two methods which are:</h4>

             <h2 style={{color:"green"}}>compnentWillMount():</h2> This method is called just before the component is placed on DOM that is this function gets called 
                 just before the render function is executed for the very first time.
              <h2 style={{color:"green"}}>componentDidMount():</h2> This method is called just after the component is placed on DOM that is this function gets called just after the render function is executed. For the very first time.
                </div>
            
            </>
        )
    }

 }
 export default Mounting;