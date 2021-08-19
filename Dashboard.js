import React from "react"
import {Link}from "react-router-dom"
import  './Demo/Mounting.css'
import {Carousel} from "react-bootstrap"
const style={
    container:{
        float:"left",
        padding:'20px',
    

    }
}

  export default class Dashboard extends React.Component{
      constructor(){
          super()
      }

      render(){
          return(
              <div >
              <Carousel>
  <Carousel.Item>
   <div className="div"></div>
    <Carousel.Caption>
        <div>

    <div><h2>Select Component Life cycle Method</h2></div>
     <div style={style.container}> <h3><Link to="/Mounting" style={{color:"white"}}>Mounting</Link></h3></div>
      <div style={style.container}><h3 ><Link to="/Mounting/Updating" style={{color:"white"}}>Updating</Link></h3></div>
      <div style={style.container}><h3><Link to="/Mounting/Updating/Unmounting" style={{color:"white"}}>Unmounting</Link></h3></div>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
<div>
    {/*<img  className= "img"   src="F:/reactDemo/my_app/src/Demo/Component.png" alt="Component cycle"/>*/}
</div>
              </div>
          )
      }
  }