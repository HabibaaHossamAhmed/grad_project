import React from "react";
import  ReactDOM from "react-dom";
import Home from "./component/HeroSection";
import Menus from "./component/Menus";
import Error404 from "./component/Error404";
import Data_of_Arriving_ships from "./component/Data_of_Arriving_ships";
import { BrowserRouter , Route , Routes} from 'react-router-dom'

const App =()=>{
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/menu" element = {<Menus/>}/>
                <Route path="/menu/Data_of_Arriving_ships" element = {<Data_of_Arriving_ships/>}/>
                <Route path="*" element = {<Error404/>}/>

            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;