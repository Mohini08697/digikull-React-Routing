import { BrowserRouter,Route ,Switch} from "react-router-dom";
import Dashboard from "./Dashboard";

import Unmounting from './Demo/Unmounting'
import Mounting from "./Demo/Mounting";
import Updating from "./Updating"

function App(){
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/Mounting/Updating/Unmounting" component={Unmounting}/>
        <Route path="/Mounting/Updating" component={Updating}/>
    <Route exact path="/Mounting" component={Mounting}/>
  
    <Route path="/" component={Dashboard}/>
    </Switch>
    </BrowserRouter>


    
  
     
    </>  
  );
}
export default App;