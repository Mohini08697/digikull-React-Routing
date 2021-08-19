import React from "react"
import Dashboard from "./Dashboard"
import "./Demo/Mounting.css"

 export default class Updating extends React.Component{

    render(){
        return(
            <>
            <h1> This is my fist Udateing page</h1>
            <Dashboard/>
            <div className="div3">
          <h3>  Updation</h3>
<p>Updation is a phase where the state and properties populated at the time of initialization are changed if required after some user events. </p>
<h4 style={{color:"red"}}>The following are different functions invoked during updation phase :</h4>

<h2 style={{color:"green"}}>componentWillReceiveProps():</h2> This function is independent of component state. This method is called before a component that is mounted on DOM gets its props reassigned. The function accepts new props which can be identical or different from original props. Mainly some pre-rendering checks can be applied in this step.
<h2 style={{color:"green"}}>shouldComponentUpdate():</h2> Sometimes it is desirable not to show the new props on the output page. To achieve this, this method returns false, which means the newly rendered props should not be displayed on the output page.
<h2 style={{color:"green"}}>componentWillUpdate():</h2> This function is called before a component is re-rendered that is this method is called once before the render function is executed post updation.
<h2 style={{color:"green"}}>componentDidUpdate():</h2> This function is called after a component is re-rendered that is this method is called once after the render function is executed post updation.
                </div>
            </>
             )
    }
 } 